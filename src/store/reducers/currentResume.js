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
    DELETE_EDUCATION_DATA,
    DELETE_ACHIEVEMENT_DATA,
    DELETE_CERTIFICATION_DATA,
    DELETE_EXPERIENCE_DATA,
    DELETE_LANGUAGE_DATA,
   DELETE_REFERENCE_DATA,
   DELETE_SKILLS_DATA,
} from '../actions/types'

const intialState = {
    personal: {},
    skills: [],
    achievements: [],
    objective: "",
    education: [],
    experience: [],
    reference: [],
    certifications: [],
    languages: []  
}

export default function (state = intialState, action){
    
    switch(action.type){

        case GET_PERSONAL_DATA :
            return {
                ...state, 
                personal : action.payload
            }
        case GET_EDUCATION_DATA:
            return{
                ...state,
                education: [...state.education, action.payload]
            } 
        case GET_EXPERIENCE_DATA:
            return{
                ...state,
                experience: [...state.experience, action.payload]
            }       
       case GET_SKILLS_DATA:
           return{
               ...state, 
               skills: [...state.skills, action.payload]
           }
        case GET_OBJECTIVE_DATA: 
           return{
               ...state,
               objective: action.payload
           } 
        case GET_ACHIEVEMENT_DATA:
            return{
                ...state,
                achievements:[...state.achievements, action.payload]
            }
        case GET_CERTIFICATION_DATA:
            return{
                ...state,
                certifications:[...state.certifications, action.payload]
            }
        case GET_LANGUAGE_DATA:
            return{
                ...state,
                languages:[...state.languages, action.payload]
            }
        case GET_REFERENCE_DATA:   
           return{
                ...state,
                reference:[...state.reference, action.payload]
           }  
           case DELETE_EDUCATION_DATA: 
           return{
               ...state,
               education: state.education.filter(e => e.id !== action.payload)
           } 
           case DELETE_ACHIEVEMENT_DATA :
            return{
                ...state,
                achievements: state.achievements.filter(e => e.id !== action.payload)
            } 
           case DELETE_CERTIFICATION_DATA:
            return{
                ...state,
                certifications: state.certifications.filter(e => e.id !== action.payload)
            } 
           case DELETE_EXPERIENCE_DATA:
            return{
                ...state,
                experience: state.experience.filter(e => e.id !== action.payload)
            } 
           case DELETE_LANGUAGE_DATA:
            return{
                ...state,
                languages: state.languages.filter(e => e.id !== action.payload)
            } 
           case DELETE_REFERENCE_DATA:
            return{
                ...state,
                reference: state.reference.filter(e => e.id !== action.payload)
            } 
           case DELETE_SKILLS_DATA:
            return{
                ...state,
                skills: state.skills.filter(e => e.id !== action.payload)
            }                   
        default: return state;
    }
}