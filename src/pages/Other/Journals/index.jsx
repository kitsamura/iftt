import React, {Fragment} from 'react'
import css from './index.module.css'
import Journal from '../components/Journal';
import Breadcrumbs from "../../../components/Breadcrumbs";

const JOURNALS = [
    {
        title: 'Журнал «‎Поверхность. Рентгеновские синхротронные и нейтронные исследования»‎',
        text: 'В журнале публикуются оригинальные статьи и обзоры по наиболее актуальным проблемам изучения поверхностных явлений; по актуальным проблемам физики твердого тела, материаловедения, экспериментальных методов, конденсированных сред, наноструктур, поверхностей тонких пленок и фазовых границ. Англоязычная версия журнала Journal of Surface Investigation. X-Ray, Synchrotron and Neutron Techniques (abbreviated title: J. Surf. Invest.: X-Ray, Synchrotron Neutron Tech.) входит в WoS Core Collection.',
        image: './images/journal3.png',
        link:  'http://www.issp.ac.ru/journal/surface/',
    },
    {
        title: 'Композиты и наноструктуры (Composites and nanostractures)',
        text: 'Журнал публикует рецензируемые статьи по всем вопросам композитных материалов, главным образом, - конструкционных. Существенным образом включаются в круг основных вопросов композиты на основе наноструктурных компонентов.',
        image: './images/journal1.png',
        link:  'http://www.issp.ac.ru/journal/composites/',
    },
    {
        title: 'Информационный бюллетень «‎Перспективные Технологии»',
        text: 'Информационный центр ПЕРСТ (Перспективные Технологии - наноструктуры, сверхпроводники, фуллерены).',
        image: './images/journal2.png',
        link:  'http://www.issp.ac.ru/journal/perst/Control/Inform/perst.htm',
    },
];

const Journals = () => {
    return (
        <Fragment>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <Breadcrumbs
                        section={{
                            label: 'Другое',
                            route: '/other'
                        }}
                        pageLabel={'Журналы ИФТТ РАН'}
                        className={css.breadcrumbs}
                    />
                    <h2 className={css.title}>Журналы</h2>
                </div>
                {JOURNALS.map((item, index) => (
                    <Journal
                        title={item.title}
                        text={item.text}
                        img={item.image}
                        index={index}
                        link={item.link}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default Journals