import './App.css';
import React from "react";
import HeaderBlock from "./components/Header/HeaderBlock.jsx"
import SliderStartProject from "./components/SliderStartProject/SliderStartProject";
import Categories from "./components/Categories/Categories";
import PopularProjects from "./components/PopularProjects/PopularProjects";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeContent from "./components/HomeContent/HomeContent";
import AllProjectList from "./components/AllProjectList/AllProjectList";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Footer from "./components/Footer/Footer";
import CreateProject from "./components/CreateProject/CreateProject";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <HeaderBlock/>
              <Routes>
                  <Route path="/" element ={<HomeContent/>}/>
                  <Route path="/allProject" element={<AllProjectList/>}/>
                  <Route path="/nameProject" element={<ProjectCard/>}/>
                  <Route path="/startProject" element={<CreateProject/>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
