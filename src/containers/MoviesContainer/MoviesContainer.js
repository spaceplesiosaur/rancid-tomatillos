import React from 'react';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App/App.scss';
// import UserProfile from '../UserProfile/UserProfile';

export const MoviesContainer = ({ movies }) => {
  const displayCards = movies.map(movie => {
    return (
    <MoviesCard
      {...movie}
      key={movie.id}
    />
    )
  })
  return (
    <>
      <h1>Rancid Tomatillos</h1>
       <section className="moviesContainer">
         {displayCards}
       </section>
    </>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);

MoviesContainer.propTypes = {
  movies: PropTypes.array
}
