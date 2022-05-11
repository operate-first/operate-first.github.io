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
  const navItems = [
    {
      "link": "/about",
      "label": "Our Purpose"
    },
    {
      "link": "/community",
      "label": "Community"
    },
    {
      "link": "/docs-training",
      "label": "Docs & Training"
    },
    {
      "link": "/community-cloud",
      "label": "Op1st Community Cloud"
    }
  ]

  const footerItems = [
    {
      "link": "https://www.redhat.com/en/about/privacy-policy",
      "label": "Privacy statement"
    },
    {
      "link": "https://www.redhat.com/en/about/terms-use",
      "label": "Terms of use"
    },
    {
      "link": "https://www.redhat.com/en/about/all-policies-guidelines",
      "label": "Policies and guidelines"
    },
    {
      "link": "https://openinfra.dev/legal/code-of-conduct",
      "label": "Code of Conduct"
    }
  ]

  return (
    <main>
      <Nav links={navItems} />
      <HomeContent />
      <AboutFeatures />
      <InterestedField />
      <FaqSimple />
      <Footer links={footerItems} />
    </main>
  )
}

export default IndexPage;
