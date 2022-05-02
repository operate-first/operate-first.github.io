import React from 'react';
import { createStyles, Title, Container, Accordion, ThemeIcon, Button } from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      minHeight: 700,
      background: 'rgb(0,38,79)',
      background: 'linear-gradient(180deg, rgb(0 44 91) 0%, rgba(0,25,51,1) 50%, rgba(0,16,33,1) 100%)',
      position: 'relative',
    },

    title: {
      color: theme.white,
      fontSize: 40,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      marginTop: theme.spacing.xl,
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][5]
        } 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: 'rotate(0deg)',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  };
});

const placeholder =
  'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';

export function FaqSimple() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          iconPosition="right"
          initialItem={0}
          classNames={{
            item: classes.item,
            itemOpened: classes.itemOpened,
            control: classes.control,
            icon: classes.icon,
            contentInner: classes.content,
          }}
          icon={
            <ThemeIcon radius="xl" className={classes.gradient} size={32}>
              <Plus size={18} />
            </ThemeIcon>
          }
        >
          <Accordion.Item label="How do I onboard my project onto Operate First?">
            {placeholder}
            <Button className={cx(classes.gradient, classes.button)}>Reset password</Button>
          </Accordion.Item>
          <Accordion.Item label="Question #2">{placeholder}</Accordion.Item>
          <Accordion.Item label="Question #3">
            {placeholder}
          </Accordion.Item>
          <Accordion.Item label="Question #4">
            {placeholder}
          </Accordion.Item>
          <Accordion.Item label="Question #5">
            {placeholder}
            <Button className={cx(classes.gradient, classes.button)}>
              Subscribe to newsletter
            </Button>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
