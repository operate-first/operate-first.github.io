import * as React from 'react';
import { Button, Container, Text, Title, Center } from '@mantine/core';
import { createStyles, SimpleGrid, ThemeIcon, Grid, Col } from '@mantine/core';
import {
  BuildingCommunity,
  MailFast,
  Speakerphone,
  BrandTwitter,
} from 'tabler-icons-react';
import { CommunityCard } from '../components/CommunityCard.js';

import { Layout } from '../components/Layout.tsx';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: BuildingCommunity,
    title: (
      <a href="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/">
        Community mailing list
      </a>
    ),
    description: 'for Operate First project user and contributor discussions',
  },
  {
    icon: Speakerphone,
    title: (
      <a href="https://lists.operate-first.cloud/admin/lists/announcements.lists.operate-first.cloud/">
        Announcements list
      </a>
    ),
    description: 'for the latest project news',
  },
  {
    icon: MailFast,
    title: (
      <a href="http://lists.opendev.org/cgi-bin/mailman/listinfo/openinfralabs">
        OpenInfra Labs mailing list
      </a>
    ),
    description:
      'for those interested in open source cloud operations more broadly',
  },
  {
    icon: BrandTwitter,
    title: <a href="https://twitter.com/operatefirst">Twitter</a>,
    description: (
      <p style={{ margin: 0, padding: 0 }}>
        You can also find us on Twitter, or view community project demos and
        updates on{' '}
        <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg">
          YouTube
        </a>
      </p>
    ),
  },
];

const communities = [
  {
    image:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?cs=srgb&dl=pexels-christina-morillo-1181354.jpg&auto=compress&cs=tinysrgb&h=800&w=320',
    category: 'Communities',
    title: 'Data Science',
    description:
      'Before we attempt to apply any AI or machine learning techniques to improve the CI workflow, it is important that we know how to both quantify and evaluate the current state of the CI workflow. In order to do this we must establish and collect the relevant metrics and key performance indicators (KPIs) needed to measure it. This is a critical first step as it allows us to quantify the state of CI operations, as well as apply the KPIs we will need to evaluate the impact of our AI tools in the future.',
    footer: 'Issues: 99:233 | PRs 8:244',
    stars: 16,
    forks: 59,
    contributors: 24,
    landingpage: 'https://github.com/aicoe-aiops/ocp-ci-analysis',
  },
  {
    image:
      'https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&w=800&h=320&dpr=1',
    category: 'Communities',
    title: 'SIG Operations',
    description:
      'This repository contains all the SRE (Site Reliability Engineering) principles and guidelines for managing the Operate First services. SRE is a software engineering approach to manage operations for systems, applications and services. We use software as a tool to manage systems, solve problems, and automate operations tasks.',
    footer: 'Issues: 34:400 | PRs 0:44',
    stars: 19,
    forks: 23,
    contributors: 8,
    landingpage: 'https://github.com/operate-first/operations',
  },
  {
    image:
      'https://images.pexels.com/photos/3782228/pexels-photo-3782228.jpeg?auto=compress&cs=tinysrgb&w=800&h=320&dpr=1',
    category: 'Communities',
    title: 'SIG Community',
    description:
      'This repository is used by all members of the Operate First community for managing the ongoing support and sustaining the community of persons and organizations around this initiative.',
    footer: 'Issues: 78:54 | PRs 8:74',
    stars: 6,
    forks: 0,
    contributors: 22,
    landingpage: 'https://github.com/operate-first/community',
  },
  {
    image: 'https://mma.prnewswire.com/media/1866773/OS_Climate_Logo.jpg',
    category: 'Communities',
    title: 'OS Climate',
    description:
      'Using Open Data Hub toolkit and Operate First infrastructure for OS-Climate -  This repository is the central location for the demos the Open Services (previously AICoE) team is developing within the OS-Climate project.',
    footer: 'Issues: 33:81 | PRs 10:71',
    stars: 7,
    forks: 13,
    contributors: 10,
    landingpage: 'https://github.com/os-climate/aicoe-osc-demo',
  },
  {
    image:
      'https://www.operate-first.cloud/static/opf-logo-b2b74c6d556f96066bf5836da3e43d61.png',
    category: 'Communities',
    title: 'Operate First Apps',
    description:
      'This repository serves as a centralized source of truth for the Operate First Community Cloud Offering. In this repository you will find various OCP/K8s manifests that define the desired state of all our clusters and different services deployed on these clusters.',
    footer: 'Issues: 51:289 | PRs 21:1,878',
    stars: 29,
    forks: 113,
    contributors: 95,
    landingpage: 'https://github.com/operate-first/apps',
  },
];

const CommunityPage = () => {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.icon}>
      <ThemeIcon size={44} radius="md" color="dark">
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={600}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Layout>
      <div className={classes.wrapper}>
        <Container>
          <Title className={classes.title} order={2}>
            Some of our communities!
          </Title>
          <Text py="sm">
            The number of communities and projects working withing the Operate
            First framework is constantly growing. And so are the different
            topics and usecases. You can use the idea, the platform, our
            governance and templates, or build something completely different
            upon the philosophy of Operate First. Contribute the way you like.
          </Text>
          <p>
            <SimpleGrid
              cols={3}
              spacing={30}
              breakpoints={[{ maxWidth: 'md', cols: 1 }]}
            >
              {communities.map((community, index) => (
                <CommunityCard key={index} {...community} />
              ))}
            </SimpleGrid>
          </p>

          <Title className={classes.title} order={2}>
            Who are we?
          </Title>
          <Text py="sm">
            We are data scientists, software engineers, and DevOps professionals
            working within the Operate First framework on Open Source software
            with Open Operations and infrastructure.
          </Text>
          <Text py="sm">
            We are focused on solving large scale operational issues around
            developing intelligent applications and managing hybrid cloud
            systems through the application of advanced automation and machine
            learning.
          </Text>
          <Text py="sm">
            In short,{' '}
            <b>
              we are building an all-Open Source community cloud as the best and
              clear way to understand and solve common, interrelated problems,
              while documenting the methods and practices of running a cloud
            </b>
            .
          </Text>
          <Title pt="md" order={2}>
            Join us!
          </Title>
          <Text py="md">
            <a href="/getting-started">
              <b>Jump to Getting Started page</b>
            </a>
          </Text>
          <Text py="sm">
            Find our code on{' '}
            <a href="https://github.com/operate-first/apps">GitHub</a>, meet the
            community on Slack, and{' '}
            <a href="https://lists.operate-first.cloud/">
              join our mailing lists
            </a>{' '}
            for announcements and discussions:
          </Text>
          <Text py="sm">
            If you’re interested in data science, check out our data{' '}
            <a href="https://old.operate-first.cloud/data-science/projectsoverview.md">
              science projects
            </a>
            . If you are more interested in site reliability engineering, we
            have SRE resources to help you get started!
          </Text>
        </Container>
        <Grid
          gutter={80}
          justify="center"
          style={{ paddingTop: 20, margin: 0 }}
        >
          <Col span={12} md={7}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: 'md', cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>

      <Center pb={40}>
        <a href="https://www.operate-first.cloud/community/README.html">
          <Button>Open community cloud</Button>
        </a>
      </Center>
    </Layout>
  );
};

export default CommunityPage;
