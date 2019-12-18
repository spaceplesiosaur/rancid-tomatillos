import React from 'react';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { connect } from 'react-redux';
import '../App/App.scss';

const MoviesContainer = ({ movies }) => {
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
      <h1>Movie Homepage</h1>
       <section className="moviesContainer">
         {displayCards}
       </section>
    </>
  )
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
