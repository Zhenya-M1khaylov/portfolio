import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../Common/Styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span> Hi there</span>
                    <h1>I am Yuheni Mikhaylov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;