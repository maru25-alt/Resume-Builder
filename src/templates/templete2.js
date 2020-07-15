import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class templete2 extends Component {
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
                    <div className="template2">
                    <div className="row ">
                    <div className="col-8">
                        <div className="main">
                       <div className="personal_section">
                           <h6>{personal.name}</h6>
                           <div>{personal.email}</div>
                           <div>{personal.phone}</div>
                           <address>125 Chinzanga T/ship Mutoko</address>
                           <div><i className="fab fa-facebook"></i> {personal.facebook}</div>
                           <div><i className="fab fa-twitter"></i>{personal.twitter}</div>
                           <div><i className="fab fa-linkedin"></i>{personal.linkedin}</div>
                       </div>
                       <div className="objective_section">
                          <div className="section-heading">Objective</div>
                          <p>{objective}</p>
                       </div>
                       <div className="education_section">
                          <div className="section-heading">Education</div>
                          {education && education.map(e => {
                              return(
                            <div className="education" key={e.id}>
                                <div className="subheading">{e.university}</div>
                                <span>{e.year}</span>
                                <span>{e.degree}</span>
                                <span>{e.grade}</span>
                            </div>
                              )
                          })}
                          
                       </div>


                       <div className="experience_section">
                       <div className="section-heading">Experience</div>
                       {experience && experience.map(e => {
                           return(
                            <div className="experience" key={e.id}>
                                <div className="subheading">{e.company}</div>
                                <div>{e.title}</div>
                                <div>{e.year_from} - {e.year_to}</div>
                                <p>{e.description}</p>
                               
                            </div>
                           )
                       })}
                     
                       </div>


                       <div className="certifications_section">
                       <div className="section-heading">Certifications</div>
                           <ul>
                           {certifications && certifications.map(e => {
                                   return(
                                       <li key={e.id}> {e.title} &nbsp; &nbsp;<span >[{e.year}]</span></li>
                                   )
                               })}
                           </ul>
                       </div>
                       </div>
                    </div>
                    <div className="col-4 ">
                        <div className="sidebar">
                       <div className="profile_section">
                           <img alt="profile" src={personal.profile}></img>
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
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

templete2.propTypes = {
    resume: PropTypes.object.isRequired
}

export default templete2
