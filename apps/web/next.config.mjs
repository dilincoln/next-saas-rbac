import { paraglideAdapter } from '@saas/i18n/next-adapter'

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default paraglideAdapter({
  ...nextConfig,
  paraglideDir: '@saas/i18n',
})
