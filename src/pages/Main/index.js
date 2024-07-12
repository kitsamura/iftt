import React, {Fragment} from 'react'
import css from './index.module.css'
import Logo from "./Logo";
import classNames from "classnames";
import classnames from "classnames";
import Document from "../../icons/document"
import Marker from "../../icons/marker"
import Envelope from "../../icons/envelope";
import Phone from "../../icons/phone";
import News from "../../components/News";
import StuffSearch from '../../components/StuffSearch';
import { Link } from 'react-router-dom';


const Main = () => {
    return (
        <Fragment>
            <Logo/>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <p className={css.text}>Прием заявлений и документов в <span>магистратуру ИФТТ РАН</span> осуществляется <span>с 29 мая по 7 июля</span> 2023 года. Сдача <span>вступительного экзамена</span> будет проходить с 10 июля по 14 июля 2023 года.</p>
                </div>
            </div>
            <div className={css.aboutContainer}>
                <div className={css.aboutWrapper}>
                    <div className={css.aboutHeaderWrapper}>
                        <h2 id="about" className={classnames(css.aboutTitle, css.title)}>ОБ ИНСТИТУТЕ</h2>
                        <Link to="http://www.issp.ac.ru/main/index.php/ru/common.htmls" target="_blank">
                            <div className={css.button}>
                                Подробнее
                            </div>
                        </Link>
                    </div>
                    <p className={css.aboutText}><span>Институт физики твёрдого тела РАН</span> находится в городе Черноголовка, в одном из научных центров России.</p>
                    <p className={css.aboutText}>ИФТТ РАН образован <span>15 февраля 1963 года</span> Академией Наук СССР.</p>
                    <p className={css.aboutText}>Идеи, положенные организаторами в основу создания института, — сочетание фундаментальных и практически ориентированных исследований в областях физики конденсированного состояния, физического материаловедения и высоких технологий.</p>
                    <p className={css.aboutText}>Коллектив института является одним из лидеров в таких направлениях, как:</p>
                    <ul className={css.aboutList}>
                        <li>магнитооптика полупроводников</li>
                        <li>поверхностные, двумерные и мезоскопические структуры</li>
                        <li>тверддооксидные топливные элементы</li>
                        <li>сверхпроводимость</li>
                        <li>аморфные, нанокристаллические и композитные материалы</li>
                    </ul>
                    <p className={css.aboutText}>ИФТТ является уникальным центром экспериментальных исследований, в котором представлены возможности проведения экспериментов в таких экстремальных условиях, как низкие температуры, сильные магнитные поля, высокие давления.</p>
                </div>
            </div>
            <div className={css.contactContainer}>
                <div className={css.contactWrapper}>
                    <h2 id="contacts" className={classNames(css.title, css.contactTitle)}>КАК С НАМИ СВЯЗАТЬСЯ</h2>
                    <div className={css.contactInner}>
                        <div className={classNames(css.contactEmail, css.contactItem)}>
                            <Envelope size={26} color={'#12204C'}/>
                            <div className={css.contactText}>adm@issp.ac.ru</div>
                        </div>
                        <div className={classNames(css.contactPhone, css.contactItem)}>
                            <Phone size={26} color={'#12204C'}/>
                            <div className={css.contactText}>+7 (496) 522-19-82 <br/> +7 (906) 095-44-02</div>
                        </div>
                        <div className={classNames(css.contactAddress, css.contactItem)}>
                            <Marker size={30} color={'#12204C'}/>
                            <div className={css.contactText}>ИФТТ РАН, г. Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432, Россия</div>
                        </div>
                        <div className={classNames(css.contactRequisites, css.contactItem)}>
                            <Document size={26} color={'#12204C'}/>
                            <div className={css.contactText}>Банковские реквизиты ИФТТ РАН</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="administration">
                <StuffSearch title="Наши сотрудники"  className={css.stuffSearch}/>
            </div>
            <div id="news">
                <News/>
            </div>
        </Fragment>
    )
}

export default Main