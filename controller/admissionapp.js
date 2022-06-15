import admissionappModel from "../models/admissionapp.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../Middleware/Auth.js";
const JWT_SECRET_KEY="faiqfarooq";


export const getadmissiondata=async(req,res) =>{

     try {
        const newadmissions= await admissionappModel.find();
         res.json(newadmissions);
     } catch (error) {
         console.log("Not found .... ");
     }
};
export const getUser= async (req,res)=>{
    const Userid=req.id;
    try {
        const   user = await admissionappModel.findById(Userid)
    } catch (error) {
        return new Error(error);        
    }
    if(!user){
        return res.status(404).json({message:"user not found"});
        console.log("user not found");
    }
    return res.status(200).json({user})
};
export const deleteadmissiondata=async (req,res) =>{
    console.log("Delete is working");
    const newid= req.params.id;
     console.log(newid);
    try {
        await admissionappModel.findByIdAndRemove(newid);
        res.json("deleted")
        
    } catch (error) {
        console.log("Error during deleting .... ");
    }
};

export const updateadmissiondata=async (req,res) =>{
    console.log("Update is working");
    // const hash = bcrypt.hashSync(req.body.password, 12);

    try {
       
        const ful=await admissionappModel.findByIdAndUpdate(req.body._id,
            {
                $set:{
                    fullname:req.body.fullname[0],
                    cincstudent:req.body.cincstudent[0],
                    fathername:req.body.fathername[0],
                    cincfather:req.body.cincfather[0],
                    paddress:req.body.paddress[0],
                    maddress:req.body.maddress[0],
                    country:req.body.country[0],
                    state:req.body.state[0],
                    // city:req.body.city[0],
                    zip:req.body.zip[0],
                    email:req.body.email[0],
                    password:req.body.password[0],
                    metricomaks:req.body.metricomaks[0],
                    interfullmarks:req.body.interfullmarks[0],
                    metricfullmarks:req.body.metricfullmarks[0],
                    interomarks:req.body.interomarks[0]}},{new:true});
            console.log("updated")
        
        
        res.json("Updated")
      
      
} catch (error) {
        console.log(error)
}


    // const newid= req.body.id;
    // const newfullname=req.body.fullname;
    //  console.log(newid);
     
    // try {
    //     if(newfullname){
    //     const ful=await admissionappModel.findById(newid);
    //     ful.fullname=newfullname;
    //     ful.save();
    //     res.json("Updated")
    //     }
    //     else{
    //         console.log("empty");
    //         res.json("empty name");
    //     }
    // } catch (error) {
    //     console.log("Error during Updating .... ");
    // }
};



export const userlogin=async(req,res) =>{
 
 
    try {
        const email = req.body.email;
        const password = req.body.password;
    
        if (!email || !password) {
          return res.status(400).json({error:'Please fill the data'})        }
        const userlogin = await admissionappModel.findOne({ email:email });
  

        const isMatch= await bcrypt.compare(password,userlogin.password);
        const token = jwt.sign({id:userlogin._id},JWT_SECRET_KEY,{
            expiresIn:"20s"
           });res.cookie(String(userlogin._id,token),{
            path:"/",
            expires: new Date(Date.now()+ 1000*30  ),
            httpOnly:true,
            sameSite: 'lax'
           })

       if(!isMatch){
        res.status(400).json({error:"Invalid credirentials",user:userlogin,token})
console.log("unsucessful")
       }
       else{
        res.json({message: "User Signin Success"});
        console.log("success");
        console.log(token);
       }
  
    
        // res.cookie("jwt",token,{
        //     withCredentials:true,
        //     httpOnly:false,
        //     maxAge : maxAge*1000,
        // });
        // res.status(201).json({admissionapp:admissionapp._id,created:true})


    } catch (error) {
      console.log("login error");
    }
   
   
};









export const postadmissiondata= async(req,res) =>{

    const fullname=req.body.fullname;
    const cincstudent=req.body.cincstudent;
    const fathername = req.body.fathername;
    const cincfather=req.body.cincfather;
    const paddress=req.body.paddress;
    const maddress=req.body.maddress;
    const country=req.body.country;
    const state = req.body.state;
    const city=req.body.city;
    const zip=req.body.zip;
    const email=req.body.email;
    const password=req.body.password;
    const metricomaks=req.body.metricomaks;
    const interomarks=req.body.interomarks;
    const metricfullmarks=req.body.metricfullmarks;
    const interfullmarks=req.body.interfullmarks;
    const hash = bcrypt.hashSync(password, 12);
    const epassword=hash;
    const existingUser = await admissionappModel.findOne({ email: email });
    if (existingUser)
    return console.log("Same Email exists");


     const newadmission = new admissionappModel({
        fullname,cincstudent,fathername,cincfather,paddress,maddress,country,state,city,zip,email,password:epassword,metricomaks,interomarks,metricfullmarks,interfullmarks,
           });
        
    
   try {
  
 
    await newadmission.save();
       res.json(newadmission);
      
    //    const token = createToken(admissionapp._id);
    //    res.cookie("jwt",token,{
    //     credentials:true, 
    //        maxAge : maxAge*1000,
    //    });
       res.status(201).json({admissionapp:admissionapp._id,created:true}); 
    

        
   } catch (error) {
       console.log("Not save ... ");
   }



 
   
    // if (password.length < 5)
    // return res
    // .status(400)
    // .json({ msg: "The password needs to be at least 5 characters long." });
   

};









export const tokenverification=async(req,res,next) =>{

    const cookies=req.headers.cookie;
    const token=cookies.split("=")[1];
    console.log(token);



    //     const authHeader = req.headers["authorization"];
    //     const token = authHeader.split(" ")[1];
      if(!token){
        res.status(404).json({message:"No token founf"});
      }
        
      
        jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
          if (err)
          { return res.Status(403).json({message:"Invalid Token"});
        }
          console.log(user.id);
          req.id=user.id;
        });
          next();
    
};



export const refToken=(req,res,next)=>{
    const cookies=req.headers.cookie;
    const prevToken=cookies.split("=")[1];
    if(!prevToken){
        res.status(400).json({message: "couldn't find token"})
    }
    jwt.verify(String(prevToken),JWT_SECRET_KEY,(err,user)=>{
        if(err){
            console.log(err);
            return res.state(403).json({message:"Authentication Failed"})
        }
        res.clearCookie(`${user.id}`);
        req.cookie[`${user.id}`]="";

        const token = jwt.sign({id:user.id},JWT_SECRET_KEY,{
            expiresIn:"20s"
           });res.cookie(String(user.id,token),{
            path:"/",
            expires: new Date(Date.now()+ 1000*30  ),
            httpOnly:true,
            sameSite: 'lax'
           });
           req.id=user.id;

           next();

    })
}
