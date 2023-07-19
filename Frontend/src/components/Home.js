import React from "react";
import Homee from "../images/home-img.webp";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
const Home = () => {
    return (
        <>
            <section className="home" id="home">
    <div className="content">
        <h3>WELCOME TO MJCET LOGISTICS</h3>
        <p>Now order online and get it delivered to you in just few minutes.</p>
        <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal">
 Order now
</button>
    </div>
    <div className="image">
    <figure><img src= {Homee} alt="home pic" /></figure>

   

    </div>

</section>

{/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">register</button>
        <button type="button" className="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</div> */}




<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">oops Sorry !</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
     <h1> Hey ! <br></br>Have you registered / Logined ?</h1>
      </div>
      <div className="modal-footer">
        <button type="button"  className="btn" data-dismiss="modal">Close</button>
        <NavLink type="button" to="./Registration" className="btn">register</NavLink>
        <NavLink type="button" to="./SignIn" className="btn">Login</NavLink>
      </div>
    </div>
  </div>
</div>


        </>
    )
}
export default Home