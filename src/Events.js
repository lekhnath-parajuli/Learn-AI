
import React,{Component} from 'react';
import axios from 'axios';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: [],
        events: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/eventhead')
          .then(res => {
              this.setState({
                  heading: res.data
          })}).catch(err=> {
            console.log(err);
          })
          axios.get('http://localhost:5000/events')
              .then(res => {
                  this.setState({
                      events: res.data
              })}).catch(err=> {
                console.log(err);
              })
  }


  render() {
    return(
      <div className="body-wraper">
      {this.state.heading.map(item => {
        return(
         <div className="eventdiscription">
             <h1> {item.title} </h1>
            <p> {item.discription} </p>
         </div>
        );
      })}
      {this.state.events.map(item => {
        return(
          <div className="event-box">
              <h1> {item.title} </h1>
              <div className="h2">
              <h2> time: {item.time} </h2>
              <h2 className="discription"> discription: {item.discription} </h2>
              </div>
              <p> {item.information} </p>
           </div>
        );
      })}
            <a className="source" href="https://superangels.club/the-best-ai-events-to-attend-in-2019/"><div> source </div></a>
            </div>
    )
  }
}

export default Events;
