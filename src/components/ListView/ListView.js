import React,{useEffect} from "react";
import '../ListView/ListView.css'
import random from '../../images/rectangle39.svg';
const ListView = ({menuHandler}) => {
    useEffect(()=> {
        menuHandler(true)
        // console.log('menu true')
        return  () => {
            // console.log('menu false')
            menuHandler(false)
        }
    }
    ,[])
    return (
        <>
            <div className="showFlex">
                <p className="showFlexText">10 JUN - 30 DEC 21</p>
                <div className="hover-box">
                    <p className="showFlexText1">RASHAD ALAKBAROV LOOK AT YOU! SOLO SHOW</p>
                    <img className="showingPic" src={random}/>
                </div>
                
            </div>
            <div className="showFlex">
                <p className="showFlexText">1 JUN - 10 SEP 21</p>
                <div className="hover-box">
                      <p className="showFlexText1">MAKE AN ISLAND FOR YOURSELF</p> 
                      <img className="showingPic" src={random}/>
                </div>
             
            </div>
            <div className="showFlex">
                <p className="showFlexText">10 JUN - 30 DEC 21</p>
                <div className="hover-box">
                    <p className="showFlexText1">LAST FLOWERS OF XX CENTURY – GENERATION Y GROUP EXHIBITION</p> 
                    <img className="showingPic" src={random}/>
                </div>
               
            </div>
            <div className="showFlex">
                <p className="showFlexText">08 JUL - 25 SEP 21</p>
                <div className="hover-box">
                   <p className="showFlexText1">FOGS TURNED INTO EPIC STORY IN MY HEAD</p> 
                   <img className="showingPic" src={random}/>
                </div>
                
            </div>
            <div className="showFlex">
                <p className="showFlexText">23 APR - 23 SEP 21</p>
                <div className="hover-box">
                    <p className="showFlexText1">BAKU STREET PHOTO FESTIVAL 2021</p>  
                    <img className="showingPic" src={random}/>
                </div>
              
            </div>
            <div className="showFlexEnd">
                <p className="showFlexText">01 JAN - 31 DEC 21</p>
                <div className="hover-box">
                     <p className="showFlexText1">OPEN CALL</p> 
                     <img className="showingPic" src={random}/>
                </div>
              
            </div>
        </>
    )
}
export default ListView