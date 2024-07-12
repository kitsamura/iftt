import React, {Fragment} from 'react'
import css from './index.module.css'

const Table = ({headers, data}) => {
    const gridStyle = headers.map(item => item.width).join('px ')

    return (
        <div className={css.root} style={{'grid-template-columns': `${gridStyle}px`}}>
            {headers.map(item => (
                <div className={css.header}>{item.value}</div>
            ))}
            {data.map(item => {
                return (
                    item.isLink ? <div className={css.data}><a href={item.value}>{item.value}</a></div> :
                    <div className={css.data}>{item.value}</div>
                )
            })}
        </div>
    )
}

export default Table