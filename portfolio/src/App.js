import React from 'react';
//components
import About from './components/about'
import Title from './components/title'
import Skills from './components/skills'
import Tarifs from './components/tarifs'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Newnav from './components/newnav'
//end components
import Particles from 'react-particles-js';
import './css/app.css'



export default function App(){
 return (
  <div>
      <div className="container-fluid">
          <div className="row">
          <div className="hello col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
      <Particles
        width="1800px"
        params={{
            "particles": {
                "number": {
                    "value": 200
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }}}
      />
      </div>
          </div>
      </div>
      <Newnav />
      <Title />
      <About />
      <Skills />
      <Projects />
      <Tarifs />
      <Contact />
      <Footer />
  </div>
 )
}