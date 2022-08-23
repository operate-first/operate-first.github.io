import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Container, Group, Anchor, Text } from '@mantine/core';
import rhlogo from '../../assets/RHLogo.png';
import mocalliancelogo from '../../assets/MOC-Alliance_logo_transp.png';
import openinfralabslogo from '../../assets/OpenInfraLabs-logo_transp.png';

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
        <a href="https://www.redhat.com/en" target="_blank" rel="noreferrer">
          <img src={rhlogo} width="100" />
        </a>
        <Text color="dimmed" size="xs">
          Operate First is a<br />
          Red Hat initiative
        </Text>
        <Group className={classes.links}>{items}</Group>
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
