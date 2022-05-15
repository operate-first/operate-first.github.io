import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Group } from '@mantine/core';
import { Link } from "gatsby"
import Logo from "../../assets/opf-logo.png"

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://wallpaperaccess.com/full/1567666.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 8,
    zIndex: 0,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 400,
      paddingBottom: theme.spacing.xl * 5,
      marginLeft: 20
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
      fontSize: 28,
      lineHeight: 1.3,
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
      color: 'black',
      backgroundColor: 'white'
    }
  },
}));

export function HomeContent() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <img src={Logo} width={"50%"}></img>
        <Title className={classes.title}>Building an all-Open Source community cloud to learn things and make things better</Title>
        <Group>
          <Link to="/getting-started">
          <Button variant="gradient" size="lg" radius="xl" className={classes.control}>
            Get Started
          </Button>
          </Link>
          {/* <Link to="/srepractices">
          <Button variant="outline" color="white" size="lg" radius="xl" className={classes.control}>
            SRE Practices
          </Button>
          </Link> */}
        </Group>
      </Container>
    </div>
  );
}
