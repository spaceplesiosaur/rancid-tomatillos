export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
});

export const getRatings = ratings => ({
  type: 'GET_RATINGS',
  ratings
});

export const addRating = rating => ({
  type: 'ADD_RATING',
  rating
});

export const getUser = user => ({
  type: 'ADD_USER',
  user
});

export const deleteRating = rating => ({
  type: 'REMOVE_RATING',
  rating
});

export const logOut = () => ({
  type: 'LOG_OUT',
})

export const setError = (message) => ({
  type: 'HAS_ERROR',
  message
})