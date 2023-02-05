import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../Common/Styles/Container.module.scss'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span> Hi there</span>
                    <h1>I am Yuheni Mikhaylov</h1>
                    <p>I’m a frontend developer. I would like to find full-time employment or project work in a company with a modern approach to development and a collaborative team.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;