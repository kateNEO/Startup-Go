import React from "react";
import styleAllProjectList from "./AllProjectList.module.css"

import ProjectItem from "../ProjectItem/ProjectItem";
import Categories from "../Categories/Categories";


const AllProjectList =()=>{
    return (
        <div className={styleAllProjectList.allPrjContent}>
            <div className={styleAllProjectList.navCategories}>
                <Categories/>
            </div>
            <div className={styleAllProjectList.allProjectsArea}>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </div>
        </div>
    )

}
export default AllProjectList