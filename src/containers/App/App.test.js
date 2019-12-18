import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { App } from './App';
import { getMovieData } from '../../util/apiCalls.js';
import { fetchUser } from '../../util/apiCalls.js';

jest.mock('../../util/apiCalls.js');

describe('App', () => {


  beforeEach(() => {

    // wrapper = shallow(
    //     <App
    //     />
    //   )
    //
    //
    // let mockMovies= { movies:
    //   [
    //     {
    //       id: 1,
    //       title: "Squirrelzilla: The Reckoning"
    //     },
    //     {
    //       id: 2,
    //       title: "Child's Play IX: Elf on the Shelf"
    //     }
    //   ]
    // }

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
    const wrapper = shallow( <App />);
    expect(wrapper).toMatchSnapshot()
  })

  it('should call getMovieData when mounted', () => {
    expect(getMovieData).toHaveBeenCalled()
  })

  it('should call addMovies when mounted', async () => {


    await getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')

    expect(wrapper.instance().props.addMovies).toHaveBeenCalledWith(data)
  })
})
