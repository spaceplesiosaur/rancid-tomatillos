import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MoviesCard from './MoviesCard';


describe('MoviesCard', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
        <MoviesCard
        />
    )

  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
