import { Button, Container, Text, Title, Group, List } from '@mantine/core';
import React from 'react';
import { Book, Cloud, Database } from 'tabler-icons-react';

export function CommunityCloudContent() {
    return (
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
                <Button leftIcon={<Book />} color="dark">GitOps Docs</Button>
                <Button leftIcon={<Cloud />} color="dark">Open community cloud</Button>
                <Button leftIcon={<Database />} color="dark">Data Science</Button>
            </Group>


        </Container>
    )
}
