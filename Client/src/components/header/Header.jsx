import React, { useLayoutEffect, useState } from "react";
import PcHeader from "./PcHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    }
  }, [window.innerWidth,isMobile]);

  if(isMobile){
    return <MobileHeader/>
  }

   return <PcHeader/>
}

export default Header;




