import * as React from 'react';
// Component imports
import { HomePage } from '../components/homepage/HomePage';
import { AboutFeatures } from '../components/homepage/About';
import { InterestedField } from '../components/homepage/Interest';
import { FaqSimple } from '../components/homepage/Faq';
import { Layout } from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <HomePage />
      <AboutFeatures />
      <InterestedField />
      <FaqSimple />
    </Layout>
  );
};

export default IndexPage;
