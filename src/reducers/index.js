import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { ratings } from './ratings';
import { errMsg } from './errMsg';


export const rootReducer = combineReducers({
    movies,
    user,
    ratings, 
    errMsg

})
