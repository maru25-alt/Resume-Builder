import React, { Component } from 'react'
import Template from '../templates/Template'
import {withRouter} from 'react-router-dom';
import Certification from '../forms/Certification';
import Education from '../forms/Education';
import Experience from '../forms/Experience';
import Languages from '../forms/Languages';
import Personal from '../forms/Personal';
import Reference from '../forms/Reference';
import Skills from '../forms/Skills';
import Objective from '../forms/Objective';
import Achievements from '../forms/Achiements'

export class Forms extends Component {
    handlePreview = () => {
        console.log('clicked')
        this.props.history.push('/resume')
    }
    render() {
        console.log(this.props)
        let form = () => {
            switch (this.props.match.params.id) {
                case "01":
                    return <Personal/>
                case "02":
                    return <Education/>
                case "03": 
                     return <Experience/>
                case "04":
                    return <Skills />
                case "05":
                    return <Objective/>
                case "06":
                    return <Certification/>
                case "07":
                    return <Languages />
                case "08": 
                     return <Achievements/>    
                case "09":
                    return <Reference/>                             
                default:
                    break;
            }
        }
        return (
            <div className="forms_container">
                <div className="row">
                    <div className="col-7">
                        <div className="form_container">
                            {form()}
                          
                        </div>

                    </div>
                    <div className="col-5">
                        <h6>Preview Resume</h6>
                        <div onClick={this.handlePreview} className="preview_container">
                            <Template />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Forms)
