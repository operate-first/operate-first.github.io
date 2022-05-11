import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Button, Container, Text, Title, Group, List } from '@mantine/core';
import { Book, Cloud, Database } from 'tabler-icons-react';

const CommunityCloudPage = () => {

    return (
        <main>
            <Nav/>
            <Container>
            <Title order={2} my="md">Op1st Community Cloud</Title>
            <Text>
                The Operate First community makes use of the GitHub open source DevOps platform and integrated community management tools. The links here direct you to resources within that community space at GitHub:
            </Text>
            <List my="md">
                <List.Item>Data Science Apps</List.Item>
                <List.Item>Open Source Developer content</List.Item>
                <List.Item>SRE Operations</List.Item>
                <List.Item>Blueprints</List.Item>
                <List.Item>Support</List.Item>
            </List>
            <Title order={2} my="md">Community Cloud Resources</Title>
            <Group style={{ marginBottom: 50 }}>
                <a href="https://www.operate-first.cloud/apps/content/README.html">
                    <Button leftIcon={<Book />} color="dark">GitOps Docs</Button>
                </a>
                <a href="https://www.operate-first.cloud/community/README.html">
                    <Button leftIcon={<Cloud />} color="dark">Open community cloud</Button>
                </a>
                <Button leftIcon={<Database />} color="dark">Data Science</Button>
            </Group>

        </Container>
            <Footer/>
        </main>
    )
}

export default CommunityCloudPage;
