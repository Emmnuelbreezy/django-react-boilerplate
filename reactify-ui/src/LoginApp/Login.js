import React, { Component } from 'react';
//import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import logo from '../logo.svg';
import './Login.css';


class Login extends Component {
  render() {
    return (
    	<div className="Login">
            <h2>LOGIN PAGE</h2>
    		<header className="Login-header">
    		  <img src={logo} className="Login-logo" alt="logo" />
    		  <p>
    		   Edit <code> src/App2/Login.js</code> and save to reload.
    		   </p>
    		</header>
    	</div>
          
    );
  }
}

export default Login;
