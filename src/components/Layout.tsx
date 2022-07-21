// inspired by https://github.com/mantinedev/mantine-gatsby-template/blob/master/src/components/Layout/Layout.tsx

import React from 'react';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';

import { Nav } from "./homepage/Navbar";
import { Footer } from "./homepage/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

// https://mantine.dev/theming/mantine-provider/
const myTheme: MantineThemeOverride = {
    colorScheme: 'light',
    // primaryColor: 'orange',
    // defaultRadius: 0,
    // fontFamily: 'Open Sans',
};

export function Layout({ children }: LayoutProps) {
    return (
        <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
            <Nav />
            {children}
            <Footer />
        </MantineProvider>
    );
};
