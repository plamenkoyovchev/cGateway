import React from 'react';
import Auxilary from '../../hoc/Auxilary';

const Layout = ({ children }) => {
    return (
        <Auxilary>
            <main>{children}</main>
        </Auxilary>
    );
}

export default Layout;