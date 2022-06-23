import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

const url="https://161.35.196.135:5013/api/campaigns/1";
let n = async () => {
    const line = await axios.get(url);
    console.log(line);
};
n();
let menuItemData =[
    {id:1, number:'1', name:'Basic'},
    {id:2, number:'2', name:'Rewards'},
    {id:3, number:'3', name:'Verification'}
]
let categoryData =[
    {id:1, name: 'Arts'},
    {id:2, name: 'Comics & Illustration'},
    {id:3, name: 'Design & Tech'},
    {id:4, name: 'Film'},
    {id:5, name: 'Food & Craft'},
    {id:6, name: 'Music'},
    {id:7, name: 'Games'},
    {id:8, name: 'Publishing'}
]
let projectItemData = [
    {
        id: 1,
        creatorAddress:"0x35b92fCd4366B048128f90D799343773567ca3B0",
        address:"0xC701263fF892F2447f24e3c0Ac2f36AEc4A42c38",
        transactionHash:"0xe0950a073ee637b46f8d5d0792eff10db9662e3f1ad65c6fe130a617d5a5f2a8",
        isActive:true,
        name:"На шавуху",
        img:"https://openmedia.io/files/2021/01/w-TASS_43491447.jpg",
        category:"Food & Craft",
        description:"Хочется кушоц",
        goal:1000,
        received:800,
        requestAcceptanceThreshold:80,
        onLeaveCommission:100
    },
    {
        id: 2,
        creatorAddress:"0x35b92fCd4366B048128f90D799343773567ca3B0",
        address:"0xC701263fF892F2447f24e3c0Ac2f36AEc4A42c38",
        transactionHash:"0xe0950a073ee637b46f8d5d0792eff10db9662e3f1ad65c6fe130a617d5a5f2a8",
        isActive:true,
        name:"На шаурмичку",
        img:"https://kurkumashaurma.by/assets/images/products/104/meksikanskaya-1200-dsc-5855.jpg",
        category:"Food & Craft",
        description:"Хочется кушоц",
        goal:500,
        received:13,
        requestAcceptanceThreshold:80,
        onLeaveCommission:100
    },
    {
        id: 3,
        creatorAddress:"0x35b92fCd4366B048128f90D799343773567ca3B0",
        address:"0xC701263fF892F2447f24e3c0Ac2f36AEc4A42c38",
        transactionHash:"0xe0950a073ee637b46f8d5d0792eff10db9662e3f1ad65c6fe130a617d5a5f2a8",
        isActive:true,
        name:"На помощь котикам",
        img:"https://upload-1ea6d5d5724ca2cef6f86e49c4cece1e.hb.bizmrg.com/iblock/5cc/5cc486c3edfd6c8526652620a2f50caa/eec0974a78514eb4fabc43bb821cd76e.jpg",
        category:"Publishing",
        description:"Любите котиков",
        goal:12000,
        received:6000,
        requestAcceptanceThreshold:80,
        onLeaveCommission:100
    },
    {
        id: 4,
        creatorAddress:"0x35b92fCd4366B048128f90D799343773567ca3B0",
        address:"0xC701263fF892F2447f24e3c0Ac2f36AEc4A42c38",
        transactionHash:"0xe0950a073ee637b46f8d5d0792eff10db9662e3f1ad65c6fe130a617d5a5f2a8",
        isActive:true,
        img: "https://static.insales-cdn.com/images/products/1/2606/481872430/shop-_1600x2000px_.jpg",
        name:"Фанфики рулят",
        category:"Comics & Illustration",
        description:"Рисуй на здоровье",
        goal:200,
        received:13,
        requestAcceptanceThreshold:80,
        onLeaveCommission:100
    }
]
ReactDOM.render(
    <App menuItemData={menuItemData} projectItemData ={projectItemData} categoryData={categoryData}/>,
    document.getElementById('root')
);


reportWebVitals();

//const root = ReactDOM.createRoot(document.getElementById('root'));
//
// root.render(
//   <React.StrictMode>
//
//       <div>
//           <Button primary>Primary</Button>
//           <Button secondary>Secondary</Button>
//       </div>
//   </React.StrictMode>
// );
// ReactDOM.createRoot();

