import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = ({ children }) => {
    return (
        <Auxilary>
            <Toolbar />
            <main>{children}</main>
        </Auxilary>
    );
}

export default Layout;