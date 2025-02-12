import UpcomingMovieCard from "./upcomingMoviesCard";

const UpcomingMoviesLists = ({ upcomingMoviesLists }: any) => {
  return (
    <div>
      <div className='flex w-fit gap-4'>
        {upcomingMoviesLists?.map((upcomingMovies: any) => (
          < UpcomingMovieCard key={upcomingMovies.id} upcomingMovies={upcomingMovies} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMoviesLists;
