import * as React from 'react';
// Component imports
import { MeetUp } from '../components/meetup';
import { InterestedField } from '../components/homepage/Interest';
import { Layout } from '../components/Layout';

const MeetUpPage = () => {
  return (
    <Layout>
      <MeetUp />
      <InterestedField />
    </Layout>
  );
};

export default MeetUpPage;
