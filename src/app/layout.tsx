import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DALI ❤️',
  description: '스튜디오 스케줄 관리 프로그램 (가제)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <CustomThemeProvider>{children}</CustomThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
