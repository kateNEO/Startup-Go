import './App.css';
import React from "react";
import HeaderBlock from "./components/Header/HeaderBlock.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeContent from "./components/HomeContent/HomeContent";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Footer from "./components/Footer/Footer";
import SectionBasic from "./components/Sections/SectionBasic";
import MyProject from "./components/MyProject/MyProject";
import ResultPage from "./components/ResultPage/ResultPage";
import SectionRewards from "./components/Sections/SectionRewards";
import SectionVerification from "./components/Sections/SectionVerification";


function App(props) {



  return (
      <BrowserRouter>
          <div className="App">
              <HeaderBlock/>
              <Routes>
                  <Route path="/" element ={<HomeContent projectItemData ={props.projectItemData} categoryData={props.categoryData}/>}/>
                  <Route path="/project/:id" element={<ProjectCard projectItemData ={props.projectItemData}/>}/>
                  <Route path="/createProject/Basic" element={<SectionBasic categoryData={props.categoryData} menuItemData={props.menuItemData}/>}/>
                  <Route path="/createProject/Rewards" element={<SectionRewards menuItemData={props.menuItemData}/>}/>
                  <Route path="/createProject/Verification" element={<SectionVerification menuItemData={props.menuItemData}/>}/>
                  <Route path="/myProject" element={<MyProject/>}/>
                  <Route path="/category/:name" element={<ResultPage projectItemData ={props.projectItemData} categoryData={props.categoryData}/>}/>
                  <Route path="/search/:value" element={<ResultPage projectItemData ={props.projectItemData} categoryData={props.categoryData}/>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
