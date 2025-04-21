import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { RequestConfig, RequestError, ResponseData, HttpClientConfig } from './types';

export class HttpClient {
  private instance: AxiosInstance;
  private loadingCount = 0;

  constructor(config?: HttpClientConfig) {
    this.instance = axios.create({
      baseURL: config?.defaultBaseURL || process.env.RSBUILD_API_BASE_URL,
      timeout: config?.timeout || 10000,
      ...config,
    });

    this.setupInterceptors(config?.interceptors);
  }

  private setupInterceptors(interceptors?: HttpClientConfig['interceptors']) {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 添加 token
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // 显示 loading
        if ((config as RequestConfig).showLoading) {
          this.showLoading();
        }

        // 执行自定义请求拦截器
        if (interceptors?.request) {
          for (const interceptor of interceptors.request) {
            config = interceptor(config as RequestConfig) as InternalAxiosRequestConfig;
          }
        }

        return config;
      },
      (error: any) => {
        this.hideLoading();
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.hideLoading();
        
        // 执行自定义响应拦截器
        if (interceptors?.response) {
          for (const interceptor of interceptors.response) {
            response.data = interceptor(response.data);
          }
        }

        return response;
      },
      async (error: any) => {
        this.hideLoading();
        const config = error.config as RequestConfig;

        // 处理 401 错误
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
          return Promise.reject(error);
        }

        // 处理其他错误
        const requestError: RequestError = {
          code: error.response?.status || 500,
          message: error.response?.data?.message || '请求失败',
          response: error.response,
        };

        // 执行自定义错误拦截器
        if (interceptors?.error) {
          for (const interceptor of interceptors.error) {
            interceptor(requestError);
          }
        }

        // 错误提示
        if (config.showError) {
          this.showError(requestError);
        }

        // 重试逻辑
        if (config.retry && config.retryCount && config.retryCount > 0) {
          config.retryCount--;
          return this.instance(config);
        }

        return Promise.reject(requestError);
      }
    );
  }

  private showLoading() {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      // 显示全局 loading
      // TODO: 实现你的 loading 逻辑
    }
  }

  private hideLoading() {
    this.loadingCount--;
    if (this.loadingCount === 0) {
      // 隐藏全局 loading
      // TODO: 实现你的 loading 逻辑
    }
  }

  private showError(error: RequestError) {
    // TODO: 实现你的错误提示逻辑
    console.error(`Error ${error.code}: ${error.message}`);
  }

  public async request<T = any>(config: RequestConfig): Promise<ResponseData<T>> {
    try {
      const response = await this.instance.request<ResponseData<T>>(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public get<T = any>(url: string, config?: RequestConfig): Promise<ResponseData<T>> {
    return this.request<T>({ ...config, method: 'GET', url });
  }

  public post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ResponseData<T>> {
    return this.request<T>({ ...config, method: 'POST', url, data });
  }

  public put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ResponseData<T>> {
    return this.request<T>({ ...config, method: 'PUT', url, data });
  }

  public delete<T = any>(url: string, config?: RequestConfig): Promise<ResponseData<T>> {
    return this.request<T>({ ...config, method: 'DELETE', url });
  }

  public patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ResponseData<T>> {
    return this.request<T>({ ...config, method: 'PATCH', url, data });
  }
} 