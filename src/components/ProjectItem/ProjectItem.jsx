import React from "react";
import styleProjectItem from "./ProjectItem.module.css"
import {NavLink, useParams} from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectItem =(props)=>{
    let pathProject="/project/"+props.id;
    let percentValue = (props.currentAmount/ props.expectedAmount) * 100;
    let divStyle = {
        width: `${percentValue}`+'%'
    };

    return(

        <div className={styleProjectItem.projectItem}>
            <NavLink to={pathProject} className={styleProjectItem.projectItemCard}>
                <img className={styleProjectItem.projectItemImg} src={props.img}/>
                <div className={styleProjectItem.projectInfo}>
                    <div className={styleProjectItem.projectItemTitle}>{props.name}</div>
                    <div className={styleProjectItem.projectItemAuthorName}>Author</div>
                    <div className={styleProjectItem.moneyBlock}>
                        <div className={styleProjectItem.currentAmount}>{props.currentAmount}$</div>
                        <span className={styleProjectItem.outOf}>out of</span>
                        <span className={styleProjectItem.totalAmount}>{props.expectedAmount}$</span>
                        <span className={styleProjectItem.percentValue}>({percentValue}%)</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}



 export default ProjectItem