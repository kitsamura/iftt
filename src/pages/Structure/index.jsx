import React from 'react'
import css from './index.module.css'
import Molecule from "../../icons/molecule";
import Atom from "../../icons/atom";
import ArrowLink from "../../components/ArrowLink";
import StuffSearch from "../../components/StuffSearch";
import DownloadLink from "../../components/DownloadLink";
import { Link } from 'react-router-dom';

const topics = [
    { title: 'Водородная энергетика', route: 'lve'},
    { title: 'Квантовые кристаллы', route: 'lqc'},
    { title: 'Квантовый транспорт', route: 'lqt'},
    { title: 'Материаловедение', route: 'lm'},
    { title: 'Материалы для электрохимических технологий', route: 'lmet'},
    { title: 'Неравновесные электронные процессы', route: 'lnep'},
    { title: 'Новые функциональные материалы и структуры', route: 'nfms'},
    { title: 'Поверхности раздела в металлах', route: 'libm'},
    { title: 'Профилированные кристаллы', route: 'lsc'},
    { title: 'Сверхпроводимость', route: 'ls'},
    { title: 'Сектор нанолитографии', route: 'lito'},
    { title: 'Сектор элементного и структурного анализа', route: 'sesa'},
    { title: 'Спектроскопии дефектных структур', route: 'lsds'},
    { title: 'Спектроскопии поверхности полупроводников', route: 'lsss'},
    { title: 'Структурных исследований', route: 'lsr'},
    { title: 'Технологии твердооксидных электролизных и топливных элементов', route: 'tt'},
    { title: 'Управляемого роста кристаллов', route: 'lurs'},
    { title: 'Физики высоких давлений', route: 'lhpp'},
    { title: 'Физико-химических основ кристаллизации', route: 'lpcbc'},
    { title: 'Электронной кинетики', route: 'lek'}
];

const News = () => {
    return (
        <div className={css.root}>
            <div className={css.wrapper}>
                <h2 id="ckp" className={css.title}>Центры коллективного пользования</h2>
                <div className={css.itemsWrapper}>
                    <Link to="http://www.issp.ac.ru:8080/" target="_blank">
                        <div className={css.item}>
                            <Atom/>
                            <div className={css.itemText}>
                                Центр коллективного пользования научным оборудованием
                            </div>
                        </div>
                    </Link>
                    <Link to="http://www.issp.ac.ru/center/" target="_blank">
                        <div className={css.item}>
                            <Molecule/>
                            <div className={css.itemText}>
                                Распределенный центр коллективного пользования
                            </div>
                        </div>
                    </Link>
                </div>

                <h2 id="labs" className={css.title}>Лаборатории</h2>
                {topics.map(topic => (
                    <ArrowLink title={topic.title} route={topic.route}/>
                ))}

                <StuffSearch id="#administration" title="АДМИНИСТРАЦИЯ" className={css.stuffSearch} />

                <div id="profkom" className={css.titleContainer}>
                    <h2 className={css.title}>ПРОФКОМ ифтт РАН</h2>
                    <div className={css.button}>Перейти на сайт</div>
                </div>
                <DownloadLink title="Состав Профкома ИФТТ РАН" />

                <div id="services" className={css.titleContainer}>
                    <h2 className={css.title}>Службы ифтт РАН</h2>
                </div>
                <DownloadLink title="Службы ИФТТ РАН" />
            </div>
        </div>
    )
}

export default News