import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Login from './LoginApp/Login';
// import registerServiceWorker from './registerServiceWorker';

let myComponent =  document.getElementById('reactify-app')
if (myComponent !== null){
    ReactDOM.render(<App />,myComponent);
}

let myLogin =  document.getElementById('reactify-login')
if (myLogin !== null){
    ReactDOM.render(<Login />,myLogin);
}