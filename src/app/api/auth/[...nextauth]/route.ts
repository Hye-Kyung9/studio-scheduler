import { LoginReq } from '@/interfaces/Login.interface';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('set process.env.NEXTAUTH_SECRET');
}

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        loginId: { label: 'Login ID', type: 'text' },
        loginPassword: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { loginId, loginPassword } = credentials as LoginReq;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/api/v1/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            loginId,
            loginPassword,
          }),
        });

        const user = await res.json();

        if (res.ok && user.result) {
          // auth응답이 ok고 백엔드 result가 true일때
          return user;
        } else {
          throw new Error('Authentication failed');
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      //jwt를 생성
      return { ...token, ...user }; //토큰정보와 사용자 정보 리턴
    },
    async session({ session, token }) {
      session.user = token;

      return session; //세션객체를 클라이언트로 보내면 사용자 정보 유지 필요
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, //세션유지 1시간
    // maxAge: 3 * 24 * 60 * 60, // 로그인 유지 기간 (=3일)
  },

  pages: {
    // signIn: '/login',
    // error: '/login',
    // signOut: '/',
  },
};
const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };
