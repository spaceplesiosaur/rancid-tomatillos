import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';


describe('UserProfile', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
        <UserProfile
        />
    )

  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
