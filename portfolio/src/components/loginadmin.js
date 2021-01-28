import React from "react"
import '../css/loginadmin.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    }
  }

  login = (data) =>{
   axios.post("/Portfolio/ahmed55016312admin/login" , data)
   .then(res => {if (res.status === 200){
    localStorage.setItem('token' , res.data.token)
    this.props.history.push("/admin/dashboard/Pok546jjf748e5f9lp89v78vs23sv25lm2az3d6glp6975d2541c2365dszft8978nuuej56489")
   }
})
.catch(err => this.setState({password :''}))
  }

  handleinputslogin = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      <div className="container">
        <div className="row login-section m-auto col-lg-6 ">
          <div className="name-section ">
          <span>Name</span>
            <input name="name" value={this.state.name} onChange={this.handleinputslogin} />
          </div>
          <div className="email-section">
          <span>email</span>
            <input name="email" value={this.state.email} onChange={this.handleinputslogin} />
          </div>
          <div className="password-section">
            <span>password</span>
            <input name="password" value={this.state.password} onChange={this.handleinputslogin} />
          </div>
          <button onClick={() => this.login(this.state)}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
