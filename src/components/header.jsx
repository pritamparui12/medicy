import React, { useState } from "react";
import './header.css';
import logo from '../assets/logo.png';
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header=()=>{
 
    const [navbar,setnavbar]= useState(false);

    const navcolor=()=>{
        if(window.scrollY>0){
            setnavbar(true);
        }
        else{
            setnavbar(false);
        }
        
        
    }
    window.addEventListener('scroll',navcolor);






    return(
    <>
    <nav className={navbar?'active':''}>
        <div className='logo'>
            <a href="#"><img className={navbar? 'navlogo':'logo'} src={logo} alt="" /></a>
        </div>
        <div className="menu d-flex">
        <ul >
            <li className={navbar? 'textcolor':''}><a href="/" >Pricing</a></li>
            <li className={navbar? 'textcolor':''}><a href="/about">Doctors</a></li>
            <li className={navbar? 'textcolor':''}> <a href="/contact">About</a></li>
            <li className={navbar? 'textcolor':''}><a href="/contact">Contact</a></li>

        </ul>
        <div className="buttons  ">
          <button className={navbar? 'btn btn-success' : "btn btn-outline-success"}>Get demo</button>
           <button className="btn btn-primary">Login</button>
        </div>
            
        </div>
        
            
        
        
    </nav>
    </>
    
    )
}

export default Header;