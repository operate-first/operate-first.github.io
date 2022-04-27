import React from 'react';
import { createStyles, Title, Text, Button, Container, Center } from '@mantine/core';
import { Book, QuestionMark  } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    margin: 0,
    paddingTop: 120,
    paddingBottom: 80,
    border: 'none',
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
