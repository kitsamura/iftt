import React, {Fragment} from 'react'
import css from './index.module.css'
import ArrowLink from "../../../components/ArrowLink";
import DownloadLink from "../../../components/DownloadLink";
import Contacts from "../../../components/Contacts";
import Breadcrumbs from "../../../components/Breadcrumbs";

const Master = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <Breadcrumbs
                        section={{
                            label: 'Образование',
                            route: '/education'
                        }}
                        pageLabel={"Магистратура ИФТТ РАН"}
                        className={css.breadcrumbs}
                    />
                    <h2 className={css.title}>Магистратура ифтт ран</h2>
                    <p className={css.text}>Направление подготовки: <b>28.04.04 Наносистемы и наноматериалы.</b><br/>Срок обучения по программе магистратуры составляет <b>2 года.</b></p>
                    <p className={css.text}>Для поступления в <b>магистратуру ИФТТ РАН</b> необходимы следующие документы:</p>
                    <ul className={css.aboutList}>
                        <li>заявление на имя директора института (заполняется в ИФТТ РАН);</li>
                        <li>копию диплома об окончании высшего учебного заведения, копию приложения к диплому (бакалавра);</li>
                        <li>личный листок по учету кадров (заполняется в ИФТТ РАН);</li>
                        <li>4 фото;</li>
                        <li>реферат предшествующей научно-исследовательской работы или дипломную работу (можно в электронном виде), или список опубликованных работ.</li>
                    </ul>
                    <p className={css.text}>Для иногородних студентов имеется <b>общежитие</b>.</p>
                </div>
                <Contacts
                    title={"контактная информация"}
                    person={"Заведующий отделом магистратуры: Симонов Сергей Владимирович"}
                    email={"simonov@issp.ac.ru"}
                    phones={['8 (496) 522-83-86', '8 (906) 095-83-30']}
                    address={'ИФТТ РАН, г. Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432, Россия'}
                />
                <div className={css.wrapper}>
                    <h2 className={css.title}>Документы</h2>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Образовательная программа 28.04.04 Наносистемы и наноматериалы" className={css.downloadLink} />
                        <DownloadLink title="Учебный план по направлению 28.04.04" className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Подача документов в магистратуру ИФТТ РАН" className={css.downloadLink} />
                        <DownloadLink title="Правила приема в магистратуру ИФТТ РАН" className={css.downloadLink} />
                        <DownloadLink title="Программа вступительного экзамена в магистратуру" className={css.downloadLink} />
                        <DownloadLink title="Курсы и практики" className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Программа государственной итоговой аттестации (ГИА) по направлению 28.04.04" className={css.downloadLink} />
                        <DownloadLink title="Аннотация Рабочих программ по направлению 28.04.04" className={css.downloadLink} />
                        <DownloadLink title="Приложение к программе ГИА по направлению 28.04.04" className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Контрольные цифры приема в магистратуру на 2018/19 уч.г." className={css.downloadLink} />
                        <DownloadLink title="Контрольные цифры приема в магистратуру на 2019/20 уч.г." className={css.downloadLink} />
                        <DownloadLink title="Контрольные цифры приема в магистратуру на 2022/23 уч.г." className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Приказ о зачислении в магистратуру в 2017 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в магистратуру в 2018 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в магистратуру в 2019 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в магистратуру в 2020 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в магистратуру в 2021 году" className={css.downloadLink} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Master;