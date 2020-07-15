import {
    SELECTED_TEMPELATE,
    GET_EDUCATION_DATA,
    GET_CERTIFICATION_DATA,
    GET_EXPERIENCE_DATA,
    GET_LANGUAGE_DATA,
    GET_OBJECTIVE_DATA,
    GET_PERSONAL_DATA,
    GET_REFERENCE_DATA,
    GET_SKILLS_DATA,
    DELETE_EDUCATION_DATA,
    GET_LOCALHOST_DATA,
    GET_AWARDS_DATA  
} from './types'
import Ids from 'ids'

var ids = new Ids();
export const createLocalStorage = () => dispatch => {
   
   var  personal = {};
   var skills = [];
   var achievements = [];
   var objective = "";
   var education = [];
  var  experience = [];
  var  reference = [];
   var certifications = [];
  var  languages = [];
  var awards = [];  
    if(typeof localStorage.personal !== 'undefined') {
        personal = JSON.parse(localStorage.getItem('personal'))
    }
    if(typeof localStorage.skills !== 'undefined') {
       skills = JSON.parse(localStorage.getItem('skills'))
    }
    if(typeof localStorage.achievements !== 'undefined') {
        achievements = JSON.parse(localStorage.getItem('achievements'))
    }
    if(typeof localStorage.objective !== 'undefined') {
       objective = localStorage.getItem("objective");
    }
   
    if(typeof localStorage.education !== 'undefined') {
       education = JSON.parse(localStorage.getItem('education'));
    }
    if(typeof localStorage.experience !== 'undefined') {
       experience = JSON.parse(localStorage.getItem('experience'))
    }
    if(typeof localStorage.reference !== 'undefined') {
       reference = JSON.parse(localStorage.getItem('reference'))
    }
    if(typeof localStorage.certifications !== 'undefined') {
       certifications = JSON.parse(localStorage.getItem('certifications'))
    }
    if(typeof localStorage.languages !== 'undefined') {
        languages = JSON.parse(localStorage.getItem('languages'))
    }

    if(typeof(localStorage.awards !== 'undefined')){
        awards = JSON.parse(localStorage.getItem('awards'));
    }

   dispatch({
      type : GET_LOCALHOST_DATA,
      personal: personal,
      skills: skills,
      achievements: achievements,
      objective: objective,
      education: education,
      experience: experience,
      reference: reference,
      certifications: certifications,
      languages: languages,
      awards: awards  
   })
}

export const setSelectedTemplate = (id) => dispatch =>{
    console.log('selected', id)
    localStorage.setItem("selectedTemplate", id);
      dispatch({
          type: SELECTED_TEMPELATE,
          payload: id
      })

}

export const fetchPersonal = (data) => dispatch => {
    localStorage.setItem( "personal", JSON.stringify(data));
    dispatch({
        type: GET_PERSONAL_DATA,
        payload: data})
}

export const fetchEducation = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id}
    dispatch({
      type : GET_EDUCATION_DATA,
      payload: data
    })
    const arr = JSON.parse(localStorage.getItem('education')) || [];
     arr.push(data);
    localStorage.setItem('education', JSON.stringify(arr));
};


export const fetchExperience = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_EXPERIENCE_DATA,
        payload: data
    })
    const arr = JSON.parse(localStorage.getItem('experience')) || [];
    arr.push(data);
   localStorage.setItem('experience',JSON.stringify( arr));
}

export  const fetchSkill = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_SKILLS_DATA,
        payload: data
    })

    const arr = JSON.parse(localStorage.getItem('skills')) || [];
    arr.push(data);
   localStorage.setItem('skills', JSON.stringify(arr));
}

export const fetchObjective= (e) => dispatch => {
    dispatch({
        type: GET_OBJECTIVE_DATA,
        payload: e
    })
    localStorage.setItem("objective", e);
}
//achievements
export  const fetchAchievements = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
   
    dispatch({
        type: GET_AWARDS_DATA,
        payload: data
    })
    const arr = JSON.parse(localStorage.getItem('awards')) || [];
    
    arr.push(data);
    console.log(arr)
   localStorage.setItem('awards', JSON.stringify(arr));
}

export  const fetchCertifications = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_CERTIFICATION_DATA,
        payload: data
    })
    const arr = JSON.parse(localStorage.getItem('certifications')) || [];
    arr.push(data);
   localStorage.setItem('certifications', JSON.stringify(arr));
}

export  const fetchLanguage = (e) => dispatch => {
    dispatch({
        type: GET_LANGUAGE_DATA,
        payload: e
    })
    const arr = JSON.parse(localStorage.getItem('languages')) || [];
    arr.push(e);
   localStorage.setItem('languages', JSON.stringify(arr));
}

export  const fetchReference = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_REFERENCE_DATA,
        payload: data
    })
    const arr = JSON.parse(localStorage.getItem('reference')) || [];
    arr.push(data);
   localStorage.setItem('reference', JSON.stringify(arr));
}


export const deleteEducation = (id) => dispatch => {
    dispatch({
        type: DELETE_EDUCATION_DATA,
        payload: id
    })

}