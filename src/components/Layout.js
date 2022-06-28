import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";

export const Layout = ({ children }) => {
    return (
        <main>
            <Nav />
                {children}
            <Footer />
        </main>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
}
