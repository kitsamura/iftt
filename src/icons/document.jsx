import React from 'react'

export default function Phone ({color = '#66000000', size = 20}) {
    return (
        <svg width={size} height={size} viewBox='0 0 32 32' fill='none'>
            <g clipPath="url(#clip0_111_1708)">
                <path d="M9.33342 16H22.6667V18.6667H9.33342V16ZM9.33342 24H18.6667V21.3333H9.33342V24ZM29.3334 10.1147V32H2.66675V4C2.66675 2.93913 3.08818 1.92172 3.83832 1.17157C4.58847 0.421427 5.60588 0 6.66675 0L19.2187 0L29.3334 10.1147ZM20.0001 9.33333H24.7814L20.0001 4.552V9.33333ZM26.6667 29.3333V12H17.3334V2.66667H6.66675C6.31313 2.66667 5.97399 2.80714 5.72394 3.05719C5.47389 3.30724 5.33341 3.64638 5.33341 4V29.3333H26.6667Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_111_1708">
                    <rect width="32" height="32" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}
