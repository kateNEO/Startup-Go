import React from "react";
import styleProjectItem from "./ProjectItem.module.css"
import {NavLink} from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectItem =(props)=>{
 //    let projectInformation = props.projectItemData.map(projectInformation => <ProjectCard key={projectInformation.id}
 //                                                                                          name ={projectInformation.name}/>
 // )
     let pathProject="/project/"+props.id;
    return(

        <div className={styleProjectItem.projectItem}>
            <NavLink to={pathProject} className={styleProjectItem.projectItemCard}>
                <div className={styleProjectItem.projectItemImg}>img</div>
                <div className={styleProjectItem.projectInfo}>
                    <div className={styleProjectItem.projectItemTitle}>{props.name}</div>
                    <div className={styleProjectItem.projectItemAuthorName}>Author</div>
                    <div className={styleProjectItem.moneyBlock}>
                        <div className={styleProjectItem.currentAmount}>{props.currentAmount}$</div>
                        <span className={styleProjectItem.outOf}>out of</span>
                        <span className={styleProjectItem.totalAmount}>{props.totalAmount}$</span>
                        <span className={styleProjectItem.percentValue}>(10%)</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}



 export default ProjectItem