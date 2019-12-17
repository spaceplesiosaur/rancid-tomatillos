import React, { Component } from 'react';
// import LoginForm from '../LoginForm/LoginForm';
import { getMovieData } from '../../util/apiCalls'
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMovies } from '../../actions/index';
// import ShowPage from '../../components/ShowPage/ShowPage';
// import MovieRatings from '../MovieRatings/MovieRatings';
import './App.scss';
import { connect } from 'react-redux';

export class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    return getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(data => this.props.addMovies(data))
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

const mapDispatchToProps = dispatch => ({
  addMovies: data => dispatch(addMovies(data))
})

export default connect(null, mapDispatchToProps)(App)
