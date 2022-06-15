import React from "react";
import styleCreateProject from "./CreateProject.module.css"
import {NavLink} from "react-router-dom";



const CreateProject = (props) => {

    let menuItemElement = props.menuItemData.map(menuItem => <MenuItem key={menuItem.id} number={menuItem.number} name={menuItem.name}/>)
    return (
        <div className={styleCreateProject.createProjectWrapper}>
            <div className={styleCreateProject.menuPC}>
                {menuItemElement}
            </div>

        </div>
    )
}
const MenuItem =(props)=> {
    let path="/createProject/" + props.name;
    return(
        <div>
            <NavLink to={path} tabIndex="0" className={styleCreateProject.menuItem}>{props.number}. {props.name}</NavLink>
        </div>
    )

}

export default CreateProject
