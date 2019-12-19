import React, { Component } from 'react';
import '../App/App.scss';
import { Redirect } from 'react-router-dom';
import { fetchUser } from '../../util/apiCalls';
import { connect } from 'react-redux';
import { getUser } from '../../actions/index'


export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '', 
      loggedIn: false,
      isPasswordShown: false
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
    const { email, password } = this.state
    e.preventDefault()
    fetchUser(email, password)
    .then(user => this.props.getUser(user))
  }
    // if(this.state.loggedIn === true){
    //   return <Redirect to="/movies" />;
    // }

  render() {
    const { isPasswordShown } = this.state;
    return (
      <section className="section-form">
        <div className="section-form__header">
        <div className="user-info">
          <div className="user-info__form">
            <form className="loginForm">
              <h1 className="heading">
                Please login!
              </h1>
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
                  for="email"
                  className="loginForm__label">email
                </label>
                <div className="loginForm__group">
                  <i
                    className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={this.togglePasswordVisibility} />
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
                    for="password"
                    className="loginForm__label">password
                  </label>
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

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(getUser(user))
})

export default connect(null, mapDispatchToProps)(LoginForm)

