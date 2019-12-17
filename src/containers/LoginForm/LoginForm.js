import React, { Component } from 'react';
import '../App/App.scss';

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {

    }
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
        <button className="loginForm-inputSection-button">Login</button>
      </section>
    )
  }
}
