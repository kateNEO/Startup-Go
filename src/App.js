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


function App(props) {

  return (
      <BrowserRouter>
          <div className="App">
              <HeaderBlock/>
              <Routes>
                  <Route path="/" element ={<HomeContent projectItemData ={props.projectItemData} categoryData={props.categoryData}/>}/>
                  <Route path="/nameProject" element={<ProjectCard/>}/>
                  <Route path="/createProject/Basic" element={<SectionBasic categoryData={props.categoryData} menuItemData={props.menuItemData}/>}/>
                  <Route path="/myProject" element={<MyProject/>}/>
                  <Route path="/category/:name" element={<ResultPage projectItemData ={props.projectItemData} categoryData={props.categoryData}/>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
