// inspired by https://github.com/mantinedev/mantine-gatsby-template/blob/master/src/components/Layout/Layout.tsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { Nav } from "./homepage/Navbar";
import { Footer } from "./homepage/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

// export const Layout = ({ children }) => {
export function Layout({ children }: LayoutProps) {

    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <Nav />
            {/* Add your theme here */}
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                {children}
            </MantineProvider>
            <Footer />
        </ColorSchemeProvider>
    );
};
