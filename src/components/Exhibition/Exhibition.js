import React, {useEffect} from "react";
import '../Exhibition/Exhibition.css'
import '../HomePage/HomePage.css'
import Space from "../Space/Space";
import Yarat from "../YaratStudio/Yarat";
import Yaygallery from "../YayGallery/YayGallery";
import Painting from "../PaintingMuseeum/Painting";
import MenuList from "../MenuList/MenuList";
import YaratCenter from "../YaratCenter/YaratCenter";


const Exhibition = ({menuHandler ,toggleSrc }) => {
 
  
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
          <YaratCenter menuHandler={menuHandler}/>
        <Space menuHandler={menuHandler} />
            

            <Yaygallery  menuHandler={menuHandler}/>
              <Yarat  menuHandler={menuHandler} />
              <Painting  menuHandler={menuHandler}/>
              <hr/>
              <MenuList />
        </>
      


    )
}
export default Exhibition;