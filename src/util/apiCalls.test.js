/* eslint-disable no-undef */
import { getMovieData } from './apiCalls';
import { fetchUser } from './apiCalls';
import { postRating } from './apiCalls';
import { fetchRatings } from './apiCalls';
import { removeRating } from './apiCalls';

describe('getMovieData', () => {
  let mockMovies;

  beforeEach(() => {
    mockMovies = {
      movies:
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
      ],
    };
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
    expect(getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')).resolves.toEqual(mockMovies)
  })

  it('should not return data when the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve(mockMovies)
        }
      })
    })
    expect(getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')).rejects.toEqual(Error('Error fetching movies'))
  })
})


describe('fetchUser', () => {

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

    expect(fetchUser(mockUser.email, mockUser.password)).resolves.toEqual(mockUserLoginObject)
  });

  it('should return an error when the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve(mockUserLoginObject)
        }
      })
    })
    expect(fetchUser(mockUser.email, mockUser.password)).rejects.toEqual(Error('Error fetching user'))
  })
})

describe('postRating', () => {
  let mockRating;
  let mockRatingOptions;
  let mockUser;

  beforeEach(() => {
    mockRating = {
      movie_id: 2,
      rating: 5
    }
    mockUser = {
      email: 'diana@turing.io',
      password: '111111',
      id: 7
    }
    mockRatingOptions = {
        method: 'POST',
        body: JSON.stringify(mockRating),
        headers: {
            'Content-Type': 'application/json'
        }
      }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockRating)
        }
      })
    })
  })

  it('should be passed down the correct url', () => {
    let options = mockRatingOptions;
    postRating(mockRating, mockUser.id)
    expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/7/ratings`, mockRatingOptions)
  })

  it('should return the posted rating', () => {
    expect(postRating(mockRating, mockUser.id)).resolves.toEqual(mockRating)
  })

  it('should return an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve(mockRating)
        }
      })
    })
    expect(postRating(mockRating, mockUser.id)).rejects.toEqual(Error('Error fetching rating'))
  })
})

describe('fetchRatings', () => {

  let mockRatingList;
  let mockUser;

  beforeEach(() => {

    mockUser = {
      email: 'diana@turing.io',
      password: '111111',
      id: 7
    }

    mockRatingList = {ratings: [
      {
        id: 118,
        user_id: 7,
        movie_id: 20,
        rating: 2,
        created_at: "2020-01-02T23:21:56.186Z",
        updated_at: "2020-01-02T23:21:56.186Z"
    },
    {
        id: 108,
        user_id: 7,
        movie_id: 14,
        rating: 4,
        created_at: "2019-12-30T21:29:51.243Z",
        updated_at: "2019-12-30T21:29:51.243Z"
    },
    {
        id: 110,
        user_id: 7,
        movie_id: 18,
        rating: 5,
        created_at: "2019-12-31T21:39:21.783Z",
        updated_at: "2019-12-31T21:39:21.783Z"
    }]}

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockRatingList)
        }
      })
    })

  })

  it('should be passed down the correct URL', () => {
    fetchRatings(mockUser.id)
    expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/7/ratings`)
  })

  it('should resolve to the list of ratings', () => {
    expect(fetchRatings(mockUser.id)).resolves.toEqual(mockRatingList)
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve(mockRatingList)
        }
      })
    })
    expect(fetchRatings(mockUser.id)).rejects.toEqual(Error('There was a problem fetching all ratings'))
  })
})

describe('removeRating', () => {

  let mockRating;
  let mockDeleteOptions;
  let mockRatingObject;
  let mockUser;

  beforeEach(() => {

    mockUser = {
      email: 'diana@turing.io',
      password: '111111',
      id: 7
    }

    mockRatingObject = {rating: {
        id: 118,
        user_id: 7,
        movie_id: 20,
        rating: 2,
        created_at: "2020-01-02T23:21:56.186Z",
        updated_at: "2020-01-02T23:21:56.186Z"
    }}

    mockDeleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve("It's deleted!")
        }
      })
    })
  })

  it('should be passed down the correct URL', () => {
    let options = mockDeleteOptions;
    removeRating(mockUser.id, mockRatingObject.rating.id)
    expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/7/ratings/118`, mockDeleteOptions)
  })

  it('should return the object that was deleted', () => {
    expect(removeRating(mockUser.id, mockRatingObject.id)).resolves.toEqual("It's deleted!")
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve("It's deleted!")
        }
      })
    })

    expect(removeRating(mockUser.id, mockRatingObject.id)).rejects.toEqual(Error('There was a problem with the delete'))
  })
})

