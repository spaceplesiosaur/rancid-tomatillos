import { ratings } from './ratings';

describe('ratings', () => {
    it('should return the initial state', () => {
        const expected = [];

        const result = ratings(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return the correct state with action type GET_RATINGS', () => {
              
        const action = {
          type: 'GET_RATINGS',
            ratings:  [{
                id: 118,
                user_id: 7,
                movie_id: 20,
                rating: 2,
                created_at: '2020-01-02T23:21:56.186Z',
                updated_at: '2020-01-02T23:21:56.186Z'
            }]
        };

          const result = ratings([{}], action)
          const expectedState =  [{
            id: 118,
            user_id: 7,
            movie_id: 20,
            rating: 2,
            created_at: '2020-01-02T23:21:56.186Z',
            updated_at: '2020-01-02T23:21:56.186Z'
        }]
        
          expect(result).toEqual(expectedState)
  });

    it('should return state with a new rating with ADD_RATING action', () => {
        const rating = { id: 108, user_id: 7, movie_id: 14, rating: 4, created_at: "2019-12-30T21:29:51.243Z", updated_at: "2019-12-30T21:29:51.243Z"};
        const action = {
            type: 'ADD_RATING',
            rating
        }

        const result = ratings([], action)
        const expectedState = [4]
    
        expect(result).toEqual(expectedState)
    });
    
    it('should update state when a rating is deleted with REMOVE_RATING action', () => {
       
        const action = {
            type: 'REMOVE_RATING',
            rating: {
                ratings:  [{}]
            }     
        };
        
        const expectedState = [{}]

        const result = ratings([{}], action)
        expect(result).toEqual(expectedState)
    });

});    