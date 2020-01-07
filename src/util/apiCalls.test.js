/* eslint-disable no-undef */
import { getMovieData } from './apiCalls';
import { fetchUser } from './apiCalls';

describe('getMovieData', () => {
  let mockMovies;

  beforeEach(() => {
    mockMovies: {
      [
        {
          id: 1,
          title: "Squirrelzilla: The Reckoning",
          poster_path: "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
          release_date: "2019-12-04",
          overview: "Denver is plunged into chaos when an ordinary squirrel, tired of rodent life in the big city, develops a grudge and begins training with the legendary sea monster Godzilla to wreak havoc on his domicile.",
          average_rating: 5,
        },
        {
          id: 2,
          title: "Child's Play IX: Elf on the Shelf",
          poster_path: "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
          release_date: "2019-12-07",
          overview: "All is not calm, all is not mild...when a murderous elf is destroyed by Rudolf on Christmas Eve, the reindeer forces the tiny psychopath's corrupted soul into an Elf on the Shelf doll.  But before Rudolf can bury the accursed avatar, it is shipped to the home of the Coleman family, who begin to disappear one by one...",
          average_rating: 4,
        },
      ];
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockMovies);
        },
      });
    });
  });

  it('should be passed down the correct URL', () => {
    getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies');
    expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies');
  });

  it('should return the correct data in the correct format', () => {
    expect(getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')).resolves.toEqual(mockMovies);
  });
});

describe('fetchMovies', () => {

  let mockUser;
  let mockOptions;
  let mockUserLoginObject;

  beforeEach(() => {

    mockUser = {
      email: 'diana@turing.io',
      password: '111111',
    };

    mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockUser),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    mockUserLoginObject = { email: mockUser.email, password: mockUser.password };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockUserLoginObject);
        },
      });
    });
  });


  it('should be passed down the correct url', () => {
    let options = mockOptions;
    fetchUser(mockUser.email, mockUser.password);
    expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/login', mockOptions);
  });

  it('should return the posted user', () => {
    expect(fetchUser(mockUser.email, mockUser.password)).resolves.toEqual(mockUserLoginObject);
  });
});
