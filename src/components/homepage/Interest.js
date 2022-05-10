import React from 'react';
import { createStyles, Group, Title, Text, TextInput, Button, Container, Center } from '@mantine/core';
import { Code, Cloud, Book, ZoomQuestion, BrandSlack, Calendar, BrandGithub, Mail } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    margin: 0,
    paddingTop: 50,
    paddingBottom: 80,
    border: 'none',
    background: 'rgb(0,25,51)',
    background: 'linear-gradient(359deg, rgb(0 44 91) 0%, rgba(0,44,92,1) 51%, rgba(0,52,107,1) 100%)',
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
    color: theme.colorScheme === 'light' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
    },
  },

  description: {
    color: 'white',
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
      width: 360,
      marginLeft: theme.spacing.xl,
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

  btncontrol: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      width: 360,
      marginLeft: theme.spacing.xl,
    },
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
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
            Select an area that interests you to see how to get started.
          </Text>
        </Container>

        <div className={classes.controls}>
          <a href="https://operate-first.cloud/developer">
            <Button leftIcon={<Code />} className={classes.control} size="lg">
              App Development
            </Button>
          </a>
          <a href="https://operate-first.cloud/sre">
            <Button leftIcon={<Cloud />} className={classes.control} size="lg">
              SRE and DevOps
            </Button>
          </a>
          <a href="https://operate-first.cloud/training">
            <Button leftIcon={<Book />} className={classes.control} size="lg">
              Training
            </Button>
          </a>
          <a href="https://github.com/operate-first/support">
            <Button leftIcon={<ZoomQuestion />} className={classes.control} size="lg">
              Operate First Support
            </Button>
          </a>
        </div>
        <div className={classes.controls}>
          <a href="https://operate-first.cloud/data_scientist">
            <Button leftIcon={<Book />} className={classes.control} size="med" variant="default" color="gray">
              Data Science Learning Pathway
            </Button>
          </a>
        </div>

        <Title align="center" style={{ color: 'white', marginTop: 40 }} className={classes.title}>Want to get involved?</Title>
        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Follow us or join the community on GitHub, in Slack, and on our mailing list.
          </Text>
        </Container>

        <div className={classes.controls}>
          <a href="https://github.com/operate-first">
            <Button leftIcon={<BrandGithub />} className={classes.control} size="lg" variant="default" color="gray">
              GitHub
            </Button>
          </a>
          <a href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww">
            <Button leftIcon={<BrandSlack />} className={classes.control} size="lg" variant="default" color="gray">
              Slack
            </Button>
          </a>
          <a href="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/">
            <Button leftIcon={<Mail />} className={classes.control} size="lg" variant="default" color="gray">
              Mailing list
            </Button>
          </a>
        </div>

      </div>
    </Center>
  );
}
