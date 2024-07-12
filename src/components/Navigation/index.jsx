import React from 'react'
import css from './index.module.css'
import NavItem from "./components/NavItem";

const config = [
    {
        label: 'Главная',
        id: 'main',
        route: '/main',
        children: [
            {
                label: 'Об институте',
                route: '/main#about',
                isAnchor: true
            },
            {
                label: 'Контакты',
                route: '/main#contacts',
                isAnchor: true
            },
            {
                label: 'Администрация',
                route: '/main#administration',
                isAnchor: true
            },
            {
                label: 'Новости',
                route: '/main#news',
                isAnchor: true
            },
        ]
    },
    {
        label: 'Новости',
        id: 'news',
        route: '/news',
        children: [
            {
                label: 'Ученый совет',
                route: '/news#council',
                isAnchor: true
            },
            {
                label: 'Семинары',
                route: '/news#seminars',
                isAnchor: true
            },
            {
                label: 'Конференции',
                route: '/news#conferentions',
                isAnchor: true
            },
            {
                label: 'Архив новостей',
                route: '/news#archive',
                isAnchor: true
            },
        ]
    },
    {
        label: 'Список сотрудников',
        id: 'stuff',
        route: '/stuff',
    },
    {
        label: 'Структура',
        id: 'structure',
        route: '/structure',
        children: [
            {
                label: 'Центры коллективного пользования',
                route: '/structure#ckp',
                isAnchor: true
            },
            {
                label: 'Лаборатории',
                route: '/structure#labs',
                isAnchor: true
            },
            {
                label: 'Администрация',
                route: '/structure#administration',
                isAnchor: true
            },
            {
                label: 'Профком',
                route: '/structure#profkom',
                isAnchor: true
            },
            {
                label: 'Службы',
                route: '/structure#services',
                isAnchor: true
            },
        ]
    },
    {
        label: 'Образование',
        id: 'education',
        route: '/education',
        children: [
            {
                label: 'Магистратура',
                route: '/education#magistratura',
                isAnchor: true
            },
            {
                label: 'Аспирантура',
                route: '/education#aspirantura',
                isAnchor: true
            },
            {
                label: 'Кафедра МФТИ',
                route: '/education#mfti',
                isAnchor: true
            },
            {
                label: 'Кафедра ВШЭ',
                route: '/education#vshe',
                isAnchor: true
            },
            {
                label: 'Кафедра АГУ',
                route: '/education#agu',
                isAnchor: true
            },
            {
                label: 'НОЦ',
                route: '/education#noc',
                isAnchor: true
            },
        ]
    },
    {
        label: 'Другое',
        id: 'other',
        route: '/other',
        children: [
            {
                label: 'Журналы',
                route: '/other/journals',
            },
            {
                label: 'Библиотека',
                route: 'http://www.issp.ac.ru/lib/',
            },
            {
                label: 'Антикоррупция',
                route: '/other/anticorruption',
            },
            {
                label: 'Архив',
                route: '/other/archive',
            },
            {
                label: 'Контакты',
                route: '/dev',
                // isAnchor: true
            },
        ]
    }
]

const Header = () => {
    return (
        <nav className={css.root}>
            <div className={css.wrapper}>
                {config.map(item => (
                    <NavItem
                        label={item.label}
                        key={item.id}
                        route={item.route}
                        children={item.children}
                    />
                ))}
            </div>
        </nav>
    )
}

export default Header