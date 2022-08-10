import React from "react";
import styleSectionBasic from "./Sections.module.css"
import CreateProject from "../CreateProject/CreateProject";
import {NavLink} from "react-router-dom";

const SectionVerification = (props)=>{
    return(
        <div className={styleSectionBasic.sectionWrapper}>
            <CreateProject menuItemData={props.menuItemData}/>
            <div className={styleSectionBasic.headerSections}>Almost everything is ready...</div>
            <div className={styleSectionBasic.basicWrapper}>

                <p>Before submitting a project for moderation, make sure that:</p>
                    <ul>
                        <li>you got acquainted with the experience of successful projects and tried to support at least one project;</li>
                        <li>communicate clearly about your project;</li>
                        <li>explained why you need the money and what it will do in case of a successful collection.</li>
                    </ul>

            </div>
            <div className={styleSectionBasic.bottomBasicWrapper}>
                <button className={styleSectionBasic.buttonNext}>Post a project</button>
            </div>
        </div>
    )
}
export default SectionVerification