import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.scss';

const Layout = ({ children }) => {
    return (
        <Auxilary>
            <Toolbar />
            <main className="Main">{children}</main>
        </Auxilary>
    );
}

export default Layout;