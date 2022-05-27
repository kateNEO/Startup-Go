import React from "react";
import styleAllProjectList from "./AllProjectList.module.css"

import ProjectItem from "../ProjectItem/ProjectItem";
import Category from "../Categories/Category";


const AllProjectList =(props)=>{
    let categoryElements = props.categoryData.map (category => <Category key= {category.id} name= {category.name}/>)
    let projectAllElement = props.projectItemData.map(item => <ProjectItem key={item.id} name ={item.name} currentAmount={item.received} totalAmount={item.goal}/>)
    return (
        <div className={styleAllProjectList.allPrjContent}>
            <div className={styleAllProjectList.navCategories}>
                {categoryElements}
            </div>
            <div className={styleAllProjectList.allProjectsArea}>
                {projectAllElement}


            </div>
        </div>
    )

}
export default AllProjectList