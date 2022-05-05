import { Button, Container, Text, Title, Group } from '@mantine/core';
import React from 'react';

export function CommunityContent() {
    return (
        <Container>
            <Title order={2} my="md">Get involved in Operate First</Title>
            <Text>
                The Operate First community makes use of the GitHub open source DevOps platform and integrated community management tools. The links here direct you to resources within that community space at GitHub:
            </Text>
            <Title order={2} my="md">About the community</Title>
            <Text>Code of Conduct</Text>
            <Text>Community Handbook</Text>
            <Text>Special Interest Groups</Text>
            <Text>Participating Projects</Text>
            <Title order={2} my="md">Getting involved</Title>
            <Text>Mailing List</Text>
            <Text>Slack team chat</Text>
            <Title order={2} my="md">Operate First Blog</Title>
            <Text>For complete details, read the <a href="#">Operate First Community Manifesto</a></Text>
            <Title order={2} my="md">Community Resources</Title>
            <Group style={{ marginBottom: 50 }}>
                <Button color="dark">Our Environment</Button>
                <Button color="dark">Open community cloud</Button>
                <Button color="dark">SRE Community of Practice</Button>
            </Group>
        </Container>
    )
}
