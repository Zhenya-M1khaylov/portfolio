import React from 'react';
import s from './Header.module.scss'
import Nav from "../Nav/Nav";


const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.header}>
                <a href={'https://t.me/zheniqq'}
                   rel="noreferrer"
                   target='_blank'>
                    <img src="https://www.svgrepo.com/show/61986/avatar.svg" alt="avatar"/>
                    <h2>Yuheni</h2>
                </a>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;