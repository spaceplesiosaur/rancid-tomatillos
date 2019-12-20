import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Home = ({user}) => {
  const username = user.name;
  return(
    <div className="header-div">
      {console.log("USER", user.name)}
     {!user.name ?
        <NavLink to='/login' className="login-btn">Login</NavLink> :
        <div>
        <NavLink to='/' className="btn logout">Logout</NavLink>
        <h2>{`Hello, ${username}!`}</h2>
        </div> }
    </div>
  )

}

export const mapStateToProps = state => ({
    user: state.user
  })


export default connect(mapStateToProps)(Home)
