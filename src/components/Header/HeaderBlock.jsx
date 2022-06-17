import React from "react";
import headerStyle from "./HeaderBlock.module.css"
import {NavLink} from "react-router-dom";


let HeaderBlock = (props) => {
    return(
        <div className={headerStyle.headerBlock}>
            <div className={headerStyle.leftPosition}>
                <NavLink to ="/" className={headerStyle.logo}>StartUp-Go</NavLink>
                <NavLink to= "/whatIs" className={headerStyle.headerLink}>What is this?</NavLink>
                <NavLink to= "/allProject/category/all" className={headerStyle.headerLink}>All projects</NavLink>
            </div>
            <input className={headerStyle.search} type="text" name="search" placeholder="Search.."/>
            <div className={headerStyle.rightPosition}>
                <NavLink to="/myProject" className={headerStyle.headerLink}>My project</NavLink>
            </div>
        </div>
    )
}
export default HeaderBlock;