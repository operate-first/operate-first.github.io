import * as React from "react";
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Button, Container, Text, Title, Group, List } from '@mantine/core';
import { Book, Cloud, Database } from 'tabler-icons-react';

const CommunityCloudPage = () => {

    return (
        <main>
            <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
            <Nav/>
            <Container>
            <Title order={2} my="md">Data Scientist</Title>
            <Title order={3} my="md">Cloud Native Data Science and AI Ops: With Operate-First!</Title>
            <Title order={4} my="md">Ready to help build the next generation of intelligent applications for the cloud, IN the cloud? 😎</Title>
            <Title order={4} my="md">Who are we?</Title>
            <Text>
                We are data scientists, software engineers and DevOps professionals working within the Operate First framework on open source software with open infrastructure, focused on solving large scale operational issues around developing intelligent applications and managing hybrid cloud systems through the application of advanced automation and machine learning.
            </Text>
            <Title order={4} my="md">Who are you?</Title>
            <List my="md">
                <List.Item>
                I’m a data scientist comfortable with Jupyter Notebooks on my laptop, but need specialized hardware and production level support to deploy my model as part of an ML application and don’t know where to start. Check out the [Espresso Series](https://www.youtube.com/playlist?list=PL8VBRDTElCWpneB4dBu4u1kHElZVWfAwW) on our YouTube channel.
                </List.Item>
                <List.Item>
                I’m a software engineering manager and I need to integrate a few data scientists and their ML models into our product, but I don’t know where to start. Take a look at our [DS Workflow](#tbd) docs.
                </List.Item>
                <List.Item>
                I’m a data scientist looking for an open source project where I can apply my skills to a real world problem with real data, and I’m tired of MNIST! Fork our github repo and make a PR to the [AI4CI](https://github.com/aicoe-aiops/ocp-ci-analysis) project.
                </List.Item>
                <List.Item>
                I’m a site reliability engineer looking to make my life easier. I need to add some more intelligent automation into my cluster and application management process. Got anything for me? Of course! See our list of [AI Ops projects](https://www.operate-first.cloud/data-science/projectsoverview.md) we’ve worked on.
                </List.Item>
                <List.Item>
                I’m a data scientist, but have no idea how to use OpenShift or Kubernetes to deploy my models and get them out into the world! This [tutorial](https://github.com/AICoE/elyra-aidevsecops-tutorial) will get you from 0 to 100 in no time.
                </List.Item>
            </List>


            <Title order={2} my="md">Community Cloud Resources</Title>
            <Group style={{ marginBottom: 50 }}>
                <a href="https://www.operate-first.cloud/apps/content/README.html">
                    <Button leftIcon={<Book />} color="dark">GitOps Docs</Button>
                </a>
                <a href="https://www.operate-first.cloud/community/README.html">
                    <Button leftIcon={<Cloud />} color="dark">Open community cloud</Button>
                </a>
            </Group>
            <Text>
                Source: https://www.operate-first.cloud/data-science/
            </Text>
        </Container>
            <Footer/>
        </main>
    )
}

export default CommunityCloudPage;
