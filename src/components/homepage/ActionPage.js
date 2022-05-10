import { Container, Text, Title, Button } from '@mantine/core';
import React from 'react';
import { Cloud } from 'tabler-icons-react';

export function ActionContent() {
    return (
        <Container>
            <Title order={2} my="md">Welcome to Operate First in Action!</Title>
            <Text> Click here to know more about Operate First in Action </Text>
                <a href="https://operate-first-in-action.catalog.meteor.zone/README.html">
                    <Button leftIcon={<Cloud />} color="dark">Operate First in Action</Button>
                </a>
        </Container>
    )
}
