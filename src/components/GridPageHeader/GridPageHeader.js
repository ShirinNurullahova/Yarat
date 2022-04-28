import React, { useRef, useState } from "react";
import '../GridPageHeader/GridPageHeader.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const GridPageHeader = () => {
    const cList = useRef()

    const toggleClassP = (e) => {

        cList.current.classList.toggle('activeP')
    };



    return (
        <div>
            <div className="up">
                <p className="cal">CALENDAR</p>
                <div className="scrollText">
                   <ul>
                   <Link style={{textDecoration :'none'}} to='/yaratcenter'> <li>YARAT CENTRE</li> </Link>
                   <Link style={{textDecoration :'none'}} to='/space'>  <li>ARTIM PROJECT SPACE</li> </Link>
                   <Link style={{textDecoration :'none'}} to='/yaygalerry'><li>YAY GALLERY</li></Link>
                   <Link style={{textDecoration :'none'}} to='/yarat'><li>YARAT STUDIOS</li> </Link>
                   <Link style={{textDecoration :'none'}} to='/painting'>  <li>PAINTING MUSEUM</li> </Link>
                </ul> 
                </div>
                
            </div>
            <div className="middle">
                <NavLink style={{ textDecoration: 'none' ,color:"gray" }} activeClassName="activeP pad" to="/gridpage/listview" >LIST VIEW</NavLink>
                <NavLink style={{ textDecoration: 'none',color:"gray"  }} activeClassName="activeP pad1" to='/gridpage/gridview'>GRID VIEW</NavLink>
            </div>
        </div>

    )
}
export default GridPageHeader