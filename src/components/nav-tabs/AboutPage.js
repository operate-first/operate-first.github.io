import { Container, Text, Title } from '@mantine/core';
import React from 'react';
import { Link } from "gatsby"


export function AboutContent() {
    return (
        <Container pb={205}>
            <Title order={2} my="md">Our Purpose</Title>
            <Text pb="sm">
              Open source software is widely available, but it faces an
              operatations barrier to entry into production environments.
              Proprietary services have attempted to address this barrier, but
              they undermine the open source model.
            </Text>
            <Text pb="sm">
              To overcome this operations barrier in an open source way, we
              must switch to an <b><i>open source approach to operations</i></b>.
              This means that developers and operators collaborate to apply a
              product&apos;s operational considerations right back into the code
              itself.
            </Text>
            <Text>
              <i>The result?</i>
            </Text>
            <Title order={4} my="md" py="sm">Better code, better performance, better final product.</Title>
            <Text pb="sm">
              <b>Operate First</b> is a community of developers, operators,
              and others who believe in promoting this open source approach
              to operations. We invite open source developers to bring their
              projects to a production cloud during development hosted and
              maintained through Operate First contributors. There, they
              can interact with ther cloud provider&apos;s operations (people
              and tools) and gain valuable feedback on operations considerations
              for their projects.
            </Text>
            <Title order={4} my="md">Where to start:</Title>
            <Text>
              Continue learning more about Operate First: <a href="https://www.operate-first.cloud/training/operate_first_intro" target="_blank" rel="noreferrer">Introduction to Operate First</a>
            </Text>
            <Text pt={10}>
              <Link to="/community">Get involved in our community</Link>
            </Text>
            <Text pt={10}>
              Start using Operate First cloud resources as an app developer (link coming soon)
            </Text>
            <Text pt={10}>
              Start contributing to Operate First as an operator or SRE (link coming soon)
            </Text>
            <Text pt={10}>
              See how data scientists are using Operate First (link coming soon)
            </Text>
        </Container>
    )
}
