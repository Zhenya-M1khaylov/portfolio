import React from 'react'
import s from './AboutMe.module.scss'
import {Button} from "../Common/Components/Button/Button";
import Title from "../Common/Components/Title/Title";
import {SkillBar} from "./SkillBar/SkillBar";



export const AboutMe = () => {
    return (
        <div className={s.aboutBlock}>
            <Title titleName={'About me'}/>
            <div className={s.mainTextAndStatContainer}>
                <div className={s.aboutContainer}>
                    <div className={s.mainText}>
                        <h3>Howdy!</h3>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                            beguiled and demoralized by th charms of pleasure of the moment, so blinded by desire,
                            tht they cannot foresee the pain and trouble that are</p>
                        <div className={s.buttonBlock}>
                            <Button name={'Download my CV'}/>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.stat}>
                            <SkillBar skill={'JavaScript / TypeScript'} percent={85}/>
                            <SkillBar skill={'React / Redux'} percent={80}/>
                            <SkillBar skill={'CSS3 / HTML5'} percent={75}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}