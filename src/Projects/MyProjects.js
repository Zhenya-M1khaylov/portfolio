import React from 'react';
import s from './MyProjects.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";

const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title value={'My projects'}/>
                <div className={s.projects}>
                        <Project title={'Todo List'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate debitis doloremque eius enim ex ipsa'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;