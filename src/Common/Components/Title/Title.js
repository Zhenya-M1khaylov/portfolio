import React from 'react';
import s from './Title.module.scss'

export const Title = (props) => {
    return (
        <div className={s.titleBlock}>
            <h2>{props.value}</h2>
            <div className={s.horizontalLine}>
                <div className={s.top}/>
            </div>
        </div>
    );
};


