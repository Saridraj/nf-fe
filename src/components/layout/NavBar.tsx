'use client';
import { redirect } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='z-999 text-foreground fixed relative flex h-[60px] w-full items-center justify-between bg-red-300 px-[24] sm:px-[32px]'>
      <div onClick={() => redirect('/')} className='h-fit w-[69px]'>
        <p className='font-[Castoro] text-[20px] italic text-white'>a Board</p>
      </div>
    </div>
  );
};

export default NavBar;
