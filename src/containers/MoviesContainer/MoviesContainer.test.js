import React from 'react';
import { shallow } from 'enzyme';
import { MoviesContainer, mapStateToProps, mapDispatchToProps } from './MoviesContainer';
import { getRatings } from '../../actions/index';

describe('MoviesContainer', () => {
    let wrapper;
    let mockMovies= [
        {
          id: 1,
          title: "Jumanji: The Next Level",
          poster_path: "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
          backdrop_path: "https://url.jpg",
          release_date: "2019-12-04",
          overview: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
          average_rating: 4
       }
    ];

    beforeEach(() => {
        wrapper = shallow(<MoviesContainer movies={mockMovies}/>)
    });

    it('should take a snapshot of the data coming in', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('componentDidUpdate', () => {

      it.skip('should call getRatings when component updates', () => {
        
        const wrapper = shallow(
          <MoviesContainer getRatings={jest.fn()}/>
        );

        let mockRatings= [
              {
                id: 118,
                user_id: 7,
                movie_id: 20,
                rating: 2,
                created_at: "2020-01-02T23:21:56.186Z",
                updated_at: "2020-01-02T23:21:56.186Z"
              },
              {
                id: 111,
                user_id: 7,
                movie_id: 13,
                rating: 3,
                created_at: "2019-12-31T23:52:36.923Z",
                updated_at: "2019-12-31T23:52:36.923Z"
              }
            ]

          wrapper.instance().componentDidUpdate()

          expect(wrapper.instance().props.getRatings).toHaveBeenCalledWith(mockRatings)
      });       
    });

    describe('mapStateToProps', () => {
      it('should return the movies data from the store', () => {
        const mockState = {
            movies: [
              {
                id: 1,
                title: "Jumanji: The Next Level",
                poster_path: "https://url.jpg",
                backdrop_path: "https://url.jpg",
                release_date: "2019-12-04",
                overview: "In Jumanji: The Next Level, the gang is back but the game has changed...",
                average_rating: 7
              }
            ]
        };
        
        const expected = {
            movies: [
              {
                id: 1,
                title: "Jumanji: The Next Level",
                poster_path: "https://url.jpg",
                backdrop_path: "https://url.jpg",
                release_date: "2019-12-04",
                overview: "In Jumanji: The Next Level, the gang is back but the game has changed...",
                average_rating: 7
              }
            ]
        };
        
        const mappedProps = mapStateToProps(mockState);
    
        expect(mappedProps).toEqual(expected);
      });

      it('should return the user data from the store', () => {

        const mockUser = {
            user: {email: 'diane@turing.io', name: 'Diane', id: 7},
            ratings: [{}, {}]
        };

        const expected = {
            user: {email: 'diane@turing.io', name: 'Diane', id: 7}
        };
        const mappedProps = mapStateToProps(mockUser);
    
        expect(mappedProps).toEqual(expected);
      })
    });

    describe('mapDispatchToProps', () => {
      it('calls dispatch with getRatings when getRatings is called', () => {
           
        const mockDispatch = jest.fn();
        const actionToDispatch = getRatings([{}]);

        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.getRatings([{}]);
    
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
    });
});
