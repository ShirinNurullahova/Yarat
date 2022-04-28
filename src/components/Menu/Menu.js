import React , {useRef ,useEffect ,useState} from "react";
import close from '../../images/close.svg';
import random from '../../images/rectangle39.svg';
import { gsap } from "gsap";
import "../Menu/Menu.css";
import '../../../src/style.css';
import MenuList from "../MenuList/MenuList";
const Menu = (props) => {

    const boxRef = useRef();

    const open =()=>{
                 boxRef.current.classList.toggle("open")  ;
                 props.setMenuOpen(false)  
    }
    return (
        <div className={`MenuPage ${props.menuOpen && "open"}`} ref={boxRef}>
            <div className="navbarTwo">
                <ul>
                    <li>AZ</li>
                    <li>EN</li>
                    <li>RU</li>
                </ul>
                <p className="search">SEARCH HERE</p>
                <img  className="closeBtn"   src={close} onClick={open} style={{cursor:"pointer"}} />
            </div>
            
          <MenuList open = {open} random={random}/>
           
        </div>
    )
}
export default Menu