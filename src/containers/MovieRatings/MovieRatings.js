import React from 'react';
import { connect } from 'react-redux';
import { postRating } from '../../util/apiCalls';
import '../App/App.scss';

export const MovieRatings = ({movieId, rating, user}) => {

  const setRating = (rate) => {

    const rating = ({
      movieId: movieId,
      rating: rate
    })

    return postRating(rate, user)
}
  const  handleClick = (event) => {
    const rate = parseInt(event.target.id)
    console.log('RATE', rate)
    console.log('GETRAITING', getRating(rate))
    return  setRating(rate)
  }

return (
    <button id="1" onClick={(event) => handleClick(event)}>star</button>
  )

}

// export const mapDispatchToProps = dispatch => ({
//   rating: ratingData => dispatch(setRating(ratingData))
// });

export const mapStateToProps = state => ({
  user: state.user.id
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRatings);
