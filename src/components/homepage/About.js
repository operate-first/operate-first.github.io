import React from 'react';
import PropTypes from 'prop-types';
import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  Title,
} from '@mantine/core';
import { Code, Cloud, BuildingCommunity } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.colors[theme.primaryColor][5],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  txtTitle: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
    },
  },

  abouttext: {
    [theme.fn.smallerThan('sm')]: {
      padding: 10,
    },
  },
}));

const mockdata = [
  {
    icon: Code,
    title: 'App Developers',
    description:
      'Deploy and maintain apps in an Open operations environment. Gather your own data and receive input on how to make your app operate better.',
  },
  {
    icon: Cloud,
    title: 'SRE and DevOps',
    description:
      'Site reliability engineering (SRE) is the evolution of DevOps for operating managed services. Join the movement to learn, capture, and apply SRE best practices in an Open operations environment, and help app developers build operations considerations back into their code.',
  },
  {
    icon: BuildingCommunity,
    title: 'Community',
    description:
      'Participate in the Operate First community. Contribute to the success of our Open operations mission while learning or even teaching best and good-enough practices.',
  },
];

Feature.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.object,
};

function Feature({ icon: Icon, title, description, className, ...others }) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Icon size={38} className={classes.icon} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

export function AboutFeatures() {
  const { classes } = useStyles();
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg" py="lg">
      <Title
        order={1}
        align="center"
        sx={(theme) => ({ color: theme.colors.yellow[5] })}
        className={classes.txtTitle}
      >
        Why build an all-Open Source community cloud?
      </Title>
      <Text
        my="xl"
        size="lg"
        px={100}
        className={classes.abouttext}
        align="center"
      >
        Open Source software is widely available, but it faces an
        operations-barrier when bringing it to a production environment. If it
        is proprietary services enabling Open Source to run in production or as
        a cloud, it undermines the Open Source development model. We must remove
        this barrier with an Open Source approach, creating{' '}
        <em>Open Operations</em>. This means developers and operators
        collaborate Openly to apply a product&apos;s operational considerations
        right back into the code itself.
      </Text>
      <SimpleGrid
        cols={3}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        spacing={50}
        py="md"
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
