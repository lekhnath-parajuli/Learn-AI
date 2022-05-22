
import React,{Component} from 'react';

class Developer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="body-wraper">
        <div className="developer-wraper">
          <div className="developer">
            <div className="name">
              <a href="#">Name: lekhnath parajuli</a>
               <div className="developer-info">
                    <div className="developer-image">
                      <img src="images/developer.jpeg" alt=""></img>
                    </div>
                    <div className="developer-contact">
                           <a href="https://www.facebook.com/uttam.parajuli.904" target="facebook.com"><img src="images/facebook.png" alt=""></img></a>
                    </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Developer;
