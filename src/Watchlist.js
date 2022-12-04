import { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import Movie from "./Movie";
import SingleMovie from "./SingleMovie";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
          <h6> {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"} </h6> 
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <Movie movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
export default Watchlist