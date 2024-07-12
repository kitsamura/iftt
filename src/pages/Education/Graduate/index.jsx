import React, {Fragment} from 'react'
import css from './index.module.css'
import ArrowLink from "../../../components/ArrowLink";
import DownloadLink from "../../../components/DownloadLink";
import Contacts from "../../../components/Contacts";
import classnames from "classnames";
import Breadcrumbs from "../../../components/Breadcrumbs";

const Master = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={classnames(css.wrapper)}>
                    <Breadcrumbs
                        section={{
                            label: 'Образование',
                            route: '/education'
                        }}
                        pageLabel={"Аспирантура ИФТТ РАН"}
                        className={css.breadcrumbs}
                    />
                    <h2 className={css.title}>Аспирантура ифтт ран</h2>
                    <p className={css.text}> Наименование направлений подготовки и специальностей:</p>
                    <ul className={css.list}>
                        <li><b>физика и астрономия (код - 03.06.01), специальность 1.3.8-физика конденсированного состояния.</b></li>
                        <li><b>технологии материалов (код - 22.06.01), специальность 2.6.1-металловедение и термическая обработка металлов и сплавов.</b></li>
                    </ul>
                    <p className={css.text}>Для поступления <b>в аспирантуру ИФТТ РАН</b> необходимы следующие документы:</p>
                    <ul className={css.list}>
                        <li>заявление на имя директора института (заполняется в ИФТТ РАН);</li>
                        <li>копию диплома об окончании высшего учебного заведения;</li>
                        <li>личный листок по учету кадров (заполняется в ИФТТ РАН);</li>
                        <li>4 фото;</li>
                        <li>автобиографию и характеристику;</li>
                        <li>реферат предшествующей научно-исследовательской работы или дипломную работу (можно в электронном виде), или список опубликованных работ.</li>
                    </ul>
                    <p className={css.text}>Вступительный экзамен по специальности принимает комиссия в институте, вступительный экзамен по иностранному языку сдается на кафедре соответствующего иностранного языка в Москве. </p>
                    <p className={css.text}>Во время учебы успешно работающие аспиранты могут участвовать в выполнении исследований в рамках российских и международных грантов и проектов, принимать участие в работе российских и международных конференций, а также проводить исследования за рубежом.</p>
                </div>
                <Contacts
                    title={"Контактная информация"}
                    person={"Заведующий отделом магистратуры: Симонов Сергей Владимирович"}
                    email={"simonov@issp.ac.ru"}
                    phones={['+7 (496) 522-83-86', '+7 (906) 095-83-30']}
                    address={'ИФТТ РАН, г. Черноголовка, Московская обл., ул.Академика Осипьяна д.2, 142432, Россия'}
                />
                <div className={css.wrapper}>
                    <h2 className={css.title}>Документы</h2>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Образовательная программа по направлению 03.06.01" className={css.downloadLink} />
                        <DownloadLink title="Образовательная программа по направлению 22.06.01" className={css.downloadLink} />
                        <DownloadLink title="Учебный план по направлению 03.06.01" className={css.downloadLink} />
                        <DownloadLink title="Учебный план по направлению 22.06.01" className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Подача документов в аспирантуру ИФТТ РАН" className={css.downloadLink} />
                        <DownloadLink title="Правила приема в аспирантуру ИФТТ РАН" className={css.downloadLink} />
                        <DownloadLink title="Положение об аспирантуре ИФТТ РАН" className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Программа государственной итоговой аттестации (ГИА) по направлению 03.06.01" className={css.downloadLink} />
                        <DownloadLink title="Аннотация Рабочих программ по направлению 03.06.01" className={css.downloadLink} />
                        <DownloadLink title="Аннотация Рабочих программ по направлению 22.06.01" className={css.downloadLink} />
                        <DownloadLink title="Приложение к программе ГИА по направлению 28.04.04" className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Контрольные цифры приема в аспирантуру на 2018/19 уч.г." className={css.downloadLink} />
                        <DownloadLink title="Контрольные цифры приема в аспирантуру на 2019/20 уч.г." className={css.downloadLink} />
                        <DownloadLink title="Контрольные цифры приема в аспирантуру на 2020/21 уч.г." className={css.downloadLink} />
                        <DownloadLink title="Контрольные цифры приема в аспирантуру на 2021/22 уч.г." className={css.downloadLink} />
                        <DownloadLink title="Контрольные цифры приема в аспирантуру на 2022/23 уч.г." className={css.downloadLink} />
                    </div>
                    <div className={css.downloadLinkGroup}>
                        <DownloadLink title="Приказ о зачислении в аспирантуру в 2017 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в аспирантуру в 2018 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в аспирантуру в 2019 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в аспирантуру в 2020 году" className={css.downloadLink} />
                        <DownloadLink title="Приказ о зачислении в аспирантуру в 2021 году" className={css.downloadLink} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Master;