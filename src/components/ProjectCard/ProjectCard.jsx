import React from "react";
import styleProjectCard from "./ProjectCard.module.css"
import { Progress } from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import styleProjectItem from "../ProjectItem/ProjectItem.module.css";
const panes = [
    { menuItem: 'Project', pane: 'Here will be description of the project' },
    { menuItem: 'News', pane: 'Here will be news about the development of the project' },
    { menuItem: 'Comments', pane: 'Here you can ask questions or tell what you think about the project' }
]
const ProjectCard = () => {
    let rewardsData =[
        { id:1, name: 'Name Rewards', description: 'Description Rewards', delivery: 'Date Delivery', price:'$$'},
        { id:2, name: 'Name Rewards', description: 'Description Rewards', delivery: 'Date Delivery', price:'$$'},
        { id:3, name: 'Name Rewards', description: 'Description Rewards', delivery: 'Date Delivery', price:'$$'}
    ]
    let rewardsElement = rewardsData.map(reward => <Reward key= {reward.id} name = {reward.name} description = {reward.description} delivery = {reward.delivery} price = {reward.price}/>)
    return (
        <div>
            <div className={styleProjectCard.basicInf}>
                <div className={styleProjectCard.projectImg}>Img</div>
                <div className={styleProjectCard.projectInformation}>
                    <div className={styleProjectCard.projectTitle}>Name ProjectName</div>
                    <div className={styleProjectCard.projectAnnotation}> I'm cool project! Finance me!</div>
                    <div className={styleProjectCard.author}>Author</div>
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
                    <div className={styleProjectCard.headerRewards}> Choose a reward </div>
                    {rewardsElement}
                </div>
            </div>
        </div>
    )
}

const Reward =(props)=>{
    return (
        <div className={styleProjectCard.rewards}>
            <div className={styleProjectCard.imgRewards}>img</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.delivery}</div>
            <div className={styleProjectCard.buyRewards}>
                <div>{props.price}</div>
                <button className={styleProjectCard.buyButton}>Buy</button>
            </div>
        </div>

    )
}
 export default ProjectCard