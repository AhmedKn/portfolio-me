import React from 'react'
import '../css/about.css'
import pdp from '../images/pdp.jpg'


class About extends React.Component{
  componentDidMount(){
    window.addEventListener("scroll" , e =>{
      const ab = document.querySelector(".about-section")

  ab.addEventListener("mouseenter",event =>{
      ab.addEventListener("mousemove" , (event) =>{
          const aboutTitle = document.querySelector(".about-section-des h2")
          const aboutAvatar = document.querySelector(".avatar-about")
          const aboutText = document.querySelector(".about-text-content")
      
          let xAxis = (window.innerWidth / 2 - event.pageX) / 20;
          let yAxis = (window.innerHeight / 2 - event.pageY) / 20;
              ab.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
              aboutTitle.style.transform = "translateZ(70px)"
              aboutAvatar.style.transform = "translateZ(70px)"
              aboutText.style.transform = "translateZ(40px)"
          })
          ab.addEventListener("mouseleave" , event =>{
              ab.style.transform = `rotateY(0deg) rotateX(0deg)`
          })
  })

  })
  }

  componentWillUnmount(){
    window.removeEventListener("scroll" , e =>{
      const ab = document.querySelector(".about-section")
  ab.removeEventListener("mouseenter",event =>{
      ab.removeEventListener("mousemove" , (event) =>{
          const aboutTitle = document.querySelector(".about-section-des h2")
          const aboutAvatar = document.querySelector(".avatar-about")
          const aboutText = document.querySelector(".about-text-content")
      
          let xAxis = (window.innerWidth / 2 - event.pageX) / 20;
          let yAxis = (window.innerHeight / 2 - event.pageY) / 20;
              ab.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
              aboutTitle.style.transform = "translateZ(70px)"
              aboutAvatar.style.transform = "translateZ(70px)"
              aboutText.style.transform = "translateZ(40px)"
          })
          ab.removeEventListener("mouseleave" , event =>{
              ab.style.transform = `rotateY(0deg) rotateX(0deg)`
          })
  })

  })
  }
    render(){
      return(
        <div className="container about-section">
           <div className="row about-section-content">
             <div className="about-section-des col-xl-4">
                <h2>About</h2>
             </div>
             <div className="about-content col-xl-8">
                <img className="avatar-about" src={pdp} height="350" width="350" alt="avatar-about" />
                <div className="about-text-content">
                 <p>Hello,My name is<b> Ahmed Kanoun</b> I am a <b>Full Stack javascript Web Developer</b> with industry experience building <b>Websites</b> and <b>Web applications</b>, Also I'm a <b>Student</b> in <b>Higher Institute Of Computer Science</b> and I got a <b>Certification</b> from <b>GoMyCode Tunisia</b>. I specialize in <b>javascript</b>, and I have experience working <b>with MERN Technologie</b>. <b>Coding</b> and <b>Problem Solving</b> is my passion and I really want to make a big change in this industry.<br/>Feel free to take a look at my recent Projects.<br/></p> 
                </div>
             </div>
             </div>
           </div>
      )
    }
}

export default About;
