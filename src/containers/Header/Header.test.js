import React from 'react';
import { shallow } from 'enzyme';
import { logOut } from '../../actions/index'
import { Header, mapDispatchToProps } from './Header';

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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct action when logUserOut is called', () => {
      const mockDispatch = jest.fn();
      const dispatchedAction = logOut();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.logUserOut()

      expect(mockDispatch).toHaveBeenCalledWith(dispatchedAction)
    })
  })
});
