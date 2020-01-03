import React from 'react';
import { connect } from 'react-redux';
import { postRating, removeRating, getMovieData } from '../../util/apiCalls';
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

  // const changeRating = async (rate) => {
  //   return await removeRating(user, rating)
  //   .then(data => console.log(data))
  // }

  // const handleDelete = async (e) => {
  //   const rate = parseInt(e.target.id)
  //   return await changeRating(rate)
  // }

  const handleDelete = (e) => {
    e.preventDefault()
    // const { allRatings, user } = props;
    removeRating(rating, user)
      .then(data => {
          const postRating = { ...user, ratings: data.ratings };
          allRatings(postRating);
      });
  }
  

  const  handleClick = async (event) => {
    const rate = parseInt(event.target.id)
    return await setRating(rate)
  }

  const checkAllRatings = () => {
    return allRatings.filter(singleRating => {
      return singleRating.movie_id === movieId
    })
  }

return (
  <>
    <button className="movieCard-btn" onClick={(e) => handleDelete(e)}>Change Rating</button>
      <section>
      {checkAllRatings().length ?
      <h4>{`Your rating: ${checkAllRatings()[0].rating}`}</h4> :
        <button id="1" onClick={(event) => handleClick(event)}>star1</button>,
        <button id="2" onClick={(event) => handleClick(event)}>star2</button>,
        <button id="3" onClick={(event) => handleClick(event)}>star3</button>,
        <button id="4" onClick={(event) => handleClick(event)}>star4</button>,
        <button id="5" onClick={(event) => handleClick(event)}>star5</button>,
        <button id="6" onClick={(event) => handleClick(event)}>star6</button>,
        <button id="7" onClick={(event) => handleClick(event)}>star7</button>,
        <button id="8" onClick={(event) => handleClick(event)}>star8</button>,
        <button id="9" onClick={(event) => handleClick(event)}>star9</button>,
        <button id="10" onClick={(event) => handleClick(event)}>star10</button>}
      </section>
  </>
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
