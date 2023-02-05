import React from "react";
import s from './Contacts.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Contact} from "./Contact/Contact";
import {Button} from "../../Common/Components/Button/Button";
import {Title} from "../../Common/Components/Title/Title";


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.getTouch}>
                    <div className={s.titleBlock}>
                        <Title value={'Get in Touch'}/>
                            <p>Want to build something amazing together? Reach out to me using the form below!</p>
                        <div className={s.contacts}>
                            <Contact title={'Phone'} description={'+375 (25) 936-98-05'}/>
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
        </div>
    )
}

export default Contacts;