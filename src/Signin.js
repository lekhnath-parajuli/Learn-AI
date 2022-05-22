import axios from 'axios';
import React,{Component} from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.hidelog = this.hidelog.bind(this);
    this.hidesign = this.hidesign.bind(this);
    this.uploadlogdetail = this.uploadlogdetail.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      users: [],
      logeduser: {
        name: '',
        emali: '',
        password: ''
      },
      logstate: 'please log in first'
    }
  }

  hidesign() {

    let login = document.querySelector(".login-page");
    let signin = document.querySelector(".signin-page");
    let sinButton = document.querySelector("#sign-option");
    let logButton = document.querySelector("#log-option");

    console.log("clicked");
    login.style.display = "block";
    sinButton.style.color = "rgb(100,100,100)";
    logButton.style.color = "red";
    signin.style.display = "none";
  }

  hidelog() {

    let login = document.querySelector(".login-page");
    let signin = document.querySelector(".signin-page");
    let sinButton = document.querySelector("#sign-option");
    let logButton = document.querySelector("#log-option");

    console.log("clicked");
    login.style.display = "none";
    signin.style.display = "block";
    sinButton.style.color = "red";
    logButton.style.color = "rgb(100,100,100)";
  }

  uploadlogdetail(events) {
    var username = document.querySelector(".signin-page .username");
    var email = document.querySelector(".signin-page .email");
    var password = document.querySelector(".signin-page .password");

      events.preventDefault();
      axios.delete('http://localhost:5000/logininfos/1')
      .then(res => {
        console.log("deleted");
      })
      axios.post('http://localhost:5000/logininfos', {
          state: true,
          logstate: "logged in",
          name: username.value,
          email: email.value,
          password: password.value
      })
      events.target.reset();
  }

  componentDidMount() {
     var puptext = document.querySelector(".puptext");
      axios.get('http://localhost:5000/logininfos')
          .then(res => {
              this.setState({
                  users: res.data
              })}).catch(error => {
                  console.log(error)
             })
     }

authenticate(events) {
  var email = document.querySelector(".login-page .email");
  var password = document.querySelector(".login-page .password");
  var state = document.querySelector(".login-page .password");
  console.log(email);
  console.log(password);
  events.preventDefault();
  this.state.users.map(item => {
     if((item.email == email.value) && (item.password == password.value)) {
       axios.patch('http://localhost:5000/logininfos/1', {
           state: true,
           logstate: "logged in",
       })
      } else {
        console.log("please ReCheck your email and password");
      }
     })
     events.target.reset();
  }

  logout() {
     alert('are youe sure you want to log out');
     axios.patch('http://localhost:5000/logininfos/1', {
         state: false,
         logstate: "please log in first",
     })
  }

  render() {
    return(
      <div className="body-wraper">
          <div className="contact-wraper">

            <div className="pop-up"> <h3 className="puptext">
            {this.state.users.map(item => {
              return(
                   item.logstate
              )
           })}
            </h3>
            <div className="pupupcontainer"> <h1 onClick={this.logout}> log out </h1> </div>
            </div>

            <div className="background">
            <div className="content-container" name="frame">

              <form className="login-page" onSubmit={this.authenticate} method="post" data-open="0">
                 <label htmlFor=""><h1>login</h1></label>
                  <label htmlFor="E-mail"><h2>email</h2></label>
                 <input className="email" type="email" name="E-mail"  placeholder="email" required></input>

                <label htmlFor="password"><h2>password</h2></label>
                 <input className="password" type="password" name="password"  placeholder="password" required></input>

                 <input id="submit" type="submit" name="submit" value="log in"></input>
              </form>

                <form className="signin-page" onSubmit={this.uploadlogdetail} method="post" data-open="1" >
                   <label htmlFor=""><h1>sign up</h1></label>

                   <label htmlFor="username"><h2>username</h2></label>
                  <input className="username" type="text" required   placeholder="username"></input>


                    <label htmlFor="E-mail"><h2>email</h2></label>
                   <input className="email" type="email" name="E-mail" required  placeholder="email"></input>

                  <label htmlFor="password"><h2>password</h2></label>
                   <input className="password" type="password"  required  placeholder="password"></input>

                   <input id="submit" type="submit" name="create" value="sign up"></input>
                </form>

              </div>
              <a onClick={this.hidelog} className="contact-option" id="sign-option"  title="sign in">Sign up</a>
              <a onClick={this.hidesign} className="contact-option" id="log-option"  title="log in"> login</a>
            </div>
          </div>
       </div>
    );
  }
}

export default Signin;
