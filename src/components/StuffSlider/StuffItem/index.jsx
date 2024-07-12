import React, {Fragment} from 'react'
import css from '../index.module.css'
import Phone from '../../../icons/phone'
import Envelope from "../../../icons/envelope";

const StuffItem = ({category, name, position, email, phone, image, index}) => {
    return (
        <Fragment>
            <div className={css.stuffItem}>
                <div className={css.stuffItemImageWrapper}>
                    <div className={css.img} style={{backgroundImage: `url(${image})`}}/>
                    <div className={css.category}>{category}</div>
                </div>
                <div className={css.stuffItemTextWrapper}>
                    <div className={css.stuffName}>{name}</div>
                    <div className={css.stuffPosition}>{position}</div>
                    <div className={css.stuffEmail}>
                        <Envelope size={18}/><span>{email}</span>
                    </div>
                    <div className={css.stuffPhone}>
                        <Phone size={16}/><span>{phone}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default StuffItem