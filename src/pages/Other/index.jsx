import React, {Fragment} from 'react'
import css from './index.module.css'
import ArrowLink from "../../components/ArrowLink";

const topics = [
    { title: 'Журналы', route: 'journals'},
    { title: 'Библиотека', route: 'http://www.issp.ac.ru/lib/'},
    { title: 'Противодействие коррупции', route: 'anticorruption'},
    { title: 'Архив', route: 'archive'},
    { title: 'Контакты', route: '/dev'},
];


const Other = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <h2 id="labs" className={css.title}>Дополнительная информация</h2>
                    {topics.map(topic => (
                        <ArrowLink title={topic.title} route={topic.route}/>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Other