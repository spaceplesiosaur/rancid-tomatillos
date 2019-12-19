import * as actions from '../actions';

describe('actions', () => {
    it('should have a type of ADD_MOVIES', () => {
        const movies = [{}, {}, {}];
        const expectedAction = {
            type: 'ADD_MOVIES',
            movies
        };

        const result = actions.addMovies(movies)
        expect(result).toEqual(expectedAction)
    });

    it('should have a type of ADD_USER', () => {
        const user = {};
        const expectedAction = {
            type: 'ADD_USER',
            user
        };
         const result = actions.getUser(user);
         expect(result).toEqual(expectedAction)
    })
});
