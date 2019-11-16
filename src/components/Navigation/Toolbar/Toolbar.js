import React from 'react';

import './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <NavigationItems />
        </header>
    );
}

export default Toolbar;