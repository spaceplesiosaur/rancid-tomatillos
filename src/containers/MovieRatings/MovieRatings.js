import React from 'react';
import { connect } from 'react-redux';
import { postRating, removeRating, fetchRatings } from '../../util/apiCalls';
import { addRating, deleteRating } from '../../actions/index';
import '../App/App.scss';

export const MovieRatings = ({ movieId, rating, user, allRatings, deleteRating }) => {

  const setRating = async (rate) => {

    const userRating = {
      movie_id: movieId,
      rating: rate
    }

    return await postRating(userRating, user)
      .then(data => rating(data))
  }

  const handleDelete = (event) => {
    event.preventDefault()
    removeRating(user, getRatingId(movieId))
    .then(data => {
      fetchRatings(user).then(ratingData => {
        deleteRating({ ratings: ratingData.ratings });
    });
  })
};

const findUserRating = movieId => {
  const userRatings = allRatings.map(rating => rating.movie_id);
  if (userRatings.includes(movieId)) {
    return allRatings.find(movie => movie.movie_id === movieId).rating;
  } else {
    return '...';
  }
};
  
  const getRatingId = movieId => {
    const movieIds = allRatings.map(rating => rating.movie_id);
    if (movieIds.includes(movieId)) {
      return allRatings.find(movie => movie.movie_id === movieId).id;
    }
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
    {findUserRating(movieId) !== '...' &&
      <button className="movieCard-btn" onClick={(event) => handleDelete(event)}>Change Rating</button>}
    {checkAllRatings().length ?
    <h4>{`Your rating: ${checkAllRatings()[0].rating}`}</h4> :
    <section className="rating-btn-section">
      <button className="rating-btn" id="1" onKeyUp={(event) => handleClick(event)}>star1</button>
      <button className="rating-btn" id="2" onClick={(event) => handleClick(event)}>star2</button>
      <button className="rating-btn" id="3" onClick={(event) => handleClick(event)}>star3</button>
      <button className="rating-btn" id="4" onClick={(event) => handleClick(event)}>star4</button>
      <button className="rating-btn" id="5" onClick={(event) => handleClick(event)}>star5</button>
      <button className="rating-btn" id="6" onClick={(event) => handleClick(event)}>star6</button>
      <button className="rating-btn" id="7" onClick={(event) => handleClick(event)}>star7</button>
      <button className="rating-btn" id="8" onClick={(event) => handleClick(event)}>star8</button>
      <button className="rating-btn" id="9" onClick={(event) => handleClick(event)}>star9</button>
      <button className="rating-btn" id="10" onClick={(event) => handleClick(event)}>star10</button>
    </section>}
    </>
    )
  
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
