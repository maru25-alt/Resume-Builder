import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import {fetchObjective} from '../store/actions/resumeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Form extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state= {
        objective : "",
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.fetchObjective(this.state.objective)
            alert('You successfully submitted objectives!');
            this.setState({
                objective: ""
            })
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    render() {
        let disabled = true;
        if(this.props.objective.length > 0){
            disabled = false
        }
        return (
            <div>

                 <div className="section_heading">
                    <span>❇️❇️❇️ Step 4 ❇️❇️❇️</span>
                    <h3>Fill up your Objective:</h3>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                   <div className="form-group">
                     <textarea onChange={this.handleChange} value={this.state.objective} className="form-control" placeholder="type here..." id="objective" rows="10"></textarea>
                     {this.validator.message('objective',this.state.objective, 'required|string')}
                  </div>
                  <button type="submit" class="btn save">Save</button>
                </form>
              
                <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/04"><button className="btn "> <i class="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/06"><button disabled={disabled} className="btn"> Next <i class="far fa-arrow-circle-right"></i></button></Link>
              </div>
            </div>
        )
    }
}

Form.propTypes = {
    objective: PropTypes.string.isRequired
 }
 
 const mapStateToProps = (state) => ({
     objective: state.currentResume.objective
 })
 
 export default connect(mapStateToProps, {fetchObjective})(Form)
