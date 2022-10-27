import React from "react";
import s from './Contacts.module.scss';
import styleContainer from './../Common/Styles/Container.module.css';

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </form>
                <button type='submit' className={s.btn}>Send</button>
            </div>
        </div>
    )
}

export default Contacts;