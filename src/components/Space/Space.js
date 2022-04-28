import React,{useEffect} from "react";
import '../Space/Space.css'
import Flover from '../../images/Rectangle 53.svg';
import Island from '../../images/Rectangle 54.svg';
import Solo from '../../images/Rectangle 56.svg';
import Fogs from '../../images/Rectangle 55.svg';
import Images from "../ImageContainer/Images";
import MenuList from "../MenuList/MenuList";

const Space = ({menuHandler}) => {
const images = [Flover , Island, Solo,Fogs];
const title = [{ pg: "LAST FLOWERS OF XX CENTURY – GENERATION Y GROUP EXHIBITION /", span: " 10 JUN - 30 DEC 21" },
    { pg: "MAKE AN ISLAND FOR YOURSELF  /", span: "  18 JUN - 28 DEC 21" },
    { pg: "RASHAD ALAKBAROV LOOK AT YOU! SOLO SHOW / ", span: "16 MAR - 14 MAR 21" },
    { pg: "FOGS TURNED INTO EPIC STORY IN MY HEAD/ ", span: "14 JUN - 10 AUG 21" }]
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
        <div>
            <div className="spaceBox">
                <h1 className="spaceText">ARTIM PROJECT SPACE</h1>
                <Images  images={images} title={title} />
            </div>
        
        </div>
    )
}
export default Space