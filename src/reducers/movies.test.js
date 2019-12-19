import { movies } from '../reducers/movies';

describe('movies', () => {
    it('should return the initial state', () => {
        const expected = [];

        const result = movies(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return the correct state with action type ADD_MOVIES', () => {
        const initialState = [];
        const action = {
          type: 'ADD_MOVIES',
          movies
          };
          
          const result = movies(initialState, action)
          const expectedState = [{}, {}, {}]
      
          expect(result).toEqual(expectedState)
  });
});

