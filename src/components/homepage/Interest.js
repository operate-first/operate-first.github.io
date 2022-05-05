import React from 'react';
import { createStyles, Group, Title, Text, TextInput, Button, Container, Center } from '@mantine/core';
import { Book, QuestionMark, BrandSlack, Mail, BrandGithub } from 'tabler-icons-react';

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
            Want to start learning SRE practices? Or Find out about our resources
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button leftIcon={<Book />} className={classes.control} size="lg" variant="default" color="gray">
            Data Science Learning Pathway
          </Button>
          <a href="https://github.com/operate-first/support">
            <Button leftIcon={<QuestionMark />} className={classes.control} size="lg">
              Operate First Support
            </Button>
          </a>
        </div>
        <Title align="center" style={{ color: 'white', marginTop: 40 }} className={classes.title}>Want to get involved?</Title>
        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Find our code on GitHub, meet the community on slack, and join our mailing list
          </Text>
        </Container>
        <Group style={{ marginTop: "20px" }}>
          <a href="https://github.com/operate-first">
            <Button leftIcon={<BrandGithub />} className={classes.btncontrol} size="lg" variant="default" color="gray">
              Our GitHub
            </Button>
          </a>
          <a href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww">
            <Button leftIcon={<BrandSlack />} className={classes.btncontrol} size="lg" variant="default" color="gray">
              Join our Slack
            </Button>
          </a>
          <a href="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/">
            <Button leftIcon={<Mail />} className={classes.btncontrol} size="lg">
              Join our Mailing list
            </Button>
          </a>
        </Group>
      </div>
    </Center>
  );
}
