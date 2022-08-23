import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title value={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'JS yo'}/>
                    <Skill title={'React'} description={'React yo'}/>
                    <Skill title={'HTML/CSS'} description={'HTML/CSS yo'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;