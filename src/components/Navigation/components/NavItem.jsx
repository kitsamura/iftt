import React, { useState } from 'react';
import classnames from 'classnames'
import css from '../index.module.css'
import {NavLink} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

const NavItem = ({id, label, route, children}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={classnames(
                css.item,
                css[id],
            )}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <NavLink
                title={label}
                to={route}
            >
                {label}
            </NavLink>
            {children && isHovered && <div className={css.dropDown}>
                {children.map(item => (
                    <div className={css.dropDownItem}>
                        {item.isAnchor ?
                            <Link
                                key={item.route}
                                to={item.route}
                                onClick={() => setIsHovered(false)}
                            >
                                {item.label}
                            </Link> :
                            <NavLink
                                title={item.label}
                                to={item.route}
                                key={item.route}
                                onClick={() => setIsHovered(false)}
                            >
                                {item.label}
                            </NavLink>
                        }
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default NavItem