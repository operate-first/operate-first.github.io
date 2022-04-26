import * as React from "react"
// Mantine imports
import { Title, Text, Grid, Group, Skeleton } from '@mantine/core'
// Component imports
import { HomeContent } from "../components/homepage/HomePage";
import { AboutFeatures } from "../components/homepage/About";
import { InterestedField } from "../components/homepage/Interest";
import { FaqSimple } from "../components/homepage/Faq";
import { ContactSection } from "../components/homepage/Contact";

const IndexPage = () => {
  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <main>
      <HomeContent/>
      <AboutFeatures />
      <Group mx="0" position="center" my="sm" py="md" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/1567666.png)' }}>
        <Group style={{ width: 500 }}>
          <Title align='center'
            sx={(theme) => ({
              color: `linear-gradient(45deg, #f3ec78, #af4261)`,
            })}
            style={{ color: 'white' }}
          >Why Operate First?</Title>
          <Text my="xl" size="lg" style={{ color: 'white' }}>
            Open source software is widely available, but it faces an operations barrier to entry into production environments. Proprietary services for operations undermine the open source model. To overcome this barrier, we must shift to an open source approach to operations.
            This means developers and operators collaborate to apply a product's operational considerations right back into the code itself.
          </Text>
        </Group>
        <Grid mx="md" style={{ width: 500}}>
          <Grid.Col xs={4}>{child}</Grid.Col>
          <Grid.Col xs={6}>{child}</Grid.Col>
          <Grid.Col xs={6}>{child}</Grid.Col>
          <Grid.Col xs={4}>{child}</Grid.Col>
          <Grid.Col xs={4}>{child}</Grid.Col>
          <Grid.Col xs={6}>{child}</Grid.Col>
        </Grid>
      </Group>
      <InterestedField />
      <FaqSimple />
      <ContactSection />
    </main>
  )
}

export default IndexPage
