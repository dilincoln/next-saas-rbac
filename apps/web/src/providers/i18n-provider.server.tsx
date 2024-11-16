import {
  isAvailableLanguageTag,
  setLanguageTag,
  sourceLanguageTag,
} from '@saas/i18n/runtime'
import { cookies } from 'next/headers'
import React from 'react'

import { ClientLanguageProvider } from './i18n-provider.client'

export async function I18nProvider({ children }: React.PropsWithChildren) {
  const nextCookies = await cookies()

  const lang = nextCookies.get('NEXT_LOCALE')?.value

  const validLang = isAvailableLanguageTag(lang) ? lang : sourceLanguageTag

  setLanguageTag(validLang)

  return (
    <>
      <ClientLanguageProvider lang={validLang} />
      <React.Fragment key={validLang}>{children}</React.Fragment>
    </>
  )
}
