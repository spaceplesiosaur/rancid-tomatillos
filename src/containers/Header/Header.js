import React from 'react'; 
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Home = ({user}) => {
  return (
    <div>
      {console.log("user", user.user)}
     {!user.user ? 
        <NavLink to='/login' className="btn login">Login</NavLink> :
        <NavLink to='/profile' className="btn logout">Logout</NavLink> }
    </div>
  )
}

export const mapStateToProps = state => ({
    user: state.user
  })


export default connect(mapStateToProps)(Home)