import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;


  beforeEach(() => {

    wrapper = shallow(
        <App />
    )
  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
