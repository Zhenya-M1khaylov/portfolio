import React from 'react';
import style from './Main.module.scss'
import styleContainer from './../Common/Styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span> Hi there</span>
                    <h1>I am Yuheni Mikhaylov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;