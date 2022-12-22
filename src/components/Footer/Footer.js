import React from "react";
import s from './Footer.module.scss';
import styleContainer from './../../Common/Styles/Container.module.css';
import {Title} from "../../Common/Components/Title/Title";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title value={'Yuheni Mikhaylov'}/>
                {/*<h2 className={s.title}>Yuheni Mikhaylov</h2>*/}
                <div className={s.socialItems}>
                    <div className={s.socialItem}></div>
                    <div className={s.socialItem}></div>
                    <div className={s.socialItem}></div>
                    <div className={s.socialItem}></div>
                </div>
                <span className={s.copy}>© 2022 All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;