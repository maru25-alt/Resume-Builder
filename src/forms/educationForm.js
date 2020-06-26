import React, { Component } from 'react'
import Years from '../components/Years'
import SimpleReactValidator from 'simple-react-validator';
import {connect} from 'react-redux';
import {fetchEducation} from '../store/actions/resumeActions'

export class educationForm extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state = {
        university: "",
        year: "",
        grade: "",
        degree: ""
    }

    handleChange = (e) => {
         this.setState({
             [e.target.id] : e.target.value
         })
    }
    handleChangeYear = (e) =>{
        this.setState({
            year  : e
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.fetchEducation(this.state)
            alert('your education form is succefully created');
            this.setState({
                    university: "",
                    year: "",
                    grade: "",
                    degree: ""
            })
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="university">University or College </label>
                    <input type="text" className="form-control" id="university" placeholder=" e.g Ocean University of China" value={this.state.university} onChange={this.handleChange}/>
                    {this.validator.message('varsity',this.state.university, 'required')}
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="degree">Program or Coarse</label>
                    <input type="text" className="form-control" placeholder=" e.g Business Administration" id="degree" value={this.state.degree} onChange={this.handleChange}/>
                      {this.validator.message('program',this.state.degree, 'required')}
                    </div>
                 </div>
                 <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Year</label>
                        <Years handleChange={this.handleChangeYear}/>
                        {this.validator.message('year',this.state.year, 'required')}
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="grade">Grade</label>
                    <input type="number" className="form-control" id="grade" placeholder="e.g 4.2" value={this.state.grade} onChange={this.handleChange}/>
                    {this.validator.message('grade',this.state.grade, 'required')}
                    </div>
                 </div>
                 <button type="submit" className="btn save">Add</button>
                </form>
            </div>
        )
    }
}

const mapActionsToProps = {
    fetchEducation
}

export default connect(null, mapActionsToProps)(educationForm)
