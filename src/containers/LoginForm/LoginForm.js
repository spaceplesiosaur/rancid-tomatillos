import React, { Component } from 'react';
import '../App/App.scss';

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '', 
      password: ''
    }
  }

  handleSubmit = e => {
    this.setState({[e.target.name] : e.target.value })
  }

  render() {
    return (
      <section className="loginForm-body">
        <h1 className="loginForm-body-header">Please login to see your personalized movie list!</h1>
        <section className="loginForm-inputSection-email">
          <label className="inputSection-email-label"></label>
          <input type="text" name="email" className="inputSection-email-input"></input>
        </section>
        <section className="loginForm-inputSection-password">
          <label className="inputSection-password-label"></label>
          <input type="text" name="password" className="inputSection-password-input"></input>
        </section>
        <a href='/login' className="loginForm-inputSection-button">Login</a>
      </section>
    )
  }
}
