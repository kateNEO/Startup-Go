import './App.css';
import React from "react";
import HeaderBlock from "./components/Header/HeaderBlock.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeContent from "./components/HomeContent/HomeContent";
import AllProjectList from "./components/AllProjectList/AllProjectList";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Footer from "./components/Footer/Footer";
import SectionBasic from "./components/Sections/SectionBasic";
import SectionInformation from "./components/Sections/SectionInformation";
import MyProject from "./components/MyProject/MyProject";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <HeaderBlock/>
              <Routes>
                  <Route path="/" element ={<HomeContent/>}/>
                  <Route path="/allProject" element={<AllProjectList/>}/>
                  <Route path="/nameProject" element={<ProjectCard/>}/>
                  <Route path="/createProject/Basic" element={<SectionBasic/>}/>
                  <Route path="/createProject/Information" element={<SectionInformation/>}/>
                  <Route path="/myProject" element={<MyProject/>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
