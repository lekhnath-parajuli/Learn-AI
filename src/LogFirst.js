
import React,{Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Signin from './Signin';
import Hednav from './Hednav';
import Navigation from './Navigation';

class LogFirst extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <Hednav/>
        <Navigation/>
        <Signin/>
      </BrowserRouter>
    );
  }
}


export default LogFirst;
