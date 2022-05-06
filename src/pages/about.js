import * as React from "react";
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { AboutContent } from "../components/nav-tabs/AboutPage";

const AboutPage = () => {
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
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      <Nav links={navItems} />
      <AboutContent />
      <Footer links={footerItems} />
    </main>
  )
}

export default AboutPage;
