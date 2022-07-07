import React from "react";
import s from './HireMe.module.css';
import styleContainer from './../Common/Styles/Container.module.css';

function HireMe() {
    return (
        <div className={s.huntMeBlock}>
            <div className={`${styleContainer.container} ${s.huntMeContainer}`}>
                <div className={s.huntMeWrapper}>
                    <h2 className={s.title}>Рассматриваю варианты удалённой работы</h2>
                    <button className={s.btn}>Нанять меня</button>
                </div>

            </div>
        </div>


    )
}

export default HireMe;