import React, { useState } from 'react';
import './App.css';
import Data from './MovieData';
import MoviesList from './MovieListe';
import MovieCard from './moviecard';



  export default function App() {
    const [moviesList, setMoviesList] = useState(moviesData);
    const [nameSearch, setNameSearch] = useState("");
    const [ratingSearch, setRatingSearch] = useState(1);
  
    const addNewMovie = (newMovie) => {
      setMoviesList([...moviesList, newMovie]);
 };
 return(
 <div className="wrapper">
      <SearchMovie
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <AddMovies addNewMovie={addNewMovie} />
    </div>
  );
}

 