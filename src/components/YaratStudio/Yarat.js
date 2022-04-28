import React ,{useEffect} from "react";
import '../../components/YaratStudio/Yarat.css'
import Century from '../../images/Rectangle 100.svg'
import Moment from '../../images/Rectangle 101.svg'
import GROUP from '../../images/Rectangle 102.svg'
import Poem from '../../images/Rectangle 103.svg'
import Images from "../ImageContainer/Images";
import MenuList from "../MenuList/MenuList";
const Yarat =({menuHandler})=>{
    const images = [Century , Moment, GROUP, Poem];
    const title = [{ pg: "LAST FLOWERS OF XX CENTURY – GENERATION Y GROUP EXHIBITION /", span: "  10 JUN - 30 DEC 21" },
    { pg: "CHRYSALIS – A MOMENT OF TRANSFORMATION / ", span: "11 APR - 18 JAN 21" },
    { pg: "DO NOT RUN! THIS IS ONLY A MIRAGE YOU SEE… GROUP EXHIBITION /", span: " 10 MAR - 30 JUL 21" },
    { pg: "AHMET ÖĞÜT NO POEM LOVES ITS POET / ", span: " 10 FEB - 17 MAR 21" }]
    useEffect(()=> {
        menuHandler(true)
        // console.log('menu true')
        return  () => {
            // console.log('menu false')
            menuHandler(false)
        }
    }
    ,[])
    return(
        <div>
            <div className="YaratBox">
                 <h1>YARAT STUDIOS</h1>
                <Images  images={images} title={title}/>  
            </div>
       
        </div>
    )
}
export default Yarat