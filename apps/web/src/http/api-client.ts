import { env } from '@saas/env'

class HTTPError {
  constructor(
    public message: string,
    public status: number = 400
  ) {}
}

class ApiClient {
  private baseUrl = env.NEXT_PUBLIC_API_URL

  private async request<R>(url: string, config?: RequestInit) {
    const request = await fetch(new URL(url, this.baseUrl).toString(), {
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': 'application/json',
      },
    })

    const response = await request.json()

    if (!request.ok) {
      throw new HTTPError(response.message, request.status)
    }

    return response as Promise<R>
  }

  public get<ResponseType>(
    url: string,
    config?: Omit<RequestInit, 'method' | 'body'>
  ) {
    return this.request<ResponseType>(url, {
      method: 'GET',
      ...config,
    })
  }

  public post<RequestType, ResponseType>(
    url: string,
    data: RequestType,
    config?: Omit<RequestInit, 'method' | 'body'>
  ) {
    return this.request<ResponseType>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...config,
    })
  }

  public put<RequestType, ResponseType>(
    url: string,
    data: RequestType,
    config?: Omit<RequestInit, 'method' | 'body'>
  ) {
    return this.request<ResponseType>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...config,
    })
  }

  public delete<ResponseType>(
    url: string,
    config?: Omit<RequestInit, 'method' | 'body'>
  ) {
    return this.request<ResponseType>(url, {
      method: 'DELETE',
      ...config,
    })
  }

  public patch<RequestType, ResponseType>(
    url: string,
    data: RequestType,
    config?: Omit<RequestInit, 'method' | 'body'>
  ) {
    return this.request<ResponseType>(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...config,
    })
  }
}

const api = new ApiClient()

export { api, HTTPError }
