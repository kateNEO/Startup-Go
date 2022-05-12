import './App.css';
import React from "react";
import HeaderBlock from "./components/Header/HeaderBlock.jsx"
import SliderStartProject from "./components/SliderStartProject/SliderStartProject";
import Categories from "./components/Categories/Categories";
import PopularProjects from "./components/Popular Projects/PopularProjects";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeContent from "./components/HomeContent/HomeContent";
import AllProjectList from "./components/AllProjectList/AllProjectList";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import ProjectCard from "./components/ProjectCard/ProjectCard";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <HeaderBlock/>
              <Routes>
                  <Route path="/home" element ={<HomeContent/>}/>
                  <Route path="/allProject" element={<AllProjectList/>}/>
                  <Route path="/nameProject" element={<ProjectCard/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
