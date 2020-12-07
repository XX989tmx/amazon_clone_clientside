import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Header from "./Header";
import SideNavigation from "./SideNavigation";

const MainNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarToggleClickHandler = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const backdropClickHandler = () => {
      setIsSidebarOpen(false);
  }
  return (
    <div>
      <Header sidebarToggleClickHandler={sidebarToggleClickHandler} />
      {isSidebarOpen && (
        <Backdrop backdropClickHandler={backdropClickHandler} />
      )}
      {isSidebarOpen && <SideNavigation isSidebarOpen={isSidebarOpen} />}
    </div>
  );
};

export default MainNavigation;
