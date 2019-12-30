import React, { Component } from 'react';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { getMovieData } from '../../util/apiCalls';
import { getRatings } from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App/App.scss';
// import UserProfile from '../UserProfile/UserProfile';

export class MoviesContainer extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  componentDidUpdate() {
    return this.props.user.id ?
    getMovieData(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings`)
      .then(data => this.props.getRatings(data.ratings)) : null
    }

  displayCards = () => {
    return this.props.movies.map(movie => {
      return (
      <MoviesCard
        {...movie}
        key={movie.id}
      />
      )
    })}

  render() {
    return (

          <>
            <h1>Rancid Tomatillos</h1>
             <section className="moviesContainer">
               {this.displayCards()}
             </section>
          </>

    )
  }
}


export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  getRatings: ratingData => dispatch(getRatings(ratingData))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

MoviesContainer.propTypes = {
  movies: PropTypes.array
}
