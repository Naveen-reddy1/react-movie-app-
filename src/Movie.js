import React, { useContext, useState } from "react";
import { NavLink ,Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { GlobalContext } from "./GlobalState";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = ({}) => {
  const {addMovieToWatchlist,watchlist} = useContext(GlobalContext);

  
 

  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  

 

  return (
    <>
      
      <section className="movie-page">
        <div className="grid grid-4-col">
      
       
         {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                
                const movieName = Title.substring(0, 15);
                
                return (
                <div>
              <></>
              <div className="ok">
              <button onClick={()=>addMovieToWatchlist(movie) } >+watchlist</button>
            
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    
                    <div className="bord">
                      <div className="">
                        <h2 className="">
                          
             
                        
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                            
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                       
                      </div>
                    </div>
                    </NavLink>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;
