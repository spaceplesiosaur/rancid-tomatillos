import React, { Component } from 'react';
// import LoginForm from '../LoginForm/LoginForm';
import { getMovieData } from '../../util/apiCalls/apiCalls'
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import ShowPage from '../../components/ShowPage/ShowPage';
// import MovieRatings from '../MovieRatings/MovieRatings';
import './App.scss';

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(data => console.log(data))
  }

  render() {
    return (
      <main className="app-main">
        {/* <LoginForm /> */}
        <UserProfile />
        <MoviesContainer />
        {/* <ShowPage /> */}
        {/* <MovieRatings /> */}
      </main>
    )
  }
}