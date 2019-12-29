import React from 'react';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const ShowPage = ({movie}) => {
  return (
    <>
    <section className="showPage-image-container">
      <img className="section-showPage-image" src={movie.backdrop_path} alt="movie cover backdrop"></img>
    </section>
    <section className="showPage-info-container">  
      <h3 className="showPage-container-title">{movie.title}</h3>
      <p className="showPage-container-release"><span>Release Date:</span>{movie.release_date}</p>
      <p className="showPage-container-overview"><span>Synopsis:</span>{movie.overview}</p>
      <p className="showPage-container-averageRating"><span>Average Rating:</span>{movie.average_rating}</p>
      <MovieRatings />
    </section>
    </>
  )
}

export default ShowPage;
