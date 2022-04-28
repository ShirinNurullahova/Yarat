import React,{useState} from "react";
import '../Header/Header.css'
import { Link,Route } from "react-router-dom";

import menusvg from '../../images/MENU.svg';
import Menu from "../Menu/Menu";


const  Header =(props)=>{
    // console.log(props.menu)
    const [menuOpen , setMenuOpen] = useState(false);
    
    const toggle= () =>{
        if(menuOpen){
          setMenuOpen(false)
            // console.log("salam")
        }else{
         setMenuOpen(true)
          // console.log("sagol")
        }
     }
    return(
        <div className="navbar">
                <Link style={{textDecoration :'none'}} to='/home'><p className="navbar_text">YARAT█</p> </Link>
                                     <div className="menuTextDiv">
                                      {props.menu && <p style={{ color: 'white' , textAlign:"center" }} className="menuText">MENU</p>}
               
                                      <img className="menuIcon" onClick={toggle} src={menusvg} style={{cursor:"pointer"}}/> 
                                     </div>
                            
               
                    
                
              
                
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        </div>
    )
}
export default Header