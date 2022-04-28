import React, { useEffect, useRef, useState } from "react";
import '.././GridPageElement/GridPageElement.css'
import DataAndTimeElement from "../DataAndTimeElement/DataAndTimeElement";


const GridPageElement = ({ element, index, isImg, time}) => {
    const current = new Date();
    const date = `${current.getDate()}`;
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let name = month[current.getMonth()];
    
    const [isActive, setActive] = useState(false);
    const [isBorder, setBorder] = useState(true);

  
    useEffect(() => {

        let id = setInterval(() => {
            toggle()
        }, time);

        return () => {
            clearInterval(id)
        }

    })


    const toggle = () => {
        setActive((prev) => !prev)
    }




    return (
        <>

            {
                (() => {
                    if (date == index) {

                        return (
                            <div className={`into ${isBorder && 'activeBorder'} `}>
                              
                                <p className="month">< span className="days">{index}</span>{name}</p>

                                {
                                    (() => {
                                        if (date == index) {

                                            return (
                                                <DataAndTimeElement />
                                            )
                                        }
                                    })()
                                }
                            </div>
                        )
                    } else if (date !== index) {
                        
                        return (<div className="into">

                            {isImg &&
                                <div className={`imagePosition ${isActive && 'active'} `}>
                                    <img src={element} />
                                </div>
                            }
                            <p className="month">< span className="days">{index}</span>{name}</p>





                        </div>)

                    }
                })()
            }



        </>
    )
}
export default GridPageElement;