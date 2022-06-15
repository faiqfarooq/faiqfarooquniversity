import React, { useEffect, useState } from 'react';
import Navbaradmin from '../Navbaradmin';
import 'reactjs-popup/dist/index.css';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
  
import '../Portal/Portal.css';
import { showadmissiondata,deleteadmissiondata, updateadmissiondata} from "../../services/api";
const StudentReg = (props) => {

  const [user,setUser]=useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [state, setState] = useState("");
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(e) {
    setState({ ...state, [e.target.name]: [e.target.value] })
}

  useEffect(()=>{
    getdetails();
  },[]);
  
useEffect(()=>{
getdetails();  
},[user]);

  const getdetails = async()=>{
    const result= await showadmissiondata();
    setUser(result.data);
  }
  const handleDelete= async(id)=>{
   console.log(id);
   let response= await (await deleteadmissiondata(id)).data;
   console.log(response)
  }
  // const handleUpdate= async(id)=>{
  //   const fullname=prompt("enter name");
  //   console.log(id);
  //   let response= await (await updateadmissiondata(id,fullname)).data;
  //   console.log(response)
  //  }

  const handleUpdate = (id,state) => {
    
    updateadmissiondata(id, state);
        
        setOpenDialog(!true)
  }
  
    return (
      <> 
<div>
    <Navbaradmin/>
    
<div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
      
      <table className=" table">
        <thead>
          <tr>
            
            <li>
            <th className='numbershow' >#</th>
            <th className='nameshow' >Name</th>
            <th className='fathershow' >Father Name</th>
            <th className='stdcincshow'>CINC</th>
            <th className='rollnumbershow'>Roll Number</th>
            <th className='moreshow'>More</th>
            <th>Delete</th>
            <th>Update</th>
          <th>
            
          </th>
            </li>
          </tr>
          </thead>
        
        </table>
     
        <table className=" table">
        <thead>
        <tr>{user.map((info,i)=>(
          
          <ui>
             <li key={i}>
            
              <th  className='numbershow'  >{i} </th>
               <th className='nameshow'   > {info.fullname}</th>
               <th className='fathershow' >  {info.fathername}  </th>
               <th className='stdcincshow' >  {info.cincstudent}</th>
               
               <th  className='moreshow'  >   
               
               <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           Candidate More Information
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className='row'>
              <div className="col-6">
              <label className='mb-1'> <b>Father CINC</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.cincfather}`} ></input>
                          
                          <label className='mb-1'> <b>Country</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.country}`} ></input>
                          <label className='mb-1'> <b>State</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.state}`} ></input>
                          <label className='mb-1'> <b>City</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.city}`} ></input>
                          <label className='mb-1'> <b>city</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.city}`} ></input>
                          <label className='mb-1'> <b>Permananet Address</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.paddress}`} ></input>
                          <label className='mb-1'> <b>Mailing Address</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.maddress}`} ></input>
                          <label className='mb-1'> <b>Postal Code</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.Zip}`} ></input>
              </div>
              <div className="col-6">
             
                         <label className='mb-1'> <b>Email</b> </label>
                          <input type="email" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.email}`} ></input>
                          <label className='mb-1'> <b>Markes Obtained(Metric)</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.metricomaks}`} ></input>
                          <label className='mb-1'> <b>Total Marks(Metric)</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.metricfullmarks}`} ></input>
                          <label className='mb-1'> <b>Obtained Marks(Inter)</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.interomarks}`} ></input>
                          <label className='mb-1'> <b>Total Marks(Inter)</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" disabled value={`${state?.interfullmarks}`} ></input>
              </div>
            </div>
          <ui>
             <li >
            
          
           
                          
                        
                    
             
               </li>
               </ui>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          
        </DialogActions>
      </Dialog>
  
  
  </th>
  <th>  <Button variant="outlined" 
              color="primary" onClick={()=>{handleClickOpen();setState(info)}}>
        More
      </Button></th>
           <th> <button type='button' className="btn btn-danger" onClick={()=>handleDelete(info._id)}>Delete</button></th>  
           <th> <button type='button' className="btn btn-danger" onClick={()=>{setOpenDialog(true);setState(info)}}>Update</button></th>    
                                         
                </li> 
            
          </ui>
             
             
              
            ))}   </tr> 


 </thead>
        
        </table>

       
            {/* <tr>{props.hero.map((info,i)=>(
              <><th>   {i}  </th><th>   {info.firstname}   </th><th>   {info.lastname} </th><th>  {info.email} </th><th>   {info.password} </th> <th>   {info.paddress} </th> <th>   {info.maddress} </th> <th>   {info.country} </th><th>   {info.state} </th><th>   {info.city} </th><th>   {info.zip} </th></>

             
             
              
            ))}</tr> */}
       
          {/* <tr>
            <th scope="row">{props.hero.index}</th>
            <td>{props.hero[0].name}</td>
            <td>{props.hero[0].email}</td>
            <td>{props.hero[0].country}</td>
            <td>{props.hero[0].gender}</td>
            <td>{props.hero[0].userstatus}</td>
            <td>{props.hero[0].password}</td>
            <td>{props.hero[0].picture}</td>
            <td>{props.hero[0].newcom}</td>
          </tr>
           */}
      
                </div>
                <div className='col-1'>
                </div>
            </div>
</div>




{
  openDialog &&
  <div className="overly" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="form-popup p-1" style={{ height: "auto ", width: "800px", background: "#ffffff", borderRadius: "10px" }}>
          {
              //`${state?.studentName},${state?.registrationNumber},${state?._id}`  
              <form>
                 <button className="btn btn-success" style={{ marginLeft: "auto", marginTop: "20px" }}
              onClick={()=>{setOpenDialog(true)}}>Close </button>
                
               
                  <h3 className="text-center">Update Student Information</h3>
                  <div className="container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "600px", height: "800px" }}>
                      
                  
                  <div className='row'>
                    <div className='col-6'>
                    <label className='mb-1'> <b>Full Name</b> </label>
                          <input type="text" className="form-control mb-3" name="fullname" id="txt" value={`${state?.fullname}`} onChange={(e) => handleChange(e)} ></input>
                  
                     
                          <label className='mb-1'> <b>Candidate CNIC</b> </label>
                          <input type="number" className="form-control mb-3" name="cnic"  id="txt" value={`${state?.cincstudent}`} onChange={(e) => handleChange(e)} ></input>

                     
                         

                    
                          <label className='mb-1'> <b> Permanent Address</b> </label>
                          <input type="text" className="form-control mb-3" name="email"  id="txt" value={`${state?.paddress}`} onChange={(e) => handleChange(e)} ></input>

                          <label className='mb-1'> <b>Mailing Address</b> </label>
                          <input type="text" className="form-control mb-3" name="password"  id="txt" value={`${state?.maddress}`} onChange={(e) => handleChange(e)} ></input>

                  
                    
                          <label className='mb-1'> <b>State</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.state}`} onChange={(e) => handleChange(e)} ></input>

               
                          <label className='mb-1'> <b>City</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.city}`} onChange={(e) => handleChange(e)} ></input>

                     
                          <label className='mb-1'> <b>zip</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.zip}`} onChange={(e) => handleChange(e)} ></input>
                    </div>
                    <div className='col-6'>
                    <label className='mb-1'> <b>Email</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.email}`} onChange={(e) => handleChange(e)} ></input>

                     
                          <label className='mb-1'><b> Father Name</b></label>
                          <input type="text" className="form-control mb-3" name="disease"  id="txt" value={`${state?.fathername}`} onChange={(e) => handleChange(e)} ></input>

                    
                          <label className='mb-1'> <b>Father CINC</b> </label>
                          <input type="number" className="form-control mb-3" name="date"  id="txt"  value={`${state?.cincfather}`} onChange={(e) => handleChange(e)} ></input>
                    <label className='mb-1'> <b>Obtained Marks(Metric)</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.metricomaks}`} onChange={(e) => handleChange(e)} ></input>

                          <label className='mb-1'> <b>Total Marks (Metric)</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.metricfullmarks}`} onChange={(e) => handleChange(e)} ></input>

                   
                          <label className='mb-1'> <b>Obtained Marks(Inter)</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.interomarks}`} onChange={(e) => handleChange(e)} ></input>

                    
                          <label className='mb-1'> <b>Total Marks(Inter)</b></label>
                          <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.interfullmarks}`} onChange={(e) => handleChange(e)} ></input>

                    </div>
                  </div>
                          

                  <div className="child">
                          
                          <button className="btn btn-success" style={{ marginLeft: "170px", marginBottom: "100px" }}
                  onClick={() => handleUpdate(user._id,state)}>Update </button>
                          </div>
                          
                    


                  </div>
                 
                      
                  </form>



          }
          
      </div>
  </div>

}






</>
     );
}
 
export default StudentReg;