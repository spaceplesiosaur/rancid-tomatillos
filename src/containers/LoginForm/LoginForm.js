import React, { Component } from 'react';
import '../App/App.scss';
import { Redirect } from 'react-router-dom';
import { fetchUser } from '../../util/apiCalls';
import { connect } from 'react-redux';
import { getUser, setError } from '../../actions/index';
import PropTypes from 'prop-types';
import logo from '../../util/images/tomatoe-logo copy.png';
import textLogo from '../../util/images/rancid-tom-white.png';
import { bindActionCreators } from 'redux';

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      isPasswordShown: false,
      loginError: false
    }
  }

  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown})
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value })
  }


  handleSubmit = (e) => {
    const { setError } = this.props;
    const { email, password } = this.state;
    e.preventDefault()
    try{
      fetchUser(email, password)
        .then(user => this.props.getUser(user))
        .then(this.setState({ loggedIn: true }))
    } catch ({ message }) {
    setError(message)
    }
  }

  render() {
      if(this.state.loggedIn){
      return <Redirect to="/" />;
    }
    const { isPasswordShown } = this.state;
    const { errMsg } = this.props;
    return (
      <section className="section-form">
        <div className="section-form__header">
          <img className="logo-text" src={textLogo} />
          <img className="logo-image" alt="tomato logo" src={logo} />
        <div className="user-info">
          <div className="user-info__form">
            <form className="loginForm">
              <h1 className="heading">
                Please login!
              </h1>
                {errMsg && <p className='login-error'>{errMsg}</p> }
              <div className="loginForm__group">
                <input
                  name="email"
                  value={this.state.email}
                  className="loginForm__input"
                  onChange={(e)=> this.handleChange(e)}
                  id="email"
                  placeholder="email"
                  type="text"
                  />
                <label
                  htmlFor="email"
                  className="loginForm__label">email
                </label>
                <div className="loginForm__group">
                  <i
                    className={`fa ${isPasswordShown ? "fa-eye" : "fa-eye-slash"} password-icon`} onClick={this.togglePasswordVisibility}
                    id="pwIconFirstHalf"
                    />
                  <input
                    name="password"
                    value={this.state.password}
                    className="loginForm__input"
                    onChange={(e) => this.handleChange(e)}
                    id="password"
                    placeholder="password"
                    type={(isPasswordShown) ? "text" : "password"}
                  />
                  <label
                    htmlFor="password"
                    className="loginForm__label">password
                  </label>
                  <i
                  className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={this.togglePasswordVisibility}
                  id="pwIconSecondHalf"
                  />
                  <a className="btn btn-grey" href='/login' onClick={(e)=> this.handleSubmit(e)}>Login &rarr;</a>
                </div>
              </div>
            </form>
          </div>
        </div>
       </div>
      </section>

    )
  }
}

export const mapStateToProps = ({ errMsg }) => ({
  errMsg
})

export const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(getUser(user)),
  setError: message => dispatch(setError(message))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


LoginForm.propTypes = {
  isPasswordShown: PropTypes.func,
  getUser: PropTypes.func
}
