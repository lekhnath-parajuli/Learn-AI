import React,{Component} from 'react';
import Hednav from './Hednav';
import Navigation from './Navigation';
import axios from 'axios';

class Contact extends Component {
   constructor(props) {
     super(props);
     this.displayText = this.displayText.bind(this);
     this.uploadComment = this.uploadComment.bind(this);
     this.state = {
       comments: []
     }
     console.log("running");
   }

  displayText(event) {
     // live displaying text
     var typing = document.querySelector(".textarea textarea");
     var liveText = document.querySelector(".live-typing p");
     liveText.innerHTML = event.target.value;
   }

   uploadComment(events) {
     var formDatas = document.querySelector(".comment-wraper");
     var username = document.querySelector(".comment-wraper #name");
     var email = document.querySelector(".comment-wraper #email");
     var feedback = document.querySelector(".comment-wraper #feedback");
     var liveText = document.querySelector(".live-typing p");
     liveText.innerHTML = "";

   events.preventDefault();
       axios.post('http://localhost:5000/commentpost', {
           name: username.value,
           email: email.value,
           feedback: feedback.value
       }).then(res => {
           this.setState({ success: "comment is added successfully" });
       })
       events.target.reset();
   }

   componentDidMount() {
       axios.get('http://localhost:5000/commentpost')
           .then(res => {
               this.setState({
                   comments: res.data
               })}).catch(error => {
                   console.log(error)
              })
      }

   render() {
     return(
       <>
       <div className="body-wraper">
           <div className="social-media">
            <div className="media-container">

              <a href="https://www.facebook.com/uttam.parajuli.904" title="facebook" target="_blank">
                 <img src="images/facebook.png" alt=""></img>
              </a>

              <a href="https://www.instagram.com/uttam__parajuli/" title="instagram" target="_blank">
                 <img src="images/instagram.png" alt=""></img>
              </a>

              <a href="https://twitter.com/?lang=en" title="twitter" target="_blank">
                 <img src="images/twitter.png" alt=""></img>
              </a>

              <a href="https://web.whatsapp.com/" title="whatsapp" target="_blank">
                 <img src="images/whatsapp.png" alt=""></img>
              </a>

              <a href="https://www.youtube.com/user/shiffman" title="youtube" target="_blank">
                 <img src="images/youtube.png" alt=""></img>
              </a>

            </div>
           </div>
           <div className="comment-section">
              <div className="live-typing">
                 <p></p>
              </div>
              <form className="comment-wraper" onSubmit={this.uploadComment} method="post">
                <input className="comment-input" id="name" type="name" placeholder="Full Name" required>
                </input>
                <input className="comment-input" type="email" id="email" placeholder="E-mail" required >
                </input>
                <div className="textarea">
                  <textarea onInput={this.displayText} required className="comment-text" id="feedback" placeholder="comment..."></textarea>
                  <input className="comment-submit" type="submit" value="comment"></input>
              </div>
           </form>
              <div className="comments">
                 <div className="title"> feedbacks </div>
                 <p className="caption">We all need people who will give us feedback. That’s how we improve.</p>
                 {this.state.comments.map(item => {
                   return(

                     <div className="feedback-box" >
                     <div className="comment-image"></div>
                       <div className="user-info">
                       <h3 className="name">name: {item.name} </h3><br/>
                       <h3 className="email">email: {item.email} </h3><br/>
                       </div>
                       <div className="user-comment">
                        <h4> feedback: </h4><br/>
                        <p>{item.feedback}</p>
                       </div>
                      </div>
                 );
               })}
              </div>
           </div>
         </div>
       </>
    );
   }
}

export default Contact;
