import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header
      user={{id: 7, name: 'Diana', email: "diana@turing.io"}}
      logUserOut={jest.fn()}
    />);
  })
  it('should match the snapshot with correct data', () => {

    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot with correct data when user is logged out', () => {
    const wrapper = shallow(<Header
      user={{}}
      logUserOut={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call logUserOut when button is clicked', () => {
    const logOutMock = jest.fn()
    const wrapper = shallow(<Header
      user={{id: 7, name: 'Diana', email: "diana@turing.io"}}
      logUserOut={logOutMock}
    />);

    wrapper.find(".logout").simulate('click')

    expect(logOutMock).toHaveBeenCalled()

  })
});
