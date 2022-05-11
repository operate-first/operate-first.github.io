import { Container, Text, Title } from '@mantine/core';
import React from 'react';

export function AboutContent() {
    return (
        <Container>
            <Title order={2} my="md">Our Purpose</Title>
            <Text>
              Open source software is widely available, but it faces an
              operatations barrier to entry into production environments.
              Proprietary services have attempted to address thie barrier, but
              they undermine the open source model.
            </Text>
            <Text>
              To overcome this operations barrier in an open source way, we
              must which so an <b><i>open source approach to operations</i></b>.
              This means developers and operators collaborate to apply a
              product&apos;s operational considerations right back into the code
              itself.
            </Text>
            <Text>
              The result?
            </Text>
            <Title order={4} my="md">Better code, better performance, better final product.</Title>
            <Text>
              <b>Operate First</b> is a community of developers, operators,
              and others who believe in promoting this open source approach
              to operations. We invite open source developers to bring their
              projects to a production cloud during development hosted and
              maintained through Operate First contributors. There, they
              can interact with ther cloud provider's operations (people and
              tools) and gain valuable feedback on operations considerations
              for their projects.
            </Text>
            <Title order={4} my="md">Where to start</Title>
            <Text>
              Continue learning more about Operate First: <a href="https://www.operate-first.cloud/training/operate_first_intro" target="_blank">Introduction to Operate First</a>
            </Text>
            <Text>
              <a href="http://localhost:8000/community">Get involved in our community</a>
            </Text>
            <Text>
              Start using Operate First cloud resources as an app developer (link coming soon)
            </Text>
            <Text>
              Start contributing to Operate First as an operator or SRE (link coming soon)
            </Text>
            <Text>
              See how data scientists are using Operate First (link coming soon)
            </Text>
        </Container>
    )
}
