import { api } from './api-client'

interface SignInWithPasswordRequest {
  email: string
  password: string
}

interface SignInWithPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest): Promise<SignInWithPasswordResponse> {
  const result = await api.post<
    SignInWithPasswordRequest,
    SignInWithPasswordResponse
  >('/sessions/password', {
    email,
    password,
  })

  return result
}
