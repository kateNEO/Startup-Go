import React from "react";
import styleProjectItem from "./ProjectItem.module.css"
import {NavLink} from "react-router-dom";


const ProjectItem =(props)=>{

    return(
        <div className={styleProjectItem.projectItem}>
            <NavLink to="/nameProject" className={styleProjectItem.projectItemCard}>
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
                    <div className={styleProjectItem.city}>
                        <span className={styleProjectItem.city}>City</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}



 export default ProjectItem