import React, {useState} from "react";
import signpic from "../images/signin-image.jpg";
import { NavLink, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../reg.css';

const Registration = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
   name:"",email:"",password:""
  });
  let name, value;
const handleInputs = (event) => {
console.log(event);
name = event.target.name;
value = event.target.value;

setuser({...user, [name]:value});
console.log(user);

}



  const postData = async (e) => {
    e.preventDefault();
      const { name, email, password} = user;
     if (user === !user || !name || !email || !password) {
      window.alert("please fill the details below");
      console.log("please fill the details below");
     } else {
        
      const res = fetch("/signup",{
        method:"POST",
        headers:{
          "content-Type" : "application/json"
        },
        body:JSON.stringify({
          name, email, password
        })
      });
      const data =  (await res).json;
if (data.status === 400 ||!data ) {
    window.alert("email already exist");
    console.log("email already exist");
    
  } else {
    window.alert("signup success! please login.");
    console.log("signup success! please login.");
    navigate("./SignIn");
  }


     }

     
  
}

  return (
    <>
     

<section className="signup">
    <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h2 className="form-title">Registration</h2>
                <form method="POST" className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name"   value={user.name} onChange={handleInputs} autoComplete="off"  placeholder="Your Name"/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                        <input type="email" name="email" id="email"  value={user.email} onChange={handleInputs} autoComplete="off"  placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="password" id="pass"  value={user.password} onChange={handleInputs} autoComplete="off"  placeholder="Password"/>
                    </div>
                    
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink href="#" className="term-service">Terms of service</NavLink></label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={postData}/>
                    </div>
                </form>
            </div>
            <div className="signup-image">
            <figure><img src= {signpic} alt="signup pic" /></figure>
                <NavLink to="/SignIn" className="signup-image-link">I am already member</NavLink>
            </div>
        </div>
    </div>
</section>
    </>
  )
}
export default Registration