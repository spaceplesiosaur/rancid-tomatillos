import React, { Component } from 'react';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const ShowPage = () => {
  return(
    <section className="showPage-container">
      <h1 className="showPage-container-title">Title</h1>
      <p className="showPage-container-release">08/22/20</p>
      <p className="showPage-container-overview">blah blah blah</p>
      <p className="showPage-container-averageRating">average rating: 4</p>
      <MovieRatings />
    </section>
  )
}

export default ShowPage;
