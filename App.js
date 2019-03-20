import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {InputField} from './Components.js';
import  {Button} from './Components.js';


import {
  BrowserRouter 
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.SignUp = this.SignUp.bind(this);
  }
  render() {
    return (
      <BrowserRouter  basename="react-bustracker">
        <div className="App">
        <InputField iType='text' hint='Username'/><br />
        <InputField iType='password' hint='Password' /><br />
        <Button buttonText='Login' click='#' />
        <Button buttonText='Sign Up' click='SignUp'/>
        </div>
      </BrowserRouter>
    );
  }
  SignUp()
  {
    ReactDOM.render('SignUp',document.getElementById('root'));
  }

}


export default App;
ReactDOM.render('App',document.getElementById('root'));
