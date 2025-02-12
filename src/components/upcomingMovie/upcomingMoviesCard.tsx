import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';

const UpcomingMovieCard = ({ upcomingMovies }: any) => {
  return (
    <div className='w-[269px] h-[393px] sm:h-[219px] sm:w-[389px] bg-gray-200 cursor-pointer overflow-hidden rounded-lg sm:rounded-md'>
   
      <Dialog>
              <DialogTrigger>
              <Image
        width={389}
        height={219}
        alt='upcoming-movie'
        src={upcomingMovies.posterPath}
      />
              </DialogTrigger>
              <DialogContent className='h-[510px] w-[90%] overflow-y-auto bg-white hide-scrollbar sm:max-w-[685px]'>
                <DialogHeader>
                  <DialogTitle className='flex justify-start text-[28px]'>
                    {upcomingMovies.title}
                  </DialogTitle>
                  <DialogDescription className='h-full w-full'>
                    <div className='flex w-full justify-center'>
                      <Image
                        width={389}
                        height={219}
                        alt='popular-movie'
                        src={upcomingMovies.posterPath}
                      />
                    </div>
      
                    <p className='mt-[24px] text-[18px]'>{upcomingMovies.overview}</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
    </div>
  );
};

export default UpcomingMovieCard;
