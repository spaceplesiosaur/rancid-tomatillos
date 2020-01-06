import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { ShowPage } from './ShowPage';


describe('ShowPage', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
        <ShowPage
        />
    )

  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
