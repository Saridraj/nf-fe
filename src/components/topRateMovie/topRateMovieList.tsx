import TopRateMovieCard from "./topRateMovieCard";

const TopRateMoviesLists = ({ topRateMoviesLists }: any) => {
  console.log(topRateMoviesLists);
  return (
    <div>
      <div className='flex w-fit gap-4'>
        {topRateMoviesLists?.map((topRateMovies: any) => (
          < TopRateMovieCard key={topRateMovies.id} topRateMovies={topRateMovies} />
        ))}
      </div>
    </div>
  );
};

export default TopRateMoviesLists;
