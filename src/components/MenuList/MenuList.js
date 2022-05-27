import React ,{useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import random from '../../images/rectangle39.svg';
import '../../components/MenuList/MenuList.css'
const MenuList = (props)=>{
   
    return(
      <>
              <div>
            <div className="FlexDiv">
                <div className="box">
                    <Link to="/exhibition" onClick={props.open ? props.open : null}  style={{ textDecoration: 'none'}} >
                       <p className="textDifferent" >EXHIBITIONS</p>
                    </Link>
                    
                  
                    <div className="hoverBox">

                        <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaratcenter" style={{ textDecoration: 'none'}}>YARAT CENTRE </Link></p>
                            
                           {props.open && 
                           <img className='showPicture'  src={random} />
                           }

                       
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/space" style={{ textDecoration: 'none'}}>ARTIM PROJECT SPACE</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaygalerry" style={{ textDecoration: 'none'}}>YAY GALLERY</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"> <Link onClick={props.open ? props.open : null}  to="/yarat" style={{ textDecoration: 'none'}}>YARAT STUDIOS</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}>PAINTING MUSEUM</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className='hoverBox'>
                       
                            <p className="lorem">
                            <Link onClick={props.open ? props.open : null} to="/gridpage/gridview" style={{ textDecoration: 'none'}}  > CALENDAR</Link></p>
                            
                        
                       
                            {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>

                </div>

                <div className="box">
                <Link to="/exhibition" onClick={props.open ? props.open : null}  style={{ textDecoration: 'none'}} >
                <p className="textDifferent" >PUBLIC PROGRAMS</p>
             </Link>

                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaratcenter" style={{ textDecoration: 'none'}}>EVENTS </Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/space" style={{ textDecoration: 'none'}}>FREESTYLE</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}> FILM CLUB</Link></p>
                        {props.open &&
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem">  <Link onClick={props.open ? props.open : null} to="/gridpage/gridview" style={{ textDecoration: 'none'}}> LITERATURE CLUB</Link> </p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem">  <Link onClick={props.open ? props.open : null} to="/gridpage/gridview" style={{ textDecoration: 'none'}}> THEATRE CLUB</Link> </p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    
                </div>
                <div className="box">
                <Link to="/exhibition" onClick={props.open ? props.open : null}  style={{ textDecoration: 'none'}} >
                <p className="textDifferent" >EDUCATION</p>
             </Link>

                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaratcenter" style={{ textDecoration: 'none'}}> LITTLE YARAT</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaygalerry" style={{ textDecoration: 'none'}}> LITTLE MASTER</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}>  SCHOOLS</Link></p>
                        {props.open &&
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/space" style={{ textDecoration: 'none'}}> WORKSHOPS</Link></p>
                        {props.open &&
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}> ACADEMY</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaygalerry" style={{ textDecoration: 'none'}}> ART VOLUNTEER</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random} />
                           }
                    </div>
                </div>
                </div>
                <div className="footer">
                <p className="about">PRESS</p >
                <p className="press" >ABOUT</p>
            </div>
            </div>
            
       </>
    )
}
export default MenuList