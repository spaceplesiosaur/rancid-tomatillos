import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { dive } from 'enzyme';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';

describe('LoginForm', () => {
  let wrapper;
  let mockEvent

  beforeEach(() => {

    wrapper = shallow(
        <LoginForm
        getUser={jest.fn()}
        />
    )

    mockEvent = {target: {name: 'email', value: 'diana@turing.io'}}
  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with correct data when isPasswordShown is true', () => {
    wrapper.setState({isPasswordShown: true})

    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleChange when input value is changed', () => {

    wrapper.instance().handleChange = jest.fn()

    wrapper.find("#email").simulate('change', mockEvent)

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)

  })


  it('should call handleSubmit when button is clicked', () => {

    wrapper.instance().handleSubmit = jest.fn()

    wrapper.find("a").simulate('click', {preventDefault: jest.fn()})

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled()

  })

  it('should change state when handleChange is called', () => {

    wrapper.setState({email: ''})

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('email')).toEqual(mockEvent.target.value)
  })

  it('should toggle isPasswordShown in state when togglePasswordVisibility is called', () => {
    wrapper.setState({isPasswordShown: false})

    wrapper.instance().togglePasswordVisibility()

    expect(wrapper.state('isPasswordShown')).toEqual(true)

    wrapper.instance().togglePasswordVisibility()

    expect(wrapper.state('isPasswordShown')).toEqual(false)
  })

  it('should call togglePasswordVisibility when button is clicked', () => {

    wrapper.instance().togglePasswordVisibility = jest.fn()
    wrapper.instance().forceUpdate();

    wrapper.find("i").simulate('click')

    expect(wrapper.instance().togglePasswordVisibility).toHaveBeenCalled()

  })
})
