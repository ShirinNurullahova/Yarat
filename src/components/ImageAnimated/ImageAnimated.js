import React, { useEffect, useRef } from "react";
import "./ImageAnimated.css";
import random from '../../images/rectangle39.svg';
import random1 from '../../images/random1.jpg';
import random2 from '../../images/random2.jpg';
import random3 from '../../images/random3.jpg';
import random6 from '../../images/random6.jpg';
const ImageAnimated = () => {
  const title = [{ pg: "Aliquet nunc volutpat aliquam est malesuada ut /", span: " 12 SEP - 12 NOV 21" },
  { pg: "Et magna venenatis aliquam nec, faucibus neque /", span: " 8 FEB - 8 MAR 21 " },
  { pg: "Proin non at dolor sed lorem nibh / ", span: "16 MAR - 14 MAR 21" },
  { pg: "Scelerisque et platea pellentesque vel vestibulum sed cras amet /", span: " 25 MAR - 25 APR 21" }]
  const imgArr = [{random: random6, title:title[0].pg},{random: random1, title:title[1].pg},{random: random2, title:title[2].pg},{random: random3, title:title[3].pg}];
 
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
            var div = document.createElement("div");
            var img = document.createElement("img");
            
            var textTitle =document.createElement("p");
            img.src = imgArr[i].random;
            textTitle.textContent=imgArr[i].title
            
            img.className = "imageHolderImg";
            textTitle.className = "titleHeader";

            img.style.top = mouse.cY + "px";
            img.style.left = mouse.cX + "px";

            textTitle.style.top = mouse.cY + "px";
            textTitle.style.left = mouse.cX + "px";
          
            canvasFixed.current.appendChild(img);
            canvasFixed.current.appendChild(textTitle);
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
