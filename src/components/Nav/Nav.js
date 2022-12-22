import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.ul}>
                <li><a href="">Home</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </div>
    );
};

export default Nav;