import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOGIN',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-2 leading-relaxed min-w-fit w-[500px] rounded shadow-md">
          {children}
        </div>
      </div>
    </>
  );
}
