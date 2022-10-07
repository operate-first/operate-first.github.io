import * as React from 'react';
// Component imports
import { MeetUp } from '../components/meetup';
import { InterestedField } from '../components/homepage/Interest';
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
