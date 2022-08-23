import React from 'react';
import s from './Title.module.css'

const Title = (props) => {
    return (
        <div className={s.title}>
            <h2>{props.value}</h2>
        </div>
    );
};

export default Title;