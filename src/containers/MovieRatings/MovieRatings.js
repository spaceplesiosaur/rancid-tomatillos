import React from 'react';
import { connect } from 'react-redux';
import { setRating } from '../../actions/index';
import '../App/App.scss';

export const MovieRatings = ({movieId, rating, user}) => {
  const getRating = (rate) => {
    return rating({
      movieId: movieId,
      user: user,
      rate: rate
    })
}
  const  handleClick = (event) => {
    const rate = parseInt(event.target.id)
    console.log('RATE', rate)
    console.log('GETRAITING', getRating(rate))
    return  getRating(rate)
  }

return (
    <button id="1" onClick={(event) => handleClick(event)}>star</button>
  )

}

export const mapDispatchToProps = dispatch => ({
  rating: ratingData => dispatch(setRating(ratingData))
});

export const mapStateToProps = state => ({
  user: state.user.id
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRatings);
