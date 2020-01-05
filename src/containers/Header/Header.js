import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/index'
import { NavLink } from 'react-router-dom';

export const Header = ({user, logUserOut}) => {
  const username = user.name;
  return(
    <div className="header-div">
      <h1 className="header-app-name">Rancid Tomatillos</h1>
      {console.log("USER", user.name)}
     {!user.name ?
        <NavLink to='/login' className="login-btn">Login</NavLink> :
        <>
        <NavLink to='/' className="btn logout" onClick={logUserOut}>Logout</NavLink>
        <h2 className="header-username">{`Hello, ${username}!`}</h2>
        </> }
    </div>
  )

}

export const mapStateToProps = state => ({
    user: state.user
  })

export const mapDispatchToProps = dispatch => ({
    logUserOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
