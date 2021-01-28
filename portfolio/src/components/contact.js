import React from "react";
import "../css/contact.css";
import axios from "axios"

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      lnameCont: "",
      fnameCont: "",
      emailCont: "",
      subjectCont: "",
      messageCont: "",
      cleared: "cleared",
      sent: "sent",
    };
  }
  clearx = () => {
    this.setState({ cleared: "cleared" });
  };
  sentx = () => {
    this.setState({ sent: "sent" });
  };
  
   validateEmail=(email)=> 
    {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

  sent = (data) => {
    if(this.state.fnameCont==="" || this.state.lnameCont==="" || this.state.emailCont==="" || this.state.subjectCont==="" || this.state.messageCont===""){
      alert("All Inputs are required")
    }
    else if(this.validateEmail(this.state.emailCont)===false){
alert("Something wrong with your email please check again")
    }
    else{
      axios.post("/Portfolio/mail",data)
      .then(res => {if (res.status===200){
       this.setState({
        sent: "nsent",
        lnameCont: "",
        fnameCont: "",
        emailCont: "",
        subjectCont: "",
        messageCont: "",
       });
       setTimeout(() => {
        this.setState({ sent: "sent" });
      }, 1500);
      }})
      .catch(err => console.error(err))
    }
    
  };

  clear = () => {
    this.setState({
      cleared: "ncleared",
      lnameCont: "",
      fnameCont: "",
      emailCont: "",
      subjectCont: "",
      messageCont: "",
    });
    setTimeout(() => {
      this.setState({ cleared: "cleared" });
    }, 1500);
  };

  inHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <div className="row contact-section">
          <div className="contact-content col-xl-7">
            <h2>Contact Me</h2>
            <form onSubmit={() => this.sent(this.state)} className="contact-me">
              <div className="double-inp-contact">
                <input
                  placeholder="First Name"
                  className="form__field"
                  name="fnameCont"
                  value={this.state.fnameCont}
                  onChange={this.inHandle}
                />
                <input
                  placeholder="Last Name"
                  className="form__field"
                  name="lnameCont"
                  value={this.state.lnameCont}
                  onChange={this.inHandle}
                />
              </div>
              <input
                placeholder="Email"
                className="form__field"
                name="emailCont"
                value={this.state.emailCont}
                onChange={this.inHandle}
                type="email"
              />
              <input
                placeholder="Subject"
                className="form__field"
                name="subjectCont"
                value={this.state.subjectCont}
                onChange={this.inHandle}
              />
              <textarea
                placeholder="Message"
                className="form__field"
                name="messageCont"
                value={this.state.messageCont}
                onChange={this.inHandle}
              />
              <div className="btns-form">
                <button onClick={() =>this.sent(this.state)} className="btn-form-send btn-form">
                  Send
                </button>
                <button
                  onClick={this.clear}
                  className="btn-form-clear btn-form"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={this.state.cleared}>
          <p>Form Cleared</p>
          <button onClick={this.clearx}>
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <div className={this.state.sent}>
          <p>Message Sent With Success !</p>
          <button onClick={this.sentx}>
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <div className="row">
        <div className="social-media col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="social-media-btns col-xl-7">
            <a href="https://www.facebook.com/profile.php?id=100014834478514" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/ahmed_kanounn/?hl=fr" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/AhmedKn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://discord.com/channels/699412299730911283/700052343315628053" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
            <a href="https://www.linkedin.com/in/kanoun-ahmed/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Contact;