import React from 'react';
import '../App/App.scss';

const UserProfile = () => {
  return (
    <section className="userProfile-container">
      <h2 className="userProfile-container-greeting">Hello, Name!</h2>
      <button className="userProfile-container-btn" aria-label="user logout">Logout</button>
    </section>
  )
}

export default UserProfile;
