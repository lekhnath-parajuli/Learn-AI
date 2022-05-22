
import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Hednav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="head">
          <header>
            <ul>
               <li><Link to="/Signin">Sign in</Link></li>
               <li className="left"><Link to="/Developer"> developer </Link></li>
               <li className="left"><a href="/Gallery"> gallery </a></li>
            </ul>
          </header>
        </div>
      </>
    );
  }
}


export default Hednav;
