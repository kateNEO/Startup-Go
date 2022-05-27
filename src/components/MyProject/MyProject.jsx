import React from "react";
import styleProfile from "./MyProject.module.css"
import ProjectItem from "../ProjectItem/ProjectItem";

const MyProject = () =>{
    let projectUserData =[
        {id:1, img: '', name:'', author: '', currentAmount: '', totalAmount: '', status: '' }
    ];
    return(
        <div className={styleProfile.myProjectWrapper}>
            <div className={styleProfile.myProject}>

            </div>
        </div>
    )
}
const ProjectUser = () =>{
    return(
        <div className={styleProfile.projectItem}>

        </div>
    )
}
export default MyProject