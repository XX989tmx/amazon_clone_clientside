import React from 'react';
import './SideNavigation.css';
const SideNavigation = (props) => {
    // const category1 = [
    //     {category1:"家電、カメラ、AV機器"}
    // ];
    // const category2 = [
    //   {
    //     category2: "キッチン家電",
    //     link: `/product/productIndex/${キッチン家電}`,
    //   },
    //   {
    //     category2: "生活家電",
    //     link: `/product/productIndex/${生活家電}`,
    //   },
    // ];
    let sidebarClass = "sidebar";
    if (props.isSidebarOpen) {
        sidebarClass = "sidebar open";
    }
    
    return <div className={sidebarClass}>sidebar</div>;
}

export default SideNavigation;
