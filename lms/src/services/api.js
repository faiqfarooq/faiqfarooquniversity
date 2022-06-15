import axios from "axios";

const url="http://localhost:5000";


export const addadmissiondata=async(user) =>{
    return await axios.post(`${url}/lms/registrstudent`, user,{  credentials:true, });
    
}
export const showadmissiondata=async() =>{
    return await axios.get(`${url}/lms/showregstudent`);
}
export const getlogindata=async(userlogin) =>{
    return await axios.post(`${url}/lms/sign-form`,userlogin);
}
export const deleteadmissiondata=async(id) =>{
    return await axios.delete(`${url}/lms/showregstudent/${id}`);
}
export const updateadmissiondata=async(id,state) =>{
    return await axios.put(`${url}/lms/showregstudent/${id}`,state);
}

