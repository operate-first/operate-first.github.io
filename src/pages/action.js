import * as React from 'react';
import Helmet from 'react-helmet';
import { Container, Title, Button, Text } from '@mantine/core';
import { Cloud } from 'tabler-icons-react';
import { Layout } from '../components/Layout';

const ActionPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          httpEquiv="refresh"
          content={`0;URL='https://operate-first-in-action.catalog.meteor.zone/README.html'`}
        />
      </Helmet>
      <Container>
        <Title order={2} my="md">
          Welcome to Operate First in Action!
        </Title>
        <Text> Click here to know more about Operate First in Action </Text>
        <a href="https://operate-first-in-action.catalog.meteor.zone/README.html">
          <Button leftIcon={<Cloud />} color="dark">
            Operate First in Action
          </Button>
        </a>
      </Container>
    </Layout>
  );
};

export default ActionPage;
