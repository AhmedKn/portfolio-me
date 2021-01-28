import React from "react";
import "../css/footer.css";
import { Link } from 'react-scroll'

const Footer = () => {
    var date = new Date().getFullYear();
  return (
  <div className="container-fluid footer-section">
      <div className="row footer-content">
          <div className="topper-footer">
            <div className="left-side-tfooter col-xl-5 col-lg-7 col-md-7">
              <div>
              <h2>Portfolio</h2>
              <h3>Ahmed</h3>
              </div>
              <div className="accounts-footer-left-side">
              <h4>Accounts</h4>
              <p>Email : ahmedkanoun09@gmail.com</p>
              <p>Number: (+216) 55 016 312</p>
              <p>FaceBook : <a href="https://www.facebook.com/profile.php?id=100014834478514" target="_blank" rel="noopener noreferrer">AhmedKn</a></p>
              <p>Instagram <a href ="https://www.instagram.com/ahmed_kanounn/?hl=fr" target="_blank" rel="noopener noreferrer">ahmed_kanounn</a></p>
              <p>GitHub <a href ="https://github.com/AhmedKn" target="_blank" rel="noopener noreferrer">AhmedKn</a></p>
              <p>Discord <a href ="https://discord.com/channels/699412299730911283/700052343315628053" target="_blank" rel="noopener noreferrer">Immortal_X</a></p>
              <p>Linked-In <a href ="https://www.linkedin.com/in/kanoun-ahmed/" target="_blank" rel="noopener noreferrer">ahmed kanoun</a></p>
              </div>
            </div>
            <div className="bar-sided-footer"></div>

            <div className="right-side-tfooter col-xl-3 col-lg-3 col-md-3">
                <h4>Navigate</h4>
            <ul>
       <li><Link smooth={true} duration={2000} to={"home-section"}>Home</Link></li>
       <li><Link smooth={true} duration={2000} to="about-section">About</Link></li>
       <li><Link smooth={true} duration={2500} to="skills-section">Skills</Link></li>
       <li><Link smooth={true} duration={2500} to="projects-sections">Projects</Link></li>
       <li><Link smooth={true} duration={2000} to="tarif-section-scroll">Tarifs</Link></li>
       <li><Link smooth={true} duration={2500} to="contact-section">Contact</Link></li>
     </ul>
            </div>
          </div>
          <div className="lower-footer col-md-12 col-sm-12 col-12">
  <span>Copyright © {date} Portfolio.All Rights Reserved</span>
          </div>
      </div>
  </div>);
};

export default Footer;
