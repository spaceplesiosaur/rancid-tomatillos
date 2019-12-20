import { user } from './user';

describe('user', () => {
    it('should return the initial state', () => {
        const expected = {};

        const result = user(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should return the correct state with action type ADD_USER', () => {
              
        const action = {
          type: 'ADD_USER',
          user: {
            user:  {name: 'Diana', email: 'diana@turing.io', password: '111111'}
          }
        };

          const result = user({}, action)
          const expectedState =  {name: 'Diana', email: 'diana@turing.io', password: '111111'}
        
          expect(result).toEqual(expectedState)
  });
});

