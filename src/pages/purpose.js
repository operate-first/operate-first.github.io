import * as React from "react";
import '../pages/style.css';
// Component imports
import { AboutContent } from "../components/nav-tabs/AboutPage";
import { Layout } from "../components/Layout";

const PurposePage = () => {

  return (
    <main>
      <Layout>
        <AboutContent />
      </Layout>
    </main>
  )
}

export default PurposePage;
