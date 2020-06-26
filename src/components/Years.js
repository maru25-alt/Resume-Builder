import React, { Component } from 'react'

export class Years extends Component {
    constructor(props){
        super(props);
        const year = (new Date()).getFullYear();
        this.years = Array.from(new Array(40),(val, index) => (year - index));
      }
      state = {
          year : ""
      }

      handleChange = (e) => {
         this.setState({
             [e.target.id] :e.target.value
         })
         this.props.handleChange(e.target.value)
      }
    render() {
        let years = this.years.map((year, index) => {
            return <option key={`year${index}`} value={year}>{year}</option>
        })
        return (
            <select className="form-control" id='year' value={this.state.year} onChange={this.handleChange}>
                <option>Select...</option>
                {years}
            </select>
        )
    }
}

export default Years
