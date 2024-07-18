import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DashBoard',
};

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen flex-auto">
        {children}
        <Footer />
      </div>
    </>
  );
}
