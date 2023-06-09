import { useEffect, useState } from "react";

const UseWindowWidth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  let checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 600);
  };

  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isSmallScreen;
};

export default UseWindowWidth;
