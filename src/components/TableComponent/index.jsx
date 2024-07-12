import React from "react";
import { useTable, useSortBy } from "react-table";
import css from './index.module.css';

export default function Table({ columns, data, onClickCell }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );
    return (
        <table {...getTableProps()} className={css.root}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr className={css.header} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            className={
                                column.isSorted
                                    ? column.isSortedDesc
                                        ? "sort-desc"
                                        : "sort-asc"
                                    : ""
                            }
                            style={{width: column.width}}
                        >
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()} onClick={onClickCell}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}