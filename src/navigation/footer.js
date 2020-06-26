import React, { Component } from 'react'
import logo from '../assets/images/logo1.png'


export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={logo} width="80"></img>
                <p> Copyrights &copy; 2020 All rights reserved </p>
               
            </div>
        )
    }
}

export default footer
