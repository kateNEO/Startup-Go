import React from "react";
import styleSectionBasic from "./Sections.module.css"
import CreateProject from "../CreateProject/CreateProject";
import {NavLink} from "react-router-dom";

const SectionRewards =(props)=>{
    return(
        <div className={styleSectionBasic.sectionWrapper}>
            <CreateProject menuItemData={props.menuItemData}/>
            <div className={styleSectionBasic.headerSections}>
                Rewards
            </div>
            <div className={styleSectionBasic.basicWrapper}>

                    <p className={styleSectionBasic.headerInput}>Reward Name</p>
                    <input className={styleSectionBasic.inputText} type={"text"}/>
                <p className={styleSectionBasic.headerInput}>Description</p>
                <textarea className={styleSectionBasic.textArea}/>
                <p className={styleSectionBasic.headerInput}>Delivery</p>
                <select className={styleSectionBasic.select} name="delivery" id="delivery">
                    <option>no delivery required</option>
                    <option>delivery by the author</option>
                </select>
                <p className={styleSectionBasic.headerInput}>Price</p>
                <input className={styleSectionBasic.inputNumber} type={"number"}/>
                <span> $</span>


            </div>
            <div className={styleSectionBasic.bottomBasicWrapper}>
                <NavLink to="/createProject/Verification" className={styleSectionBasic.buttonNext}>Next ></NavLink>
            </div>
        </div>
    )
}
export default SectionRewards