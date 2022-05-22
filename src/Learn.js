import React,{Component} from 'react';
import axios from 'axios';

class Hednav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learndata: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/learndata')
          .then(res => {
              this.setState({
                  learndata: res.data
          })}).catch(err=> {
            console.log(err);
          })
  }

  render() {
    return(
      this.state.learndata.map(item => {
        return(
          <div className="body-wraper">
            <div className="content-wraper">

              <div className="learn-material">
                <div className="info">
                  <h1> {item.title} </h1>
                    <p>
                    {item.discription}</p>
                    <p className="optional"> {item.optional}
                    </p>
                    <a href={item.links} target="_blank">
                 <div> source </div></a>
               </div>
                <div className="image">
                  <img src={item.image} alt=""></img>
                </div>
              </div>
          </div>
        </div>
        );
      })
    );
  }
}


export default Hednav;
