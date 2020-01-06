import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/index'
import { NavLink } from 'react-router-dom';
import logo from '../../util/images/tomatoe-logo copy.png';
import textLogo from '../../util/images/rancid-tom-white.png';

export const Header = ({user, logUserOut}) => {
  const username = user.name;
  return(
    <div className="header-div">
      <img className="header-text-logo" src={textLogo} />
      <img className="logo_image" alt="tomato logo" src={logo} />
      {console.log("USER", user.name)}
     {!username ?
        <NavLink to='/login' className="btn login-btn">Login</NavLink> :
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
