import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-black text-black'>
      <NavBar />
      <div className='z-60 min-h-screen  relative -mt-[102px] flex h-fit w-full flex-col items-center justify-center bg-[url("/images/MainShowBGMobile.png")] bg-cover bg-center bg-no-repeat pt-[102px] sm:h-full sm:items-start sm:bg-[url("/images/MainShowBG.svg")] sm:pl-[92px]'>
        <div className='z-50 flex h-[70%] max-w-[889px] flex-col items-center justify-end text-white sm:items-start'>
          <div className='mb-5 w-[100px] sm:w-[150px]'>
            <Image
              src='/images/NSeriesOriginals.svg'
              alt='logo'
              width={257}
              height={64}
              layout='responsive'
            />
          </div>

          <div className='w-[200px] lg:w-[800px]'>
            <Image
              src='/images/ShowLogo-2.svg'
              alt='logo'
              width={878}
              height={242}
              layout='responsive'
            />
          </div>

          <div className='hidden items-center gap-4 sm:flex'>
            <Image
            className='bg-white rounded-[8px]'
              src='/images/Top10.svg'
              alt='logo'
              width={32}
              height={44}
              layout='fixed'
            />
            <p className='text-[32px]'>#1 in TV Shows Today</p>
          </div>
          <p className='hidden max-w-[850px] text-[20px] sm:flex'>
            Determined to protect a young patient who escaped a mysterious cult,
            a psychiatrist takes the girl in, putting her own family — and life
            — in danger.
          </p>
          <div className='mt-[40px] hidden gap-4 sm:flex mb-[100px]'>
            <Button className='h-[60px] w-[211px] bg-white text-[28px] text-black'>
              Play
            </Button>
            <Button className='h-[60px] w-[211px] bg-grayButton text-[28px] text-white'>
              More Info
            </Button>
          </div>
        </div>
      </div>

    
     
      <div className='z-50 h-[285px] w-full bg-gradient-to-t from-black/60 from-10% to-black/0 to-90% pl-[92px] -mt-[60px]'>
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
      </div>
      <div className='z-50 mt-10 h-[285px] w-full pl-[92px]'>
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
      </div>

      <div className='z-50 mt-10 h-[285px] w-full pl-[92px]'>
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
      </div>
    </div>
  );
}
