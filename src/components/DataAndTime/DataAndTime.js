import React, {useEffect ,useState} from "react";
import '../DataAndTime/DataAndTime.css'
import GridPageElement from "../GridPageElement/GridPageElement";


const DataAndTime =({imagesZindex, menuHandler })=>{
    const [isClick, setClick] = useState(false);
    const [isClickTwo, setClickTwo] = useState(false);
    const [isClickThree, setClickThree] = useState(false);

    const toggleclick = () => {
        setClick((prev) => !prev)
        // console.log("salam")
    }
    const toggleclickTwo = () => {
        setClickTwo((prev) => !prev)
        // console.log("salam")
    }
    const toggleclickThree = () => {
        setClickThree((prev) => !prev)
        // console.log("salam")
    }
     let arr=[ 15,19,26,28,5,9]
     useEffect(()=> {
        menuHandler(true)
        return  () => {
            menuHandler(false)
        }
    }
    ,[])
     
    return(
        <div className="dataandtime" >
                        <div  onClick={toggleclick}  className={`dataandtimeDiv ${isClick && 'clickDiv'} `}>
                            <h1  className={`lastFlower ${isClick && 'click'} `}>LAST FLOWERS OF XX CENTURY – GENERATION Y GROUP EXHIBITION <br/> <span className="lastFlowerSpan">10 JUN - 20 DEC 21</span> </h1>
                          
                        </div>
                       <div onClick={toggleclickTwo}  className={`dataandtimeDiv1 ${isClickTwo && 'clickDiv1'} `}>
                           <h1 className={`lastFlower1 ${isClickTwo && 'click1'} `}>RASHAD ALAKBAROV LOOK AT YOU! SOLO SHOW<br/><span className="lastFlowerSpan1">10 JUN - 30 DEC 21</span>   </h1>
                                            
                        </div>
                        <div onClick={toggleclickThree}  className={`dataandtimeDiv2 ${isClickThree && 'clickDiv2'} `}>
                           <h1 className={`lastFlower2 ${isClickThree && 'click2'} `}>MAKE AN ISLAND FOR YOURSELF <br/> <span  className="lastFlowerSpan2"> 1 JUN - 30 SEP 21</span></h1>
                                           
                        </div>
                     { imagesZindex.map((element , index)=> {
                         let time = index * Math.random() * 1000
                        
                         return(<GridPageElement  key={index} element={element} time={time} isImg={arr.includes(index)}  index={index+1} />)
                         
                     }
                    )}
         </div> 
    )
}
export default DataAndTime