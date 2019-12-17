import React, { Component } from 'react';
// import LoginForm from '../LoginForm/LoginForm';
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
    fetch()
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