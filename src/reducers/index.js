import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user'
import { rating } from './rating'


export const rootReducer = combineReducers({
    movies,
    user,
    rating

})
