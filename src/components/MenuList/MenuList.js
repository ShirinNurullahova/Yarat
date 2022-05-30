import React ,{useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import random from '../../images/rectangle39.svg';
import random1 from '../../images/random1.jpg';
import random2 from '../../images/random2.jpg';
import random3 from '../../images/random3.jpg';
import random4 from '../../images/random4.jpg';
import random5 from '../../images/random5.jpg';
import random6 from '../../images/random6.jpg';
import random7 from '../../images/random7.jpg';
import random8 from '../../images/random8.jpg';
import random9 from '../../images/random9.jpg';
import random10 from '../../images/random10.jpg';
import random11 from '../../images/random11.jpg';
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
                           <img className='showPicture'  src={random1} />
                           }
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaygalerry" style={{ textDecoration: 'none'}}>YAY GALLERY</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random2} />
                           }
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"> <Link onClick={props.open ? props.open : null}  to="/yarat" style={{ textDecoration: 'none'}}>YARAT STUDIOS</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random3} />
                           }
                    </div>
                    <div className="hoverBox">
                        <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}>PAINTING MUSEUM</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random4} />
                           }
                    </div>
                    <div className='hoverBox'>
                       
                            <p className="lorem">
                            <Link onClick={props.open ? props.open : null} to="/gridpage/gridview" style={{ textDecoration: 'none'}}  > CALENDAR</Link></p>
                            
                        
                       
                            {props.open && 
                           <img className='showPicture'  src={random5} />
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
                           <img className='showPicture'  src={random2} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/space" style={{ textDecoration: 'none'}}>FREESTYLE</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random7} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}> FILM CLUB</Link></p>
                        {props.open &&
                           <img className='showPicture'  src={random8} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem">  <Link onClick={props.open ? props.open : null} to="/gridpage/gridview" style={{ textDecoration: 'none'}}> LITERATURE CLUB</Link> </p>
                        {props.open && 
                           <img className='showPicture'  src={random4} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem">  <Link onClick={props.open ? props.open : null} to="/gridpage/gridview" style={{ textDecoration: 'none'}}> THEATRE CLUB</Link> </p>
                        {props.open && 
                           <img className='showPicture'  src={random3} />
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
                           <img className='showPicture'  src={random11} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/yaygalerry" style={{ textDecoration: 'none'}}> LITTLE MASTER</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random5} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}>  SCHOOLS</Link></p>
                        {props.open &&
                           <img className='showPicture'  src={random2} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/space" style={{ textDecoration: 'none'}}> WORKSHOPS</Link></p>
                        {props.open &&
                           <img className='showPicture'  src={random3} />
                           }
                    </div>
                    <div className="hoverBox">
                    <p className="lorem"><Link onClick={props.open ? props.open : null}  to="/painting" style={{ textDecoration: 'none'}}> ACADEMY</Link></p>
                        {props.open && 
                           <img className='showPicture'  src={random4} />
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