
import React,{Component} from 'react';
import axios from 'axios';
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/gallery')
          .then(res => {
              this.setState({
                  images: res.data
          })}).catch(err=> {
            console.log(err);
      })
  }

  render() {
    return(
      console.log(this.state.images),
      this.state.images.map(item => {
        return(
          <div className="body-wraper">
              <div className="image-container">
                <div className="slider">
                      <div className="images">
                        <div className="name"> {item.name}</div>
                        <img src={item.image}></img>
                      </div>
                </div>
              </div>
            </div>
        );
      })
   );
  }
}


export default Gallery;
