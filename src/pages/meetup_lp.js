import * as React from 'react';
import Helmet from 'react-helmet';
import { Container, Title, Button, Text } from '@mantine/core';
import { Cloud } from 'tabler-icons-react';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet';

const MeetUpLandingpage = () => {
  return (
    <Layout>
      <Helmet>
        <meta httpEquiv="refresh" content={`0;URL='/meetup'`} />
      </Helmet>
      <MeetUp />
      <InterestedField />
    </Layout>
  );
};

export default MeetUpLandingpage;
