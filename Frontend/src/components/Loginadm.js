import React, {useState} from "react";
import signupic from "../images/signup-image.jpg";
import { NavLink,useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Admin = () => {
    const navigate = useNavigate();
   
   
    const [user, setuser] = useState({
     email:"",password:""
    });
    let name, value;
  const handleInputs = (event) => {
  console.log(event);
  name = event.target.name;
  value = event.target.value;
  
  setuser({...user, [name]:value});
  console.log(user);
  
  }

 const SignIn = async (e) => {
        e.preventDefault();
        const {  email, password} = user;
        if (email==="Team3@gmail.com" && password==="799391") {
            navigate('/Adminn/Starter')
           
           } else  {
                 window.alert("please fill the details below");
            
            
          }

           }
        
        
    

  return (
  
    <>
             <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                    <figure><img src= {signupic} alt="signup pic" /></figure>
                        
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Admin Login</h2>
                        <form method="POST" className="register-form" id="login-form">
                        <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email"  value={user.email} onChange={handleInputs} 

 id="email" autoComplete="off" placeholder="Your Email"/>
                            </div>
                            <div className="text-danger"></div>
                            
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password"  value={user.password} onChange={handleInputs} 

id="password" autoComplete="off" placeholder="Password"/>
                            </div>
                            <div className="text-danger"></div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={SignIn}/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></NavLink></li>
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></NavLink></li>
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-google"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
            
             </>
   
  )
  }


export default Admin
