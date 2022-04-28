import React , {useEffect} from "react";

import Images from "../ImageContainer/Images";
import Street from '../../images/Rectangle 104.svg'
import OpenCall from '../../images/Rectangle 105.svg'
import XXCentury from '../../images/Rectangle 106.svg'
import Dive from '../../images/Rectangle 107.svg'
import '../../components/YayGallery/YayGallery.css'
import MenuList from "../MenuList/MenuList";

const Yaygallery = ({menuHandler}) => {
    const images = [Street, OpenCall, XXCentury, Dive];
    const title = [{ pg: "BAKU STREET PHOTO FESTIVAL 2021 /", span: " 10 JUL - 30 JUN 21" },
    { pg: "OPEN CALL  / ", span: "11 APR - 19 MAY 21" },
    { pg: "LAST FLOWERS OF XX CENTURY – GENERATION Y GROUP EXHIBITION /", span: " 10 JUN - 30 DEC 21" },
    { pg: "THE DIVE – SEVEN LAYERS OF EMOTIVE MEANINGS / ", span: "06 JAN - 06 JAN 21" }]
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
            <div className="YayGalleryBox">
                <h1>YAY GALLERY</h1>
                <Images images={images} title={title} className='distanceImage' index={2} indexS={3} id="right" />
            </div>
          
        </div>
    )
}
export default Yaygallery