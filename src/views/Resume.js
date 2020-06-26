import React, { Component } from 'react'
import {connect} from 'react-redux'
import Template1 from '../templates/templete1' 
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'


export class Resume extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                Resume
                <Template1  resume={this.props.resume}/>
                <div  className="prev">
                <button  onClick={this.goBack} className='btn'> <i className="far fa-arrow-alt-circle-left"></i>Back</button>
                </div>
                
            </div>
        )
    }
}

Resume.propTypes = {
    resume: PropTypes.object.isRequired,
    selectedTemplete : PropTypes.string.isRequired,  
}

const mapStateToProps = (state) => ({
    resume: state.currentResume,
    selectedTemplete: state.aboutTemplate.selectedResume ,

})

export default connect(mapStateToProps)(withRouter(Resume))
