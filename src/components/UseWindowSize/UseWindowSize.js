import { useState, useEffect } from "react";
import ImageAnimated from "../ImageAnimated/ImageAnimated";

function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth > 550) {
      return <ImageAnimated/>;
    } else if (windowWidth < 550) {
      return ;
    } 
  } else {
    return undefined;
  }
}


function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient
      ? getBreakPoint(window.innerWidth) 
      : undefined
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth)); 
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listerner on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;