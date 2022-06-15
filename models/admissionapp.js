import mongoose from "mongoose";
// const bcrypt = require('bcrypt');

const admissionappstructure=mongoose.Schema({
    email:{
        type :String,
        required:[true,"please add your email"],
        unique:true
    },
    password:{
        type :String,
        required:[true,"please add your password"]
    },
    fullname:{
        type :String,
        required:[true,"please add your full name"]
    },
    cincstudent:{
        type :String,
        required:[true,"please add your CINC"]
    },
    fathername:{
        type :String,
        required:[true,"please add your Father Name"]
    },
    cincfather:{
        type :String,
        required:[true,"please add your Father CINC"]
    },
    paddress:{
        type :String,
        required:[true,"please add your Permament address"]
    },
    maddress:{
        type :String,
        required:[true,"please add your Mailing Address"]
    },
    country:{
        type :String,
        required:[true,"please add your Country"]
    },
    state:{
        type :String,
        required:[true,"please add your State"]
    },
    zip:{
        type :String,
        required:[true,"please add your Postal Code"]
    },
    metricomaks:{
        type :String,
        required:[true,"please add your metric obtained marks "]
    },
    interomarks:{
        type :String,
        required:[true,"please add your inter obtained marks"]
    },
    metricfullmarks:{
        type :String,
        required:[true,"please add your metric total marks"]
    },
    interfullmarks:{
        type :String,
        required:[true,"please add your Inter total marks"]
    },
    
    // fullname:String,
    // cincstudent:String,
    // fathername:String,
    // cincfather:String,
    // paddress:String,
    // maddress:String,
    // country:String,
    // state:String,
    // city:String,
    // zip:String,
    // email:String,
    // password:String,
    // metricomaks:String,
    // interomarks:String,
    // metricfullmarks:String,
    // interfullmarks:String
});




const admissionappModel=mongoose.model('admissiondata',admissionappstructure);

export default admissionappModel;







