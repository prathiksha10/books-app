import React from "react";
import '../Components/Style.css';
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
    return (
        <div className="sideBar">
            <ul className="sidebarList">
            {SidebarData.map((val,key)=> {
                return (
                    <li 
                    className="row"
                    key={key} 
                    onClick={() => {window.location.pathname = val.link}}>
                        <div>{val.icon}</div>{" "}
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar;