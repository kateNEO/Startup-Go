import React from "react";
import styleProjectCard from "./ProjectCard.module.css"
import { Progress } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import styleProjectItem from "../ProjectItem/ProjectItem.module.css";
const panes = [
    { menuItem: 'Project', pane: 'Tab 1 Content' },
    { menuItem: 'News', pane: 'Tab 2 Content' },
    { menuItem: 'Comments', pane: 'Tab 3 Content' },
]
const ProjectCard = () => {
    return (
        <div>
            <div className={styleProjectCard.basicInf}>
                <div className={styleProjectCard.projectImg}>Img</div>
                <div className={styleProjectCard.projectInformation}>
                    <div className={styleProjectCard.projectTitle}>Name ProjectName</div>
                    <div className={styleProjectCard.projectAnnotation}> I'm cool project! Finance me!</div>
                    <div className={styleProjectCard.author}>Author</div>
                    <div className={styleProjectItem.city}>
                        <span className={styleProjectItem.city}>City</span>
                    </div>
                    <div className={styleProjectCard.moneyBlock}>
                        <div className={styleProjectCard.currentAmount}>1000$</div>
                        <span className={styleProjectCard.outOf}>out of</span>
                        <span className={styleProjectCard.totalAmount}>10 000$</span>
                        <span className={styleProjectCard.percentValue}>(10%)</span>
                    </div>
                    <div className={styleProjectCard.progress_US}><Progress percent={10} progress/></div>
                    <button className={styleProjectCard.buttonSupport}>Support</button>
                </div>
            </div>
            <div className={styleProjectCard.wrapperAboutProject}>
                <div className={styleProjectCard.menuProjectCart}>
                    <Tab panes={panes} renderActiveOnly={false}/>
                </div>
                <div className={styleProjectCard.rewardsWrapper}>
                    <Rewards/>
                </div>
            </div>
        </div>
    )
}

const Rewards =()=>{
    return(
        <div className={styleProjectCard.rewards}>

        </div>
    )
}
 export default ProjectCard