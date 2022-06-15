
import './App.css';
import Homepage from './components/homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginstudent from './components/Loginstudent';
import TeacerLogin from './components/TeacerLogin';
import Admin from './components/Portal/Admin';
import StudentReg  from '../src/components/Portal/StudentReg';
import Dashboard from './components/Portal/Dashboard';
import Loginform from './components/Login/Loginform';
import { useState } from 'react';
import Nopage from './components/Nopage';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Eventcreation from './components/Eventcreation/Eventcreation';
import EvntCreation from './components/Eventcreation/EvntCreation';
import BookMain from './components/homepage/BooksMain';
import BookCart from './components/homepage/BookCart';
import BookAMAZ from './components/homepage/BookAMAZ';
import Forgetpage from './components/Login/Fogetpage';
import Welcome from './components/Afterlogin/Welcome';

function App() {
  const [values,setValues]=useState([]);
const faiq=(value)=>{
  setValues((prev)=>{
    return[...prev,value];
  } )
}
const [loginvalues,setLoginvalues]=useState([]);
const logval=(loginvalues)=>{
  setLoginvalues((prev)=>{
    return[...prev,loginvalues];
  } )
}






  // const faiq=(value)=>{
//   faiq(value);

// }

  return (
    <div >
     
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
          <Route path='/teacherlogin' element={<TeacerLogin/>}/>
        <Route path="/studentlogin" element={<Loginstudent />} />
        <Route path="/admin" element={<Dashboard />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrstudent" element={<Admin func={faiq}/>} />
        <Route path="/showregstudent" element={<StudentReg hero={values} />} />
        <Route path="/sign-form" element={<Loginform loginfunc={logval} /> }/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/user' element={<Welcome/>}/>
        <Route path='/About-us' element={<About />}/>
        <Route path='/Event-creation' element={<EvntCreation />}/>
        <Route path='/Shop' element={<BookMain />}/>
        <Route path='/cart' element={<BookCart />}/>
        <Route path='/forget-password' element={<Forgetpage />}/>
        
        
          {/* <Route path="contact" element={<Contact />} /> */} 
          <Route path="*" element={<Nopage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
