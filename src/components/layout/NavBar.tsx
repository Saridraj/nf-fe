'use client';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Search, Bell, ChevronDown } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='z-999 text-foreground fixed relative flex h-[102px] w-full items-center justify-between bg-none px-[24] sm:px-[92px]'>
      <div className='flex items-center gap-3 '>
        <div
          onClick={() => redirect('/')}
          className='mr-[60px] flex h-[38px] w-[139px] cursor-pointer items-center'
        >
          <Image
            src='/images/NetflixLogo.svg'
            alt='logo'
            width={139}
            height={38}
          />
        </div>
        <div className='h-fit w-[800px]'>
          <ul className='flex w-full items-center justify-between text-[22px] text-white'>
            <li className='font-bold'>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
      </div>

      <div className='flex w-fit items-center gap-4 text-white '>
        <Search />
        <p>Kids</p>
        <Bell />
        <div className='h-[48px] w-[48px] rounded-[8px] bg-gray-200'></div>
        <ChevronDown />
      </div>
    </div>
  );
};

export default NavBar;
