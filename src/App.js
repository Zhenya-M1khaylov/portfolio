import React from "react";
import './App.css';
import s from './App.module.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {AboutMe} from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import MyProjects from "./components/Projects/MyProjects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <div className={s.containerForAll}>
                <Header/>
                <Main/>
                <AboutMe />
                <Skills />
                <MyProjects />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;
