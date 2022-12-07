import React from 'react';
import s from "./MyProjects.module.scss"
import styleContainer from './../Common/Styles/Container.module.css'
import Project from "./Project/Project";
import todoImage from "./../Assets/Image/todo.jpg"
import socialImage from "./../Assets/Image/social.jpg"
import {Title} from "../Common/Components/Title/Title";

const MyProjects = () => {
    const todoList = {
        backgroundImage: `url(${todoImage})`
    }
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title value={'My projects'}/>
                <div className={s.projects}>
                        <Project style={todoList}
                                 title={'Todo List'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project style={socialNetwork}
                             title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate debitis doloremque eius enim ex ipsa'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;