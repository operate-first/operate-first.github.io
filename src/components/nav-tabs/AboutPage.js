import { Container, Text, Title } from '@mantine/core';
import React from 'react';

export function AboutContent() {
    return (
        <Container style={{ paddingBottom: 574 }}>
            <Title order={2} my="md">Our Purpose</Title>
            <Text>
                While open source has made software widely available, it has also exposed another barrier to entry: the ability to operate software in production. Proprietary services for operations undermine the open source model, so we must now shift our focus to open sourcing operations.
            </Text>
            <Text>
                In doing so, developers and operators collaborate to apply a project’s operational considerations right back into the code. The result?
            </Text>
            <Title order={4} my="md">Better code, better performance, better final product.</Title>
        </Container>
    )
}
