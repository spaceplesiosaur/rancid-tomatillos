import React from 'react';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { connect } from 'react-redux';
import '../App/App.scss';

const MoviesContainer = ({ movies }) => {
  console.log(movies)
  return(
    <section className="moviesContainer">
    {movies[0] && movies.map(movie => {
      return (
       <MoviesCard
         key={movie.id}
         title={movie.title}
         poster={movie.poster_path}
         avgRating={movie.rating}
       />
      )
     })}
    </section>
  )
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
