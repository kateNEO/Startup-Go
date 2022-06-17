import React from "react";
import SliderStartProject from "../SliderStartProject/SliderStartProject";
import Category from "../Categories/Category";
import PopularProjects from "../PopularProjects/PopularProjects";
import styleHomeContent from "./HomeContent.module.css"

const HomeContent = (props) =>{
    let categoryElements = props.categoryData.map (category => <Category key= {category.id} name= {category.name}/>)
    return (
        <div>
            <SliderStartProject/>
            <div className={styleHomeContent.homeCategory}>{categoryElements}</div>
            <PopularProjects projectItemData ={props.projectItemData}/>
        </div>
    )
}

export default HomeContent