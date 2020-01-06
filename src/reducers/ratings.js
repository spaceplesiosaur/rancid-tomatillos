export const ratings = (state = [], action) => {
  switch(action.type){
    case 'GET_RATINGS' :
      return [...action.ratings]
    case 'ADD_RATING' :
      return [...state, action.rating.rating]
    case 'REMOVE_RATING' :
      return action.rating.ratings;
    default:
      return state;
  }
}
