import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    return (
            <div className={s.nav}>
                <ul className={s.ul}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>
    );
};

export default Nav;


