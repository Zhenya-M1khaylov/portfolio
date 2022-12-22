import React from 'react'
import s from './Contact.module.scss'

export const Contact = (props) => {
    return (
        <div className={s.content}>
            <div className={s.icon}></div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
        </div>
    )
}