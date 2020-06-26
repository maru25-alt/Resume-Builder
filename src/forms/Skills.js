import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import {fetchSkill} from '../store/actions/resumeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Form extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }

    state ={
        skill: "",
        value: "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.fetchSkill({
                name: this.state.skill,
                value: this.state.value
            })
           alert('You skill is successfully submitted !');
           this.setState({
          skill: "",
            value: "", 
           })
         } else {
           this.validator.showMessages();
           this.forceUpdate();
         }
   }
    render() {
        let {skills} = this.props
        let disable = true;
        if(skills.length >0){
            disable= false
        }
        return (
            <div>
                <div className="section_heading">
                    <span>❇️❇️❇️ Step 3 ❇️❇️❇️</span>
                    <h3>Fill up your Skills:</h3>
                </div>
              { skills &&  skills.map(e => {
                  return (
                      <div key={e.id} className="education_container">
                           <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                            </button>
                          <div className="row">
                         <strong className="col-6">{e.name}</strong>
                         <strong className="col-6">{e.value}</strong>
                          </div>
                      </div>
                  )
              })}

            <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-row">
                    <div className="form-group col-md-7">
                    <label >Skill title</label>
                    <input type="text" className="form-control" value={this.state.skill} onChange={this.handleChange} placeholder="eg public speaking" id="skill"/>
                    {this.validator.message('skill',this.state.skill, 'required|string')}
                    </div>
                    <div className="form-group col-md-5">
                    <label >Value</label>
                    <input type="number" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="number between 0-100 (%)" id="value"/>
                    {this.validator.message('value',this.state.value, 'required|numeric|min:0|max:100')}
                    </div>
            </div>
            <button type="submit" className="btn save">Submit</button>
            </form>
                <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/03"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/05"><button disabled={disable} className="btn"> Next <i className="far fa-arrow-circle-right"></i></button></Link>
              </div>
            </div>
        )
    }
}

Form.propTypes = {
   skills: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    skills: state.currentResume.skills
})

export default connect(mapStateToProps, {fetchSkill})(Form)