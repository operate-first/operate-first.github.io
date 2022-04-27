import * as React from "react"
// Mantine imports
import { Title, Text, Grid, Group, Skeleton } from '@mantine/core'
// Component imports
import { HomeContent } from "../components/homepage/HomePage";
import { AboutFeatures } from "../components/homepage/About";
import { InterestedField } from "../components/homepage/Interest";
import { FaqSimple } from "../components/homepage/Faq";
import { ContactSection } from "../components/homepage/Contact";
import { Nav } from "../components/homepage/Navbar";

const IndexPage = () => {
  const child = <Skeleton height={140} radius="md" animate={false} />;

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
      <Nav links={navItems}/>
      😜
    </main>
  )
}

export default IndexPage
