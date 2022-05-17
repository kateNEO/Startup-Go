import React from "react";
import headerStyle from "./HeaderBlock.module.css"
import {NavLink} from "react-router-dom";


let HeaderBlock = (props) => {
    return(
        <div className={headerStyle.headerBlock}>
            <div className={headerStyle.leftPosition}>
                <NavLink to ="/" className={headerStyle.logo}>StartUp-Go</NavLink>
                <a href ="/whatIs" className={headerStyle.headerLink}>What is this?</a>
                <a href ="/allProject" className={headerStyle.headerLink}>All projects</a>
            </div>

            <div className={headerStyle.rightPosition}>
                <a className={headerStyle.headerLink}>Log in</a>
                <a className={headerStyle.headerLink}>Sign up</a>
            </div>
        </div>
    )
}
export default HeaderBlock;