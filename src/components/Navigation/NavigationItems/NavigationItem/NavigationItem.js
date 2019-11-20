import React from 'react';

import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ to, children }) => {
    return (
        <NavLink exact to={to} className='NavigationItem' activeClassName="active-link">{children}</NavLink>
    );
}

export default NavigationItem;