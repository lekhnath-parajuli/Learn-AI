
import React,{Component} from 'react';
import ReactDome from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Contact from './Contact';
import Hednav from './Hednav';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Learn from './Learn';
import Events from './Events';
import Gallery from './Gallery';
import Developer from './Developer';
import Signin from './Signin';
import Search from './Search';
import LogFirst from './LogFirst';
import axios from 'axios';

class Renderor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
     var puptext = document.querySelector(".puptext");
      axios.get('http://localhost:5000/logininfos')
          .then(res => {
              this.setState({
                  users: res.data
              })}).catch(error => {
                  console.log(error)
             })
     }

  render() {
    return(
      <>
       {this.state.users.map(items => {
         return(
            items.state != true ? <LogFirst/> :
            <BrowserRouter>
            <Hednav/>
            <Navigation/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Learn" component={Learn}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Events" component={Events}/>
                <Route path="/Developer" component={Developer}/>
                <Route path="/Gallery" component={Gallery}/>
                <Route path="/Signin" component={Signin}/>
                <Route path="/Search" component={Search}/>
              </Switch>
            </BrowserRouter>
         )
       })}

      </>
    );
  }
}


export default Renderor;
