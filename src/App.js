import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { increment, decrement, reset, login, logout } from './redux/actions/index'
import React from 'react';
class App extends React.Component {
  render() {
    let counter = this.props.counter;
    let auth = this.props.auth;

    return (
      <div className="App">
        <h1>Merhaba</h1>
        <h1>Bu bir Redux uygulamasıdır.</h1>
        <h3>Sayaç</h3>
        <h3>{counter}</h3>
        <button onClick={() => this.props.increment()}>Arttır</button>
        <button onClick={() => this.props.reset()}>Sıfırla</button>
        <button onClick={() => this.props.decrement()}>Azalt</button>
        <h2>Lütfen giriş yapınız</h2>
        <button onClick={() => this.props.login()}>Login</button>
        <button onClick={() => this.props.logout()}>Logout</button>
        {auth ? (<div><p>Hoş geldiniz</p></div>) : ("")}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"}),
    reset: () => dispatch({type: "RESET"}),
    login: () => dispatch({type: "LOG_IN"}),
    logout: () => dispatch({type: "LOG_OUT"}),
  };
}

const mapStateToProps = state => ({
  counter: state.counter,
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
