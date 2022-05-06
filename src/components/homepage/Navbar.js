import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { BrandGithub, BrandSlack, BrandTwitter, BrandYoutube } from 'tabler-icons-react';
import icon from '../../../static/opf-logo.png'
import { Link } from "gatsby"

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: "#151515"
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1100px',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    '&:hover': {
      backgroundColor: theme.colors.dark[6]
    },

    [theme.fn.smallerThan('sm')]: {
      color: 'black',
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));


export function Nav({ links }) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes} = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      activeClassName={classes.linkActive}
      onClick={() => {
        toggleOpened(false)
      }}
    >
      {link.label}
    </Link>
  ))

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link to="/">
          <img src={icon} width="150px" alt="opf-logo" />
        </Link>
        <Group spacing={7} className={classes.links}>
          {items}
          <a href="https://github.com/operate-first" target="_blank" rel="noreferrer">
            <BrandGithub color="white" />
          </a>
          <a href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww" target="_blank" rel="noreferrer">
            <BrandSlack color="white" />
          </a>
          <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg" alt="youtube" target="_blank" rel="noreferrer">
            <BrandYoutube color="white" />
          </a>
          <a href="https://twitter.com/OperateFirst" alt="twitter" target="_blank" rel="noreferrer">
            <BrandTwitter color="white" />
          </a>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
          color='gray'
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Group spacing='xl' px='sm'>
                <a href="https://github.com/operate-first" target="_blank" rel="noreferrer">
                  <BrandGithub color="black" />
                </a>
                <a href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww" target="_blank" rel="noreferrer">
                  <BrandSlack color="black" />
                </a>
                <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg" alt="youtube" target="_blank" rel="noreferrer">
                  <BrandYoutube color="black" />
                </a>
                <a href="https://twitter.com/OperateFirst" alt="twitter" target="_blank" rel="noreferrer">
                  <BrandTwitter color="black" />
                </a>
              </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

Nav.propTypes = {
  links: PropTypes.object,
}
