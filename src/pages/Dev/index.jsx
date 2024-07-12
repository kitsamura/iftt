import React, {Fragment} from 'react'
import css from './index.module.css'
import { Link } from 'react-router-dom'

const Dev = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <h2 className={css.title}>Мы работаем над обновлением</h2>
                    <p className={css.aboutText}>Скоро здесь будет много интересного!</p>
                    <p className={css.aboutText}>Сейчас страница находится на стадии разработки.</p>
                    <Link to="/main">
                            <div className={css.journalButton}>Перейти на главную</div>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Dev