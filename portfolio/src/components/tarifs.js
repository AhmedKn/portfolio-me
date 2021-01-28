import React from 'react';
import '../css/tarifs.css'
import Modal from 'react-modal'
import axios from 'axios';

class Tarifs extends React.Component{
constructor(){
    super();
    this.state = {
        opened : false,
        staticOrder : "Static Web-Site",
        staticOrderPrice : "300.TND",
        uiOrder : "UI/UX DESIGN",
        uiOrderPrice : "200.TND",
        appOrder : "Web Application",
        appOrderPrice : "2500.TND",
        presOrder : "E-Commerce Website",
        presOrderPrice : "3200.TND",
        staticTech:"HTML5 , CSS3 , Javascript , Bootstrap",
        uiuxTech : "AdobeXd , Figma , Bootstrap",
        presTech : "Prestashop , cPanel , PHP",
        name:"",
        email:"",
        message:"",
        webOrder:"",
        PriceOrder:"",
        tech:"",
        show:"showordermessagesent"
    }
}

componentDidMount(){
    window.addEventListener("scroll" , e =>{
    
        if (window.scrollY >= 1150){
                //front-animation
         document.querySelector(".html").style.width = "225px"
         document.querySelector(".css").style.width ="195px"
         document.querySelector(".react").style.width = "205px"
         document.querySelector(".ecma").style.width = "180px"
         document.querySelector(".jsdom").style.width = "200px"
         document.querySelector(".redux").style.width = "165px"
         document.querySelector(".bootstrap").style.width = "150px"
         document.querySelector(".prestashop").style.width = "195px"
               //back-animation
         document.querySelector('.nodejs').style.width = "140px"
         document.querySelector('.rest').style.width = "200px"
         document.querySelector('.mongo').style.width = "190px"
         document.querySelector('.express').style.width = "160px"
         //prog-animation
         document.querySelector('.js').style.width = "190px"
         document.querySelector('.python').style.width = "150px"
         document.querySelector('.C').style.width = "175px"
         document.querySelector('.Cdplus').style.width = "140px"       
         }
        else {
            //front-animation
         document.querySelector(".html").style.width = "114px"
         document.querySelector(".css").style.width ="114px"
         document.querySelector(".react").style.width = "114px"
         document.querySelector(".ecma").style.width = "114px"
         document.querySelector(".jsdom").style.width = "114px"
         document.querySelector(".redux").style.width = "114px"
         document.querySelector(".bootstrap").style.width = "114px"
         document.querySelector(".prestashop").style.width = "114px"
            //back-animation
         document.querySelector('.nodejs').style.width = "114px"
         document.querySelector('.rest').style.width = "114px"
         document.querySelector('.mongo').style.width = "114px"
         document.querySelector('.express').style.width = "114px"
         //prog-animation
         document.querySelector('.js').style.width = "114px"
         document.querySelector('.python').style.width = "114px"
         document.querySelector('.C').style.width = "114px"
         document.querySelector('.Cdplus').style.width = "114px"  
        }
     })
     
}
componentWillUnmount(){
    window.removeEventListener("scroll" , e =>{
    
        if (window.scrollY >= 1150){
                //front-animation
         document.querySelector(".html").style.width = "225px"
         document.querySelector(".css").style.width ="195px"
         document.querySelector(".react").style.width = "205px"
         document.querySelector(".ecma").style.width = "180px"
         document.querySelector(".jsdom").style.width = "200px"
         document.querySelector(".redux").style.width = "165px"
         document.querySelector(".bootstrap").style.width = "150px"
         document.querySelector(".prestashop").style.width = "195px"
               //back-animation
         document.querySelector('.nodejs').style.width = "140px"
         document.querySelector('.rest').style.width = "200px"
         document.querySelector('.mongo').style.width = "190px"
         document.querySelector('.express').style.width = "160px"
         //prog-animation
         document.querySelector('.js').style.width = "190px"
         document.querySelector('.python').style.width = "150px"
         document.querySelector('.C').style.width = "175px"
         document.querySelector('.Cdplus').style.width = "140px"       
         }
        else {
            //front-animation
         document.querySelector(".html").style.width = "114px"
         document.querySelector(".css").style.width ="114px"
         document.querySelector(".react").style.width = "114px"
         document.querySelector(".ecma").style.width = "114px"
         document.querySelector(".jsdom").style.width = "114px"
         document.querySelector(".redux").style.width = "114px"
         document.querySelector(".bootstrap").style.width = "114px"
         document.querySelector(".prestashop").style.width = "114px"
            //back-animation
         document.querySelector('.nodejs').style.width = "114px"
         document.querySelector('.rest').style.width = "114px"
         document.querySelector('.mongo').style.width = "114px"
         document.querySelector('.express').style.width = "114px"
         //prog-animation
         document.querySelector('.js').style.width = "114px"
         document.querySelector('.python').style.width = "114px"
         document.querySelector('.C').style.width = "114px"
         document.querySelector('.Cdplus').style.width = "114px"  
        }
     })
     
}
validateEmail=(email)=> 
    {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

SendMsg = (data) =>{
    if(this.state.name==="" || this.state.email==="" || this.state.message===""){
        alert("All inputs are required")
    }
    else if(this.validateEmail(this.state.email)===false){
      alert("Something wrong with your email please check again")
    }
    else{
        axios.post("/Portfolio/buyweb",data)
        .then(res => {if (res.status===200){
            this.setState({
                name:"",
                email:"",
                message:"",
                show:"showordermessagenotsent"
            })
            setTimeout(() => {
                this.setState({ show:"showordermessagesent",opened : false,
        });
              }, 1500);
        }})
        .catch(err => console.error(err))
    }

}

handlechange = (event) => {
    this.setState({[event.target.name] : event.target.value})
 }

customStyles = {
    content : {
      top                   : '53%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '370px'
    }
  };

render(){
    return (
        <div>
        <div id="tarif-section-scroll" className="container-fluid tarif-section">
           <div className="row tarifs-section">
               <div className="tarfis-first-content content col-xl-3 col-l-4 col-md-5 col-sm-7 col-8">
                <h2>Static Web-Site</h2>
                <span>
                300.TND             
                </span>
                <ul className="tarifs-static-content">
                    <li><i className="far fa-check-circle"></i> One Page Navigation</li>
                    <li><i className="far fa-check-circle"></i> HTML5</li>
                    <li><i className="far fa-check-circle"></i> CSS3</li>
                    <li><i className="far fa-check-circle"></i> JavaScript</li>
                    <li><i className="far fa-check-circle"></i> Bootstrap</li>
                    <li><i className="far fa-check-circle"></i> Hosted on Heroku (free)</li>
                    <li><i className="far fa-check-circle"></i> Add Another Page (50.TND)</li>
                    <li><i className="far fa-check-circle"></i> custom Domian Name</li>
                </ul>
                <button onClick={() => this.setState({tech : this.state.staticTech, webOrder : this.state.staticOrder , PriceOrder : this.state.staticOrderPrice , opened : true})}><i className="fas fa-shopping-cart"></i>  Order Now</button>
               </div>
               <div className="tarfis-second-content content col-xl-3 col-l-4 col-md-5 col-sm-7 col-8">
               <h2>UI/UX Design</h2>
               <span>
                200.TND
                   </span>
                <ul className="tarifs-static-content">
                    <li><i className="far fa-check-circle"></i> One Page Navigation</li>
                    <li><i className="far fa-check-circle"></i> JavaScript</li>
                    <li><i className="far fa-check-circle"></i> 2 Color Design</li>
                    <li><i className="far fa-check-circle"></i> Bootstrap</li>
                    <li><i className="far fa-check-circle"></i> Add Another Page (40.TND)</li>
                    <li><i className="far fa-check-circle"></i> Source Code Only</li>
                </ul>
                 <button onClick={() => this.setState({tech : this.state.uiuxTech, webOrder : this.state.uiOrder , PriceOrder : this.state.uiOrderPrice , opened : true})}><i className="fas fa-shopping-cart"></i>  Order Now</button>
               </div>
               </div>
               </div>
               <div className="container-fluid">
                 <div className="row tarifs-second-section">
                 <div className="tarfis-third-content content col-xl-3 col-l-4 col-md-5 col-sm-7 col-8">
                   <h2>Web Application</h2>
                   <span>
                       2500.TND
                       </span>
                <ul className="tarifs-static-content">
                    <li><i className="far fa-check-circle"></i> React</li>
                    <li><i className="far fa-check-circle"></i> Express</li>
                    <li><i className="far fa-check-circle"></i> MondoDB</li>
                    <li><i className="far fa-check-circle"></i> NodeJS</li>
                    <li><i className="far fa-check-circle"></i> Bootstrap</li>
                    <li><i className="far fa-check-circle"></i> Hosted on Heroku (free)</li>
                    <li><i className="far fa-check-circle"></i> Contain 7-Pages</li>
                    <li><i className="far fa-check-circle"></i> Custom Domian Name</li>
                </ul>
                <button><i className="fas fa-shopping-cart"></i>  Not Available</button>
               </div>
               <div className="tarfis-fourth-content content col-xl-3 col-l-4 col-md-5 col-sm-7 col-8">
                   <h2>E-Commerce</h2>
                   <span>
                       3200.TND
                       </span>
                <ul className="tarifs-static-content">
                    <li><i className="far fa-check-circle"></i> Prestashop 1.7</li>
                    <li><i className="far fa-check-circle"></i> Admin Dashboard</li>
                    <li><i className="far fa-check-circle"></i> +100 Pages</li>
                    <li><i className="far fa-check-circle"></i> Themes</li>
                    <li><i className="far fa-check-circle"></i> Responsive</li>
                    <li><i className="far fa-check-circle"></i> Host</li>
                    <li><i className="far fa-check-circle"></i> Custom Domain Name</li>
                    <li><i className="far fa-check-circle"></i> Consultation (70TND/hour)</li>
                    
                </ul>
                <button onClick={() => this.setState({tech : this.state.presTech, webOrder : this.state.presOrder , PriceOrder : this.state.presOrderPrice , opened : true})}><i className="fas fa-shopping-cart"></i>  Order Now</button>
               </div>
                 </div>
               </div>
               <div className="modal-section">
               <Modal
               className="modal-styles"
               style = {this.customStyles}
               isOpen={this.state.opened}>
                   <div className="Modal">
                       <h2><i className="fas fa-shopping-cart"></i></h2>
                   <div className="order-content">
                       <span><i>Web-Type:</i> {this.state.webOrder} </span>
                       <span><i>Price: </i> {this.state.PriceOrder}</span>
                       <span><i>Technologies: </i>{this.state.tech}</span>
                   </div>
                   <form className="input-contents">
                      <input className="namebuysection" name="name" placeholder="Name" value={this.state.name} onChange={this.handlechange}  />
                      <input className="emailbuysection" name="email" placeholder="Email" value={this.state.email} onChange={this.handlechange}  />
                      <textarea className="messagebuysection" name="message" placeholder="Leave Message Here..." value={this.state.message} onChange={this.handlechange}></textarea>
                   </form>
                   <div className="order-btns">
                       <button onClick={()=>this.SendMsg(this.state)}>Send</button>
                       <button onClick={() => this.setState({opened : false})}>Close</button>
                   </div>
                   <p className={`sentBuyOrder ${this.state.show}`}>Sent!</p>
                   </div>
            </Modal>
               </div>
           </div>
        )
}
}
export default Tarifs;