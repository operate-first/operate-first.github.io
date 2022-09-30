import * as React from 'react';
// Component imports
import { Layout } from '../components/Layout';
import { Container, List, Text, Title } from '@mantine/core';

const SREPracticesPage = () => {
  return (
    <Layout>
      <Container pb={455}>
        <Title order={2} my="md">
          SRE Practices
        </Title>
        <Text>
          Beginning in January 2022 the Operate First community is releasing
          early (and often) a growing set of course materials for learning SRE
          methods and practices. These courses will be tied into the running
          community cloud, providing a look behind the normal secrecy wall
          around operations.
        </Text>
        <Text>
          Our plans for these courses is extensive and will be laid out on these
          pages. In the meantime, DIY learners are encouraged to begin looking
          around at how project operations are run, as a view into how the
          training courses are going to look.
        </Text>
        <Title order={3} py="md">
          Additional Resources
        </Title>
        <List>
          <List.Item>
            <a href="https://old.operate-first.cloud/community-handbook/operations-intro.md">
              SRE pages in the Operate First Community Handbook
            </a>{' '}
            used by the Operate First Operations SIG.
          </List.Item>
          <List.Item py="xs">
            The{' '}
            <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg/playlists">
              Operate First video playlists
            </a>{' '}
            cover various aspects of how the community cloud works, and other
            aspects of the community.
          </List.Item>
          <List.Item>
            Video demonstration of bringing up a new service{' '}
            <a href="https://www.youtube.com/watch?v=yJcT2z06kb0&t=379s">
              direct link to demonstration
            </a>
            .
          </List.Item>
        </List>
        <Text py="md">
          <b>Source:</b>{' '}
          <a href="https://old.operate-first.cloud/sre-learners/">
            https://old.operate-first.cloud/sre-learners/
          </a>
        </Text>
      </Container>
    </Layout>
  );
};

export default SREPracticesPage;
