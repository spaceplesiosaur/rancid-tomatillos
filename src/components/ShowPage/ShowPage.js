import React from 'react';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const ShowPage = ({movie}) => {
  return (
    <section className="showPage-container">
    <img className="section-showpage-image" src={movie.backdrop_path} alt="movie cover backdrop"></img>
    <h1 className="showPage-container-title">{movie.title}</h1>
    <p className="showPage-container-release">{movie.release_date}</p>
    <p className="showPage-container-overview">{movie.overview}</p>
    <p className="showPage-container-averageRating">{movie.average_rating}</p>
    <MovieRatings />
  </section>
  )
}

export default ShowPage;
