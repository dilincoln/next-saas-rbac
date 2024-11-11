import { cookies } from 'next/headers'

export async function isAuthenticated() {
  const { get } = await cookies()

  return !!get('token')?.value
}
