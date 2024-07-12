import React, {useEffect, useState} from 'react'
import css from './index.module.css'
import StuffItem from './StuffItem'
import classnames from "classnames";
import Arrow from "../../icons/arrow";

const stuffConfig = [
    {
        category: 'Администрация',
        name: 'Левченко Александр Алексеевич',
        position: 'Директор, Член-корреспондент РАН',
        email: 'levch@issp.ac.ru',
        phone: '+7 (496) 522-23-44',
        image: './images/levchenko.jpg'
    },
    {
        category: 'Администрация',
        name: 'Кведер Виталий Владимирович',
        position: 'Научный руководитель, Академик РАН',
        email: 'kveder@issp.ac.ru',
        phone: '+7 (496) 522-10-67',
        image: './images/kveder.jpg'
    },
    {
        category: 'Администрация',
        name: 'Колесников Николай Николаевич',
        position: 'Заместитель директора, Доктор тех. наук',
        email: 'nkolesn@issp.ac.ru',
        phone: '+7 (496) 522-16-29',
        image: './images/kolesnikov.jpg'
    },
    {
        category: 'Администрация',
        name: 'Девятов Эдуард Валентинович',
        position: 'Заместитель директора, Доктор физ.-мат. наук',
        email: 'dev@issp.ac.ru',
        phone: '+7 (496) 522-46-86',
        image: './images/devyatov.jpg'
    },
    {
        category: 'Администрация',
        name: 'Бардовский Константин Геннадьевич',
        position: 'Заместитель директора',
        email: 'bardovskiy@issp.ac.ru',
        phone: '+7 (496) 522-19-84 ',
        image: './images/bardovskii.jpg'
    },
    {
        category: 'Администрация',
        name: 'Ибрагимова Ирина Юрьевна',
        position: 'Заместитель директора',
        email: 'lawyer@issp.ac.ru',
        phone: '8 (496) 522-21-19',
        image: './images/ibragimova.jpg'
    },
    {
        category: 'Администрация',
        name: 'Терещенко Алексей Николаевич',
        position: 'Ученый секретарь, Кандидат физ.-мат. наук',
        email: 'tan@issp.ac.ru',
        phone: '+7 (496) 522-46-85',
        image: './images/tereschenko.jpg'
    },
    {
        category: 'Администрация',
        name: 'Аганина Наталья Владимировна',
        position: 'Главный бухгалтер',
        email: 'aganina@issp.ac.ru',
        phone: '8 (496) 522-40-65',
        image: './images/aganina.jpg'
    },
    {
        category: 'Администрация',
        name: 'Трунина Надежда Михайловна',
        position: 'Заведующая планово-финансовым отделом',
        email: 'trunina@issp.ac.ru',
        phone: '8 (496) 522-40-19',
        image: './images/trunina.jpg'
    },
]

const SLIDER_WIDTH = 1140;

const StuffSlider = ({className}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dotsCount = Math.ceil(stuffConfig.length / 3);
    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === (dotsCount - 1);
    const position = SLIDER_WIDTH * currentSlide;

    const onClickNext = () => {
        if (isLastSlide) {
            setCurrentSlide(0);
            return;
        }

        setCurrentSlide(currentSlide + 1)
    }

    const onClickPrev = () => {
        if (isFirstSlide) {
            setCurrentSlide(dotsCount -  1);
            return;
        }

        setCurrentSlide(currentSlide - 1)
    }

    const handleClickDot = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        if (currentSlide < 0) {
            setCurrentSlide(0)
        }

        if (currentSlide > stuffConfig.length - 1) {
            setCurrentSlide(stuffConfig.length - 1)
        }
    }, [currentSlide])

    return (
        <div className={className}>
            <div className={css.container}>
                <div className={css.holder}>
                    <div className={css.prev} onClick={onClickPrev}><Arrow/></div>
                    <div className={css.next} onClick={onClickNext}><Arrow/></div>
                    <div className={css.outer}>
                    <div className={css.wrapper} style={{
                        right: `${position}px`
                    }}>
                        {stuffConfig.map((item, index) => (
                            <StuffItem
                                category={item.category}
                                name={item.name}
                                position={item.position}
                                email={item.email}
                                phone={item.phone}
                                image={item.image}
                                index={index}
                                key={index}
                            />
                        ))}
                    </div>
                    </div>
                </div>
                <div className={css.indicator}>
                    <div className={css.indicatorWrapper}>
                        {Array(dotsCount).fill('').map((item, index) => (
                            <div
                                className={classnames(css.dot, currentSlide === index && css.active)}
                                onClick={() => handleClickDot(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StuffSlider