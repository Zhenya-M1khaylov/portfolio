import React from 'react';
import s from './Project.module.scss'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={{backgroundImage: `url(${props.style})`}}>
                <div className={s.zoomIcon}>
                    <a href=''></a>
                </div>
                <div className={s.title}>
                    <a href={props.url}>{props.title}</a>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
};

export default Project;