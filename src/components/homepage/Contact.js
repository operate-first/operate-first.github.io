import React from 'react';
import { createStyles, Text, Title, TextInput, Button, Center, Group } from '@mantine/core';
import { BrandSlack, Calendar } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    margin: '0px auto',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,


    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
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

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function ContactSection() {
  const { classes } = useStyles();
  return (
    <Center className={classes.wrapper} mg="sm" >
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text weight={500} size="lg" mb={5}>
          Want to get involved?
        </Text>
        <Text size="sm" color="dimmed">
          Make sure to join our mailing lists for announcements and discussions.
        </Text>
        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
        <Group style={{marginTop: "20px"}}>
          <Button leftIcon={<BrandSlack />} className={classes.control} size="lg" variant="default" color="gray">
            Join our Slack
          </Button>
          <Button leftIcon={<Calendar />} className={classes.control} size="lg">
            Join our calender
          </Button>
        </Group>
      </div>
    </Center>
  );
}
