import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../Menu.css';
import wada from "../images/wada.webp";
import idly from "../images/idly.jpg";
import homeimg from "../images/home-img.webp";
import puri from "../images/puri.jpg";
import vegbiryani from "../images/vegbiryani.jpg";
import lemonrice from "../images/lemonrice.jpg";
import vegsandw from "../images/vegsandwitch.jpg";
import Spring from "../images/Spring-Roll.webp";
import samosa from "../images/samosa.jpg";
import milktea from "../images/milktea.webp";
import greentea from "../images/greentea.webp";
import badammilk from "../images/badammilk.jpg";
import Coffee from "../images/Coffee.jpg";
import mountaindew from "../images/mountaindew.webp";
import cocacola from "../images/cocacola.jpg";
import pepsi from "../images/pepsi.webp";
import thumbsup from "../images/thumbsup.webp";
import sting from "../images/sting.webp";
import mirinda from "../images/mirinda.jpeg";
import creambellcoffee from "../images/creambellcoffee.jpg";
import chocomilk from "../images/chocomilk.webp";
import masqatimilk from "../images/masqatimilk.webp";
import trolichi from "../images/trolichi.webp";
import tromixed from "../images/tromixed.jpg";



const Menu = () => {
    return (
        <>

<section className="popular" id="popular">
    <h1 className="heading">Menu</h1>
    <h2 className="heading">Food-Menu</h2>
    <div className="box-container">
       <div className="box">
        <span className="price">Rs.40</span>
        <figure><img src= {wada} alt="signup pic" /></figure>
        <h3>Wada</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./checkin" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.40</span>
        <figure><img src= {idly} alt="signup pic" /></figure>
        <h3>Idly</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.40</span>
        <figure><img src= {homeimg} alt="signup pic" /></figure>
        <h3>Dosa</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.40</span>
        <figure><img src= {puri} alt="signup pic" /></figure>
        <h3>Puri</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.60</span>
        <figure><img src= {vegbiryani} alt="signup pic" /></figure>
        <h3>Veg Biryani</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.50</span>
        <figure><img src= {lemonrice} alt="signup pic" /></figure>
        <h3>Lemon Rice</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.40</span>
        <figure><img src= {vegsandw} alt="signup pic" /></figure>
        <h3>Veg Sandwitch</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.40</span>
        <figure><img src= {Spring} alt="signup pic" /></figure>
        <h3>Veg Roll</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.15</span>
        <figure><img src= {samosa} alt="signup pic" /></figure>
        <h3>Samosa</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.15</span>
        <figure><img src= {milktea} alt="signup pic" /></figure>
        <h3>Tea</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.20</span>
        <figure><img src= {greentea} alt="signup pic" /></figure>
        <h3>Lemon-Tea</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.20</span>
        <figure><img src= {badammilk} alt="signup pic" /></figure>
        <h3>Badam-Milk</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.15</span>
        <figure><img src= {Coffee} alt="signup pic" /></figure>
        <h3>Coffee</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
       </div>
       <div className="box">
        <span className="price">Rs.20</span>
        <figure><img src= {mountaindew} alt="signup pic" /></figure>
        <h3>Mountain-Dew</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <NavLink to="./Order" className="btn">Order Now</NavLink>
        </div>
        <div className="box">
            <span className="price">Rs.20</span>
            <figure><img src= {cocacola} alt="signup pic" /></figure>
            <h3>Cocacola</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.20</span>
            <figure><img src= {pepsi} alt="signup pic" /></figure>
            <h3>Pepsi</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.40</span>
            <figure><img src= {thumbsup} alt="signup pic" /></figure>
            <h3>ThumsUp</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.20</span>
            <figure><img src= {sting} alt="signup pic" /></figure>
            <h3>Sting</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.20</span>
            <figure><img src= {mirinda} alt="signup pic" /></figure>
            <h3>Mirinda</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.25</span>
            <figure><img src= {creambellcoffee} alt="signup pic" /></figure>
            <h3>Cold Coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.25</span>
            <figure><img src= {chocomilk} alt="signup pic" /></figure>
            <h3>Choco-Milk</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.35</span>
            <figure><img src= {masqatimilk} alt="signup pic" /></figure>
            <h3>Masqati-BadamMilk</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.40</span>
            <figure><img src= {trolichi} alt="signup pic" /></figure>
            <h3>Tropicana-Lichi</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
           <div className="box">
            <span className="price">Rs.40</span>
            <figure><img src= {tromixed} alt="signup pic" /></figure>
            <h3>Tropicana-mixedFruit</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <NavLink to="./Order" className="btn">Order Now</NavLink>
           </div>
         
    </div>

</section>
        </>
    )
}
export default Menu