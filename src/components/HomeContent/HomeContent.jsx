import React from "react";
import SliderStartProject from "../SliderStartProject/SliderStartProject";
import Categories from "../Categories/Categories";
import PopularProjects from "../PopularProjects/PopularProjects";
import styleHomeContent from "./HomeContent.module.css"

const HomeContent = () =>{
    return (
        <div>
            <SliderStartProject/>
            <Categories/>
            <PopularProjects/>
        </div>
    )
}

export default HomeContent