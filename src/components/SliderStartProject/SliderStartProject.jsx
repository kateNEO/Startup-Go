import React from "react";
import sliderStyle from "./SliderStartProject.module.css"

const SliderStartProject= (props) => {
    return(
        <div className={sliderStyle.slide}>
            <div className={sliderStyle.textSlider}>Start Now</div>
            <button className={sliderStyle.buttonCreate}>Create Project</button>
        </div>

    )
}
export default SliderStartProject