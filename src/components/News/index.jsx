import React from 'react'
import css from './index.module.css'
import { Link } from 'react-router-dom'

const config = [
    {label: 'Сверхпроводимость: семинар 21.06.2023 Среда 21 июня 2023г. 11.00 аудитория КМПС', date: '19.06.2023'},
    {label: 'Портал «Научная Россия» представил лекцию ведущего научного сотрудника ИФТТ РАН д.ф.-м.н. В.М. Муравьева...', date: '19.06.2023'},
    {label: 'ИФТТ РАН объявляет конкурс на замещение вакантных должностей старших научных сотрудников...', date: '12.06.2023'},
    {label: 'С 29 мая по 02 июня 2023 года в ИФТТ РАН состоялась 3-я Международная конференция...', date: '21.04.2020'},
]

const News = () => {
    return (
        <div className={css.root}>
            <div className={css.wrapper}>
                <div className={css.headerWrapper}>
                    <h2 className={css.title}>НОВОСТИ ИНСТИТУТА</h2>
                    <Link to="http://www.issp.ac.ru/main/index.php/ru/news.html" target="_blank">
                        <div className={css.button}>Смотреть все</div>
                    </Link>
                </div>
                <div className={css.itemsWrapper}>
                    {config.map((item, index) => (
                        <div className={css.item} key={index}>
                            <div className={css.date}>{item.date}</div>
                            <div className={css.text}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News