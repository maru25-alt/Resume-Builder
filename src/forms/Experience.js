import React, { Component } from 'react'
import InputForm from './experienceForm';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Form extends Component {
   
    render() {
        let {experience} = this.props
        let disabled = true;
        if(experience.length > 0){
            disabled = false
        }
        return (
            <div>
                 <div className="section_heading">
                    <span role="img" aria-label="emoji">❇️❇️❇️  Step 2 ❇️❇️❇️</span>
                    <h3>Fill up your Experimence:</h3>
                </div>
                <div>
                  
                    {experience && experience.map(e => {
                        return (
                        <div key={e.id} className="education_container">
                             <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                            </button>
                             <div className="row">
                                 <div className="col-8">
                                     <div>{e.company}</div>
                                     <div>{e.title}</div>
                                     <p>{e.description}</p>
                                 </div>
                                 <div className="col-4">
                                     <div>{e.year_from} - {e.year_to}</div>
                                 </div>
                             </div>
                        </div>
                        )
                    })}
                </div>
               <InputForm /> 
              
               <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/02"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/04"><button className="btn" disabled={disabled}> Next <i className="far fa-arrow-circle-right"></i></button></Link>
              </div>
            </div>
        )
    }
}

Form.propTypes = {
    experience: PropTypes.array.isRequired
}

const mapStateToActions = (state) => ({
    experience: state.currentResume.experience
})

export default connect(mapStateToActions)(Form)

