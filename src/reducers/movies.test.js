import { movies } from './movies';

describe('movies', () => {
    it('should return the initial state', () => {
        const expected = [];

        const result = movies(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return the correct state with action type ADD_MOVIES', () => {
              
        const action = {
          type: 'ADD_MOVIES',
          movies: {
            movies:  [{
                id: 13,
                title: "Terminator: Dark Fate",
                poster_path: "url",
                backdrop_path: "url",
                release_date: "2019-10-23",
                overview: "Decades after Sarah Connor prevented Judgment Day",
                average_rating: 3
            }]
          }
        };

          const result = movies([], action)
          const expectedState =  [{
            id: 13,
            title: "Terminator: Dark Fate",
            poster_path: "url",
            backdrop_path: "url",
            release_date: "2019-10-23",
            overview: "Decades after Sarah Connor prevented Judgment Day",
            average_rating: 3
        }]
        
          expect(result).toEqual(expectedState)
  });
});

