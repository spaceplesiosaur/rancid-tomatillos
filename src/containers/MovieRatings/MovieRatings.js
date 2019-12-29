import React from 'react';
import { connect } from 'react-redux';
import { postRating } from '../../util/apiCalls';
import { getMovieData } from '../../util/apiCalls';
import { addRating } from '../../actions/index';
import '../App/App.scss';

export const MovieRatings = ({movieId, rating, user, allRatings}) => {

  const setRating = async (rate) => {

    const userRating = {
      movie_id: movieId,
      rating: rate
    }

    return await postRating(userRating, user)
                .then(data => rating(data))
}
  const  handleClick = async (event) => {
    const rate = parseInt(event.target.id)
    console.log('RATE', rate)
    console.log('SETRAITING', setRating(rate))
    return await setRating(rate)
  }

  const checkAllRatings = () => {
    return allRatings.filter(singleRating => {
      return singleRating.movie_id === movieId
    })
  }

console.log('CHECK RATINGS', checkAllRatings())

console.log('RATINGS', allRatings)
return (
  checkAllRatings().length ?
  <p>{`Your rating: ${checkAllRatings().rating}`}</p> :
  <section>
    <button id="1" onClick={(event) => handleClick(event)}>star1</button>
    <button id="2" onClick={(event) => handleClick(event)}>star2</button>
    <button id="3" onClick={(event) => handleClick(event)}>star3</button>
    <button id="4" onClick={(event) => handleClick(event)}>star4</button>
    <button id="5" onClick={(event) => handleClick(event)}>star5</button>
  </section>
  )

}

export const mapDispatchToProps = dispatch => ({
  rating: ratingData => dispatch(addRating(ratingData))
});

export const mapStateToProps = state => ({
  user: state.user.id,
  allRatings: state.ratings
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRatings);
