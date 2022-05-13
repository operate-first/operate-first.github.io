import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Container, List, Text, Title } from '@mantine/core';


const DeveloperPage = () => {

  return (
    <main>
      <Nav />
      <Container pb={140}>
        <Title order={2} my="md">Developer</Title>
        <Text>
          Does your open source project want to test and prove your software in a cloud environment, as a kind of open source managed service?
        </Text>
        <Text>
          If you are interested in running your open source software in the Op1st community cloud, as a way to gain operational insights to make your software easier to run (operate) and debug in a production cloud, take these steps:
        </Text>
        <List type="ordered" py="lg" withPadding>
          <List.Item>
            Open a general Question issue in the Op1st support repo using <a href="https://github.com/operate-first/support/issues/new?assignees=&labels=question&template=question.md&title=">this template</a>. In the Description, explain about your software, how it works in a cloud environment, and any questions you have. We’ll use this issue as the central spot for initial scoping discussions.
          </List.Item>
          <List.Item py="xs">
            You may be asked or wish to already join the <a href="https://lists.operate-first.cloud/archives/list/community@lists.operate-first.cloud/">Op1st community mailing list</a>, which is used for broader discussion topics and easy community transparency.
          </List.Item>
          <List.Item>
            Before and during this process, continue using the “Learning Resources” below for your own education. The Op1st community cloud is a GitOps environment, meaning you will have the capability of initiating your own operation requests using a git workflow. In many cases, initiating via GitOps is the only way to accomplish something.
          </List.Item>
        </List>
        <Text>
        </Text>
        <Text>
          If you have any further questions, you can reach to <a href="https://www.operate-first.cloud/community-handbook/support/README.md">Op1st community support</a> for help.
        </Text>
        <Text py="md">
          Learning Resources
          As the Op1st project adds training and other learning resources, those will be linked in here to help open source developers find a learning pathway or self-directed learning within these materials.
        </Text>
        <Text>
          The GitOps Reference Documentation is useful for finding the what and how of getting operations done in the project.
          Beginning in January 2022 the project is rolling out SRE training courses, which will incorporate meaningful examples from the running Op1st community cloud.
        </Text>
        <Text py="md">
          <b>Source:</b> <a href="https://old.operate-first.cloud/open-source-developers/">https://old.operate-first.cloud/open-source-developers/</a>
        </Text>
      </Container>
      <Footer />
    </main>
  )
}

export default DeveloperPage;
