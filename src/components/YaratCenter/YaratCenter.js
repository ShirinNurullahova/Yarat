import React, { useEffect, useRef } from "react";
import imageExhibition from '../../images/rectangle52.svg'
import imageLeft from '../../images/Rectangle 52.svg'
import redEllipse from '../../images/Ellipse 1.svg'
import '../../components/YaratCenter/YaratCenter.css'
// import {useWindowScroll } from "react-use"

const YaratCenter = ({ menuHandler }) => {
 
    const slideref = useRef();

    useEffect(() => {
        menuHandler(true)
        // console.log('menu true')
        
       

        return () => {
            // console.log('menu false')
            menuHandler(false)
        }

    }
        , [menuHandler])


    const slides =[{image: imageExhibition },{image:imageLeft},{image:imageLeft },{image:imageLeft },{image:imageLeft}]
    const slideLeft = () => {
    //    console.log("sssss")
         slideref.current.scrollLeft -= 200
        
      };

      const slideRight = () => {
        slideref.current.scrollTo({behavior: "smooth"})
        slideref.current.scrollLeft += 200 
    
      };    
    return (
        <div className="exhibition">

            <div className="middleBox">
                <p  className="middleBoxP"> EXHIBITIONS</p>
                <h1>YARAT CENTRE</h1>
               
                <div className="imageBox" id="imageBox" ref={slideref}>

                      <div className="position">
                        <div className="positionUp">
                            <img src={redEllipse}></img>
                            <p>NOW ON SHOW</p>
                        </div>
                        <div className="positionDown">
                            <p className="textDown"><span className="border">YARAT CENTRE: </span>
                              <span>
                                   LAST FLOWERS OF  CENTURY – GENERATION 
                                    Y GROUP EXHIBITION /
                              </span>
                                <span className="dif">10 JUN - 30 DEC 21</span>
                                </p>
                        </div>
                    </div>
                              <div  id="slider">
                                     {
                                         slides.map((slide,index )=>{
                                             return (<div className="image" key={index}>
                                                  <img src={slide.image} />
                                             </div>)
                                             
                                         })
                                     }
                              </div>
                   
                </div>
                <div className="textPosition">
                    <button  className="left" onClick={slideLeft}>LEFT</button>
                    <button onClick={slideRight} className="right">RIGHT</button>
                </div>
            </div>

            

        </div>
        
    )
}
export default YaratCenter