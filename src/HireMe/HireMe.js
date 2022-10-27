import React from "react";
import s from './HireMe.module.scss';
import styleContainer from './../Common/Styles/Container.module.css';

function HireMe() {
    return (
        <div className={s.hireMeBlock}>
            <div className={`${styleContainer.container} ${s.hireMeContainer}`}>
                <div className={s.hireMeWrapper}>
                    <h2 className={s.title}>I'm looking into remote work options.</h2>
                    <button className={s.btn}>Hire Me</button>
                </div>

            </div>
        </div>


    )
}

export default HireMe;