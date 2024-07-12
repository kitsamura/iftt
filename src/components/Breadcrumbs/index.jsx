import React from 'react'
import classnames from 'classnames'
import css from './index.module.css'
import Folder from "../../icons/folder";
import {Link} from "react-router-dom";

const Breadcrumbs = ({section, pageLabel, className}) => {
    return (
        <div className={classnames(css.root, className)}>
            <Folder/>
            <Link to={section.route}>
                <div className={css.section}>{section.label}</div>
            </Link>
            <div className={css.slash}>/</div>
            <div className={css.page}>{pageLabel}</div>
        </div>
    )
}

export default Breadcrumbs;