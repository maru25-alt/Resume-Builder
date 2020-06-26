import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import profile from '../assets/images/profile.jpg'
import SimpleReactValidator from 'simple-react-validator';
import {fetchPersonal} from '../store/actions/resumeActions';
import {connect} from 'react-redux'


export class Form extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state = {
        profile: profile,
        name: "",
        email: "",
        phone: "",
        address: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        disabled: true
    }
    handleChangeImage = (e) => {
         this.setState({
           profile: URL.createObjectURL(e.target.files[0]),
         })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
            this.setState({
                disabled: false
            })

            let data = {
                profile: this.state.profile,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                facebook: this.state.facebook,
                twitter: this.state.twitter,
                linkedin: this.state.linkedin,  
            }

             this.props.fetchPersonal(data)
            
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    render() {
        console.log(this.props)
        let {profile, name, email, phone, address, facebook,twitter,linkedin} = this.state
        return (
            <div>
                <div className="section_heading">
                    <span>❇️❇️❇️ Step 1 ❇️❇️❇️</span>
                    <h3>Fill up the Following Details for your Resume:</h3>
                </div>
                <form >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label >Full Name</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} value={name}/>
                          {this.validator.message('name', name, 'required')}
                        </div>
                        <div className="form-group col-md-6">
                        <label >Email</label>
                        <input type="email" className="form-control" id="email" onBlur={() => this.validator.showMessageFor('email')}   onChange={this.handleChange} value={email}/>
                        {this.validator.message('email', email, 'required|email')}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Profile</label>
                        <input onChange={this.handleChangeImage} className="form-control" type="file" accept="image/x-png,image/gif,image/jpeg" />
                        <div>
                            <img width="200" src={profile}></img>
                        </div>
                        {this.validator.message('profile', profile, 'required')}
                    </div>
                    <div className="form-group">
                        <label >Address</label>
                        <input type="text" className="form-control" value={address}  onChange={this.handleChange} id="address" />
                        {this.validator.message('address', address, 'required')}
                    </div>
                    <div className="form-group">
                     <label>Telephone</label>
                     <input type="telephone" className="form-control" value={phone}  onChange={this.handleChange} id="phone"  ></input>
                     {this.validator.message('telephone', phone, 'required|phone')}
                    </div>
                   
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <label >Facebook</label>
                        <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                <input type="text" value={facebook}  onChange={this.handleChange} id="facebook" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                                {this.validator.message('facebook', facebook, 'required')}
                        </div>
                        </div>
                        <div className="form-group col-md-4">
                        <label >Twitter</label>
                        <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" value={twitter}  onChange={this.handleChange} id="twitter" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                                    {this.validator.message('twitter', twitter, 'required')}
                        </div>
                        </div>
                        <div className="form-group col-md-4">
                        <label >Linkedin</label>
                        <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" value={linkedin}  onChange={this.handleChange} id="linkedin" className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                                    {this.validator.message('linkedin', linkedin, 'required')}
                        </div>
                        </div>
                    </div>
                    <button  className="btn btn-danger cancel">Cancel</button>
                    <button onClick={this.handleSubmit}  type="submit" className="btn save">Save Changes</button>
                    
               </form>
                    <div className="form_control_buttons">
                        <Link className="prev" to="/"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/02"><button className="btn" disabled={this.state.disabled}> Next <i className="far fa-arrow-circle-right"></i></button></Link>
                    </div>
            </div>
        )
    }
}
const mapActionsToProps = {
    fetchPersonal
}

export default connect(null, mapActionsToProps)(Form)