import React from 'react';
import s from "./MyProjects.module.scss"
import styleContainer from './../../Common/Styles/Container.module.css'
import todoImage from "./../../Assets/Image/todo.jpg"
import socialImage from "./../../Assets/Image/social.jpg"
import {Title} from "../../Common/Components/Title/Title";
import Project from "./Project/Project";


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
                             description={'Technologies used:\n' +
                             'React, Redux, ReduxThunk, Axios'}/>
                    <Project style={socialNetwork}
                             title={'Social Network'}
                             description={'Technologies used:\n' +
                             'React, Redux, ReduxThunk, Axios'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;