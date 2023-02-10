import React from 'react'
import s from './Button.module.scss'


export const Button = (props) => {
    return (
        <div className={s.buttonBlock}>
            <button>{props.title}</button>
        </div>
    )
}