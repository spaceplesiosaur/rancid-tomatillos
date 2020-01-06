import React from 'react';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import { connect } from 'react-redux';
import '../../containers/App/App.scss';

export const ShowPage = ({movie, user}) => {
  return (
      <section className="showPage__image-container"> 
        <img className="showPage__image" src={movie.backdrop_path} alt="movie cover backdrop"></img>
        <div className="showPage__image-info-container">
          <h3 className="showPage-container-title">{movie.title}</h3>
          <p className="showPage-container-release"><span>Release Date:</span>{movie.release_date}</p>
          <p className="showPage-container-overview"><span>Synopsis:</span>{movie.overview}</p>
          <p className="showPage-container-averageRating"><span>Average Rating:</span>{movie.average_rating}</p>
        {!user.name ?
          null :
          <MovieRatings 
            movieId ={movie.id}
          />}
        </div>
      </section>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(ShowPage)
