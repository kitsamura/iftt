import React, {useState} from 'react'
import classnames from 'classnames'
import css from './index.module.css'
import Arrow from "../../icons/arrow";
import {Link} from "react-router-dom";

const ArrowLink = ({title, route, className}) => {
    return (
        <Link to={route}>
            <div className={classnames(css.root, className)}>
                <div className={css.button}>
                    <div>{title}</div>
                    <Arrow/>
                </div>
            </div>
        </Link>
    )
}

export default ArrowLink