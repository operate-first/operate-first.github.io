import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Container, Group, Anchor, Text } from '@mantine/core';
import rhlogo from '../../assets/RedHat-logo-white_transp.svg';
import mocalliancelogo from '../../assets/MOCAlliance-logo-white_transp.png';
import openinfralabslogo from '../../assets/OpenInfraLabs-logo-white_transp.svg';

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: '#151515',
    borderTop: '2px solid rgb(140, 132, 119)',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const footerItems = [
    {
      link: 'https://www.redhat.com/en/about/privacy-policy',
      label: 'Privacy statement',
    },
    {
      link: 'https://www.redhat.com/en/about/terms-use',
      label: 'Terms of use',
    },
    {
      link: 'https://www.redhat.com/en/about/all-policies-guidelines',
      label: 'Policies and guidelines',
    },
    {
      link: 'https://openinfra.dev/legal/code-of-conduct',
      label: 'Code of Conduct',
    },
    {
      link: '/affiliations',
      label: 'Affiliations',
    },
  ];

  const { classes } = useStyles();
  const items = footerItems.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      target="_blank"
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
        <a href="https://www.redhat.com/en" target="_blank" rel="noreferrer">
          <img src={rhlogo} height="30" />
        </a>
        <a href="https://massopen.cloud/" target="_blank" rel="noreferrer">
          <img src={mocalliancelogo} height="30" />
        </a>
        <a href="https://openinfralabs.org/" target="_blank" rel="noreferrer">
          <img src={openinfralabslogo} height="30" />
        </a>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  links: PropTypes.array,
};
