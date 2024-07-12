'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="text-center flex h-screen flex-col items-center justify-center leading-7">
      <div className="pb-5">
        <span className="text-2xl">404 |</span> This page could not be found.
      </div>
      <button
        onClick={() => router.push('/')}
        className="bg-primary p-2 rounded-md text-white hover:bg-blue-500 transition-all">
        Return DashBoard
      </button>
    </div>
  );
}
