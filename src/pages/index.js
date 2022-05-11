import * as React from "react";
import '../pages/style.css';
// Component imports
import { HomeContent } from "../components/homepage/HomePage";
import { AboutFeatures } from "../components/homepage/About";
import { InterestedField } from "../components/homepage/Interest";
import { FaqSimple } from "../components/homepage/Faq";
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";

const IndexPage = () => {

  return (
    <main>
      <Nav />
      <HomeContent />
      <AboutFeatures />
      <InterestedField />
      <FaqSimple />
      <Footer />
    </main>
  )
}

export default IndexPage;
