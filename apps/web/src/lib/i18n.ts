import {
  type AvailableLanguageTag,
  isAvailableLanguageTag,
  languageTag,
  setLanguageTag,
  sourceLanguageTag,
} from '@saas/i18n/runtime'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export const I18N_COOKIE_NAME = 'NEXT_LOCALE'

function setLanguage(request: NextRequest, lang: AvailableLanguageTag) {
  const response = NextResponse.redirect(request.clone().url)

  response.cookies.set(I18N_COOKIE_NAME, lang, {
    maxAge: 60 * 60 * 24 * 364,
  })

  setLanguageTag(lang)

  return response
}

export async function i18nMiddleware(request: NextRequest) {
  const nextCookies = await cookies()

  const lang = nextCookies.get(I18N_COOKIE_NAME)?.value

  if (!isAvailableLanguageTag(lang)) {
    return setLanguage(request, sourceLanguageTag)
  } else {
    if (lang === languageTag()) {
      return NextResponse.next()
    }

    setLanguageTag(lang)
  }

  return NextResponse.next()
}
