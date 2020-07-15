import React, { Component } from 'react'

import PropTypes from 'prop-types';

export class templete3 extends Component {
    render() {
        let {
            personal,
            skills,
            achievements,
            objective,
            education,
            experience,
            reference,
            certifications,
            languages 
        } = this.props.resume
        return (
            <div className="template_container">
                <div className="template3">
                <div className=" heading_section">
                    <div className="personal_info">
                        <div className="row">
                        <div className="col-7 profile">
                        <img alt="profile" src={personal.profile}></img>
                        <h6>{personal.name}</h6>
                        </div>
                        <div className="col-5 personal">
                        <div><i className="fad fa-envelope-open"></i> {personal.email}</div>
                            <div><i className="far fa-phone-square-alt"></i> {personal.phone}</div>
                            <address> <i className="far fa-map-marker-alt"></i> {personal.address}</address>   
                        </div>
                        </div> 
                    </div>
                    <div className="social_section">    
                         <div><i className="fab fa-facebook"></i> {personal.facebook}</div>
                         <div><i className="fab fa-twitter"></i> {personal.twitter}</div>
                         <div><i className="fab fa-linkedin"></i>{personal.linkedin}</div>
                    </div>
                    
                </div>
                <div className="main">
                    <div className="row">
                    <div className="col-6">
                       <div className="objectives_section">
                         <div className="section-heading">Objective</div>
                          <p>
                         {objective}
                          </p>
                       </div>
                       <div className="skills_section">
                           <div className="section-heading">Skills</div>
                            <ul>
                            {skills && skills.map(skill => {
                              return(
                                  <li className="skill" key={skill.id}>
                                      {skill.name}
                                     
                                  </li>
                              )
                          })}
                               
                            </ul>
                       </div>
                       <div className="reference_section">
                       <div className="section-heading">Reference</div>
                       {reference && reference.map(e => {
                           return(
                            <div className="reference" key={e.id}>
                                <div className="name"> {e.name}</div>
                                <div className="email"> {e.email}</div>
                                <div> {e.phone}</div>
                                <address> {e.address}</address> 
                          </div>
                           )

                       })}          
                       </div>


                       <div className="language_section">
                       <div className="section-heading">Languages</div>
                           <ul>
                               {languages && languages.map((e, i) => {
                                   return(
                                       <li key={i}>{e}</li>
                                   )
                               })}
                           </ul>
                       </div>


                       <div className="achievements_section">
                            <div className="section-heading">
                                Achievements and Awards
                            </div>
                            <ul className="achievements">
                                {achievements && achievements.map(e => {
                                    return(
                                    <li key={e.id}>{e.title}, [{e.year}]</li>
                                    )
                                })}
                            </ul>
                       </div>
                    </div>


                    <div className="col-6">
                        <div className="experience_section">
                        <div className="section-heading">Experience</div>
                        {experience && experience.map(e => {
                            return(
                             <div className="experience" key={e.id}>
                             <div className="row">
                                 <div className="col-4 ">
                                     <span className="date">{e.year_from} - {e.year_to}</span>
                                 </div>
                           
                             <div className="col-8">
                               <div className="company">{e.company}</div>
                               <div className="title">{e.title}</div>
                                  <p>{e.description}</p>
                             </div>
                           </div>  
                          </div>
                            )
                        })}
                      
                        </div>



                        <div className="education_section">
                        <div className="section-heading">Education</div>
                        {education && education.map(e => {
                            return(
                                <div className="education" key={e.id}>
                                    <div className="row">
                                        <div className="col-4 date"> 
                                            <span>{e.year}</span>
                                        </div>
                                        <div className="col-8">
                                        <div className="subheading">{e.university}</div>
                                        <div>{e.degree}</div>
                                        <div>{e.grade}</div>
                                        </div>
                                    </div> 
                            </div>
                            )
                        })}
                          
                        </div>
                        <div className="certification_section">
                        <div className="section-heading">Certifications</div>
                           <ul>
                               {certifications && certifications.map(e => {
                                   return(
                                       <li key={e.id}> {e.title} &nbsp; &nbsp;<span className="year">[{e.year}]</span></li>
                                   )
                               })}
                               
                           </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        )
    }
}

templete3.propTypes = {
    resume: PropTypes.object.isRequired
}

export default templete3
