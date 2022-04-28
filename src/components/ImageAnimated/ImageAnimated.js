import React, { useEffect, useRef } from "react";
import "./ImageAnimated.css";
import random from '../../images/rectangle39.svg';


const ImageAnimated = ({title}) => {
  const imgArr = [random, random, random, random];
  console.log(title)
  const canvasFixed = useRef();
  let id,id2,id3
  let i = 0;
  let active = 0;

  let mouseStartedMoving = false; 
  let mouseMoved = false;
  // console.log('re-rendering ImageCanvas')
  const MINIMUM_MOUSE_MOVE_TIME = 100;

  const rightClickHandler = (e) => {
    e.preventDefault()
    // alert('Sagol');
    clearInterval(id,id2,id3)
    // console.log({id,id2,id3})
    canvasFixed.current.style.zIndex = '-1';
  }

  useEffect(()=> {
    canvasFixed.current.style.zIndex = '1'
    // console.log('useeffect is runnig ')
    let main = setInterval(() => { 
        // console.log({mouseMoved}, {mouseStartedMoving})
        if(!mouseMoved && mouseStartedMoving) {
            // console.log({id}, 'setinterval cleared')
            clearInterval(id)
            
            
            active = 0;
            mouseStartedMoving = false;
        }
        mouseMoved = false;
     }, MINIMUM_MOUSE_MOVE_TIME);

     return () => {
        //  console.log('main interval cleared')
         clearInterval(main)
         clearInterval(id2)
        //  mouseMoved = false;
        //  mouseStartedMoving = false;

     }
  },[])
  

  const mouse = {
    cX: 0,
    cY: 0,
    prevX: 0,
    prevY: 0,
    dx: 0,
    dy: 0,
  };
  
  const mouseHandler = (e) => {
    mouseStartedMoving = true;
    mouseMoved = true;
    // console.log({mouseMoved}, {mouseStartedMoving})


    mouse.cX = e.pageX - 90;
    mouse.cY = e.pageY - 125;

    mouse.dx = mouse.cX - mouse.prevX;
    mouse.dy = mouse.cY - mouse.prevY;
    // console.log(mouse.dx,mouse.dy)
    // console.log({active})
    if(active === 0){
        id = setInterval(() => {
            var img = document.createElement("img");
            img.src = imgArr[i];
            img.className = "imageHolderImg";
            img.style.top = mouse.cY + "px";
            img.style.left = mouse.cX + "px";
            canvasFixed.current.appendChild(img);
            if (i < imgArr.length-1) i++;
            else i=0
          }, 200);
        active = 1;
        id3 = setTimeout(() => {
            id2 = setInterval(() => {
                removeAllChildNodes(canvasFixed.current);
              }, 200);  
        }, 800);
        
    }
    mouse.prevX = mouse.cX;
    mouse.prevY = mouse.cY;
  };
  function removeAllChildNodes(parent) {
    if(parent){
      if (parent.children[0]) {
        parent.removeChild(parent.firstChild);
      }
    }else{
        // console.log({id2},{id3}, 'cleared removing interval')
        clearInterval(id2)
        clearInterval(id3)
    }
  }

  return (
    <div
   
      className="fixedCanvas"
      onMouseMove={mouseHandler}
      onContextMenu={rightClickHandler}
      ref={canvasFixed}
    ></div>
  );
};

export default ImageAnimated;
