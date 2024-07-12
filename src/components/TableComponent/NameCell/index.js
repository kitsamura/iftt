import css from './index.module.css'

export default function NameCell({ value}) {
    return (<div className={css.name}>{value}</div>)
}