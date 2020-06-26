import {
    SELECTED_TEMPELATE,
    GET_ACHIEVEMENT_DATA,
    GET_EDUCATION_DATA,
    GET_CERTIFICATION_DATA,
    GET_EXPERIENCE_DATA,
    GET_LANGUAGE_DATA,
    GET_OBJECTIVE_DATA,
    GET_PERSONAL_DATA,
    GET_REFERENCE_DATA,
    GET_SKILLS_DATA,
    DELETE_EDUCATION_DATA

} from './types'
import Ids from 'ids'

var ids = new Ids();

export const setSelectedTemplate = (id) => dispatch =>{
    console.log(id, "selected id")
      dispatch({
          type: SELECTED_TEMPELATE,
          payload: id
      })
}

export const fetchPersonal = (data) => dispatch => {
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
};


export const fetchExperience = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_EXPERIENCE_DATA,
        payload: data
    })
}

export  const fetchSkill = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_SKILLS_DATA,
        payload: data
    })
}

export const fetchObjective= (e) => dispatch => {
    dispatch({
        type: GET_OBJECTIVE_DATA,
        payload: e
    })
}

export  const fetchAchievements = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_ACHIEVEMENT_DATA,
        payload: data
    })
}

export  const fetchCertifications = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_CERTIFICATION_DATA,
        payload: data
    })
}

export  const fetchLanguage = (e) => dispatch => {
   
    dispatch({
        type: GET_LANGUAGE_DATA,
        payload: e
    })
}

export  const fetchReference = (e) => dispatch => {
    var id = ids.next();
    var data = {...e, id};
    dispatch({
        type: GET_REFERENCE_DATA,
        payload: data
    })
}


export const deleteEducation = (id) => dispatch => {
    dispatch({
        type: DELETE_EDUCATION_DATA,
        payload: id
    })

}