import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';
import PropTypes from 'prop-types';

export default class MoviesCard extends Component {
  constructor() {
    super()
    this.state = {
      showPageOpen: false
    }
  }

  redirect = (e) => {
    e.preventDefault()
    this.setState({ showPageOpen: true })
  }

  render() {
    return (
      (this.state.showPageOpen)
      ? <Redirect to={`/movies/${this.props.id}`}/>
      : <section className="moviesContainer-movieCard-cardContainer">
          <h2 className="movieCard-cardContainer-title">{this.props.title}</h2>
          <img className="movieCard-cardContainer-poster" src={this.props.poster_path}alt="Official movie poster for film"></img>
          <h4>Average Movie Rating: {this.props.average_rating}</h4>
          <button className="movieCard-btn">Add Rating</button>
          <button className="movieCard-btn" onClick={(e) => this.redirect(e)}>See More</button>
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
