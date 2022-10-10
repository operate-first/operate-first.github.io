import * as React from 'react';
import { Layout } from '../components/Layout';
import { Container, List, Text, Title } from '@mantine/core';

const DeveloperPage = () => {
  return (
    <Layout>
      <Container pb={180}>
        <Title order={2} my="md">
          Developer
        </Title>
        <Text py="sm">
          Does your Open Source project want to test and prove your software in
          a cloud environment, as a kind of Open Source managed service?
        </Text>
        <Text py="sm">
          If you are interested in running your Open Source software in the
          Operate First community cloud, as a way to gain operational insights
          to make your software easier to run (operate) and debug in a
          production cloud, take these steps:
        </Text>
        <List type="ordered" py="lg" withPadding>
          <List.Item>
            Open a general Question issue in the Operate First support repo
            using{' '}
            <a href="https://github.com/operate-first/support/issues/new?assignees=&labels=question&template=question.md&title=">
              this template
            </a>
            . In the Description, explain about your software, how it works in a
            cloud environment, and any questions you have. We’ll use this issue
            as the central spot for initial scoping discussions.
          </List.Item>
          <List.Item py="xs">
            You may be asked or wish to already join the{' '}
            <a href="https://lists.operate-first.cloud/archives/list/community@lists.operate-first.cloud/">
              Operate First community mailing list
            </a>
            , which is used for broader discussion topics and easy community
            transparency.
          </List.Item>
          <List.Item>
            Before and during this process, continue using the “Learning
            Resources” below for your own education. The Operate First community
            cloud is a GitOps environment, meaning you will have the capability
            of initiating your own operation requests using a git workflow. In
            many cases, initiating via GitOps is the only way to accomplish
            something.
          </List.Item>
        </List>
        <Text></Text>
        <Text>
          If you have any further questions, you can reach to{' '}
          <a href="https://old.operate-first.cloud/community-handbook/support/README.md">
            Operate First community support
          </a>{' '}
          for help.
        </Text>
        <Title order={4} my="md">
          Learning Resources
        </Title>
        <Text py="md">
          As the Operate First project adds training and other learning
          resources, those will be linked in here to help Open Source developers
          find a learning pathway or self-directed learning within these
          materials.
        </Text>
        <Text>
          The GitOps Reference Documentation is useful for finding the what and
          how of getting operations done in the project. Beginning in January
          2022 the project is rolling out SRE training courses, which will
          incorporate meaningful examples from the running Operate First
          community cloud.
        </Text>
        <Text py="md">
          <b>Source:</b>{' '}
          <a href="https://old.operate-first.cloud/open-source-developers/">
            https://old.operate-first.cloud/open-source-developers/
          </a>
        </Text>
      </Container>
    </Layout>
  );
};

export default DeveloperPage;
