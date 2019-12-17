import React, { Component } from 'react';
import '../App/App.scss';
// import { Redirect } from 'react-router-dom';

export default class LoginForm extends Component {
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

    // if(this.state.loggedIn === true){
    //   return <Redirect to="/movies" />;
    // }

  render() {
    const { isPasswordShown } = this.state;
    return (
      <section className="section-form">
        <div className="user-info">
          <div className="user-info__form">
            <form className="loginForm">
              <h1 className="heading">
                Please login to see your personalized movie list!
              </h1>
              <div className="loginForm__group">
                <input 
                  name="email"
                  value={this.state.email}
                  className="loginForm__input"
                  onChange={(e)=> this.handleChange(e)}
                  id="email"
                  placeholder="email"
                  type="email"
                  />
                <label 
                  for="email"
                  className="loginForm__label">email
                </label>
                <div className="loginForm__group">
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
                  <i 
                  className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={this.togglePasswordVisibility} />
                  <a className="btn btn-grey" href='/login'>Login &rarr;</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    )
  }
}

