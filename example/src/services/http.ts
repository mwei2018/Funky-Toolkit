import { HttpClient } from '@funky/utils';
import type { HttpClientConfig } from '@funky/utils';

// 基础配置
const baseConfig: HttpClientConfig = {
  timeout: 10000,
  showLoading: true,
  showError: true,
  retry: true,
  retryCount: 3,
};

// 主服务配置
const mainServiceConfig: HttpClientConfig = {
  ...baseConfig,
  defaultBaseURL: process.env.RSBUILD_MAIN_API_URL,
  interceptors: {
    request: [
      (config: HttpClientConfig) => {
        config.headers['X-Service-Type'] = 'main';
        return config;
      }
    ]
  }
};

// 支付服务配置，继承主服务配置并覆盖特定属性
const paymentServiceConfig: HttpClientConfig = {
  ...mainServiceConfig,
  defaultBaseURL: process.env.RSBUILD_PAYMENT_API_URL,
  timeout: 15000, // 覆盖超时时间
  retryCount: 2, // 覆盖重试次数
  interceptors: {
    ...mainServiceConfig.interceptors,
    request: [
      ...(mainServiceConfig.interceptors?.request || []),
      (config: HttpClientConfig) => {
        config.headers['X-Service-Type'] = 'payment';
        config.headers['X-Payment-Key'] = process.env.RSBUILD_PAYMENT_KEY;
        return config;
      }
    ],
    error: [
      (error: any) => {
        if (error.code === 402) {
          console.error('Payment failed:', error.message);
        }
      }
    ]
  }
};

// 创建服务实例
export const mainService = new HttpClient(mainServiceConfig);
export const paymentService = new HttpClient(paymentServiceConfig);

// 用户相关 API
export const userApi = {
  getProfile: () => mainService.get('/users/profile'),
  updateProfile: (data: any) => mainService.put('/users/profile', data),
};

// 支付相关 API
export const paymentApi = {
  createOrder: (data: any) => paymentService.post('/orders', data),
  getOrderStatus: (orderId: string) => paymentService.get(`/orders/${orderId}`),
}; 