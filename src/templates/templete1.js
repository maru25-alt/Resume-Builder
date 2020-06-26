import React, { Component } from 'react'
import PropTypes from 'prop-types';

class templete1 extends Component {
   
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
       // console.log(personal)
        return (
            <div className="template_container ">
            <div className="template1">
                <div className="row">
                   <div  className="col-4 ">
                       <div className="sidebar">
                       <div className="name_section">
                          <h3>{personal.name}</h3>
                             <img alt="profile" src={personal.profile}></img>
                       </div>
                       <div className="contact_section">
                            <div className="section-heading">Contact</div>
                            <div>
                           <span className="contact"><i className="fad fa-envelope-open"></i> &nbsp;
                              <p >{personal.email}</p>
                            </span> 
                            <span className="contact"><i className="far fa-phone-square-alt"></i>&nbsp;
                              <p> {personal.phone}</p>
                            </span>
                            <span className="contact"><i className="far fa-map-marker-alt"></i>&nbsp;
                            <address>{personal.address}</address>
                            </span>
                            <div className="contact" ><i className="fab fa-facebook"></i> &nbsp; {personal.facebook}</div>
                           <div className="contact"><i className="fab fa-twitter"></i> &nbsp; {personal.twitter}</div>
                           <div className="contact"><i className="fab fa-linkedin"></i>&nbsp; {personal.linkedin}</div>
                            </div>
                       </div>
                       <div className="skills_section">
                          <div className="section-heading">Skills</div>

                          {skills && skills.map(skill => {
                              return(
                                  <div className="skill" key={skill.id}>
                                      <label>{skill.name}</label>
                                      <progress className="skill-bar"  value={skill.value} max="100"> {skill.value}% </progress>
                                  </div>
                              )
                          })}
                          
                         
                       </div>
                       <div className="achievements_section">
                          <div className="section-heading">Achievements &amp; Awards</div>
                          <ul className="achievements">
                          {achievements && achievements.map(achieve => {
                           return( <li key={achieve.id}>{achieve.title}, [{achieve.year}]</li>)
                            })}
                          </ul>
                       </div>

                       <div className="language_section">
                           <div className="section-heading">Languages</div>
                           <ul>
                               {languages && languages.map((language, i) => {
                                   return( <li key={i}>{language}</li>)
                               })}
                               
                           </ul>
                       </div>
                     </div>
                   </div>
                   <div className='col-8'>
                       <div className="main">
                       <div className="objective_section">
                          <div className="section-heading">Objective</div>
                          <p>{objective}</p>
                       </div>
                       <div className="education_section">
                          <div className="section-heading">Education</div>
                              {education && education.map(e => {
                                  return (
                                <div className="education" key={e.id}>
                                    <div className="title">{e.university}</div>
                                    <div>{e.degree}</div>
                                    <div className="content">
                                        <span>{e.grade}</span>
                                        <span>{e.year}</span>
                                    </div>
                                </div> 
                                  )
                              })}
                         
                       </div>


                       <div className="experience_section">
                          <div className="section-heading">Experience</div>
                          {experience && experience.map(ex => {
                              return(
                                <div className="experience" key={ex.id}>
                                      <div className="section-subheading">
                                        <div className="title">{ex.title}</div>
                                        <div className="date">{ex.year_from} - {ex.year_to}</div>
                                      </div> 
                                        <div>
                                            <p>{ex.description}</p>
                                       </div>
                                </div>
                              )
                          })}
                       </div>


                       <div className="reference_section">
                          <div className="section-heading">Reference</div>
                          {reference && reference.map(e => {
                              return(
                            <div className="reference" key={e.id}>
                               <div className="name"> <i className="fas fa-user"></i>{e.name}</div>
                               <div className="email"><i className="fad fa-envelope-open"></i> {e.email}</div>
                               <div><i className="fas fa-mobile-alt"> </i> {e.phone}</div>
                               <address> <i className="fas fa-map-marker-alt"></i>{e.address}</address>
                            </div>
                              )

                          })}
                       </div>

                       <div className="certification_sections">
                          <div className="section-heading">Certifications</div>
                          <ul>
                              {certifications && certifications.map(e => {
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

templete1.propTypes = {
    resume: PropTypes.object.isRequired
}

export default templete1
