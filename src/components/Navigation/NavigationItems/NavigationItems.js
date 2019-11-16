import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <nav className='NavigationItems'>
            <NavigationItem to='/'>Home</NavigationItem>
            <NavigationItem to='/loads'>Loads</NavigationItem>
            <NavigationItem to='/rooms'>Rooms</NavigationItem>
            <NavigationItem to='/devices'>Devices</NavigationItem>
            <NavigationItem to='/moments'>Moments</NavigationItem>
        </nav>
    );
}

export default NavigationItems;