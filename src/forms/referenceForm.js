import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import {fetchReference} from '../store/actions/resumeActions';
import {connect} from 'react-redux';


export class referenceForm extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state ={
                name: "",
                email: "",
                phone: "",
                address: "",
               
    }
    handleChange = (e) => {
       this.setState({
           [e.target.id] : e.target.value
       })
    }

    handleSubmit = (e) => {
         e.preventDefault();
         if (this.validator.allValid()) {
             this.props.fetchReference(this.state)
            alert('You submitted the form and stuff!');
            this.setState({
                name: "",
                email: "",
                phone: "",
                address: "",
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
                   <div className="form-group row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name"/>
                        {this.validator.message('name',this.state.name, 'required|string')}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" value={this.state.email} className="form-control" id="email" onChange={this.handleChange}/>
                        {this.validator.message('email',this.state.email, 'required|email')}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="telephone" className="col-sm-2 col-form-label">Telephone</label>
                        <div className="col-sm-10">
                        <input type='number' value={this.state.phone} className="form-control" id="phone" onChange={this.handleChange}/>
                        {this.validator.message('telephone',this.state.phone, 'required')}
                        </div>
                    </div>    
                    <div className="form-group">
                      <label for="address">Address</label>
                      <textarea className="form-control" placeholder="type here..." value={this.state.address} id="address" rows="3" onChange={this.handleChange}></textarea>
                      {this.validator.message('address',this.state.address, 'required|string')}
                    </div>
                    <button type="submit" className="btn save">Add</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {fetchReference})(referenceForm)
