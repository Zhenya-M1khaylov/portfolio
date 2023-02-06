import React from "react";
import s from './Footer.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Title} from "../../Common/Components/Title/Title";
import gmailIcon from '../../Assets/Icons/FooterIcons/gmail.svg';
import linkedInIcon from '../../Assets/Icons/FooterIcons/linkedin.svg';
import telegramIcon from '../../Assets/Icons/FooterIcons/telegram.svg';
import gitIcon from '../../Assets/Icons/FooterIcons/github.svg';

function Footer() {
    return (
        <footer className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title value={'Yuheni Mikhaylov'}/>
                <div className={s.someBlockWrapper}>
                    <div className={s.someBlock}>
                        <a href="https://t.me/zheniqq"
                           target="_blank"
                           rel="noreferrer">
                            <img src={telegramIcon}
                                 alt="telegram"/>
                        </a>
                    </div>
                    <div className={s.someBlock}>
                        <a href="https://www.linkedin.com/in/yuheni-mikhailau-8ba597216/"
                           target="_blank"
                           rel="noreferrer">
                            <img src={linkedInIcon}
                                 alt="linkedIn"/>
                        </a>
                    </div>
                    <div className={s.someBlock}>
                        <a href="mailto:yuheni.mikhaylov@gmail.com"
                           target="_blank"
                           rel="noreferrer">
                            <img src={gmailIcon}
                                 alt="gmail"/>
                        </a>
                    </div>
                    <div className={s.someBlock}>
                        <a href="https://github.com/Zhenya-M1khaylov"
                           target="_blank"
                           rel="noreferrer">
                            <img src={gitIcon}
                                 alt="gitHub"/>
                        </a>
                    </div>
                </div>
                <div className={s.allRight}>
                    <a href='https://t.me/zheniqq' target='_blank' rel='noreferrer'>@zheniqq</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;