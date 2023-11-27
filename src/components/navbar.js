import { useRef } from "react";

import {NavLink} from "react-router-dom"
import "./navbar.css"

export default function Navbar(){
    const navRef = useRef();
    const pathRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_header");
        pathRef.current.classList.toggle("responsive_line");

     

    }

    return(
        <div className="header_nav">
            <nav ref={navRef}>
             <button onClick={showNavbar} id="nav__toggle" aria-controls="primary-navigation" aria-expanded="false">
                  <svg  fill="none" className="hamburger" viewBox="1 -5 130 100" width="100" >
                    <path  ref={pathRef} className="line"  strokeLinecap="round" strokeLinejoin="round" d="m 50 15 l -27 51 l 62 -38 l -81 20 l 74 7 l -60 -31 l 42 47 l -10 -57 l -45 -1 l 0 68 l 50 0 a 1 1 0 0 0 -10 -67 l 1 66">
                    </path>
                  </svg>
                </button>
              <ul>
                <li className="nav__item"><NavLink to="./"       className="nav__link" >home</NavLink></li>
                <li className="nav__item"><NavLink to="./products"className="nav__link">Products</NavLink></li>
                <li className="nav__item"><NavLink to="./services"className="nav__link">Services</NavLink></li>
                <li className="nav__item"><NavLink to="./appointments"className="nav__link">Appointments</NavLink></li>
                <li className="nav__item"><NavLink to="./blog"className="nav__link">Blog</NavLink></li>
                <li className="nav__item"><NavLink to="./contact"className="nav__link">Contact</NavLink></li>
                <li className="nav__item"><NavLink to="./Socials"className="nav__link">Socials</NavLink></li>
                <li className="nav__item"><NavLink to="./Random"className="nav__link" >Card of the day</NavLink></li>
                
              </ul>
            </nav>  
        </div >

    );
}
