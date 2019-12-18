import React from 'react';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { connect } from 'react-redux';
import '../App/App.scss';

export const MoviesContainer = ({ movies }) => {
  const displayMovies = movies.map(movie => {
    return ( 
      <MoviesCard 
        {...movies}
        key={movie.id}
      />
    )
  });

  return (
    <section className="moviesContainer">
      {displayMovies}
    </section>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
