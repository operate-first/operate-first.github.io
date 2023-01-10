import * as React from 'react';
import ServicesBoard from '../components/ServicesBoard';
import { Layout } from '../components/Layout.tsx';

// Mantine imports
import {
  Button,
  Container,
  Text,
  Title,
  Group,
  createStyles,
  Card,
  SimpleGrid,
  UnstyledButton,
} from '@mantine/core';
import { Book, Cloud, ListDetails, LayoutDashboard } from 'tabler-icons-react';

const clusters = [
  {
    title: 'Infra',
    icon: Cloud,
    color: 'red',
    url: 'http://console-openshift-console.apps.moc-infra.massopen.cloud/',
  },
  {
    title: 'Smaug',
    icon: Cloud,
    color: 'red',
    url: 'http://console-openshift-console.apps.smaug.na.operate-first.cloud/',
  },
  {
    title: 'Balrog',
    icon: Cloud,
    color: 'orange',
    url: 'https://console-openshift-console.apps.balrog.aws.operate-first.cloud/',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },

  frame: {
    width: '100%',
    height: 400,
    border: 'none',
  },
}));

const CommunityCloudPage = () => {
  const { classes, theme } = useStyles();
  const items = clusters.map((item) => (
    <a href={item.url} key={item.title} className={classes.item}>
      <UnstyledButton key={item.title} className={classes.item}>
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="sm" mt={7} weight={600}>
          {item.title}
        </Text>
      </UnstyledButton>
    </a>
  ));

  return (
    <Layout>
      <Container pb={69}>
        <Title order={2} my="md">
          Operate First Community Cloud
        </Title>
        <Text>
          The Operate First Community Cloud is a shared environment for Open
          Source projects and SRE practicioners.
        </Text>
        <Text>
          It&apos;s operated under a community SLA and as open and transparent
          as possible.
        </Text>
        <Text py="md">
          <a href="/getting-started">
            <b>Click here to get started as a user and contributor</b>
          </a>
        </Text>
        <Title order={2} my="lg">
          Resources
        </Title>
        <Group mb={40}>
          <a href="https://www.operate-first.cloud/apps/content/README.html">
            <Button leftIcon={<Book />} color="dark">
              GitOps Docs
            </Button>
          </a>
          <a href="https://github.com/operate-first/blueprint">
            <Button leftIcon={<Book />} color="dark">
              Blueprints and architectural decision records
            </Button>
          </a>
          <a href="https://github.com/operate-first/support">
            <Button leftIcon={<Book />} color="dark">
              Get support
            </Button>
          </a>
        </Group>
        <Group mb={40}>
          <a href="https://service-catalog.operate-first.cloud/">
            <Button leftIcon={<LayoutDashboard />} color="dark">
              Our Services
            </Button>
          </a>
          <a href="https://www.operate-first.cloud/apps/content/README.html">
            <Button leftIcon={<ListDetails />} color="dark">
              Environments
            </Button>
          </a>
        </Group>
        <Title order={2} my="md">
          Clusters
        </Title>
        <Card withBorder radius="md" className={classes.card}>
          <SimpleGrid cols={3} mt="md">
            {items}
          </SimpleGrid>
        </Card>
        <ServicesBoard />
      </Container>
    </Layout>
  );
};

export default CommunityCloudPage;
