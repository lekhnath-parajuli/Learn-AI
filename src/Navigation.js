import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.stat = false;
    this.tooglenav = this.tooglenav.bind(this);
  }

  //navigation section

  tooglenav() {
    var hideNave = document.querySelector(".hide-nave");
    var hideNav = document.querySelector(".hide-nav");
    var navation = document.querySelector(".navation");
    navation.style.backgroundColor = "black";

    if(this.stat == false) {
      hideNave.style.display = "none";
      navation.style.display = "block";
      this.stat = true;
    } else if(this.stat == true) {
      hideNave.style.display = "flex";
      hideNave.style.alignItems = "center";
      navation.style.display = "none";
      this.stat = false;
    }
  }





  render() {
    return(
    <>
      <nav className="navation">
        <div className="hide-nav" onClick={this.tooglenav}>
            <div className="line"> </div>
            <div className="line"> </div>
            <div className="line"> </div>
         </div>

          <div className="logo"> </div>
            <form action="/search" method="GET">
             <div className="search-box">
                <input type="text"  name="search" title="search" placeholder="Search">
              </input>
          </div>
          </form>

          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/About"> About </Link></li>
            <li><Link to="/Learn"> Learn </Link></li>
            <li className="desktop"><Link to="/Contact"> Contact Us </Link></li>
            <li className="mobile"><Link to="/Contact"> ContactUs </Link></li>
            <li><Link to="/Events"> More  </Link></li>
          </ul>
      </nav>

      <nav className="hide-nave" onClick={this.tooglenav} data-open="0">
         <div className="hide-nav">
           <div className="line"> </div>
           <div className="line"> </div>
           <div className="line"> </div>
         </div>
      </nav>

    </>
    );
  }
}


export default Navigation;


// <li><a href="index.html"> Home </a></li>
// <li><a href="about.html"> About </a></li>
// <li><a href="learn.html"> Learn </a></li>
// <li className="desktop"><a href="contactus.html"> Contact Us </a></li>
// <li className="mobile"><a href="contactus.html"> ContactUs </a></li>
// <li><a href="more.html"> More  </a></li>
