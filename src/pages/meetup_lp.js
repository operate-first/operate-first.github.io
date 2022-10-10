import * as React from 'react';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet';
import { MeetUp } from '../components/meetup';
import { InterestedField } from '../components/homepage/Interest';

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
