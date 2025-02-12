'use client';
import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import { Button } from '@/components/ui/Button';
import { Play, Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  fetchPopularMovies,
  fetchTopRateMovies,
  fetchUpcomingMovies,
} from '@/lib/movieAction';
import PopularMoviesLists from '@/components/popularMovie/popularMovieList';
import TopRateMoviesLists from '@/components/topRateMovie/topRateMovieList';
import UpcomingMoviesLists from '@/components/upcomingMovie/upcomingMoviesList';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRateMovies, setTopRateMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((posts) => {
      setPopularMovies(posts);
    });
    fetchTopRateMovies().then((posts) => {
      setTopRateMovies(posts);
    });
    fetchUpcomingMovies().then((posts) => {
      setUpcomingMovies(posts);
    });
  }, []);
  console.log(topRateMovies);

  return (
    <div className='flex flex-col items-center justify-center bg-black text-black'>
      <NavBar />
      <div className='z-60 relative -mt-[102px] flex h-fit min-h-screen w-full flex-col items-center justify-center bg-[url("/images/MainShowBGMobile.svg")] bg-cover bg-center bg-no-repeat pt-[102px] sm:h-full sm:items-start sm:bg-[url("/images/MainShowBG.svg")] sm:pl-[92px]'>
        <div className='absolute inset-0 bg-gradient-to-t from-black to-black/0 sm:bg-gradient-to-r sm:from-black/60'></div>
        <div className='z-50 flex h-[500px] max-w-[889px] flex-col items-center justify-end text-white sm:h-[70%] sm:items-start'>
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
              className='rounded-[8px] bg-white'
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
          <div className='mb-[100px] ml-10 mt-[40px] hidden gap-4 sm:flex'>
            <div className='flex items-center'>
              {' '}
              <Play className='z-10 -mr-20 w-[40px] text-black' />{' '}
              <Button className='h-[60px] w-[211px] bg-white text-[28px] text-black'>
                Play
              </Button>
            </div>

            <div className='flex items-center'>
              {' '}
              <Info className='z-10 -mr-12 w-[40px]' />{' '}
              <Button className='h-[60px] w-[211px] bg-grayButton text-[28px] text-white'>
                More Info
              </Button>
            </div>
          </div>
          <div className='flex items-center sm:hidden'>
            <p>TV Mysteries</p>
            <div className='mx-1 h-1 w-1 rounded-[50%] bg-white'></div>
            <p>Based on Books</p>
          </div>
          <div className='mt-4 flex items-center gap-10 sm:hidden'>
            <div className='flex h-fit flex-col items-center gap-0'>
              <p className='text-[40px]/5'>+</p>
              <p>My List</p>
            </div>
            <div className='flex items-center'>
              <Button className='bg-white font-semibold text-black'>
                Play
              </Button>
            </div>
            <div>
              <Info />
              <p>Info</p>
            </div>
          </div>
        </div>
      </div>

      <div className='z-50 pt-8 sm:pt-0  -mt-[60px] h-fit sm:h-[285px] w-full bg-gradient-to-t from-black/60 from-10% to-black/0 to-90% pl-[10px] sm:pl-[92px]'>
        <p className='text-[18px] font-bold text-white sm:text-[32px]'>
          Popular on netflix
        </p>
        <div className='overflow-hidden overflow-x-scroll hide-scrollbar'>
          <PopularMoviesLists popularMoviesLists={popularMovies} />
        </div>
      </div>
      <div className='z-50 pt-8 sm:pt-0   h-fit sm:h-[285px] w-full pl-[10px] sm:mt-4 sm:pl-[92px]'>
        <p className='text-[18px] font-bold text-white sm:text-[32px]'>
          Top Rate
        </p>
        <div className='overflow-hidden overflow-x-scroll hide-scrollbar'>
          <TopRateMoviesLists topRateMoviesLists={topRateMovies} />
        </div>
      </div>

      <div className='z-50 pt-8 sm:pt-0   h-[285px] w-full pl-[10px] sm:mt-4 sm:pl-[92px] mb-[200px]'>
        <p className='text-[18px] font-bold text-white sm:text-[32px]'>
          Upcoming
        </p>
        <div className='overflow-hidden overflow-x-scroll hide-scrollbar'>
          <UpcomingMoviesLists upcomingMoviesLists={upcomingMovies} />
        </div>
      </div>
    </div>
  );
}
