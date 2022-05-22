
import React,{Component} from 'react';
import axios from 'axios';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
       aboutdata: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/aboutdata')
          .then(res => {
              this.setState({
                  aboutdata: res.data
          })}).catch(err=> {
            console.log(err);
          })
  }

  render() {
    return(
      this.state.aboutdata.map(item => {
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


export default About;

//
// <div className="learn-material">
//   <div className="info">
//     <h1> Marketing </h1>
//       <p>
//        Marketing is a way to sugar coat your products to attract more customers. We, humans, are pretty good at sugar coating</p><p className="optional">, but what if an algorithm or a bot is built solely for the purpose of marketing a brand or a company? It would do a pretty awesome job!</p>
//        <br></br>
//        <p>
//        n the early 2000s, if we searched an online store to find a product without knowing it’s exact name, it would become a nightmare to find the product.
//        </p>
//     <a href="https://www.edureka.co/blog/artificial-intelligence-applications/#AI%20in%20Marketing"><div> source </div></a>
//   </div>
//     <div className="image">
//       <img src="images/marketing.jpeg" alt=""></img>
//   </div>
// </div>
//
// <div className="learn-material">
//   <div className="info">
//     <h1> banking </h1>
//       <p>
//        AI in banking is growing faster than you thought! A lot of banks have already adopted AI-based systems to provide customer support, detect anomalies and credit card frauds.</p><p className="optional">An example of this is HDFC Bank.<br></br>
//        Since its launch, Eva has addressed over 3 million customer queries, interacted with over half a million unique users, and held over a million conversations.
//        </p>
//     <a href="https://www.edureka.co/blog/artificial-intelligence-applications/#AI%20in%20Banking"><div> source </div></a>
//   </div>
//     <div className="image">
//       <img src="images/banking.jpeg" alt=""></img>
//     </div>
//  </div>
//
// <div className="learn-material">
//  <div className="info">
//     <h1> Health Care </h1>
//       <p>
//         When it comes to saving our lives, a lot of organizations and medical care centers are relying on AI.</p> <p className="optional">There are many examples of how AI in healthcare has helped patients all over the world. An organization called Cambio Health Care developed a clinical decision support system for stroke prevention that can give the physician a warning when there’s a patient at risk of having a heart stroke.
//       </p>
//       <a href="https://www.edureka.co/blog/artificial-intelligence-applications/#AI%20in%20HealthCare"><div> source </div></a>
//   </div>
//     <div className="image">
//        <img src="images/helthcare.jpg" alt=""></img>
//     </div>
// </div>
//
//   <div className="learn-material">
//     <div className="info">
//         <h1> Gaming </h1>
//         <p>
//           Over the past few years, Artificial Intelligence has become an integral part of the gaming industry.<br></br></p><p className="optional">
//           Shortly after the victory, DeepMind created an advanced version of AlphaGo called AlphaGo Zero which defeated the predecessor in an AI-AI face off. Unlike the original AlphaGo, which DeepMind trained over time by using a large amount of data and supervision, the advanced system, AlphaGo Zero taught itself to master the game.
//         </p>
//         <a href="https://www.edureka.co/blog/artificial-intelligence-applications/#AI%20In%20Gaming"><div> source </div></a>
//     </div>
//     <div className="image">
//       <img src="images/gaming.jpg" alt=""></img>
//   </div>
// </div>
