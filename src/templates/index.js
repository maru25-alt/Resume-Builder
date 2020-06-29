import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {setSelectedTemplate} from '../store/actions/resumeActions';

 import templete1 from '../assets/images/template1.png';
import templete2 from '../assets/images/template2.png';
import templete3 from '../assets/images/template3.png';


class index extends Component {

    handleSelect = () => {
        this.props.setSelectedTemplate("1")
    }
    handleSelect2 = ()=> {
        this.props.setSelectedTemplate("2")
    }
    handleSelect3 = () => {
        this.props.setSelectedTemplate("3")
    }
    render() {
       
        return (
        <div className="templates_section">
            <h5>Select Your Templete</h5>
            <div className="templates-container">
                <div className="template_container"  >
                   <img src={templete1} alt="resume"></img>
                   <div className="middle"  onClick={this.handleSelect} id="1">
                   <Link to="/createResume/01">
                      <p className="text">Use this template </p>
                     </Link>
                   </div>
                 
                </div>
                <div className="template_container">
                        <img  src={templete2}   alt="resume"></img>
                        <div className="middle" onClick={this.handleSelect2} id="2" value='2'>
                          <Link to="/createResume/01">
                            <p className="text">Use this template </p>
                          </Link>
                        </div>
               
                </div>
                <div className="template_container">
                        <img  src={templete3}  alt="resume"></img>
                        <div className="middle" onClick={this.handleSelect3} id="3"  >
                        <Link to="/createResume/01">
                           <p className="text">Use this template </p>
                        </Link> 
                        </div>   
                    
                </div>
                
               
            </div>
        </div> 
        )
    }
}

index.propTypes = {
    resume: PropTypes.object,
    setSelectedTemplate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    resume: state.templetesReducer
});

const mapActionsToProps = {
    setSelectedTemplate : setSelectedTemplate
}

export default connect(mapStateToProps, mapActionsToProps)(index)
