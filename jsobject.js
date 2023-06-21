

var obj ={
    education:{
        SEE:{
            name:"Monika",
            school:"Kaski Modernized Academy",
            GPA:"3.45"
        }
    },

    language:[
        "Korean",
        "Japanese",
        "turkish"
    ],

    skills:[
        {
            skill:"HTML",
            teacher:"Bipin"
        },
        {
            skill:"CSS",
            teacher:"Nu"
        },
        {
            skill:"JS",
            teacher:"Bipin"
        }
    ],

    subjects:{
        icp:{
            wrl:{
                supervisor:"Sandip Gurung"
            },

            Python:{
                supervisor:"Devendra Thapa"
            },
            Java:{
                supervisor:"Sushil Poudel"
            }
        }
    }
}

/*
obj->education->SEE
var obj ={
    education:{
        SEE:{
            name:"Monika",
            scholl:"Kaski Modernized Academy",
            GPA:"3.45"
        }
    }
}

*/

console.log(obj.education.SEE);

/* obj -> skills ko 2nd index -> teacher ko name display
var obj={
    skills:{
        {
            0 th index skills teacher name
            teacher:"Bipin"
        }

    }
}
*/
console.log(obj.skills[2].teacher);

/* obj -> subjects-> icp-> wrl -> supervisor
var obj={
    subjects:{
        icp:{
            wrl:{
                supervisor:"Sandip Gurung"
            }
        }
    }
}

*/
console.log(obj.subjects.icp.wrl.supervisor);

