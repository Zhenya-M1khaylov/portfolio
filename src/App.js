import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./Projects/MyProjects";
import HireMe from "./HireMe/HireMe";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <MyProjects />
            <HireMe />
        </div>
    );
}

export default App;
