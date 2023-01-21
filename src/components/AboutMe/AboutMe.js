import React from 'react'
import s from './AboutMe.module.scss'
import {Button} from "../../Common/Components/Button/Button";
import {Title} from "../../Common/Components/Title/Title";
import {SkillBar} from "./SkillBar/SkillBar";


export const AboutMe = () => {
    return (
        <div className={s.aboutBlock}>
            <Title value={'About me'}/>
            <div className={s.mainTextAndStatContainer}>
                <div className={s.aboutContainer}>
                    <div className={s.mainText}>
                        <h3>Howdy!</h3>
                        <p>I am Front-end developer.
                            I have experience in creating SPA with React & Redux, thunk, TypeScript / Javascript, Axios.
                            I love my job and treat it with all responsibility. I enjoy learning new technologies in my
                            free time and learn English. Now I am improving my skills in this direction and expanding
                            them with new technologies. I also plan to learn React Native in the future. Open for your
                            suggestions!</p>
                        <div className={s.buttonBlock}>
                            <Button name={'Download my CV'}/>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.stat}>
                            <SkillBar skill={'JavaScript / TypeScript'} percent={90}/>
                            <SkillBar skill={'React / Redux'} percent={85}/>
                            <SkillBar skill={'CSS3 / HTML5'} percent={80}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}