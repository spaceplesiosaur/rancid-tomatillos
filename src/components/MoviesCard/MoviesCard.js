import React, { Component } from 'react';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const MoviesCard = () => {
  return (
    <section className="moviesContainer-movieCard-cardContainer">
      <h2 className="movieCard-cardContainer-title">Title</h2>
      <img className="movieCard-cardContainer-poster" src="null"></img>
      <button>Add Rating</button>
      <MovieRatings />
    </section>
  )

}

export default MoviesCard;
