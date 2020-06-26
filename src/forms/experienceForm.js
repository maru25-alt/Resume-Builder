import React, { Component } from 'react'
import Years from '../components/Years'
import SimpleReactValidator from 'simple-react-validator';
import {connect} from 'react-redux';
import {fetchExperience} from '../store/actions/resumeActions'


export class experienceForm extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }

    state ={
        title: "",
        company: "",
        year_from: "",
        year_to: "",
        description: "",
    }

    handleChange = (e) => {
       this.setState({
           [e.target.id] : e.target.value
       })
    }
    handleSubmit =(e) => {
         e.preventDefault();
         if (this.validator.allValid()) {
             this.props.fetchExperience({
                title: this.state.title,
                company: this.state.company,
                year_from: this.state.year_from,
                year_to: this.state.year_to,
                description: this.state.description,
             })
            alert('You submitted the form and stuff!');
            this.setState({
                title: "",
                company: "",
                year_from: "",
                year_to: "",
                description: "",
            })
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    handleChangeYear = (e) => {
        this.setState({
            year_from : e
        })
    }
    handleChangeYearTo = (e) => {
        this.setState({
            year_to : e
        })
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="title">Position</label>
                        <input placeholder="e.g Manager" type="text" value={this.state.title} onChange={this.handleChange} className="form-control" id="title" />
                        {this.validator.message('position',this.state.title, 'required')}
                   </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="company">Company or Organisation</label>
                        <input placeholder="e.g Econent Ltd Company" type="text" value={this.state.company} onChange={this.handleChange} className="form-control" id="company"/>
                        {this.validator.message('company',this.state.company, 'required')}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="year_from">Start Year</label>
                        <Years handleChange={this.handleChangeYear}/>
                        {this.validator.message('start year',this.state.year_from, 'required')}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="year_to">End Year</label>
                        <Years handleChange={this.handleChangeYearTo}/>
                        {this.validator.message('end year',this.state.year_to, 'required')}
                    </div>
                </div>
                <div className="form-group">
                     <label htmlFor="objective">Description</label>
                     <textarea  placeholder="type here..."  className="form-control" id="description" value={this.state.description} onChange={this.handleChange} rows="3"></textarea>
                     {this.validator.message('description',this.state.description, 'required')}
                  </div>
                <button className="btn save" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {fetchExperience})(experienceForm)
