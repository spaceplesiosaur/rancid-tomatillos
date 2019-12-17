import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import ShowPage from '../../components/ShowPage/ShowPage';
import MovieRatings from '../MovieRatings/MovieRatings';
import './App.scss';

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <main className="app-main">
        <LoginForm />
        <UserProfile />
        <MoviesContainer />
        <ShowPage />
        <MovieRatings />
      </main>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
