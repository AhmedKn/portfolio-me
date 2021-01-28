import React from 'react';
import bricole from '../images/bricole.JPG';
import portfolio from '../images/portfolio-img.JPG'
import '../css/projects.css'
import av from '../images/notav.png'


const Projects = () =>{
    return (
        <div className="container-fluid projects-sections">
            <div className="row projects-section">
               <div className="card col-xl-3 col-lg-4 col-md-7 col-sm-8 col-10">
                 <img className="project-img" src={bricole} alt="bricole-project" />
                 <div className="card-desc-content">
                 <p>Online Store for Hardware Tools and Electric Tools Made with prestashop v1.7 and AngarTheme.</p>
                 <p><a href="https://www.bricole.tn" target="_blank" rel="noopener noreferrer">Visit Now</a></p>
                 </div>
               </div>
               <div className="card col-xl-3 col-lg-4 col-md-7 col-sm-8 col-10">
                 <img className="project-img" src={portfolio} alt="portfolio-project" />
                 <div className="card-desc-content">
                 <p>Portfolio of Web Developper , this portfolio developped by mern technologie.</p>
                 <p><a href="/">Visit Now</a></p>
                 </div>
               </div>
               <div className="card col-xl-3 col-lg-4 col-md-7 col-sm-8 col-10">
                 <img className="project-img" src={av} alt="bricole-project" />
                 <div className="card-desc-content">
                 <p>This Project is Not available yet...  stay tuned for more projects and some will be open source.</p>
                <p><a href="/">Visit Now</a></p>
                 </div>
               </div>
            </div>
            <div className="row projects-section">
               <div className="card col-xl-3 col-lg-4 col-md-7 col-sm-8 col-10">
                 <img className="project-img" src={av} alt="bricole-project" />
                 <div className="card-desc-content">
                 <p>This Project is Not available yet...  stay tuned for more projects and some will be open source.</p>
                 <p><a href="/">Visit Now</a></p>
                 </div>
               </div>
               <div className="card col-xl-3 col-lg-4 col-md-7 col-sm-8 col-10">
                 <img className="project-img" src={av} alt="bricole-project" />
                 <div className="card-desc-content">
                 <p>This Project is Not available yet...  stay tuned for more projects and some will be open source.</p>
                 <p><a href="/">Visit Now</a></p>
                 </div>
               </div>
               <div className="card col-xl-3 col-lg-4 col-md-7 col-sm-8 col-10">
                 <img className="project-img" src={av} alt="bricole-project" />
                 <div className="card-desc-content">
                 <p>This Project is Not available yet...  stay tuned for more projects and some will be open source.</p>
                 <p><a href="/">Visit Now</a></p>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default Projects;