import React, {useState} from "react";
import signpic from "../images/order.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../reg.css';


const Order = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    Name:"",PhNumber:"",ChooseTime:"",DeliveryAddress:"",OrderDetails:"",OrderPrice:""
  });
  let name, value;
  const handleInputs = (event) => {
  console.log(event);
  name = event.target.name;
  value = event.target.value;
  
  setuser({...user, [name]:value});
  console.log(user);
  }



  const postOrder = async (e) => {
    e.preventDefault();
    const{Name,PhNumber,ChooseTime,DeliveryAddress,OrderDetails,OrderPrice} = user;
    if (user === !user || !Name || !PhNumber || !ChooseTime || !DeliveryAddress || !OrderDetails || !OrderPrice) {
      window.alert("please fill the details below to Order");
      console.log("please fill the details below to Order");
     } else {
        
      const response = fetch("/Order",{
        method:"POST",
        headers:{
          "content-Type" : "application/json"
        },
        body:JSON.stringify({
          Name,PhNumber,ChooseTime,DeliveryAddress,OrderDetails,OrderPrice
        })
      });
      const data =  (await response).json;
if (data.status === 400 ||!data ) {
    window.alert("email already exist");
    console.log("email already exist");
    
  } else {
    window.alert("order success! you will recieve a call by our delivery agent with order.");
    console.log("order success! you will recieve a call by our delivery agent with order.");
    navigate("/Menu");
  }


     }


  }
  return(
    <>
    <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Orderpage</h2>
                            <form method="POST" className="register-form" id="register-form" >
                                <div className="form-group">
                                    <label htmlFor="Name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="Name"  id="name"   value={user.Name} onChange={handleInputs} autoComplete="off" placeholder="Your Name"/>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="PhNumber"><i className="zmdi zmdi-phone"></i></label>
                                    <input type="number" name="PhNumber"  id="email"   value={user.PhNumber} onChange={handleInputs} autoComplete="off" placeholder="Your phone number"/>
                                </div>
                                
                                <div className="form-group">
                               
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                 name="ChooseTime"  id="chooseTime" value={user.ChooseTime} onChange={handleInputs}>
  <option selected>Choose time for your Order</option>
                  <option value="10:00 Am-10:15AM">10:00 Am-10:15AM</option>
                    <option value="10:15Am-10:30AM">10:15Am-10:30AM</option>
                    <option value="10:30 Am-10:45AM">10:30 Am-10:45AM</option>
                    <option value="10:45 Am-11:00AM">10:45 Am-11:00AM</option>
                    <option value="11:00 Am-11:15">11:00 Am-11:15Am</option>
                    <option value="11:15 Am-11:30AM">11:15 Am-11:30AM</option>
                    <option value="11:30 Am-11:45AM">11:30 Am-11:45AM</option>
                    <option value="11:45 Am-12:00PM">11:45 Am-12:00PM</option>
                    <option value="12:15 PM-12:30PM">12:15 PM-12:30PM</option>
                    <option value="12:30 PM-12:45 PM">12:30 PM-12:45 PM</option>
                    <option value="12:45 PM-1:00 PM">12:45 PM-1:00 PM</option>
                    <option value="1:00 PM-1:15 PM">1:00 PM-1:15 PM</option>
                    <option value="1:15 PM-1:30 PM">1:15 PM-1:30 PM</option>
                    <option value="1:30 PM-1:45 PM">1:30 PM-1:45 PM</option>
                    <option value="1:45 PM-2:00 PM">1:45 PM-2:00 PM</option>
                    <option value="2:00 PM-2:15 PM">2:00 PM-2:15 PM</option>
                    <option value="2:15 PM-2:30 PM">2:15 PM-2:30 PM</option>
                    <option value="2:45 PM-3:00 PM">2:45 PM-3:00 PM</option>
                    <option value="3:00 PM-3:15 PM">3:00 PM-3:15 PM</option>
                    <option value="3:15 PM-3:30 PM">3:15 PM-3:30 PM</option>
                    <option value="3:30 PM-3:45 PM">3:30 PM-3:45 PM</option>

</select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="DeliveryAddress"><i className="zmdi zmdi-pin"></i></label>
                                    <input type="text" name="DeliveryAddress" id="name"   value={user.DeliveryAddress} onChange={handleInputs} autoComplete="off" placeholder=" provide delivery address"/>
                                </div>
                               
                                <div className="form-group">
                                    <label htmlFor="OrderDetails"><i className="zmdi zmdi-shopping-cart"></i></label>
                                    <input type="text" name="OrderDetails" id="name"    value={user.OrderDetails} onChange={handleInputs} autoComplete="off" placeholder="Your Orderdetails"/>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="OrderPrice"><i className="zmdi zmdi-money"></i></label>
                                    <input type="text" name="OrderPrice"  id="name"    value={user.OrderPrice} onChange={handleInputs} autoComplete="off" placeholder="Order price"/>
                                </div>
                                
    
    
                                
                                
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink href="#" className="term-service">Terms of service</NavLink></label>
                                </div>
                                
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Confirm Order" onClick={postOrder}   />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src= {signpic} alt="signup pic" /></figure>
                            <NavLink to="./Menu" className="signup-image-link">no check the Menu</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    
    

    </>
  )
}
 
export default Order

 


  
