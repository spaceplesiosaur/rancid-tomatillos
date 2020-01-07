import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';

import { fetchUser } from '../../util/apiCalls';

jest.mock('../../util/apiCalls')

describe('LoginForm', () => {
  let wrapper;
  let mockEvent

  beforeEach(() => {

    wrapper = shallow(
        <LoginForm
        getUser={jest.fn()}
        />
    )

    mockEvent = {target: {name: 'email', value: 'diana@turing.io'}, preventDefault: jest.fn()}
  })

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with correct data when isPasswordShown is true', () => {
    wrapper.setState({isPasswordShown: true})

    expect(wrapper).toMatchSnapshot()
  })

  it('should render with correct data when loggedIn is true', () => {
    wrapper.setState({loggedIn: true})

    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleChange when input value is changed', () => {

    wrapper.instance().handleChange = jest.fn()

    wrapper.find("#email").simulate('change', mockEvent)

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)

  })

  it('should change state when handleChange is called', () => {

    wrapper.setState({email: ''})

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('email')).toEqual(mockEvent.target.value)
  })

  it('should call handleSubmit when button is clicked', () => {

    wrapper.instance().handleSubmit = jest.fn()

    wrapper.find("a").simulate('click', {preventDefault: jest.fn()})

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled()

  })

  it('should call getUser when handleSubmit runs', async () => {
    const mockUser = {email: 'diane@turing.io', name: 'Diane', id: 7}
    fetchUser.mockImplementation(() => {
      return Promise.resolve(mockUser)
    })
    const mockGetUser = jest.fn()
    const wrapper = shallow(
        <LoginForm
        getUser={mockGetUser}
        />
    )

    await wrapper.instance().handleSubmit(mockEvent);

    expect(mockGetUser).toHaveBeenCalledWith(mockUser)
  })

  it('should set loggedIn to be true when handleSubmit runs', async () => {
    const mockUser = {email: 'diane@turing.io', name: 'Diane', id: 7}

    fetchUser.mockImplementation(() => {
      return Promise.resolve(mockUser)
    })

    const mockGetUser = jest.fn()

    expect(wrapper.state('loggedIn')).toEqual(false)

    await wrapper.instance().handleSubmit(mockEvent);

    expect(wrapper.state('loggedIn')).toEqual(true)
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

    wrapper.find("#pwIconFirstHalf").simulate('click')

    expect(wrapper.instance().togglePasswordVisibility).toHaveBeenCalled()

    wrapper.find("#pwIconSecondHalf").simulate('click')

    expect(wrapper.instance().togglePasswordVisibility).toHaveBeenCalled()

  })
})
