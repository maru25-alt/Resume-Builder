import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import Year from '../components/Years'
import {fetchCertifications} from '../store/actions/resumeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class Form extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state = {
        name: "",
        year: "",      
    }
    handleChange = (e) => {
          this.setState({
              [e.target.id] : e.target.value
          })
    }
    handleChangeYear = (e) => {
        this.setState({
            year: e
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
           this.props.fetchCertifications({
               title: this.state.name,
               year: this.state.year
           })
            alert('You submitted the form and stuff!');
            this.setState({
                name: "",
                year: "", 
            })
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    render() {
        let {certifications} = this.props
        let disabled = true;
        if(certifications.length >0){
            disabled= false
        }
        return (
            <div>
                 <div className="section_heading">
                    <span>❇️❇️❇️ Step 5 ❇️❇️❇️</span>
                    <h3>Fill up your Certifications:</h3>
                </div>
                {certifications && certifications.map(e => {
                    return (
                        <div className="education_container" key={e.id}>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                            </button> 
                            <div className="row" >
                                <span className='col-6'>{e.title}</span>
                                <span  className='col-6'>{e.year}</span>
                            </div>
                        </div>
                    )

                })}

                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Certificate's name</label>
                        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.name} id="name" placeholder="e.g ACCA "/>
                        {this.validator.message('name',this.state.name, 'required|string')}
                    </div>
                    <div className="form-group">
                        <label >Year</label>
                      <Year  handleChange={this.handleChangeYear}/>
                      {this.validator.message('year',this.state.year, 'required')}
                    </div>
                    <button type="submit" className="btn save">Add</button>
                </form>
                <div className="form_control_buttons">
                     <Link  className="prev" to="/createResume/05"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                    <Link className="next" to="/createResume/07"><button className="btn "  disabled={disabled}> Next <i className="far fa-arrow-circle-right"></i></button></Link>
             </div>
            </div>
        )
    }
}

Form.propTypes = {
    certifications: PropTypes.array.isRequired
 }
 
 const mapStateToProps = (state) => ({
     certifications: state.currentResume.certifications
 })
 
 export default connect(mapStateToProps, {fetchCertifications})(Form)