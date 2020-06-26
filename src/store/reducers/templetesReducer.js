import {} from '../actions/types';
import profile from '../../assets/images/profile.jpg'

const intialState = {
    personal: {
        profile: profile,
        name: "Rudo Mapfumba",
        email: "rudomaru@gmail.com",
        phone: "+8615605426035",
        address: "247 Tomazoes RD Bindura , Zimbabwe",
        facebook: "rudomapfumba",
        twitter: "rudomapfumba",
        linkedin: "rudomapfumba"
    },
    skills: [
        {
            id: 1,
            name: "HTML AND CSS",
            value: 90,
        },
        {
            id: 2,
            name: "JAVASCRIPT",
            value: 60,
        }
    ],
    achievements: [
        {
            id: 1,
            title: "Worker of the Year",
            year: "2019"
        },
        {
            id: 2,
            title: "Worker of the Year",
            year: "2020"
        }
    ],
    objective: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quidem, natus, laboriosam quasi earum necessitatibus nobis repellendus id ullam sint animi minus! Temporibus enim officiis repellendus est consequatur voluptatum distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quidem, natus, laboriosam quasi earum necessitatibus nobis",
    education: [
        {
            id: 1,
            university: "Ocean University",
            year: 2013,
            grade: "4.2",
            degree: "Masters in Engeeneering"
        },
        {
            id: 2,
            university: "Ocean University",
            year: 2013,
            grade: "4.2",
            degree: "Accounting"
        },

    ],
    experience: [
        {
            id: 1,
            title: "Student",
            company: "China Ltd",
            year_from: "2017",
            year_to: "Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quidem, natus, laboriosam quasi earum necessitatibus nobis repellendus id ullam sint animi minus! Temporibus enim officiis repellendus est consequatur voluptatum distinctio? Lorem ipsum dolor ,",
        },
        {
            id: 2,
            title: "Student",
            company: "China Ltd",
            year_from: "2017",
            year_to: "Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quidem, natus, laboriosam quasi earum necessitatibus nobis repellendus id ullam sint animi minus! Temporibus enim officiis repellendus est consequatur voluptatum distinctio? Lorem ipsum dolor sit ,",
        },
    ],
    reference: [
        {
            name: "Mr Nathanial Karima",
            email: "karimaN@gmail.com",
            phone: "156239095982",
            address: "123 Songling Rd Qingdao China",
            id: 2
        },
        {
            name: "Mr Nathanial Karima",
            email: "karimaN@gmail.com",
            phone: "156239095982",
            address: "123 Songling Rd Qingdao China",
            id: 1
        }

    ],
    certifications: [
        {
            id: 1,
            year: "2018",
            title: "ACCA" 
        },
        {
            id: 2,
            year: "2018",
            title: "ACCA" 
        },
    ],
    languages: [
        "English", "Shona", "Chinese"
    ]

   
}

export default function (state = intialState, action){
    
    switch(action.type){
       
        default: return state;
    }
}