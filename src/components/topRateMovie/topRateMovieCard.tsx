import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';

const TopRateMovieCard = ({ topRateMovies }: any) => {
  // console.log(topRateMovies);
  return (
    <div className='h-[393px] w-[269px] cursor-pointer overflow-hidden rounded-lg bg-gray-200 sm:h-[219px] sm:w-[389px] sm:rounded-md'>
      <Dialog>
        <DialogTrigger>
          <Image
            width={389}
            height={219}
            alt='top-rate-movie'
            src={topRateMovies?.posterPath}
          />
        </DialogTrigger>
        <DialogContent className='h-[510px] w-[90%] overflow-y-auto bg-white hide-scrollbar sm:max-w-[685px]'>
          <DialogHeader>
            <DialogTitle className='flex justify-start text-[28px]'>
              {topRateMovies.title}
            </DialogTitle>
            <DialogDescription className='h-full w-full'>
              <div className='flex w-full justify-center'>
                <Image
                  width={389}
                  height={219}
                  alt='popular-movie'
                  src={topRateMovies.posterPath}
                />
              </div>

              <p className='mt-[24px] text-[18px]'>{topRateMovies.overview}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TopRateMovieCard;
