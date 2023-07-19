import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
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

//  import '../css/checkin.css';
const checkin = () => {

    const product = [
        {
            id: 0,
            image: wada,
            title: 'Z Flip Foldable Mobile',
            price: 120,
        },
        {
            id: 1,
            image: idly,
            title: 'Air Pods Pro',
            price: 60,
        },
        {
            id: 2,
            image: homeimg,
            title: '250D DSLR Camera',
            price: 230,
        },
        {
            id: 3,
            image: puri,
            title: 'Head Phones',
            price: 100,
        }
    ];

    const categories = [...new Set(product.map((item)=>
        {return item}))]
        let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        
        return(
            `<div className='box'>
                <div className='img-box'>
                    <img className='images' src=${image}></img>
                </div>
            <div className='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')
    
    var cart =[];
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    
    function displaycart(){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length===0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = " $ "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total*1.15+".00";
                return(
                        `<div className='cart-item'>
                    <div className='row-img'>
                        <img className='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i className='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    
        
    }
        
    return (
        <>
 <div className="header">
            <p className="logo">LOGO</p>
            <div className="cart"><i className="fa-solid fa-cart-shopping"></i><p id="count">0</p></div>
        </div>
        <div className="container">
            <div id="root"></div>
            <div className="sidebar">
                <div className="head"><p>My Cart</p></div>
                <div id="cartItem">Your cart is empty</div>
                <div className="foot">
                    <h3>Total</h3>
                    <h2 id="total">$ 0.00</h2>
                </div>
            </div>
        </div>
        </>
    )
}
export default checkin










        