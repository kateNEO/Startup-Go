import React from "react";
import SliderStartProject from "../SliderStartProject/SliderStartProject";
import Categories from "../Categories/Categories";
import PopularProjects from "../PopularProjects/PopularProjects";
import styleHomeContent from "./HomeContent.module.css"

const HomeContent = () =>{
    let projectItemData = [
        {
            id: 1,
            creatorAddress:"0x35b92fCd4366B048128f90D799343773567ca3B0",
            address:"0xC701263fF892F2447f24e3c0Ac2f36AEc4A42c38",
            transactionHash:"0xe0950a073ee637b46f8d5d0792eff10db9662e3f1ad65c6fe130a617d5a5f2a8",
            isActive:true,
            name:"На шавуху",
            description:"Хочется кушоц",
            goal:200,
            received:13,
            requestAcceptanceThreshold:80,
            onLeaveCommission:100
        }
    ]
    return (
        <div>
            <SliderStartProject/>
            <Categories/>
            <PopularProjects projectItemData ={projectItemData}/>
        </div>
    )
}

export default HomeContent