import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postRating, removeRating, fetchRatings } from '../../util/apiCalls';
import { addRating, deleteRating } from '../../actions/index';
import PropTypes from 'prop-types';
import '../App/App.scss';

export class MovieRatings extends Component{
  constructor({ movieId, rating, user, allRatings, deleteRating }) {
    super({ movieId, rating, user, allRatings, deleteRating })
  }

  setRating = async (rate) => {

      const userRating = {
        movie_id: this.props.movieId,
        rating: rate
      }

      return await postRating(userRating, this.props.user)
        .then(data => this.props.rating(data))
    };

  handleDelete = () => {
      return removeRating(this.props.user, this.getRatingId(this.props.movieId))
      .then(data => {
        return fetchRatings(this.props.user)
      }).then(ratingData => {
        this.props.deleteRating({ ratings: ratingData.ratings });
      });

  };

  getRatingId = movieId => {
      const movieIds = this.props.allRatings.map(rating => rating.movie_id);
      if (movieIds.includes(movieId)) {
        return this.props.allRatings.find(movie => movie.movie_id === movieId).id;
      }
    };

  handleClick = async (event) => {
      const rate = parseInt(event.target.getAttribute("data-id"))
      return await this.setRating(rate)
    };

  getUserRating = movieId => {
      const userRatings = this.props.allRatings.map(rating => rating.movie_id);
        if (userRatings.includes(movieId)) {
          return this.props.allRatings.find(movie => movie.movie_id === movieId).rating;
        } else {
          return '...';
        }
    };

  render() {
    return (
    <>
    {this.getUserRating(this.props.movieId) !== '...' &&
      <button className="movieCard-btn" onClick={() => this.handleDelete()}>Change Rating</button>}
    {this.getUserRating(this.props.movieId) !== '...' ?
    <h4>{`Your rating: ${this.getUserRating(this.props.movieId)}`}</h4> :
    <section className="rating-btn-section">
      <button className="rating-btn" data-id="1" onClick={(event) => this.handleClick(event)}>star1</button>
      <button className="rating-btn" data-id="2" onClick={(event) => this.handleClick(event)}>star2</button>
      <button className="rating-btn" data-id="3" onClick={(event) => this.handleClick(event)}>star3</button>
      <button className="rating-btn" data-id="4" onClick={(event) => this.handleClick(event)}>star4</button>
      <button className="rating-btn" data-id="5" onClick={(event) => this.handleClick(event)}>star5</button>
      <button className="rating-btn" data-id="6" onClick={(event) => this.handleClick(event)}>star6</button>
      <button className="rating-btn" data-id="7" onClick={(event) => this.handleClick(event)}>star7</button>
      <button className="rating-btn" data-id="8" onClick={(event) => this.handleClick(event)}>star8</button>
      <button className="rating-btn" data-id="9" onClick={(event) => this.handleClick(event)}>star9</button>
      <button className="rating-btn" data-id="10" onClick={(event) => this.handleClick(event)}>star10</button>
    </section>}
    </>
    )
  }

}


export const mapDispatchToProps = dispatch => ({
  rating: ratingData => dispatch(addRating(ratingData)),
  deleteRating: ratingData => dispatch(deleteRating(ratingData)),
});

export const mapStateToProps = state => ({
  user: state.user.id,
  allRatings: state.ratings
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRatings);

MovieRatings.propTypes = {
  movieId: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.object,
  allRatings: PropTypes.array,
  deleteRating: PropTypes.func
}
