import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';

const PopularMovieCard = ({ popularMovies }: any) => {
  console.log(popularMovies);
  return (
    <div className='h-[393px] w-[269px] cursor-pointer bg-gray-200 sm:h-[219px] sm:w-[389px] overflow-hidden rounded-lg sm:rounded-md'>
      <Dialog>
        <DialogTrigger>
          <Image
            width={389}
            height={219}
            alt='popular-movie'
            src={popularMovies.posterPath}
          />
        </DialogTrigger>
        <DialogContent className='h-[510px] w-[90%] overflow-y-auto bg-white sm:max-w-[685px] hide-scrollbar'>
          <DialogHeader>
            <DialogTitle className='flex justify-start text-[28px]'>
              {popularMovies.title}
            </DialogTitle>
            <DialogDescription className='h-full w-full'>
             <div className='w-full flex justify-center'>
             <Image
                width={389}
                height={219}
                alt='popular-movie'
                src={popularMovies.posterPath}
              />
             </div>
              
              <p className='text-[18px] mt-[24px]'>{popularMovies.overview}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopularMovieCard;
