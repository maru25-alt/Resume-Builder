import React, { Component } from 'react'
import Template1 from '../templates/CurrentTemplate' 
import {withRouter} from 'react-router-dom'
import jsPDF from 'jspdf'
import ReactDOMServer from "react-dom/server";

export class Resume extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    generatePDF = () => {
        var doc = new jsPDF();
        doc.fromHTML(ReactDOMServer.renderToString(this.render()));
        doc.save('resume.pdf')
      }   
    render() {
        return (
            <div>
                <div className='prev-template'> <Template1  /></div>
              
                <div  className="prev">
                <button onClick={this.generatePDF} type="primary">Download PDF</button> 
                <button  onClick={this.goBack} className='btn'> <i className="far fa-arrow-alt-circle-left"></i>Back</button>
                </div>
    
            </div>
        )
    }
}



export default (withRouter(Resume))
