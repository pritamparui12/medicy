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
    <nav className={navbar?'active fixed-top sticky-header navbar navbar-expand-lg':'fixed-top sticky-header navbar navbar-expand-lg'}>
        <div className="container-fluid lo">
            <div className=" d-flex justify-content-between align-items-center p-2 container">
                <div className="navbar-translate d-flex justify-content-between">
                 <a href="#" className="logoa">
                <img className={navbar? 'navlogo logo':'logo'} src={logo} alt="" />
                </a>
                </div>
            </div>
       
        <div className="menu d-flex justify-content-center w-100 ">
         <ul className="d-flex  justify-content-end w-100  navbar-nav">
            <li className={navbar? 'textcolor li':'li'}>
                <a href="/" >Pricing</a>
                </li>
            <li className={navbar? 'textcolor li':'li'}>
                <a href="/about">Doctors</a>
                </li>
            <li className={navbar? 'textcolor li':'li'}>
                 <a href="/contact">About</a>
                 </li>
            <li className={navbar? 'textcolor li':'li'}><a href="/contact">Contact</a></li>
            <li className={navbar? 'btn btn-success libtn li'  : "btn btn-outline-success libtn li"}>Get demo</li>
            <li className="btn btn-primary libtn li ">Login</li>

        </ul>
            
        </div>
        <div className="d-flex justify-content-end align-items-center"></div>
        
            
        </div>
       
        
        
    </nav>
    </>
    
    )
}

export default Header;