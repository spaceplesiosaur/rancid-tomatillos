import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';
import PropTypes from 'prop-types';

export default class MoviesCard extends Component {
  constructor({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) {
    super({ average_rating, id, backdrop_path, overview, poster_path, release_date, title})
    this.state = {
      showPageOpen: false
    }
  }

  redirect = () => {
    this.setState({ showPageOpen: true })
  }

  render() {
    return (
      (this.state.showPageOpen)
      ? <Redirect path={`movies:${this.props.id}`}/>
      : <section className="moviesContainer-movieCard-cardContainer">
          <h2 className="movieCard-cardContainer-title">{title}</h2>
          <img className="movieCard-cardContainer-poster" src={poster_path}alt="Official movie poster for film"></img>
          <h4>Average Movie Rating: {average_rating}</h4>
          <button className="movieCard-btn">Add Rating</button>
          <button className="movieCard-btn" onClick={this.redirect}>See More</button>
          <MovieRatings />
        </section>
    )
  }
}



MoviesCard.propTypes = {
  average_rating: PropTypes.number,
  id: PropTypes.number,
  backdrop_path: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string
}
