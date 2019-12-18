import React, { Component } from 'react';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const MoviesCard = ({ title, poster, avgRating }) => {
  return (
    <section className="moviesContainer-movieCard-cardContainer">
      <h2 className="movieCard-cardContainer-title">{title}</h2>
      <img className="movieCard-cardContainer-poster" src={poster}></img>
      <h4>{avgRating}</h4>
      <button>Add Rating</button>
      <MovieRatings />
    </section>
  )

}

export default MoviesCard;
