// inspired by https://github.com/mantinedev/mantine-gatsby-template/blob/master/src/components/Layout/Layout.tsx

import React from 'react';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';

import './Layout.css';

import { Nav } from './homepage/Navbar';
import { Footer } from './homepage/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

// https://mantine.dev/theming/mantine-provider/
const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
  // defaultRadius: 0,
  // fontFamily: 'Open Sans',
  // https://smart-swatch.netlify.app/#ffcc02 (from the Operate First logo)
  colors: {
    operate_first_yellow: [
      '#fffada',
      '#fff0ad',
      '#ffe57d',
      '#ffdb4b',
      '#ffd11a',
      '#e6b700',
      '#b38f00',
      '#806600',
      '#4e3d00',
      '#1d1400',
    ],
  },
  primaryColor: 'yellow',
};

export function Layout({ children }: LayoutProps) {
  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      <Nav />
      {children}
      <Footer />
    </MantineProvider>
  );
}
