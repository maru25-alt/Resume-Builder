import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Year from '../components/Years'
import SimpleReactValidator from 'simple-react-validator';
import {fetchAchievements} from '../store/actions/resumeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class Achiements extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state ={
        year: "",
        title: "",
     
    }
    handleChangeYear = (year) => {
         this.setState({
             year,
         })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
           this.props.fetchAchievements(this.state)
            alert('You submitted the form and stuff!');
            this.setState({
                year: "",
               title: "", 
            })

          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
        
    }
    render() {
        let {achievements} = this.props;
        let disabled = true;
        if(achievements.length >0){
            disabled= false
        }
        return (
            <div>
                 <div className="section_heading">
                    <span>❇️❇️❇️ Step 7 ❇️❇️❇️</span>
                    <h3>Fill up your Achiements and Awards:</h3>
                </div>

                {achievements && achievements.map(e => {
                    return(
                        <div className="education_container" key={e.id} >
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                            </button> 
                            <div className="row">
                                <div className="col-md-6">{e.title}</div>
                                <div className="col-md-6">{e.year}</div>
                            </div>
                           
                        </div>
                    )
                })}

            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-8">
                    <label >Title</label>
                    <input type="text" placeholder="e.g worker of the year award " className="form-control" value={this.state.title} onChange={this.handleChange} id="title"/>
                    {this.validator.message('title',this.state.title, 'required')}
                    </div>
                    <div className="form-group col-md-4">
                    <label >Year</label>
                       <Year  handleChange = {this.handleChangeYear}/>
                       {this.validator.message('year',this.state.year, 'required')}
                    </div>
               </div>
                 <button type="submit" className="btn save">Add</button>
                </form>

                 <div className="form_control_buttons">
                        <Link className="prev" to="/createResume/07"><button className="btn "> <i class="far fa-arrow-alt-circle-left"></i>Prev</button> </Link>
                        <Link className="next" to="/createResume/09"><button className="btn"  disabled={disabled}> Next <i class="far fa-arrow-circle-right"></i></button></Link>
                </div>
                
            </div>
        )
    }
}

Achiements.propTypes = {
    achievements: PropTypes.array.isRequired
 }
 
 const mapStateToProps = (state) => ({
     achievements: state.currentResume.achievements
 })
 
 export default connect(mapStateToProps, {fetchAchievements})(Achiements)