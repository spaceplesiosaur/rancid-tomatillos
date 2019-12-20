export const user = (state = {}, action) => {
  switch(action.type){
    case 'ADD_USER' :
      return action.user.user;
      default:
      return state;

  }
}
