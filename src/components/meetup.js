import React from 'react';
import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
} from '@mantine/core';
import { Link } from 'gatsby';
import Logo from '../assets/opf-logo.png';
import Concrete from '../assets/concrete.png';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: `url(${Concrete})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 8,
    zIndex: 0,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: theme.spacing.xl * 5,
      paddingBottom: theme.spacing.xl * 5,
    },
  },

  title: {
    color: theme.white,
    fontSize: 55,
    fontWeight: 600,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
      marginBottom: theme.spacing.md * 1,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
      lineHeight: 1.3,
    },
  },

  title2: {
    color: theme.white,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
      marginBottom: theme.spacing.md * 1,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
      lineHeight: 1.3,
    },
  },

  title3: {
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 1,
    color: theme.white,
    fontSize: 30,
    fontWeight: 600,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 25,
      lineHeight: 1.2,
      marginBottom: theme.spacing.md * 1,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 20,
      lineHeight: 1.3,
    },
  },

  linkedText: {
    textDecoration: 'none',
    color: '#ffcc00',

    '&:hover': {
      textDecoration: '#ffcc00 underline',
      color: '#808080',
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.sm * 0.2,
      width: 250,
      fontSize: theme.fontSizes.md * 1.1,
      marginLeft: theme.spacing.lg * 2,
    },

    '@media (max-width: 360px)': {
      marginLeft: theme.spacing.lg,
    },

    '&:hover': {
      color: '#fcc419',
      backgroundColor: 'black',
    },
  },
}));

export function MeetUp() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <img src={Logo} width={'35%'} alt=""></img>
        <Title className={classes.title2}>
          Data science community &#38; community cloud
          <br />
          &#62;&#62;Bi-weekly meetup
        </Title>
        <Group>
          <Text size="xl" color="dimmed" className={classes.description}>
            <p>
              Join our meetup every other Tuesday @ 11:00 ET on{' '}
              <Link
                to="https://op1.st/meetup-gmeet"
                className={classes.linkedText}
              >
                google meet
              </Link>
              .
            </p>
            <p>
              &#62;&#62;Next Meeting is on Tuesday, February 7th, 2023 at 11:00
              ET.
            </p>
            <p>
              with{' '}
              <Link
                to="https://github.com/pulp/pulpcore"
                className={classes.linkedText}
              >
                Gerrod Ubben
                <br />
              </Link>{' '}
              talking about{' '}
              <Link
                to="https://pulpproject.org/"
                className={classes.linkedText}
              >
                <br />
                Pulp.
              </Link>{' '}
              <br />
              see also &#62;&#62;
              <Link
                to="https://developers.redhat.com/articles/2022/01/17/how-self-host-python-package-index-using-pulp#how_to_use_the_pulp_python_package_index"
                className={classes.linkedText}
              >
                How to self-host a Python package index using Pulp
              </Link>{' '}
            </p>
            <p>&#62;&#62; &#62;&#62; &#62;&#62; &#62;&#62;</p>
            <p>
              &#62;&#62;Meeting on Tuesday, February 21th, 2023 at 11:00 ET.
            </p>
            <p>
              with{' '}
              <Link
                to="https://github.com/LorbusChris"
                className={classes.linkedText}
              >
                Christian Glombeck
                <br />
              </Link>{' '}
              talking about{' '}
              <Link
                to="https://www.okd.io/blog/2022-10-25-OKD-Streams-Building-the-Next-Generation-of-OKD-together/"
                className={classes.linkedText}
              >
                <br />
                OKD Streams: Building the Next Generation of OKD together
              </Link>{' '}
              <br />
              see also &#62;&#62;
              <Link
                to="https://github.com/okd-project/okd"
                className={classes.linkedText}
              >
                github.com/okd-project/okd
              </Link>{' '}
            </p>
          </Text>
        </Group>
        <Group>
          <Link to="https://op1.st/mailinglist">
            <Button size="lg" radius="xl" className={classes.control}>
              Sign up
            </Button>
          </Link>
          <Link to="https://op1.st/meetup-calendar">
            <Button size="lg" radius="xl" className={classes.control}>
              Calendar
            </Button>
          </Link>
          <Link to="https://op1.st/youtube">
            <Button size="lg" radius="xl" className={classes.control}>
              Follow us on YouTube
            </Button>
          </Link>
        </Group>
        <Group>
          <Title className={classes.title3}>Ways to participate</Title>
        </Group>
        <Group>
          <List size="lg" color="dimmed" className={classes.description}>
            <List.Item>
              Sign up for the{' '}
              <Link
                to="https://op1.st/mailinglist"
                className={classes.linkedText}
              >
                mailing list
              </Link>
              .
            </List.Item>
            <List.Item>
              Check our{' '}
              <Link
                to="https://op1.st/meetup-calendar"
                className={classes.linkedText}
              >
                community calendar
              </Link>
              .
            </List.Item>
            <List.Item>
              Join our meetup every other Tuesday @ 11:00 ET on{' '}
              <Link
                to="https://op1.st/meetup-gmeet"
                className={classes.linkedText}
              >
                google meet
              </Link>{' '}
              .
            </List.Item>
            <List.Item>
              Introduce yourself on{' '}
              <Link to="https://op1.st/slack" className={classes.linkedText}>
                slack
              </Link>{' '}
              in the{' '}
              <Link
                to="https://operatefirst.slack.com/archives/C01RF4SPNDD"
                className={classes.linkedText}
              >
                #general
              </Link>{' '}
              or{' '}
              <Link
                to="https://operatefirst.slack.com/archives/C02KY881CJE"
                className={classes.linkedText}
              >
                #data-science
              </Link>{' '}
              channel.
            </List.Item>
            <List.Item>
              Present or suggest a topic by creating an{' '}
              <Link
                to="https://op1.st/suggestAtopic"
                className={classes.linkedText}
              >
                issue
              </Link>{' '}
              here.
            </List.Item>
            <List.Item>
              Check out our{' '}
              <Link to="https://op1.st/github" className={classes.linkedText}>
                GitHub
              </Link>{' '}
              repos.
            </List.Item>
            <List.Item>
              Watch previous sessions on{' '}
              <Link
                to="https://op1.st/meetup-recordings"
                className={classes.linkedText}
              >
                YouTube
              </Link>
              !
            </List.Item>
            <List.Item>
              <Link to="https://op1.st/twitter" className={classes.linkedText}>
                Twitter
              </Link>
              ,{' '}
              <Link to="https://op1.st/mastodon" className={classes.linkedText}>
                Mastodon
              </Link>
            </List.Item>
          </List>
        </Group>
      </Container>
    </div>
  );
}
