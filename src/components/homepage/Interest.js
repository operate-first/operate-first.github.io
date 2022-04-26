import React from 'react';
import { createStyles, Title, Text, Button, Container, Center, useMantineTheme } from '@mantine/core';
import { Book, QuestionMark  } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    margin: 0,
    paddingTop: 120,
    paddingBottom: 80,
    backgroundColor: 'white',
    border: 'none',
    // backgroundImage:
    //   'url(https://wallpaperaccess.com/full/1567666.png)',
    backgroundColor: '#ffffff',

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  // dots: {
  //   position: 'absolute',
  //   color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

  //   '@media (max-width: 755px)': {
  //     display: 'none',
  //   },
  // },

  // dotsLeft: {
  //   left: 0,
  //   top: 0,
  // },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function InterestedField() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Center className={classes.wrapper} size="lg">
      <div className={classes.inner}>
        <Title className={classes.title}>
          Are{' '}
          <Text component="span" color="blue" inherit>
            you
          </Text>{' '}
          interested?
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Want to start learning SRE practices? Or Find out about our resources
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button leftIcon={<Book />} className={classes.control} size="lg" variant="default" color="gray">
            Data Science Learning Pathway
          </Button>
          <Button leftIcon={<QuestionMark />} className={classes.control} size="lg">
            Operate First Support
          </Button>
        </div>
      </div>
    </Center>
  );
}