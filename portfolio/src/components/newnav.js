import React from 'react'
import '../css/newnav.css'
import { Link } from 'react-scroll'
import axios from 'axios'




class Newnav extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
      adresses:[]
    }
  }
  componentDidMount(){
    this.count()
    this.adress()
  }
  count = () =>{
    axios.put('/Portfolio/count').catch(err => console.error(err))
  }

  adress=()=>{
    fetch('https://geolocation-db.com/json/8f12b5f0-2bc2-11eb-9444-076679b7aeb0')
    .then(res => res.json())
    .then(data =>axios.post("/Portfolio/addadress",data).catch(err => console.error(err)))
    .catch(err => console.error(err))
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg bg-light fixed-top pt-0 pb-0">
             <div className="container">
             <a className="navbar-brand" href="/">Portfolio</a>
              <button className="navbar-toggler  custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item trans pr-3">
                    <Link className="nav-link" smooth={true} duration={2000} to={"home-section"}>Home</Link>
                  </li>
                  <li className="nav-item trans pr-3">
                    <Link className="nav-link" smooth={true} duration={2000} to="about-section">About</Link>
                  </li>
                  <li className="nav-item trans pr-3">
                    <Link className="nav-link" smooth={true} duration={2500} to="skills-section">Skills</Link>
                  </li>
                  <li className="nav-item trans pr-3">
                    <Link className="nav-link" smooth={true} duration={2500} to="projects-sections">Projects</Link>
                  </li>
                  <li className="nav-item trans pr-3">
                    <Link className="nav-link" smooth={true} duration={2000} to="tarif-section-scroll">Tarifs</Link>
                  </li>
                  <li className="nav-item trans pr-3">
                    <Link className="nav-link" smooth={true} duration={2500} to="contact-section">Contact</Link>
                  </li>
                </ul>
              </div>
             </div>
            </nav> )
  }
}

export default Newnav;
