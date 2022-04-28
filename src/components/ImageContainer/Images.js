import React from "react";
import '../ImageContainer/Images.css';


const Images = ({images, title ,className,index,id,indexS }) => {
      const imageItem =images;
         
    const imageItemDiv = imageItem.map((image,i ) =>
        <img src={image} className={i===index ? className : ''} 
        id={i===indexS ? id : ''}
        />
        
    );
   
    return (
        <div>

            <div className="flexImage">

                <div className="flexItem" >
                <div className="relative">
                {imageItemDiv[0]}
                        <p className="opacity">{title[0]?.pg}<span>{title[0]?.span}</span></p>
                </div>
                     
                </div>
                <div className="flexItem">
                    <div className="relative">
                    {imageItemDiv[1]}
                        <p className="opacity">{title[1]?.pg}<span>{title[1]?.span}</span></p>
                    </div>
                    
                </div>
                <div className="flexItem distance">
                    <div className="relative">
                    {imageItemDiv[2]} 
                        <p className="opacity">{title[2]?.pg}<span>{title[2]?.span}</span></p>
                    </div>
                  
                </div>
                <div className="flexItem distanceTop">
                    <div className="relative">
                    {imageItemDiv[3]} 
                        <p className="opacity">{title[3]?.pg}<span>{title[3]?.span}</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Images