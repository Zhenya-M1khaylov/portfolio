import React from "react";
import s from './Contacts.module.scss';
import styleContainer from './../Common/Styles/Container.module.css';
import {Contact} from "./Contact/Contact";
import {Button} from "../Common/Components/Button/Button";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.titleBlock}>
                    <h2>Get in Touch</h2>
                    <div className={s.horizontalLine}>
                        <div className={s.top}/>
                        <div className={s.bottom}/>
                        <p>Want to build something amazing together? Reach out to me using the form below!</p>
                    </div>
                    <div className={s.contacts}>
                        <Contact title={'Phone'} description={'+375(25)936-98-05'}/>
                        <Contact title={'Email'} description={'yuheni.mikhaylov@gmail.com'}/>
                        <Contact title={'Location'} description={'Minsk, Belarus'}/>
                    </div>
                </div>
                <form>
                    <div className={s.contactForm}>
                        <div className={s.nameEmail}>
                            <div className={s.name}>
                                <input type="text" name="name" placeholder={'Your Name'}/>
                            </div>
                            <div className={s.name}>
                                <input type="email" name="email" placeholder={'Your Email'} className={s.email}/>
                            </div>
                        </div>
                        <div className={s.message}>
                            <textarea name="message" cols={40} rows={10} placeholder={'Your Message'}></textarea>
                        </div>
                        <div className={s.button}>
                            <Button name={'send message'}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;