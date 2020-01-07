/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getMovieData } from '../../util/apiCalls.js';
import { addMovies } from '../../actions/index';

jest.mock('../../util/apiCalls.js');

describe('App', () => {
  beforeEach(() => {
    getMovieData.mockImplementation(() => {
      return Promise.resolve({ movies:
        [
          {
            id: 1,
            title: 'Squirrelzilla: The Reckoning'
          },
          {
            id: 2,
            title: "Child's Play IX: Elf on the Shelf"
          },
        ],
      });
    });
  });

  it('should render with correct data', () => {
    const wrapper = shallow(
      <App addMovies={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getMovieData when mounted', () => {
    shallow( <App addMovies={jest.fn()}/>);
    expect(getMovieData).toHaveBeenCalled();
  });

  it('should call addMovies when mounted', async () => {
    const wrapper = shallow(
      <App addMovies={jest.fn()}/>);

    let mockMovies= {
      movies:
        [
          {
            id: 1,
            title: 'Squirrelzilla: The Reckoning'
          },
          {
            id: 2,
            title: "Child's Play IX: Elf on the Shelf"
          },
        ],
    };

    await wrapper.instance().componentDidMount();

    expect(wrapper.instance().props.addMovies).toHaveBeenCalledWith(mockMovies);
  });

  describe('mapStateToProps', () => {
    it('should return the movies data from state', () => {
      const mockState = {
        movies: [
          {
            id: 1,
            title: 'Jumanji: The Next Level',
            poster_path: 'https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
            release_date: '2019-12-04',
            overview: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            average_rating: 7,
          },
        ],
        user: { email: 'diane@turing.io', name: 'Diane', id: 7 },
        ratings: [{}, {}],
      };

      const expected = {
        movies: [
          {
            id: 1,
            title: 'Jumanji: The Next Level',
            poster_path: 'https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
            release_date: '2019-12-04',
            overview: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            average_rating: 7
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with addMovies when addMovies is called', () => {
       
      const mockDispatch = jest.fn();
      const actionToDispatch = addMovies([{}]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addMovies([{}]);
 
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
