import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Container, List, Text, Title } from '@mantine/core';

const SREPracticesPage = () => {

  return (
    <main>
      <Nav />
      <Container pb={455}>
        <Title order={2} my="md">SRE Practices</Title>
        <Text>
          Beginning soon the Op1st community plans to release early (and often) a growing set of course materials for learning SRE methods and practices. These courses will be tied into the running community cloud, providing a look behind the wall of secrecy that normally surrounds the world of operations.
        </Text>
        <Text>
          Our plan for these courses will be laid out on these pages. In the meantime, DIY learners are encouraged to begin looking around at how project operations are run to get an idea of how the training courses are going to look.
        </Text>
        <Title order={3} py="md">
          Additional Resources
        </Title>
        <List>
          <List.Item py="xs">
            The <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg/playlists">Op1st video playlists</a> cover various aspects of how the community cloud works, and other aspects of the community.
          </List.Item>
          <List.Item>
            Video demonstration of bringing up a new service <a href="https://www.youtube.com/watch?v=yJcT2z06kb0&t=379s">direct link to demonstration</a>.
          </List.Item>
        </List>
        <Text py="md">
          <b>Source:</b> <a href="https://old.operate-first.cloud/sre-learners/">https://old.operate-first.cloud/sre-learners/</a>
        </Text>
      </Container>
      <Footer />
    </main>
  )
}

export default SREPracticesPage;
