import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-red-100 text-black'>
      <NavBar />
      <div className='h-full'>home</div>
    </div>
  );
}
