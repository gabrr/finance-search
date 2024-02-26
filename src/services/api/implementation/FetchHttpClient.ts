import { HttpClient, RequestConfig } from "../abstraction/IHttpClient";

export class FetchHttpClient implements HttpClient {
  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    const response = await fetch(this.buildUrl(url, config?.params), {
      method: "GET",
      headers: config?.headers,
    });

    if (!response.ok) {
      const errorMessage = await response
        .text()
        .catch(() => "An error occurred while fetching the data");
      throw new Error(errorMessage);
    }

    return response.json();
  }

  private buildUrl(url: string, params?: Record<string, string>): string {
    const baseUrl = process.env.REACT_APP_API_URL || "";

    if (!params) return baseUrl + url;

    const urlObj = new URL(baseUrl + url);
    Object.keys(params).forEach((key) =>
      urlObj.searchParams.append(key, params[key])
    );
    return urlObj.toString();
  }
}
