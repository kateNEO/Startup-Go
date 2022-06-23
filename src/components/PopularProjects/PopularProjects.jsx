import React from "react";
import stylePopular from "./PopularProjects.module.css"
import ProjectItem from "../ProjectItem/ProjectItem";

const PopularProjects = (props) => {

    let projectElement = props.projectItemData.map(item => <ProjectItem key={item.id}
                                                                        id={item.id}
                                                                        name ={item.name}
                                                                        img={item.img}
                                                                        currentAmount={item.received}
                                                                        expectedAmount ={item.goal}
                                                                        description={item.description}
                                                                        category={item.category}
                                                                        requestAcceptanceThreshold={item.requestAcceptanceThreshold}
                                                                        onLeaveCommission={item.onLeaveCommission}/>)
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