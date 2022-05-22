//run json server
// code ** json-server --watch name.json --port=5000
//install react router
// npm install axios react-router-dom --save
import React from 'react';
import ReactDome from 'react-dom';
import Renderor from './Renderor';

function App() {
  return(
      <Renderor/>
  );
}

export default App;


// import React from 'react';
// import ReactDome from 'react-dom';
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
// import Contact from './Contact';
// import Hednav from './Hednav';
// import Navigation from './Navigation';
// import Home from './Home';
// import About from './About';
// import Learn from './Learn';
// import Events from './Events';
// import Gallery from './Gallery';
// import Developer from './Developer';
// import Signin from './Signin';
// import Search from './Search';




// <BrowserRouter>
// <Hednav/>
// <Navigation/>
//   <Switch>
//     <Route exact path="/" component={Home}/>
//     <Route path="/Learn" component={Learn}/>
//     <Route path="/About" component={About}/>
//     <Route path="/Contact" component={Contact}/>
//     <Route path="/Events" component={Events}/>
//     <Route path="/Developer" component={Developer}/>
//     <Route path="/Gallery" component={Gallery}/>
//     <Route path="/Signin" component={Signin}/>
//     <Route path="/Search" component={Search}/>
//   </Switch>
// </BrowserRouter>



// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
