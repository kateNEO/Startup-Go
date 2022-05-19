import React from "react";
import styleCreateProject from "./CreateProject.module.css"
import {NavLink} from "react-router-dom";


const CreateProject = () => {
    let menuItemData =[
        {id:1, number:'1', name:'Basic'},
        {id:2, number:'2', name:'Information'},
        {id:3, number:'3', name:'Rewards'},
        {id:4, number:'4', name:'About Me'},
        {id:5, number:'5', name:'Bank account'},
        {id:6, number:'6', name:'Verification'}
    ]
    let menuItemElement = menuItemData.map (menuItem => <MenuItem key={menuItem.id} number ={menuItem.number} name={menuItem.name}/>)
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
