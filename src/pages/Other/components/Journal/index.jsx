import React, {Fragment} from 'react'
import css from './index.module.css'
import classnames from "classnames";
import { Link } from 'react-router-dom';

const Journal = ({title, text, img, index, link}) => {
    const isEven = (index + 1) % 2 === 0;

    return (
        <Fragment>
            <div className={classnames(css.root, isEven && css.light)}>
                <div className={css.wrapper}>
                    <div className={css.image}>
                        <div style={{width: '350px', height: '490px', backgroundImage: `url(${img})`, backgroundSize: 'contain'}}></div>
                    </div>
                    <div className={css.info}>
                        <div className={css.journalTitle}>{title}</div>
                        <div className={css.journalText}>{text}</div>
                        <Link to={link} target="_blank">
                            <div className={css.journalButton}>Перейти на сайт журнала</div>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Journal