import React from "react";
import stylePopular from "./PopularProjects.module.css"
import ProjectItem from "../ProjectItem/ProjectItem";

const PopularProjects = () => {
    return(
        <div className={stylePopular.popularContent}>
            <div className={stylePopular.headPopular}>Popular Project</div>
            <div className={stylePopular.popProjectList}>
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

export default PopularProjects