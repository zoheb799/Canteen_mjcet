import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../contact.css';
const Contact = () => {
    return (
       <>

<section className="contact"> 
    <div className="content">
       <h2>Contact Us</h2>
       <p>If you're wondering about an order, our products, our website, shoot them an email at <NavLink href="mailto:hello@mjcollege.ac.in">Emailid</NavLink> or checkout the <NavLink href="Help&FAQs.html">Help & FAQs section</NavLink> - the answer might me there already!</p>
    </div>
     <div className="container">
       <div className="contactInfo">
         <div className="box">
              <div className="icon"><i class="zmdi zmdi-pin"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>Muffakham Jah College of Engineering & Technology (MJCET), <br/> Mount Pleasant, 8-2-249, Road No. 3, Banjara Hills <br/> Hyderabad, Telangana <br/> 500034 </p>
              </div>
          </div>
          <div className="box">
                <div className="icon"><i class="zmdi zmdi-phone"></i></div>
                <div className="text">
                <h3>Phone</h3>
                <p>+91 9700898392</p>
            </div>
        </div>
        <div className="box">
                <div className="icon"><i class="zmdi zmdi-email"></i></div>
                <div className="text">
                <h3>Email</h3>
                <p>hello@mjcollege.ac.in</p>
            </div>
        </div>
       </div> 
       <div className="contactForm">
        <form action="" method="POST">
            <h2>Send Message</h2>
            <div className="inputBox">
                <input type="text" name="" required="required" placeholder="Full Name"/>
                <span>Full Name</span>
            </div>
            <div className="inputBox">
                <input type="text" name="" required="required" placeholder="Email"/>
                <span>Email</span>
            </div>
            <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message... </span>
            </div>
            <div className="inputBox">
                <input type="submit" name="" value="Send"/>
            </div>
        </form>
       </div>  
       </div>
       </section>
   


       </>
    )
}
export default Contact