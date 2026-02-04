export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/profiel/:path*', '/tuinprofiel/:path*'],
};
