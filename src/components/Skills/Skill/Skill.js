import React from 'react';
import s from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={s.skillWrapper}>
            <img className={s.skillImg} src={props.image} alt="skillPhoto"/>
            <h4 className={s.skillTitle}>{props.title}</h4>
            <ul className={`${s.skill__list}`}>
                {props.skillDescription.map((d,index) => {
                    return <li className={`${s.skill__listItem}`} key={index}>{d}</li>
                })}
            </ul>
        </div>
    );
};

export default Skill;