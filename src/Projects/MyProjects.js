import React from 'react';
import s from './MyProjects.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Project from "./Project/Project";

const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'JS'} description={'description'}/>
                    <Project title={'React'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;