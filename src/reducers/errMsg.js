export const errMsg = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERROR':
      console.log("action", action.message)
      return action.message;
    default: 
    return state; 
  } 
}