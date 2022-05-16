import { Container, Text, Title } from '@mantine/core';
import React from 'react';
import DocsImage from "../../assets/docs-training-layered-learning.png"

export function DocTrainingContent() {
    return (
        <Container pb={350}>
            <Title order={2} my="md">Operate First Documentation and Training</Title>

            <Text>
              <b>GitOps, cloud native, managed service, Open Source</b>, and so
              many other concepts
              are central to the Operate First purpose. But people understand
              and use these terms to mean slightly or wildly different things.
              In Operate First we recognize the need to establish a baseline
              understanding of these concepts project members, but also for the
              entire Open Source ecosystem.
            </Text>

            <Text>
              <img src={DocsImage} alt="Operate First Documentation and Training"></img>
            </Text>

            <Text>
              Here you can find resources for understanding how these concepts —
              from the foundational to the deeply specific — actually work in
              the Operate First project. We&apos;re beginning with the foundational
              documentation and training while the broader community organically
              creates and maintains area-specific content.
            </Text>

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
              <a href="https://www.operate-first.cloud/training/operate_first_intro" target="_blank" rel="noreferrer">Introduction to Operate First</a>
            </Text>
            <Text>
              <a href="https://www.operate-first.cloud/training/open_source_basics" target="_blank" rel="noreferrer">Open Source Basics</a>
            </Text>
        </Container>
    )
}
