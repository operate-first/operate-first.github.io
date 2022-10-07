import * as React from 'react';
import Helmet from 'react-helmet';
import { Container, Title, Button, Text } from '@mantine/core';
import { Cloud } from 'tabler-icons-react';
import { Layout } from '../components/Layout';

const MeetUpLandingpage = () => {
  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="refresh" content={`0;URL='/meetup'`} />
      </Helmet>
      <Container>
        <Title order={2} my="md">
          Operate First - Data science community &#38; community cloud
        </Title>
        <Text> Click here to learn more about our meetup1</Text>
        <a href="/meetup">
          <Button leftIcon={<Cloud />} color="dark">
            Operate First - Data science community &#38; community cloud
          </Button>
        </a>
      </Container>
    </Layout>
  );
};

export default MeetUpLandingpage;
