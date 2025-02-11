import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black text-black'>
      <NavBar />
      <div className='z-60 relative -mt-[102px] flex h-full w-full flex-col items-center justify-center bg-[url("/images/MainShowBGMobile.png")] sm:bg-[url("/images/MainShowBG.svg")] bg-cover bg-center bg-no-repeat pt-[102px] sm:items-start sm:pl-[92px]'>
        <div className='z-50 flex h-[70%] max-w-[889px] flex-col justify-end  items-center text-white sm:items-start'>
          <div className='mb-5 w-[100px] sm:w-[225px]'>
            <Image
              src='/images/NSeriesOriginals.svg'
              alt='logo'
              width={257}
              height={64}
              layout='responsive'
            />
          </div>

          <div className='w-[250px] sm:w-[646px] lg:w-[878px]'>
            <Image
              src='/images/ShowLogo-2.svg'
              alt='logo'
              width={878}
              height={242}
              layout='responsive'
            />
          </div>

          <div className='hidden sm:flex items-center gap-4'>
            <Image
              src='/images/Top10.svg'
              alt='logo'
              width={44}
              height={44}
              layout='fixed'
            />
            <p className='text-[43px]'>#1 in TV Shows Today</p>
          </div>
          <p className='hidden sm:flex max-w-[850px] text-[30px]'>
            Determined to protect a young patient who escaped a mysterious cult,
            a psychiatrist takes the girl in, putting her own family — and life
            — in danger.
          </p>
          <div className='mt-[40px] hidden gap-4 sm:flex'>
            <Button className='h-[77px] w-[211px] bg-white text-[40px] text-black'>
              Play
            </Button>
            <Button className='h-[77px] w-[211px] bg-grayButton text-[40px] text-white'>
              More Info
            </Button>
          </div>
        </div>
        {/* <div className='z-50 h-[285px] w-full bg-red-300'>
          <p className='text-[36px] font-bold text-white'>Popular on netflix</p>
          <div className='overflow-hidden overflow-x-scroll hide-scrollbar'>
            <div className='flex w-fit gap-4 bg-red-200'>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
              <div className='h-[219px] w-[389px] bg-gray-200'></div>
            </div>
          </div>
        </div> */}
      </div>

      <div className='absolute flex h-full w-full flex-col items-center justify-end bg-gradient-to-t sm:bg-gradient-to-r from-black/60 from-10% via-black/0 via-90%'></div>
    </div>
  );
}
