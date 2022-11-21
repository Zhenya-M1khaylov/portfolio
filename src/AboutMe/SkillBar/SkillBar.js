import React from 'react'
import s from './SkillBar.module.scss'



export const SkillBar = (props) => {
    return (
        <div className={s.skillBar}>
            <h4 className={s.progressTitleHolder} style={{width:`${props.percent}%`}}>

                <span className={s.progressWrapper}>
                    <span className={s.progressMark}>
                        <span className={s.percent}>{props.percent}%</span>
                    </span>
                </span>
                <span className={s.progressTitle}>{props.skill}</span>
            </h4>
            <div className={s.progressOuter}>
                <div className={s.progressContent} style={{width:`${props.percent}%`}}></div>
            </div>
        </div>
    )
}