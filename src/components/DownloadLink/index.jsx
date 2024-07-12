import React, {useState} from 'react'
import classnames from 'classnames'
import css from './index.module.css'
import Download from "../../icons/download";

const DownloadLink = ({title, className}) => {
    return (
        <div className={classnames(css.root, className)}>
            <Download/>
            <div className={css.text}>{title}</div>
        </div>
    )
}

export default DownloadLink;