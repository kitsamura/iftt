import React from 'react'
import css from './index.module.css'
import Person from "../../icons/person";
import Close from "../../icons/close";

const Popup = ({onClosePopup}) => {
    return (
        <div className={css.overlay}>
            <div className={css.wrapper}>
                <div className={css.personImage}>
                    <Person/>
                </div>
                <div className={css.textWrapper}>
                    <div className={css.title}>Абросимова Галина Евгеньевна</div>
                    <div className={css.subTitle}>кандидат физико-математических наук</div>
                    <div className={css.infoWrapper}>
                        <div className={css.infoItem}><span>Мобильный телефон:</span>8(909)123-45-45</div>
                        <div className={css.infoItemGroup}>
                            <div className={css.infoItem}><span>Рабочий телефон:</span>2-84-62</div>
                            <div className={css.infoItem}><span>Email:</span>pochta@issp.ac.ru</div>
                        </div>
                        <div className={css.infoItem}><span>Должность:</span>старший научный сотрудник</div>
                        <div className={css.infoItem}><span>Лабаратория/Отдел:</span>ЛСИ</div>
                        <div className={css.infoItemGroup}>
                            <div className={css.infoItem}><span>Корпус:</span>ГЛК</div>
                            <div className={css.infoItem}><span>Комната:</span>404</div>
                        </div>
                        <div className={css.infoItem}><span>Предпочитаемый вид связи:</span>email</div>
                    </div>
                </div>
                <div className={css.closeIconWrapper} onClick={onClosePopup}>
                    <Close size={23}/>
                </div>
            </div>
        </div>
    )
}

export default Popup