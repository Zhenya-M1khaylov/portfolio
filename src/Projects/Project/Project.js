import React from 'react';
import s from './Project.module.css'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.iconProject}>
                <a className={s.btn}>Look</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Project;