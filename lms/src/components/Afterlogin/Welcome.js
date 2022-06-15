import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Welcome = () => {
    const [user,setUser] = useState();
    const sendrequest=async()=>{
        const res=await axios.get('http://localhost:5000/lms/user',{
            withCredentials:true
        }).catch(err=>console.log(err));
        const data=await res.data;
        return data
    }
    useEffect(()=>{
        sendrequest.then((data)=>setUser(data.user))
    },[])
    return ( 
        <div>
            <h1>Welcome </h1>
            <h2>You are Logined</h2>
            {user && <h1>{user.fullname}</h1>}
        </div>
        );
}
 
export default Welcome;