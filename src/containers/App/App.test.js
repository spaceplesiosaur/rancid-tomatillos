import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { App } from './App';
import { getMovieData } from '../../util/apiCalls.js';
import { fetchUser } from '../../util/apiCalls.js';

jest.mock('../../util/apiCalls.js');

describe('App', () => {


  beforeEach(() => {

    getMovieData.mockImplementation(() => {
      return Promise.resolve({ movies:
        [
          {
            id: 1,
            title: "Squirrelzilla: The Reckoning"
          },
          {
            id: 2,
            title: "Child's Play IX: Elf on the Shelf"
          }
        ]
      })
    })

  })

  it('should render with correct data', () => {
    const wrapper = shallow(
      <App addMovies={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot()
  })

  it('should call getMovieData when mounted', () => {
    shallow( <App addMovies={jest.fn()}/>)
    expect(getMovieData).toHaveBeenCalled()
  })

  it('should call addMovies when mounted', async () => {
    const wrapper = shallow(
      <App addMovies={jest.fn()}/>);

      let mockMovies= { movies:
        [
          {
            id: 1,
            title: "Squirrelzilla: The Reckoning"
          },
          {
            id: 2,
            title: "Child's Play IX: Elf on the Shelf"
          }
        ]
      }

    await wrapper.instance().componentDidMount()

    expect(wrapper.instance().props.addMovies).toHaveBeenCalledWith(mockMovies)
  })
})
