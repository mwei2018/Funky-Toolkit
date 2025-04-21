import type { AxiosRequestConfig, Method } from 'axios';

export interface RequestConfig extends Omit<AxiosRequestConfig, 'method'> {
  /** 是否显示 loading */
  showLoading?: boolean;
  /** 是否显示错误信息 */
  showError?: boolean;
  /** 是否重试 */
  retry?: boolean;
  /** 重试次数 */
  retryCount?: number;
  /** 请求方法 */
  method?: Method;
  baseURL?: string; // 允许覆盖默认的 baseURL
}

export interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface RequestError {
  code: number;
  message: string;
  response?: any;
}

export type RequestInterceptor = (config: RequestConfig) => RequestConfig;
export type ResponseInterceptor = (response: ResponseData) => ResponseData;
export type ErrorInterceptor = (error: RequestError) => void;

export interface HttpClientConfig extends RequestConfig {
  defaultBaseURL?: string; // 默认的 baseURL
  interceptors?: {
    request?: RequestInterceptor[];
    response?: ResponseInterceptor[];
    error?: ErrorInterceptor[];
  };
}

export interface ServiceConfig extends HttpClientConfig {
  name: string;
  description?: string;
  version?: string;
  timeout?: number;
  retry?: boolean;
  retryCount?: number;
  showLoading?: boolean;
  showError?: boolean;
} 