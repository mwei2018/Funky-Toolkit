declare module 'ladle' {
  export interface Config {
    stories: string[];
    addons?: string[];
    framework?: {
      name: string;
      options?: Record<string, any>;
    };
    docsMode?: boolean;
    sidebar?: {
      groups?: Array<{
        name: string;
        stories: string[];
      }>;
    };
  }
} 