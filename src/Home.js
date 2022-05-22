import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homedatas: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/homedata')
          .then(res => {
              this.setState({
                  homedatas: res.data
          })}).catch(err=> {
            console.log(err);
          })
  }

  render() {
    return(
          this.state.homedatas.map(item => {
            return(
              <div className="body-wraper">
                 <div className="introduction">
                  <div className="main-wraper">
                      <h1> {item.title} </h1>
                        <div className="image-wraper"> </div>
                         <div className="info-wraper">
                          <p>
                           {item.information}
                          </p>
                       </div>
                    </div>
                </div>
              </div>
            );
        })
      );
   }
}



export default Home;
