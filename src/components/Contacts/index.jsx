import React from 'react'
import css from './index.module.css'
import classNames from "classnames";
import Envelope from "../../icons/envelope";
import Phone from "../../icons/phone";
import Marker from "../../icons/marker";
import Person2 from "../../icons/person2";
import classnames from "classnames";

const Contacts = ({title, person, email, phones, info, address, lightTheme, className}) => {
    return (
        <div className={classnames(css.contactContainer, lightTheme && css.lightTheme, className)}>
            <div className={css.contactWrapper}>
                <h2 className={classNames(css.title, css.contactTitle)}>{title}</h2>
                {info && <div className={css.contactInfo}>{info}</div>}
                <div className={css.contactInner}>
                    {person && <div className={classNames(css.contactPerson, css.contactItem)}>
                        <Person2 size={32} color={'#12204C'}/>
                        <div className={css.contactText}>{person}</div>
                    </div>}
                    <div className={classNames(css.contactEmail, css.contactItem)}>
                        <Envelope size={32} color={'#12204C'}/>
                        <div className={css.contactText}>{email}</div>
                    </div>
                    <div className={classNames(css.contactPhone, css.contactItem)}>
                        <Phone size={32} color={'#12204C'}/>
                        <div className={css.contactText}>{phones}</div>
                    </div>
                    <div className={classNames(css.contactAddress, css.contactItem)}>
                        <Marker size={35} color={'#12204C'}/>
                        <div className={css.contactText}>{address}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts