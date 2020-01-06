import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { MovieRatings } from './MovieRatings';


describe('MovieRatings', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
        <MovieRatings
        movieId={2}
        rating={2}
        user={{id: 7, name: 'Diana', email: "diana@turing.io"}}
        allRatings={[{
            "id": 118,
            "user_id": 7,
            "movie_id": 20,
            "rating": 2,
            "created_at": "2020-01-02T23:21:56.186Z",
            "updated_at": "2020-01-02T23:21:56.186Z"
        },
        {
            "id": 108,
            "user_id": 7,
            "movie_id": 14,
            "rating": 4,
            "created_at": "2019-12-30T21:29:51.243Z",
            "updated_at": "2019-12-30T21:29:51.243Z"
        },
        {
            "id": 110,
            "user_id": 7,
            "movie_id": 18,
            "rating": 5,
            "created_at": "2019-12-31T21:39:21.783Z",
            "updated_at": "2019-12-31T21:39:21.783Z"
        }]}
        deleteRating={jest.fn()}
        />
    )

  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
