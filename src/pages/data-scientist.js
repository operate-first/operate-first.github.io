import * as React from "react";
import '../pages/style.css';
import { Layout } from "../components/Layout";
import { Button, Container, Text, Title, Group, List } from '@mantine/core';
import { Book, Cloud } from 'tabler-icons-react';

const DataSciencePage = () => {

    return (
        <Layout>
            <Container mb={75}>
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
                        I’m a data scientist comfortable with Jupyter Notebooks on my laptop, but need specialized hardware and production level support to deploy my model as part of an ML application and don’t know where to start. Check out the <a href="https://www.youtube.com/playlist?list=PL8VBRDTElCWpneB4dBu4u1kHElZVWfAwW">Espresso Series</a> on our YouTube channel.
                    </List.Item>
                    <List.Item py="xs">
                        I’m a software engineering manager and I need to integrate a few data scientists and their ML models into our product, but I don’t know where to start. Take a look at our <a href="#">DS Workflow</a> docs.
                    </List.Item>
                    <List.Item>
                        I’m a data scientist looking for an open source project where I can apply my skills to a real world problem with real data, and I’m tired of MNIST! Fork our github repo and make a PR to the <a href="https://github.com/aicoe-aiops/ocp-ci-analysis">AI4CI</a> project.
                    </List.Item>
                    <List.Item py="xs">
                        I’m a site reliability engineer looking to make my life easier. I need to add some more intelligent automation into my cluster and application management process. Got anything for me? Of course! See our list of <a href="https://old.operate-first.cloud/data-science/projectsoverview.md">AI Ops projects</a> we’ve worked on.
                    </List.Item>
                    <List.Item>
                        I’m a data scientist, but have no idea how to use OpenShift or Kubernetes to deploy my models and get them out into the world! This <a href="https://github.com/AICoE/elyra-aidevsecops-tutorial">tutorial</a> will get you from 0 to 100 in no time.
                    </List.Item>
                </List>


                <Title order={2} pt="sm">Community Cloud Resources</Title>
                <Group mb="xl">
                    <a href="https://www.operate-first.cloud/apps/content/README.html">
                        <Button leftIcon={<Book />} color="dark">GitOps Docs</Button>
                    </a>
                    <a href="https://www.operate-first.cloud/community/README.html">
                        <Button leftIcon={<Cloud />} color="dark">Open community cloud</Button>
                    </a>
                </Group>
                <Text mb="xl">
                    <b>Source:</b> <a href="https://old.operate-first.cloud/data-science/">https://old.operate-first.cloud/data-science/</a>
                </Text>
            </Container>
        </Layout>
    )
}

export default DataSciencePage;
