import React from 'react';
import {Link} from "react-router-dom";
import css from './index.module.css'
import Logo from "../../icons/logo";
import Vk from '../../icons/vk';
import Odnoklassniki from '../../icons/odnoklassniki';

const Footer = () => {
    return (
        <div className={css.root}>
            <div className={css.wrapper}>
                <div className={css.logoWrapper}>
                    <div className={css.logoContainer}>
                        <Logo size={65}/>
                        <div className={css.logoText}>ИФТТ РАН</div>
                    </div>
                    <div className={css.socialContainers}>
                        <div className={css.socialItem}>
                            <Link to='https://vk.com/public222954783' target="_blank">
                                <Vk size={32}/>
                            </Link>
                        </div>
                        <div className={css.socialItem}>
                            <Link to='https://ok.ru/group/70000004041539' target="_blank">
                                <Odnoklassniki size={32}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.contactsContainer}>
                    <div className={css.phoneWrapper}>
                        <div className={css.phoneLabel}>Телефон:</div>
                        <div className={css.phone}>+7 (496) 522-19-82</div>
                        <div className={css.phone}>+7 (906) 095-44-02</div>
                    </div>
                    <div className={css.addressContainer}>
                        <div className={css.addressLabel}>Адрес:</div>
                        <div className={css.address}>
                            г. Черноголовка, Московская обл.,<br/>
                            ул.Академика Осипьяна д.2, 142432, Россия
                        </div>
                    </div>
                </div>
                <div className={css.documentsContainer}>
                    <Link to={'/education/council'}>
                        <div className={css.document}>Документы</div>
                    </Link>
                    <div className={css.document}>Нормативные акты</div>
                    <Link to={'/other/anticorruption'}>
                        <div className={css.document}>Противодействие коррупции</div>
                    </Link>
                    <div className={css.document}>Банковские реквизиты </div>
                </div>
            </div>
        </div>
    )
}

export default Footer