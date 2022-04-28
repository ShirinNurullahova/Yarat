import React , {useEffect ,useState} from "react";
import { Route } from "react-router-dom";
import '../../components/GridPage/GridPage.css'
import GridPageElement from "../GridPageElement/GridPageElement";
import calendar from '../../images/Rectangle 39.svg'
import MenuList from "../MenuList/MenuList";
import GridPageHeader from "../GridPageHeader/GridPageHeader";
import DataAndTime from "../DataAndTime/DataAndTime";
import ListView from "../ListView/ListView";
import random from '../../images/rectangle39.svg';
const GridPage =({menuHandler})=>{
    const imagesZindex = [calendar,calendar,calendar,calendar,calendar,calendar,calendar,
        calendar,calendar,calendar,calendar,calendar,calendar,calendar,
        calendar,calendar,calendar,calendar,calendar,calendar,calendar,calendar,calendar,
        calendar,calendar,calendar,calendar,calendar,calendar,calendar,
        calendar];
        // const array =[];
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
            <div className="calendar">
                
               <GridPageHeader/>
                    <Route path="/gridpage/gridview">
                      <DataAndTime imagesZindex={imagesZindex} menuHandler={ menuHandler}/>  
                    </Route>
                

                <Route path="/gridpage/listview">
                    <ListView random={random}  menuHandler={ menuHandler}/>
                 </Route>
            </div>
          
              <MenuList />
           
        </div>
    )
}
export default GridPage