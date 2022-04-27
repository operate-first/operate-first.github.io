import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Text, SimpleGrid, Container } from '@mantine/core';
import { Cloud, Send, Database } from 'tabler-icons-react';

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
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const mockdata = [
  {
    icon: Cloud,
    title: 'Production Cloud Environment ',
    description:
      'Developing software in a production cloud environment made easier',
  },
  {
    icon: Send,
    title: 'Deploy your workloads using Git',
    description:
      'Making changes to your projects lorem lorem lorem lorem lorem lorem',
  },
  {
    icon: Database,
    title: 'Data-science driven',
    description:
      'Operate First is a free platform with the mission of lorem lorem lorem',
  },
];

Feature.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.object,
}

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
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg" py="lg">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
