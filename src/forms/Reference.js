import React, { Component } from 'react'
import InputForm from './referenceForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Form extends Component {
    state = {
        reference: [
            {
                name: "Mr Nathanial Karima",
                email: "karimaN@gmail.com",
                phone: "156239095982",
                address: "123 Songling Rd Qingdao China",
                id: 2
            },
            {
                name: "Mr Nathanial Karima",
                email: "karimaN@gmail.com",
                phone: "156239095982",
                address: "123 Songling Rd Qingdao China",
                id: 1
            }
    
        ],
    } 
    
    render() {
        let {reference} = this.props;
        let disabled = true;
        if(reference.length >0){
            disabled= false
        }
        return (
            <div>
                 <div className="section_heading">
                    <span  role="img" aria-label="emoji">❇️❇️❇️ Step 8 ❇️❇️❇️</span>
                    <h3>Fill up your References:</h3>
                </div>

                {reference && reference.map(e => {
                    return(
                        <div className="education_container" key={e.id} >
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button> 
                            <h6>{e.name}</h6>
                            <p>{e.email}</p>
                            <p>{e.phone}</p>
                            <address>{e.address}</address>
                        </div>
                    )
                })}

                <InputForm />
 
                <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/08"><button className="btn "> <i className="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/resume"><button disabled={disabled} className="btn"> Next <i className="far fa-arrow-circle-right"></i></button></Link>
                </div>
            </div>
        )
    }
}

Form.propTypes = {
    reference: PropTypes.array.isRequired
 }
 
 const mapStateToProps = (state) => ({
     reference: state.currentResume.reference
 })


export default connect(mapStateToProps)(Form)