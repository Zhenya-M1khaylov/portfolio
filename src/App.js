import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./Projects/MyProjects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {AboutMe} from "./AboutMe/AboutMe";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe />
            <Skills />
            <MyProjects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
