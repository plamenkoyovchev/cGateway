import React from 'react';

import './NavigationItem.scss';
import { Link } from 'react-router-dom';

const NavigationItem = ({ to, children }) => {
    return (
        <Link to={to} className='NavigationItem'>{children}</Link>
    );
}

export default NavigationItem;