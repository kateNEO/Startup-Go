import React from "react";
import sliderStyle from "./SliderStartProject.module.css"
import {NavLink} from "react-router-dom";

const SliderStartProject= (props) => {
    return(
        <div className={sliderStyle.slide}>
            <div className={sliderStyle.textSlider}>Start Now</div>
            <NavLink to="/createProject/Basic" className={sliderStyle.buttonCreate}>Create Project</NavLink>
        </div>

    )
}
export default SliderStartProject