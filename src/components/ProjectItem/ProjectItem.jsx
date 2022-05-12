import React from "react";
import styleProjectItem from "./ProjectItem.module.css"
import {NavLink} from "react-router-dom";



const ProjectItem =()=>{
    return(
        <div className={styleProjectItem.projectItem}>
            <NavLink to="/nameProject" className={styleProjectItem.projectItemCard}>
                <div className={styleProjectItem.projectItemImg}>img</div>
                <div className={styleProjectItem.projectInfo}>
                    <a className={styleProjectItem.projectItemTitle}>Project Name</a>
                    <div className={styleProjectItem.projectItemAuthorName}>Author</div>
                    <div className={styleProjectItem.moneyBlock}>
                        <div className={styleProjectItem.currentAmount}>1000$</div>
                        <span className={styleProjectItem.outOf}>out of</span>
                        <span className={styleProjectItem.totalAmount}>10 000$</span>
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