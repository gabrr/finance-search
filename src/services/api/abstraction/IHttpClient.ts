export interface RequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface HttpClient {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
}
