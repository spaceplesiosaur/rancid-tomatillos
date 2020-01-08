/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { postRating, removeRating, fetchRatings } from '../../util/apiCalls';
import { addRating, deleteRating } from '../../actions/index';
import { MovieRatings, handleDelete, mapDispatchToProps, mapStateToProps } from './MovieRatings';

jest.mock('../../util/apiCalls')

describe('MovieRatings', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MovieRatings
        movieId={14}
        rating={jest.fn()}
        user={{ id: 7, name: 'Diana', email: 'diana@turing.io' }}
        allRatings={[{
          id: 118,
          user_id: 7,
          movie_id: 20,
          rating: 2,
          created_at: '2020-01-02T23:21:56.186Z',
          updated_at: '2020-01-02T23:21:56.186Z',
        },
        {
          id: 108,
          user_id: 7,
          movie_id: 14,
          rating: 4,
          created_at: '2019-12-30T21:29:51.243Z',
          updated_at: '2019-12-30T21:29:51.243Z',
        },
        {
          id: 110,
          user_id: 7,
          movie_id: 18,
          rating: 5,
          created_at: '2019-12-31T21:39:21.783Z',
          updated_at: '2019-12-31T21:39:21.783Z',
        }]}
        deleteRating={jest.fn()}
      />,
    );
  });

  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with correct data when there is no rating', () => {
    const wrapper = shallow(
      <MovieRatings
        movieId={14}
        rating={jest.fn()}
        user={{ id: 7, name: 'Diana', email: 'diana@turing.io' }}
        allRatings={[{
          id: 118,
          user_id: 7,
          movie_id: 20,
          rating: 2,
          created_at: '2020-01-02T23:21:56.186Z',
          updated_at: '2020-01-02T23:21:56.186Z',
        },
        {
          id: 110,
          user_id: 7,
          movie_id: 18,
          rating: 5,
          created_at: '2019-12-31T21:39:21.783Z',
          updated_at: '2019-12-31T21:39:21.783Z',
        }]}
        deleteRating={jest.fn()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleDelete when Change Rating button is clicked', () => {

    wrapper.instance().handleDelete = jest.fn();
    wrapper.find('.movieCard-btn').simulate('click');

    expect(wrapper.instance().handleDelete).toHaveBeenCalled();
  });

  it('should run removeRating, fetchRating, and deleteRating when handleDelete is called', async () => {
    const mockRatingList = [{}, {}];

    removeRating.mockImplementation(() => {
      return Promise.resolve();
    });

    fetchRatings.mockImplementation(() => {
      return Promise.resolve(mockRatingList);
    });

    await wrapper.instance().handleDelete();

    expect(removeRating).toHaveBeenCalledWith(wrapper.instance().props.user, 108);
    expect(fetchRatings).toHaveBeenCalledWith(wrapper.instance().props.user);
    expect(wrapper.instance().props.deleteRating).toHaveBeenCalled();
  });

  it('should run postRating and rating when setRating is called', async () => {
    const mockUserRating = {
      movie_id: 14,
      rating: 4,
    };

    postRating.mockImplementation(() => {
      return Promise.resolve(mockUserRating);
    });

    await wrapper.instance().setRating(4);

    expect(postRating).toHaveBeenCalledWith(mockUserRating, wrapper.instance().props.user);
    expect(wrapper.instance().props.rating).toHaveBeenCalledWith(mockUserRating);
  });

  it('should run setRating when handleClick is called', () => {
    wrapper.instance().setRating = jest.fn();

    const mockEvent = { target: { getAttribute: jest.fn() } };
    wrapper.instance().handleClick(mockEvent);

    expect(wrapper.instance().setRating).toHaveBeenCalled();
  });

  describe('getUserRating', () => {
    it('should return a movie rating if the movieID matches a movie in the ratings array', () => {
      const functionWithGoodId = wrapper.instance().getUserRating(14);
      const expected = 4;

      expect(functionWithGoodId).toEqual(expected);
    });

    it('should return an empty string if the movieID does not match a movie in the ratings array', () => {
      const functionWithBadId = wrapper.instance().getUserRating(140);
      const expected = '...';

      expect(functionWithBadId).toEqual(expected);
    });
  });

  describe('getRatingId', () => {
    it('should return a movie rating id if the movieID matches a movie in the ratings array', () => {
      const functionWithGoodId = wrapper.instance().getRatingId(14);
      const expected = 108;

      expect(functionWithGoodId).toEqual(expected);
    });
  });

  it('should call handle click whenever a star button is clicked', () => {
    const wrapper = shallow(
      <MovieRatings
        movieId={14}
        rating={jest.fn()}
        user={{ id: 7, name: 'Diana', email: 'diana@turing.io' }}
        allRatings={[{
          id: 118,
          user_id: 7,
          movie_id: 20,
          rating: 2,
          created_at: '2020-01-02T23:21:56.186Z',
          updated_at: '2020-01-02T23:21:56.186Z',
        },
        {
          id: 110,
          user_id: 7,
          movie_id: 18,
          rating: 5,
          created_at: '2019-12-31T21:39:21.783Z',
          updated_at: '2019-12-31T21:39:21.783Z',
        }]}
        deleteRating={jest.fn()}
      />,
    );

    wrapper.instance().handleClick = jest.fn();

    wrapper.instance().forceUpdate();

    wrapper.find('[data-id="1"]').simulate('click');
    wrapper.find('[data-id="2"]').simulate('click');
    wrapper.find('[data-id="3"]').simulate('click');
    wrapper.find('[data-id="4"]').simulate('click');
    wrapper.find('[data-id="5"]').simulate('click');
    wrapper.find('[data-id="6"]').simulate('click');
    wrapper.find('[data-id="7"]').simulate('click');
    wrapper.find('[data-id="8"]').simulate('click');
    wrapper.find('[data-id="9"]').simulate('click');
    wrapper.find('[data-id="10"]').simulate('click');

    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(10);
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct action when rating is called', () => {
      const mockDispatch = jest.fn();
      const dispatchedAction = addRating({
        movie_id: 14,
        rating: 4,
      });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.rating({
        movie_id: 14,
        rating: 4,
      });

      expect(mockDispatch).toHaveBeenCalledWith(dispatchedAction);
    });

    it('calls dispatch with the correct action when deleteRating is called', () => {
      const mockDispatch = jest.fn();
      const dispatchedAction = deleteRating();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteRating();

      expect(mockDispatch).toHaveBeenCalledWith(dispatchedAction);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with the rankings array and userID', () => {
      const mockUser = { email: 'Diana@turing.io', id: 7, name: 'Diana' };
      const mockRankings = [{
        id: 118,
        user_id: 7,
        movie_id: 20,
        rating: 2,
        created_at: '2020-01-02T23:21:56.186Z',
        updated_at: '2020-01-02T23:21:56.186Z',
      },
      {
        id: 108,
        user_id: 7,
        movie_id: 14,
        rating: 4,
        created_at: '2019-12-30T21:29:51.243Z',
        updated_at: '2019-12-30T21:29:51.243Z',
      },
      {
        id: 110,
        user_id: 7,
        movie_id: 18,
        rating: 5,
        created_at: '2019-12-31T21:39:21.783Z',
        updated_at: '2019-12-31T21:39:21.783Z',
      }]
      const mockState = {
        user: mockUser,
	      ratings: mockRankings,
	      movies: [{ movie1: 'movieData' }, { movie2: 'movieData2' }],
      };

      const expected = {
        allRatings: mockRankings,
	      user: mockUser.id,
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
