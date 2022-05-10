import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Image, Group, Center } from '@mantine/core';
import { Link } from "gatsby"

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
        <Image
          src="https://www.operate-first.cloud/static/8d56de4f3d3afae74daab76e9e11c4aa/fcda8/logo.png"
          width={"50%"}
          height={"50%"}
        />
        <Title className={classes.title}>a concept to incorporate operational experience into software projects</Title>
        {/* <Text className={classes.description} size="xl" mt="xl">
        a concept to incorporate operational experience into software projects
        </Text> */}

        <Group>
          <Link to="/about">
          <Button variant="gradient" size="lg" radius="xl" className={classes.control}>
            Developer
          </Button>
          </Link>
          <Link to="/about#">
          <Button variant="outline" color="white" size="lg" radius="xl" className={classes.control}>
            SRE Practices
          </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
