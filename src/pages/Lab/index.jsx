import React, {Fragment} from 'react'
import css from './index.module.css'
import classnames from "classnames";
import { Link } from 'react-router-dom';
import Contacts from '../../components/Contacts';
import Breadcrumbs from '../../components/Breadcrumbs';

const Lab = ({lab}) => {
    const {name, shortName, listTitle, listItems, link, contacts} = lab;

    return (
        <Fragment>
            <div className={css.aboutContainer}>
                <div className={css.aboutWrapper}>
                    <Breadcrumbs
                    section={{
                        label: 'Лаборатории',
                        route: '/structure'
                    }}
                    pageLabel={shortName}
                    className={css.breadcrumbs}
                    />
                    <h2 id="about" className={classnames(css.aboutTitle, css.title)}>{name}</h2>
                    <p className={css.aboutText}><span>{listTitle}</span></p>
                    <ul className={css.aboutList}>
                        {listItems.map(item => <li>{item}</li>)}
                    </ul>
                    <Link to={link} target="_blank">
                            <div className={css.siteButton}>Перейти на сайт лаборатории</div>
                    </Link>
                </div>
            </div>
            <Contacts
                    title={contacts.title}
                    person={contacts.person}
                    email={contacts.email}
                    phones={contacts.phones}
                    address={contacts.address}
            />
        </Fragment>
    )
}

export default Lab