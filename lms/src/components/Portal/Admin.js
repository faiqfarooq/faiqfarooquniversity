import React,{useState} from 'react';
import Navbaradmin from '../Navbaradmin';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { addadmissiondata } from '../../services/api';
const Admin = (props) => {
  const nav = useNavigate();
  const [user, setUser]=useState(
    {
      index:'',fullname:'',cincstudent:'',fathername:'',cincfather:'',paddress:'',maddress:'',country:'',state:'',city:'',zip:'',email:'',password:'',metricomaks:'',interomarks:'',metricfullmarks:'',interfullmarks:''
    }
  );
  let name, value;
  const handleInputs = (e) =>{
    name= e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value });
  }
  const handleSubmit=async (e)=>{
    e .preventDefault();
    props.func(user);
    alert('Registeration form is submitted successfully')
    await addadmissiondata(user );
    nav("/sign-form");
    };
  
    return ( 
        <div>
        
            <h1 className='py-3 text-center'>Student online Managments System </h1>
            <div className='row '>
                <div className='col-1'></div>
                <div className='col-10 py-3'>
                    <h1 className='text-center text-warning py-36'></h1>
                    <h3 className='text-center py-3'>  Enter student information</h3>
                    <form onSubmit={handleSubmit} > 

                    <div className="mb-3">
                    <div className="row">
                   
        <div className="col">
        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control" value={user.fullname} name='fullname' onChange={handleInputs}  required placeholder="Full Name " aria-label="Full name" />
          <div id="fullname help" className="form-text">We'll never share your name with anyone else.</div>
        </div>
        <div className="col">
        <label htmlFor="exampleInputEmail1"  className="form-label">Candidate CINC</label>
          <input type="text" className="form-control" value={user.cincstudent} name='cincstudent' onChange={handleInputs}  required placeholder="0000011111112 " aria-label="Last name" />
          <div id="student cinc help" className="form-text">We'll never share your CINC with anyone else.</div>
        </div>
      </div>
         
        </div>
        <div className="mb-3">
                    <div className="row">
                    <label htmlFor="exampleInputFathername" className="form-label">Enter Father</label>
        <div className="col">
          <input type="text"  required className="form-control" value={user.fathername} name='fathername' onChange={handleInputs} placeholder="Father Full Name" aria-label="Father Name" />
        </div>
        <div className="col">
          <input type="text"  required className="form-control" value={user.cincfather} name='cincfather' onChange={handleInputs} placeholder="0000011111112  " aria-label="Last name" />
        </div>
      </div>
          <div id="emailHelp" className="form-text">We'll never share your father name and CINC with anyone else.</div>
        </div>

        <div className="mb-3">
                    <div className="row">
                    
        <div className="col">
        <label htmlFor="exampleInputMmarks" className="form-label">Enter Metric Obtained Marks</label>
          <input type="number" className="form-control" value={user.metricomaks} name='metricomaks'  required onChange={handleInputs} placeholder="Obtained Marks" aria-label="Metric obtained Marks" />
        </div>
        <div className="col">
        <label htmlFor="exampleInputMetricmarks" className="form-label">Enter Metric Full Marks</label>
          <input type="number" className="form-control" value={user.metricfullmarks} name='metricfullmarks'  required onChange={handleInputs} placeholder="Full Marks " aria-label="Metric Full Marks" />
        </div>
        <div className="col">
        <label htmlFor="exampleInputMetricmarks" className="form-label">Enter Intermediate Obtained Marks</label>
          <input type="text" className="form-control" value={user.interomarks} name='interomarks'  required onChange={handleInputs} placeholder="Obtained Marks  " aria-label="Intermediate obtained marks" />
        </div>
        <div className="col">
        <label htmlFor="exampleInputMetricmarks" className="form-label">Enter Intermediate Full Marks</label>
          <input type="text" className="form-control" value={user.interfullmarks} name='interfullmarks'  required onChange={handleInputs} placeholder="Full marks " aria-label="Intermediate full marks" />
        </div>
      </div>
          <div id="emailHelp" className="form-text">We'll never share your father name and CINC with anyone else.</div>
        </div>


        
        <div className="mb-3">
        <div className="row g-3">
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Permenant Address</label>
          <input type="text" value={user.paddress}  required name='paddress' onChange={handleInputs} className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Mailing Address</label>
          <input type="text" className="form-control" required value={user.maddress} name='maddress' onChange={handleInputs} id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputCity" className="form-label">Country</label>
          <select className="form-select"  required value={user.country} name='country' onChange={handleInputs} id="specificSizeSelect">
      <option value="DEFAULT" >Choose...</option>
      <option value="Pakistan">Pakistan</option>
    </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" value={user.state} name='state'  required onChange={handleInputs} className="form-select" placeholder='Select State'>
            
            <option >Choose...</option>
            <option value="AJK" >AJK</option>
            <option value="Balochistan">Balochistan</option>
            <option value="KPK">KPK</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
           
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputZip" className="form-label">City</label>
          <input type="text" value={user.city}  required name='city' onChange={handleInputs} className="form-control" id="inputCity" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" value={user.zip}  required name='zip' onChange={handleInputs} className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
        </div>
       
      </div>
          <div id="emailHelp" className="form-text">We'll never share your address with anyone else.</div>
        </div>





        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={user.email} name='email' onChange={handleInputs} className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" required value={user.password} name='password'onChange={handleInputs} className="form-control" id="exampleInputPassword1" />
          <Link to="/forgetpassword">Forget password? </Link>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>Already have a account? <Link to="/sign-form" className='py-5 '>Login here</Link></div>
     
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}
 
export default Admin;