import React from "react";
import headerStyle from "./HeaderBlock.module.css"
import {NavLink} from "react-router-dom";
import {useState} from "react";

let HeaderBlock = (props) => {


// function inputListener(){
//     document.addEventListener('keydown', function (e) {
//         if (e.key === "Enter") {
//             let value = inputSearch.value;
//             console.log(value);
//
//         }
//     })
//}

    // const [value, setValue] = useState("");
    //
    // function inputChange(newValue){
    //         setValue(newValue);
    // }
    //


    return (
        <div className={headerStyle.headerBlock}>
            <div className={headerStyle.leftPosition}>
                <NavLink to="/" className={headerStyle.logo}>StartUp-Go</NavLink>
                <NavLink to="/whatIs" className={headerStyle.headerLink}>What is this?</NavLink>
                <NavLink to="/category/all" className={headerStyle.headerLink}>All projects</NavLink>
            </div>
            <Input />
            <div className={headerStyle.rightPosition}>
                <NavLink to="/myProject" className={headerStyle.headerLink}>My project</NavLink>
            </div>
        </div>
    )
}


const Input=()=>{
    const clickEvent=(e)=>{
    if (e.key === "Enter") {
        let inputSearch = document.getElementById("inputSearch");
        let newValue=inputSearch.value;
        console.log(newValue);
    }
};
    return(
        <input id="inputSearch" className={headerStyle.search} onKeyDown={clickEvent} type="text" name="search" placeholder="Search.."/>
    )
}
export default HeaderBlock;
