import React, {useRef} from "react";
import close from '../../images/close.svg';
import random from '../../images/rectangle39.svg';
import { gsap } from "gsap";
import "../Menu/Menu.css";
import '../../../src/style.css';
import MenuList from "../MenuList/MenuList";
import SearchBar from "../SearchBar/SearchBar";
import BookData from '../../Data.json';
const Menu = (props) => {
    const boxRef = React.useRef()
    const open = () => {
        boxRef.current.classList.toggle("open");
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



                <SearchBar placeholder="SEARCH HERE" data={BookData} open={open}/>



                <img className="closeBtn" src={close} onClick={open} style={{ cursor: "pointer" }} />
            </div>

            <MenuList open={open} random={random} />

        </div>
    )
}
export default Menu