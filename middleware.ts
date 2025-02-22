import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Get the preferred locale from the Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    let locale = fallbackLng;

    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0])
        .find(lang => languages.includes(lang.substring(0, 2)));
      
      if (preferredLocale) {
        locale = preferredLocale.substring(0, 2);
      }
    }

    // Redirect to the locale version
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname === '/' ? '' : pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
}; 