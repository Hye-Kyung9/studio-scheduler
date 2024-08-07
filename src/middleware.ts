import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
import { decode, getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest, _: NextFetchEvent) {
  const url = req.nextUrl.clone();
  const redirectTo = (dest: string) => NextResponse.redirect(new URL(dest, url));

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });

  try {
    const decoded = await decode({ token, secret: process.env.NEXTAUTH_SECRET! });
    if (url.pathname.startsWith('/login')) {
      if (decoded) {
        // return redirectTo('/');
      }
    } else {
      if (!decoded) {
        return redirectTo('/login');
      }
    }
  } catch (e) {
    console.log('decoded:', e);
  }
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next|register).*)',
};
