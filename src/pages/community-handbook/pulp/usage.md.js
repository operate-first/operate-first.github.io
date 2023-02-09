import * as React from 'react';
import Helmet from 'react-helmet';
import { Container, Title, Button, Text } from '@mantine/core';
import { Cloud } from 'tabler-icons-react';
import { Layout } from '../../../components/Layout';

const ActionPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          httpEquiv="refresh"
          content={`0;URL='https://old.operate-first.cloud/community-handbook/pulp/usage.md'`}
        />
      </Helmet>
      <Container>
        <Title order={2} my="md">
          We are forwarding you to the archived version of Operate First.
        </Title>
        <Text> Click here to go to </Text>
        <a href="https://old.operate-first.cloud/community-handbook/pulp/usage.md">
          <Button leftIcon={<Cloud />} color="dark">
            Pulp Python package index
          </Button>
        </a>
      </Container>
    </Layout>
  );
};

export default ActionPage;
