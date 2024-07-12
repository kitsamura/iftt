import React from 'react'

export default function Search ({color = 'rgba(0, 0, 0, 0.4)', size = 20}) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_115_2379)">
                <path d="M19.9998 19.3222L14.7815 14.1039C16.137 12.446 16.8035 10.3306 16.643 8.19518C16.4826 6.05974 15.5075 4.06766 13.9195 2.63098C12.3314 1.19431 10.252 0.422961 8.11119 0.476487C5.97039 0.530014 3.93207 1.40432 2.41783 2.91856C0.903588 4.4328 0.0292815 6.47113 -0.024245 8.61192C-0.0777715 10.7527 0.693577 12.8322 2.13025 14.4202C3.56693 16.0082 5.55901 16.9833 7.69445 17.1438C9.82989 17.3042 11.9453 16.6377 13.6032 15.2822L18.8215 20.5006L19.9998 19.3222ZM8.33315 15.5006C7.01461 15.5006 5.72568 15.1096 4.62935 14.377C3.53302 13.6445 2.67854 12.6033 2.17395 11.3851C1.66937 10.1669 1.53735 8.82649 1.79458 7.53328C2.05182 6.24008 2.68676 5.05219 3.61911 4.11984C4.55146 3.18749 5.73934 2.55255 7.03255 2.29532C8.32576 2.03808 9.6662 2.1701 10.8844 2.67469C12.1025 3.17927 13.1437 4.03375 13.8763 5.13008C14.6088 6.22641 14.9998 7.51534 14.9998 8.83388C14.9978 10.6014 14.2948 12.2959 13.045 13.5457C11.7952 14.7955 10.1007 15.4986 8.33315 15.5006Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_115_2379">
                    <rect width="20" height="20" fill={color} transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
}