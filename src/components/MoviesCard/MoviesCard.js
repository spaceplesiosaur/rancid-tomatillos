import React from 'react';
// import { Link } from 'react-router-dom';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const MoviesCard = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
  return (
    <section className="moviesContainer-movieCard-cardContainer">
      <h2 className="movieCard-cardContainer-title">{title}</h2>
      <img className="movieCard-cardContainer-poster" src={poster_path}alt="Official movie poster for film"></img>
      <h4>{average_rating}</h4>
      {/* <Link to={'/showpage/'}> */}
      <button>Add Rating</button>
      {/* </Link> */}
      <MovieRatings />
    </section>
  )

}

export default MoviesCard;
