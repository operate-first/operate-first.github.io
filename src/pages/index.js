import * as React from "react";
// Component imports
import { HomeContent } from "../components/homepage/HomePage";
import { AboutFeatures } from "../components/homepage/About";
import { InterestedField } from "../components/homepage/Interest";
import { FaqSimple } from "../components/homepage/Faq";
import { Nav } from "../components/homepage/Navbar";

const IndexPage = () => {
  const navItems = [
    {
      "link": "/about",
      "label": "Our Purpose"
    },
    {
      "link": "/pricing",
      "label": "Community"
    },
    {
      "link": "/learn",
      "label": "Docs & Training"
    },
    {
      "link": "/community",
      "label": "Op1st Community Cloud"
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
      <HomeContent />
      <AboutFeatures />
      <InterestedField />
      <FaqSimple />
    </main>
  )
}

export default IndexPage;
