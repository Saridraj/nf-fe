import PopularMovieCard from "./popularMovieCard";

const PopularMoviesLists = ({ popularMoviesLists }: any) => {
  return (
    <div>
      <div className='flex w-fit gap-4'>
        {popularMoviesLists?.map((popularMovies: any) => (
          < PopularMovieCard key={popularMovies.id} popularMovies={popularMovies} />
        ))}
      </div>
    </div>
  );
};

export default PopularMoviesLists;
