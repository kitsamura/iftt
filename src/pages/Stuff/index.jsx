import React, {useState} from 'react'
import css from './index.module.css'
import Table from "../../components/TableComponent";
import Search from "../../icons/search";
import Sort from "../../icons/sort";
import Filter from "../../icons/filter";
import classnames from "classnames";
import Popup from "../../components/Popup";
import NameCell from "../../components/TableComponent/NameCell"

const columns = [
    {
        Header: "ФИО",
        width: 450,
        accessor: 'name',
        Cell: ({ cell: { value } }) => <NameCell value={value} />
    },
    {
        Header: "Телефон",
        width: 180,
        accessor: 'phone'
    },
    {
        Header: "Email",
        width: 250,
        accessor: 'email'
    },
    {
        Header: "Отдел",
        width: 230,
        accessor: 'department'
    },
]

const data = [
    {
        name: 'Абросимова Галина Евгеньевна',
        phone: '2-84-62',
        email: 'pochta@issp.ac.ru',
        department: 'ЛСИ',
        category: 'science',
    },
    {
        name: 'Аганина Наталья Владимировна',
        phone: '2-40-65',
        email: 'pochta@issp.ac.ru',
        department: 'Бухгалтерия',
        category: 'ran'
    },
    {
        name: 'Агарков Дмитрий Александрович',
        phone: '2-83-38',
        email: 'pochta@issp.ac.ru',
        department: '',
        category: 'science'
    },
    {
        name: 'Агаркова Екатерина Алексеевна',
        phone: '2-85-83',
        email: 'pochta@issp.ac.ru',
        department: 'ЛСДС',
        category: 'ran'
    },
    {
        name: 'Аксенова Елена Юрьевна',
        phone: '2-83-71',
        email: 'pochta@issp.ac.ru',
        department: 'Переводчик',
        category: 'aspirant'
    },
    {
        name: 'Аксенов Олег Игоревич',
        phone: '2-84-14',
        email: 'pochta@issp.ac.ru',
        department: 'ЛСИ',
        category: 'student'
    },
    {
        name: 'Александрова Ирина Александровна',
        phone: '2-83-31',
        email: 'pochta@issp.ac.ru',
        department: 'Бухгалтерия',
        category: 'more'
    },
    {
        name: 'Алёшина Ирина Сергеевна',
        phone: '2-56-04',
        email: 'pochta@issp.ac.ru',
        department: 'ОК',
        category: 'phd'
    },
    {
        name: 'Амелина Татьяна Анатольевна',
        phone: '2-84-13',
        email: 'pochta@issp.ac.ru',
        department: 'ГСХИВС',
        category: 'phd'
    },
]

const stuffCategories = [
    {
        label: 'Все',
        id: '',
    },
    {
        label: 'Научные сотрудники',
        id: 'science',
    },
    {
        label: 'Академики РАН',
        id: 'ran',
    },
    {
        label: 'Доктора наук',
        id: 'phd',
    },
    {
        label: 'Аспиранты',
        id: 'aspirant',
    },
    {
        label: 'Еще',
        id: 'more',
    }
]

const Stuff = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [search, setSearch] = useState('')
    const [isPopupOpened, setIsPopupOpened] = useState(false)

    const filteredData = data.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
            (selectedCategory === item.category || selectedCategory === '')
    })

    return (
        <div className={css.root}>
            <div className={css.wrapper}>
                <div className={css.filterWrapper}>
                    <div className={css.filterSearchWrapper}>
                        <Search size={20} color={'rgba(0, 0, 0, 0.4)'}/>
                        <input className={css.filterSearch} placeholder="Введите фамилию" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className={css.filterSettings}>
                        <Sort size={20} color={'rgba(0, 0, 0, 0.4)'} />
                        <span>Сортировка</span>
                    </div>
                    <div className={css.filterSettings}>
                        <Filter size={20} color={'rgba(0, 0, 0, 0.4)'} />
                        <span>Фильтры</span>
                    </div>
                </div>
                <div className={css.stuffCategoriesWrapper}>
                    {stuffCategories.map(category => (
                        <div
                            className={classnames(css.stuffCategory, category.id === selectedCategory && css.stuffCategoryActive)}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.label}
                        </div>
                    ))}
                </div>
                <Table data={filteredData} columns={columns} onClickCell={() => setIsPopupOpened(true)} />
                {isPopupOpened && <Popup onClosePopup={() => setIsPopupOpened(false)}/>}
            </div>
        </div>
    )
}

export default Stuff