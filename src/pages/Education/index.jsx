import React, {Fragment} from 'react'
import css from './index.module.css'
import ArrowLink from "../../components/ArrowLink";
import DownloadLink from "../../components/DownloadLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <h2 className={css.title}>Образование в ифтт ран</h2>
                    <ArrowLink id="magistratura" title="Магистратура" route={'/education/master'}/>
                    <ArrowLink id="aspirantura" title="Аспирантура" route={'/education/graduate'}/>
                    <DownloadLink title="Темы дипломных работ, предлагаемые в ИФТТ РАН в 2023 году" className={css.downloadLink} />
                    <div id='mfti' className={css.titleContainer}>
                        <h2 className={css.title}>Кафедра физики твердого тела МФТИ</h2>
                        <Link to="http://www.issp.ac.ru/kafedra/ru/.html" target="_blank">
                            <div className={css.button}>Подробнее</div>
                        </Link>
                    </div>
                    <p className={css.text}>Обучение на нашей кафедре проходят студенты МФТИ.</p>
                    <p className={css.text}>Прием заявлений и документов в магистратуру МФТИ осуществляется первым этапом с 10 апреля по 20 июля 2023 года, вторым этапом с 21 апреля по 4 августа 2023 года.</p>
                    <p className={css.text}>Прием заявлений и документов в аспирантуру МФТИ осуществляется с 20 июня по 24 июля 2023 года.</p>
                    <p className={css.text}>Контактная информация: <b>shevchun@issp.ac.ru</b></p>

                    <div id="vshe" className={css.titleContainer}>
                        <h2 className={css.title}>Кафедра физики конденсированных сред&nbsp;физического факультета ВШЭ</h2>
                        <Link to="http://www.issp.ac.ru/hse-issp/page1.html" target="_blank">
                            <div className={css.button}>Подробнее</div>
                        </Link>
                    </div>
                    <p className={css.text}>Обучение на нашей кафедре проходят студенты физического факультета Национального исследовательского университета "Высшая школа экономики".</p>
                    <p className={css.text}>Прием заявлений и документов в магистратуру ВШЭ осуществляется с 19 июня по 25 июля 2023 года.</p>
                    <p className={css.text}>Прием заявлений и документов в аспирантуру ВШЭ осуществляется первым этапом с 1 августа по 14 сентября 2023 года.</p>
                    <p className={css.text}>Контактная информация: <b>fks-issp@issp.ac.ru</b></p>

                    <div id="agu" className={css.titleContainer}>
                        <h2 className={css.title}>базовая кафедра Астраханского государственного университета Ифтт ран</h2>
                    </div>
                    <p className={css.text}>По договоренности для реализации инновационного межотраслевого подхода к процессу обучения дважды в год несколько студентов 2-4 курсов Астраханского университета приезжают в Черноголовку для ознакомления с передовыми технологиями и получения опыта работы в лабораториях ИФТТ.</p>
                    <p className={css.text}>При этом задачи, экспериментально исследуемые студентами в лабораториях нашего института определяются совместным обсуждением АГУ и ИФТТ и могут представлять интерес как для университета, так и для института.</p>

                    <div id="noc" className={css.titleContainer}>
                        <h2 className={css.title}>НАУЧНО-ОБРАЗОВАТЕЛЬНЫЕ ЦЕНТРЫ</h2>
                    </div>
                    <ul className={css.aboutList}>
                        <li><b>НОЦ «Получение и исследование кристаллических материалов с особыми структурой и свойствами», руководитель</b> - д.ф.-м.н. Б.Б.Страумал</li>
                        <li><b>НОЦ «Металлические наноматериалы: получение, структура, свойства»,</b> руководитель проф. А.С.Аронин</li>
                        <li><b>НОЦ «Водородная энергетика», руководитель</b> - член-корреспондент РАН В.В.Кведер</li>
                        <li><b>НОЦ «Экситонная и плазмонная поляритоника в полупроводниковых наноструктурах: фундаментально научные основы, технология и приложения в технике» (НАНОИФТТ)</b></li>
                        <li><b>НОЦ «Сильно коррелированный электронный газ в твердых телах»</b></li>
                        <li><b>НОЦ «Жаропрочные материалы»,</b> руководитель - член-корреспондент РАН М.И.Карпов</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Main