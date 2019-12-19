import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MovieRatings from './MovieRatings';


describe('MovieRatings', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
        <MovieRatings
        />
    )

  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
