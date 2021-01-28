import React from 'react'
import '../css/skills.css'

export default function Skills () {
    return(
        <div className="container-fluid skills-section">
            <div className="row skills-content">
                <div className="front-section col-xl-3 col-lg-4 col-md-6 col-sm-8 col-8">
                   <div className="front-section-title">
                   <h2>Front-End</h2>
                   </div>
                   <ul>
                       <li className="html init"><a>HTML5</a>100%</li>
                       <li className="css init"><a>CSS3</a>80%</li>
                       <li className="ecma init"><a>ECMAScript6</a>75%</li>
                       <li className="jsdom init"><a>JSDOM</a>80%</li>
                       <li className="bootstrap init"><a>Bootstrap</a>50%</li>
                       <li className="react init"><a>React</a>90%</li>
                       <li className="redux init"><a>Redux</a>60%</li>
                       <li className="prestashop init"><a>Prestashop</a>80%</li>
                   </ul>
                </div>
                <div className="back-section col-xl-3 col-lg-4 col-md-6 col-sm-8 col-8">
                   <div className="back-section-title">
                   <h2>Back-End</h2>
                   </div>
                   <ul>
                      <li className="nodejs init"><a>NodeJs</a>30%</li>
                      <li className="express init"><a>Express</a>50%</li>
                      <li className="rest init"><a>Rest-API</a>80%</li>
                      <li className="mongo init"><a>MongoDB</a>75%</li>
                  </ul>
                </div>
                <div className="prog-section col-xl-3 col-lg-4 col-md-6 col-sm-8 col-8">
                  <div className="prog-section-title">
                  <h2>Programming-Languages</h2>
                  </div>
                  <ul>
                      <li className="js init"><a>JavaScript</a>75%</li>
                      <li className="python init"><a>Python</a>35%</li>
                      <li className="C init"><a>C</a>50%</li>
                      <li className="Cdplus init"><a>C++</a>30%</li>
                  </ul>
                </div>
            </div>
        </div>
    )
}

