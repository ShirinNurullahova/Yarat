import React, {useEffect} from "react";
import Images from "../ImageContainer/Images";
import Aliquet from '../../images/Rectangle 66.svg'
import Magna from '../../images/Rectangle 65.svg'
import Proin from '../../images/Rectangle 67.svg'
import Amet from '../../images/Rectangle 68.svg'
import '../../components/PaintingMuseeum/Painting.css'


 const Painting =({menuHandler})=>{
    const images = [Aliquet, Magna, Proin, Amet];
    const title = [{ pg: "Aliquet nunc volutpat aliquam est malesuada ut /", span: " 12 SEP - 12 NOV 21" },
    { pg: "Et magna venenatis aliquam nec, faucibus neque /", span: " 8 FEB - 8 MAR 21 " },
    { pg: "Proin non at dolor sed lorem nibh / ", span: "16 MAR - 14 MAR 21" },
    { pg: "Scelerisque et platea pellentesque vel vestibulum sed cras amet /", span: " 25 MAR - 25 APR 21" }]
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
        <div className="PaintingGalleryBox">
            <h1>PAINTING MUSEUM</h1>
            <Images images={images} title={title} className='distanceImageEnd' index={2} indexS={3} id="rightEnd" />
        </div>
     
    </div>
     )
 }
 export default Painting