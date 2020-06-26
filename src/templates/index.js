import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {setSelectedTemplate} from '../store/actions/resumeActions';

 import templete1 from '../assets/images/template1.png';
import templete2 from '../assets/images/template2.png';
import templete3 from '../assets/images/template3.png';


class index extends Component {

    handleSelect = (e) => {
        setSelectedTemplate(e.target.id)
    }
    render() {
       
        return (
        <div className="templates_section">
            <h5>Select Your Templete</h5>
            <div className="templates-container">
                <div className="template_container">
                   <Link to="/createResume/01"> 
                   <img onClick={this.handleSelect} id="1" src={templete1} alt="resume"></img>
                   <div class="middle">
                     <p class="text">Use this template </p>
                   </div>
                   </Link>
                </div>
                <div className="template_container">
                   <Link to="/createResume/01">
                        <img onClick={this.handleSelect} src={templete2} id="2"  alt="resume"></img>
                        <div class="middle">
                          <p class="text">Use this template </p>
                        </div>
                 </Link>
                </div>
                <div className="template_container">
                    <Link to="/createResume/01">
                        <img onClick={this.handleSelect} src={templete3} id="3"  alt="resume"></img>
                        <div class="middle">
                           <p class="text">Use this template </p>
                        </div>   
                    </Link>
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
    setSelectedTemplate
}

export default connect(mapStateToProps, mapActionsToProps)(index)
