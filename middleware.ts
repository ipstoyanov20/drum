import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['bg', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'bg'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(bg|en)/:path*']
};