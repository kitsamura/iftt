import React, {Fragment} from 'react'
import css from './index.module.css'
import StuffSlider from '../StuffSlider'
import classnames from "classnames";
import Search from "../../icons/search";
import { NavLink } from 'react-router-dom';

const stuffConfig = [
    {
        category: 'Администрация',
        name: 'Левченко Александр Алексеевич',
        position: 'Директор, Член-корреспондент РАН',
        email: 'levch@issp.ac.ru',
        phone: '8 (496) 522-23-44',
        image: './images/levchenko.jpg'
    },
    {
        category: 'Администрация',
        name: 'Кведер Виталий Владимирович',
        position: 'Научный руководитель, Академик РАН',
        email: 'kveder@issp.ac.ru',
        phone: '8 (496) 522-10-67',
        image: './images/kveder.jpg'
    },
    {
        category: 'Администрация',
        name: 'Девятов Эдуард Валентинович',
        position: 'Заместитель директора, Доктор физ.-мат. наук',
        email: 'dev@issp.ac.ru',
        phone: '8 (496) 522-46-86',
        image: './images/devyatov.jpg'
    }
]

const StuffSearch = ({title, className}) => {
    return (
        <div className={className}>
            <div className={css.stuffContainer}>
                <div className={css.stuffWrapper}>
                    <div className={css.stuffHeaderWrapper}>
                        <h2 className={classnames(css.stuffTitle, css.title)}>{title}</h2>
                        <NavLink
                        className={css.stuffSearch}
                        to={'/stuff'}
                        >
                            <div className={css.stuffSearchIcon}>
                                <Search size={20} color={'rgba(0, 0, 0, 0.4)'}/>
                            </div>
                            <div className={css.stuffSearcTitle}>
                                <span>Поиск сотрудников</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <StuffSlider/>
        </div>
    )
}

export default StuffSearch