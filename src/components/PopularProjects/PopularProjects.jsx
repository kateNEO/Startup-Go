import React from "react";
import stylePopular from "./PopularProjects.module.css"
import ProjectItem from "../ProjectItem/ProjectItem";

const PopularProjects = (props) => {

    let projectElement = props.projectItemData.map(item => <ProjectItem key={item.id} id={item.id} name ={item.name} currentAmount={item.received} totalAmount={item.goal}/>)
    return(
        <div className={stylePopular.popularContent}>
            <div className={stylePopular.headPopular}>Popular Project</div>
            <div className={stylePopular.popProjectList}>
                {projectElement}
            </div>

        </div>
    )
}

export default PopularProjects