import React,{Component} from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchresult: []
      }
  }

  componentDidMount() {
      const urlParams = new URLSearchParams(this.props.location.search)
      const key = urlParams.get('search') != null ? urlParams.get('search') : ''
      axios.get(`http://localhost:5000/events?title_like=${key}`)
          .then(res => {
              this.setState({
                  searchresult: res.data
              })

          })
  }

  render() {
    return(
      <div className="body-wraper">
         {this.state.searchresult.map(item => {
           return(
             <div className="event-box">
                 <h1> {item.title} </h1>
                 <div className="h2">
                 <h2> time: {item.time} </h2>
                 <h2 className="discription"> discription: {item.discription} </h2>
                 </div>
                 <p> {item.information} </p>
              </div>
         )}
       )}
      </div>
     );
  }
}


export default Search;
