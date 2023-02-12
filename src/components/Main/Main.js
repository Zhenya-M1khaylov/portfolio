import React from 'react';
import s from './Main.module.scss'
import {Button} from "../../Common/Components/Button/Button";

const Main = () => {

    return (
        <div className={s.mainBlock} id="home">
            <div className={s.mainContainer}>

                <div className={s.mainText}>
                    <h5>Hello, my name is</h5>
                    <h1>I am Yuheni Mikhaylov</h1>
                    <p>
                        I’m a frontend developer.
                    </p>
                    <div className={s.buttonBlock}>
                        <Button title={'my work'}/>
                    </div>
                </div>

                <div className={s.mainPhoto}></div>

            </div>
        </div>
    )
};

export default Main;