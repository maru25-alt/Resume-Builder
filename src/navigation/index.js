import React, { Component } from 'react'
import logo from '../assets/images/logo1.png'
export class index extends Component {
    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand-lg nav">
                <a className="navbar-brand" href="#">
                <img src={logo} width='100'></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="item nav-link  " href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="item nav-link" href="/resume">Resume</a>
                    <a className="item nav-link" href="/aboutus">Aboutus</a>
                   
                    </div>
                </div>
                </nav>

                
            </div>
        )
    }
}

export default index
