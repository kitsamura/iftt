import React from 'react'
import css from './index.module.css'
import Arrow from "../../icons/arrow";
import Table from "../../components/Table";
import ArrowLink from '../../components/ArrowLink';
import { Link } from 'react-router-dom';

const seminarsConfig = [
    {label: 'Рост кристаллов',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/rost-kristallov.html',},
    {label: 'Теоретический семинар',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/teoreticheskij-seminar.html',},
    {label: 'Сверхпроводимость',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/sverkhprovodimost.html',},
    {label: 'Физика дефектов',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/sverkhprovodimost-2.html',},
    {label: 'Оптическая спектроскопия',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/optical-spectroscopy.html',},
    {label: 'Физическое материаловедение',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/fizicheskoe-materialovedenie.html',},
    {label: 'Физико-химический семинар',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/fiziko-khimicheskij-seminar.html',},
    {label: 'Физика низких температур',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/fizika-nizkikh-temperatur.html',},
    {label: 'Нелинейные динамические системы',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/nelinejnye-dinamicheskie-sistemy.html',},
    {label: 'Кристаллические структуры и фазовые превращения при нормальном и высоких давлениях',
     link: 'http://www.issp.ac.ru/main/index.php/ru/news/seminars/crystal-structures.html',},
]

const conferencesConfig = {
    headers: [
        {value: 'Название мероприятия', width: 291},
        {value: 'Тип мероприятия', width: 223},
        {value: 'Ссылка на мероприятие', width: 297},
        {value: 'Сроки проведения', width: 234},
        {value: 'Место проведения', width: 233}
    ],
    data: [
        {value: 'Пятая школа молодых ученых «Новые материалы и технологии для систем безопасности»'},
        {value: 'Всероссийская Школа молодых ученых'},
        {value: 'http://www.issp.ac.ru/nmtss2023/', isLink: true},
        {value: 'с 31.05.2023 по 01.06.2023'},
        {value: 'ИФТТ РАН, Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432 '},
        {value: 'Десятая Всероссийская конференция с международным участием «Топливные элементы и энергоустановки на их основе»'},
        {value: 'Конгрессное'},
        {value: 'http://www.issp.ac.ru/fuelcell2023/', isLink: true},
        {value: 'с 26.06.2023 по 29.06.2023'},
        {value: 'ИФТТ РАН, Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432'},
        {value: 'III Международная конференция «Физика Конденсированных Состояний»'},
        {value: 'Конгрессное'},
        {value: 'http://www.issp.ac.ru/fks2023/conference.html', isLink: true},
        {value: 'с 29.05.2023 по 03.06.2023'},
        {value: 'ИФТТ РАН, Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432'},
        {value: 'Особенности применения сканирующей зондовой микроскопии в вакууме и различных средах'},
        {value: 'Конгрессное'},
        {value: 'http://www.issp.ac.ru/SPM_Appl/index.htm', isLink: true},
        {value: 'с 30.05.2023 по 01.06.2023'},
        {value: 'ИФТТ РАН, Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432'}
    ]
}

const News = () => {
    return (
        <div className={css.root}>
            <div className={css.wrapper}>
                <h2 id="council" className={css.title}>ИНФОРМАЦИЯ УЧЕНОГО СОВЕТА</h2>
                <div className={css.infoWrapper}>
                    <div className={css.infoTitle}>Повестка дня Учёного совета 19.06.2023 г.</div>
                    <p className={css.infoParagraph}>
                        1. Научный доклад Щура Л.Н.:<br/>
                        «О работе отдела методов вычислительной физики НЦЧ ИФТТ РАН»
                    </p>
                    <p className={css.infoParagraph}>
                        2. Отчет по внутреннему гранту ИФТТ РАН:<br/>
                        «Разработка методики получения крупногабаритных деталей из композиционных материалов на основе карбида кремния»<br/>
                        Руководитель проекта – Шикунов С.Л.
                    </p>
                    <p className={css.infoParagraph}>
                        3. Доклады по работам, направляемым в печать:<br/>
                        «Аморфный лед средней плотности, полученный разложением водно-гелиевого геля», «Физика твердого тела»<br/>
                        В.В. Синицын, О.Г. Рыбченко, В.Б. Ефимов, А.А. Вирюс
                    </p>
                    <p className={css.infoParagraph}>
                        4. Закрытая часть:<br/>
                        <ul className={css.list}>
                            <li>Заседание аттестационной комиссии №1</li>
                            <li>Заседание конкурсной комиссии по выборам на замещение вакантных должностей</li>
                            <li>Разное</li>
                        </ul>
                    </p>
                </div>
                <ArrowLink title="Предыдущие повестки ученого совета" route="/">
                </ArrowLink>
                <div id="seminars" className={css.seminars}>
                    <h2 className={css.title}>СЕМИНАРЫ</h2>
                    <div className={css.seminarsWrapper}>
                        {seminarsConfig.map((seminar, index, link) => (
                            <Link to={seminar.link} target="_blank">
                            <div className={css.seminar} key={index}>
                                {seminar.label}
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div id="conferentions" className={css.conferences}>
                    <h2 className={css.title}>КОНФЕРЕНЦИИ</h2>
                    <h3 className={css.subTitle}>План конференций на 2023 год</h3>
                    <div className={css.conferencesTable}>
                        <Table headers={conferencesConfig.headers} data={conferencesConfig.data}/>
                    </div>
                </div>
                <div id="archive" className={css.archive}>
                    <div className={css.archiveWrapper}>
                        <h2 className={css.archiveTitle}>Архив новостей</h2>
                        <a href="#" className={css.archiveLink}>Важнейшие научные результаты</a>
                        <a href="#" className={css.archiveLink}>Стипендии имени академика Ю.А.Осипьяна</a>
                        <a href="#" className={css.archiveLink}>Итоги конкурсов научно-исследовательских работ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News