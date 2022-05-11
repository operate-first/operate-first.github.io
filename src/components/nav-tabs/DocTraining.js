import { Container, Text, Title } from '@mantine/core';
import React from 'react';

export function DocTrainingContent() {
    return (
        <Container>
            <Title order={2} my="md">Operate First Documentation and Training</Title>

            <Text>Unified Operate First Glossary of Terms (link coming soon)</Text>

            <Title order={4} my="md">Developer Documents</Title>
            <Text>
              Quick Start Guide for Open Source Developers (link coming soon)
            </Text>

            <Title order={4} my="md">Community Cloud Users Documents</Title>
            <Text>
              Document Name (existing documents available, links coming soon)
            </Text>

            <Title order={4} my="md">Data Science Documents</Title>
            <Text>
              Document Name (existing documents available, links coming soon)
            </Text>

            <Title order={4} my="md">Training Courses</Title>
            <Text>
              <a href="https://www.operate-first.cloud/training/operate_first_intro" target="_blank">Introduction to Operate First</a>
            </Text>
            <Text>
              <a href="https://www.operate-first.cloud/training/open_source_basics" target="_blank">Open Source Basics</a>
            </Text>
        </Container>
    )
}
