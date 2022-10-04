import React from 'react';
import s from './Project.module.css'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.iconProject} style={props.style}>
                <a className={s.btn}>Look</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.projectDescription}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;