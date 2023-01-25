import React from 'react';
import s from './Header.module.scss'
import Nav from "./Nav/Nav";


const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.header}>
                <a
                    href={'https://t.me/zheniqq'}
                    rel="noreferrer"
                    target='_blank'>
                </a>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;
