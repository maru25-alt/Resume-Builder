import React, { Component } from 'react';
import InputForm from './educationForm'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteEducation} from '../store/actions/resumeActions'

export class Form extends Component {

    handleClick = (e) => {
        console.log("clicked", e)
    }
    
    render() {
        let {education} = this.props
        let disabled  = true
        if(education.length > 0){
            disabled = false
        }
        return (
            <div>
                 <div className="section_heading">
                    <span>❇️❇️❇️ Step 2 ❇️❇️❇️</span>
                    <h3>Fill up your Highest Educational Qualifications:</h3>
                </div>
                <div>
                {education && education.map(e => {
                    return(
                    <div className="education_container" key={e.id}>
                        <button type="button" id={e.id} onClick={this.handleClick} className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                         <div className="row">
                        <div className="col-8">
                            <div>{e.university}</div>
                            <div>{e.degree} {e.grade}</div>
                        </div>
                        <div className="col-4">
                            <span>{e.year}</span>
                        </div>
                        </div>
                    </div>
                    )
                })}
             </div>
             <div>
                 <InputForm />
             </div>
    
             <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/01"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/03"><button className="btn"  disabled={disabled}> Next <i className="far fa-arrow-circle-right"></i></button></Link>
                    </div>
                
            </div>
        )
    }
}
Form.propTypes = {
    education: PropTypes.array.isRequired
}

const mapStateToActions = (state) => ({
    education: state.currentResume.education
})

export default connect(mapStateToActions, {deleteEducation})(Form)