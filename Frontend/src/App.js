import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";



import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Registration from "./components/Registration";
import Contact from "./components/Contact";

import Order from "./components/Order";
import SignIn from "./components/SignIn";


import FullLayout from "./layouts/FullLayout";
import Starter from "./views/Starter";
import Login from "./components/Loginadm";
// import Checkin from "./components/checkin";

import Tables from "./views/ui/Tables";
import Forms from "./views/ui/Forms";
import Error from "./components/Error";




const App =

 () => {
  
  return (

    <>
   
 
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          
          <Route exact path="/Menu" element={<Menu />}></Route>
          <Route exact path="/Registration" element={<Registration />}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Admin" element={<Login />}></Route>


          <Route exact path="/Adminn" element={<FullLayout />} >
          <Route path="/Adminn/Starter" element={<Starter />} />
          <Route path="/Adminn/table" element={<Tables />} />
          <Route path= "/Adminn/forms" element={<Forms />} />
          </Route>
          <Route path ="*" element= {<Error />} />
     
          <Route exact path="/Order" element={<Order />}></Route>
          <Route exact path="/Menu/Order" element={<Order />}></Route>
          <Route exact path="/Menu/Order/Menu" element={<Order />}></Route>
          <Route exact path="/Registration/SignIn" element={<SignIn />}></Route>
          <Route exact path="/Registration/SignIn/Registration" element={<Registration />}></Route>
          <Route exact path="/Registration/SignIn/Registration/SignIn" element={<SignIn />}></Route>


        </Routes>
        
        </>
    
  )
}
export default App