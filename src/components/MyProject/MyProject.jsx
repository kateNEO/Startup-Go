import React from "react";
import styleProfile from "./MyProject.module.css"
import ProjectItem from "../ProjectItem/ProjectItem";
import {NavLink} from "react-router-dom";

const MyProject = () =>{

    return(
        <div className={styleProfile.myProjectWrapper}>

            <div className={styleProfile.myProject}>
                <UserProject/>
                <UserProject/>
                <UserProject/>
            </div>
            <NavLink to="/createProject/Basic" className={styleProfile.buttonNewProject}>Create Project</NavLink>
        </div>
    )
}
const UserProject = () => {
    return (
        <div className={styleProfile.projectItemWrapper}>
            <div className={styleProfile.imgUserProjectWrapper}>
                <img className={styleProfile.imgUserProject}/>
            </div>
            <p className={styleProfile.UserProjectName}>Name</p>
        </div>
    )
}
export default MyProject