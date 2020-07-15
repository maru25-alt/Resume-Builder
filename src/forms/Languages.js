import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import {fetchLanguage} from '../store/actions/resumeActions';
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
        Languages : ["English", "Shona", "Chinese"],
        language: "",
    }
    handleChange = (e) => {
         this.setState({
             [e.target.id] : e.target.value
         })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.fetchLanguage(this.state.language)
            alert('You submitted the form and stuff!');
            this.setState({
                language: "",
            })
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    render() {
        let {languages } = this.props
        let disabled = true;
        if(languages.length >0){
            disabled= false
        }
        return (
            <div>
                <div className="section_heading">
                    <span  role="img" aria-label="emoji">❇️❇️❇️ Step 6 ❇️❇️❇️</span>
                    <h3>Fill up your Languages:</h3>
                </div>
                <ul>
                    {languages && languages.map((e,i) => {
                        return(
                            <li className="education_container" key={i}>
                                 <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                                </button> 
                                <span>{e}</span>
                            </li>
                        ) 
                    })}
                </ul>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="language">New Language</label>
                    <input type="text" onChange={this.handleChange} value={this.state.language} className="form-control" id="language" placeholder="eg Spanish"/>
                    {this.validator.message('language',this.state.language, 'required|string')}
                    </div>
                    <button type="submit" className="btn save">Add</button>
                </form>
   
                <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/06"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/08"><button disabled={disabled} className="btn" > Next <i className="far fa-arrow-circle-right"></i></button></Link>
              </div>
            </div>
        )
    }
}

Form.propTypes = {
    languages: PropTypes.array.isRequired
 }
 
 const mapStateToProps = (state) => ({
     languages: state.currentResume.languages
 })
 
 export default connect(mapStateToProps, {fetchLanguage})(Form)