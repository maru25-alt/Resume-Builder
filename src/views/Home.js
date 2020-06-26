import React, { Component } from 'react'
import Templetes from '../templates/index'
import Image from '../assets/images/cover_pic.jpg'
export class Home extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="row header_container">
                        <div className="col-6">
                            <div className="text">
                               <h4>Free Online Resume Builder</h4>
                               <h6>We will and help you create your Professional , Industry Level Resume</h6>
                               <button className="btn"> <a  className="btn" href="#templetes">Create Resume</a></button>
                            </div>
                        </div>
                        <div className="col-6">
                          <img src={Image}></img>
                        </div>
                    </div>
                    
                   
                </header>
                <div id="templetes">
                <Templetes /> 
                </div>
               
            </div>
        )
    }
}

export default Home
