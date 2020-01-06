import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { ShowPage, mapStateToProps } from './ShowPage';


describe('ShowPage', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
        <ShowPage
        movie={{
            "id": 1,
            "title": "Jumanji: The Next Level",
            "poster_path": "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
            "release_date": "2019-12-04",
            "overview": "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            "average_rating": 6.666666666666667
        }}
        user={{email: 'diane@turing.io', name: 'Diane', id: 7}}
        />
    )

  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {

    it('should return the user object ', () => {
      const mockState = {
        user: {email: 'diane@turing.io', name: 'Diane', id: 7},
        movies: [{}, {}, {}],
        ratings: [{}, {}, {}]
      };
      const expected = {
        user: {email: 'diane@turing.io', name: 'Diane', id: 7}
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })
})
