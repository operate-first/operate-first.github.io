import { Container, Text, Title } from '@mantine/core';
import React from 'react';
import { Link } from "gatsby"


export function AboutContent() {
    return (
        <Container pb={205}>
            <Title order={2} my="md">Our Purpose</Title>
            <Text pb="sm">
              <b>Why build an all-Open Source community cloud? How does it help
              learn stuff and make things better?</b>
            </Text>
            <Text pb="sm">
              Open Source software is widely available, but it faces an
              operations-barrier when bringing it to a production environment.
            </Text>
            <Text pb="sm">
              Proprietary services have attempted to address this barrier, but
              they undermine the Open Source development model because lessons
              learned from operating the code are invisible to the Open Source
              developers.
            </Text>
            <Text pb="sm">
              To overcome this operations barrier in an Open Source way, we
              must switch to an <b>Open Source-like approach to operations</b>,
              or <i>Open Operations</i> (<i>Open Ops</i>).
            </Text>
            <Text pb="sm">
              Open Operations means developers and operators collaborating
              Openly to apply a product&apos;s operational considerations right
              back into the code itself.
            </Text>
            <Text pb="sm">
              Think of it like this: <b>After CI + CD is community cloud</b>.
            </Text>
            <Text>
              <i>The result?</i>
            </Text>
            <Text py="sm">
              <b>Better code + better performance = better final product.</b>
            </Text>
            <hr/>
            <Title order={4} my="md" py="sm">How are we doing this work?</Title>
            <Text pb="sm">
              <b>Operate First</b> is a community of developers, operators,
              and others — site reliability engineers (SRE), data scientists,
              Open Source practitioners, and so forth — who believe in promoting
              this Open Source approach to operations.
            </Text>
            <Text pb="sm">
              We invite <b>Open Source developers</b> to bring their
              projects during development to a production cloud, which is hosted
              and maintained by Operate First contributors. There in the
              community cloud, developers interact directly with their cloud
              provider&apos;s operations (people and tools) and gain valuable
              feedback on operational considerations for their code and other
              artifacts.
            </Text>
            <Text pb="sm">
              In this same community cloud the <b>SRE community of practice
              (CoP)</b> creates, learns, teaches, and documents what it takes to
              build and run an all-Open Source cloud as a learning-while-in-production
              environment.
            </Text>
            <Text pb="sm">
              Rather than holding a pager to a customer SLA, our community cloud
              is self-supported between overall operators and app teams
              (Open Source developers) who maintain the cloud to a mutually
              agreed expectation level.
            </Text>
            <Text pb="sm">
              This <b>service level expectation (SLE)</b> is
              tuned to the community itself, so an app team wanting a higher
              uptime service level objective (SLO) might respond by supporting
              their app to a higher expectation level.
            </Text>
            <Text pb="sm">
              Thus developers and operators work together to create a community
              cloud that matches the needs and expectations of our community.
              Then scaling the community cloud is a technical effort that
              intersects with the community expectations as a substitute for the
              common product-customer relationship.
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
