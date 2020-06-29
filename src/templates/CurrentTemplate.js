import React, { Component } from 'react'
import Templete1 from './templete1'
import Templete2 from './templete2'
import Templete3 from './templete3'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

export class Template extends Component {
    
    render() {
        console.log(this.props)
        let resume = () => {
            
            switch (this.props.selectedTemplete) {
                case "1":
                    return <Templete1  resume={this.props.resume}/>
                case "2":
                    return <Templete2 resume={this.props.resume}/>    
                case "3": 
                     return  <Templete3  resume={this.props.resume}/>  
            
                default:
                    break;
            }
         
        };
        return (
            <div>
                
                {resume()}
                
            </div>
        )
    }
}


Template.propTypes = {
    match: PropTypes.object.isRequired,
    resume: PropTypes.object.isRequired,
    selectedTemplete : PropTypes.string.isRequired,  
}

const mapStateToProps = (state) => ({
    resume: state.currentResume,
    selectedTemplete: state.aboutTemplate.selectedResume ,
  
})

export default  connect(mapStateToProps)((Template))
