import React, { ReactNode, useCallback } from "react";
import { FooterWithLogo, NavbarLayouts, SpeedDialButton } from "..";
import RightSidebar from "../Sidebar/RightSidebar";
import { useStateDispatchContext } from "../../hooks/useStateDispatchHook";

export default function LayoutPage({ children }: { children: ReactNode }) {
  const { setScreenSize, screenSize, setIsSettings, setOpenNav, isOpenThemeSettings } =
    useStateDispatchContext();
  const setWindowDimensions = useCallback(() => {
    if (window.innerWidth >= 955) {
      setOpenNav(false);
    }
    if (window.innerWidth <= 960 && isOpenThemeSettings) {
      setIsSettings(false);
    }
    setScreenSize(window.innerWidth);
  }, [screenSize]);
  React.useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, [setWindowDimensions]);

  return (
    <React.Fragment>
      <NavbarLayouts />
      <div className="h-24">toolbar</div>
      <RightSidebar />
      {children}
      {screenSize && (screenSize as number) >= 960 && <SpeedDialButton />}
      <FooterWithLogo />
    </React.Fragment>
  );
}
