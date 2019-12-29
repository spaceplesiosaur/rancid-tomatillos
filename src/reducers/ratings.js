export const ratings = (state = [], action) => {
  switch(action.type){
    case 'GET_RATINGS' :
      return [...state, action.ratings]
    case 'ADD_RATING' :
      return [...state, action.rating]
    default:
      return state;
  }
}
