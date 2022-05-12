import * as React from "react";
import '../pages/style.css';
import { Container, Title, Button, Text, Table } from '@mantine/core';
import { Code, Cloud, CloudUpload, DeviceLaptop, Book } from 'tabler-icons-react';
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";

const ActionPage = () => {
  return (
    <main>
      <Nav />

      <Container>
        <Title order={1} my="lg">Getting Started in Operate First</Title>
        <Text py="sm">
          <b>Start by reading about <a href="about" target="_blank">Our Purpose</a>.</b>
        </Text>
        <Text py="sm">
          Where you go from there is shaped by your background
          and how you want to use or contribute to Operate First.
        </Text>

        <Title order={3} mt="xl"><Code /> I'm an app developer...</Title>
        <Text pt="sm">
          <i>I develop software applications that I deploy in production cloud
          environments. I want my production deployment to have open
          operations so that DevOps professionals and site reliability
          engineers (SREs) can study how it operates and suggest how I can
          evolve the code to improve operations.</i>
        </Text>
        <Text py="sm">
          <b>Get started by:</b>
          <ul>
            <li>Reading our <a href="developer">Developer page</a> with info on how to get started.</li>
            <li>Deploying your app in the <a href="community-cloud">Operate First Community Cloud</a>.</li>
          </ul>
        </Text>

        <Title order={3} mt="xl"><Cloud /> I'm in DevOps or SRE...</Title>
        <Text pt="sm">
          <i>I have provided DevOps or SRE services in a production cloud
          environment. I want to work in an open operations setting where I
          can gather information about an application's operational performance
          and suggest code changes to application developers that can help them
          improve how their apps operate.</i>
        </Text>
        <Text pt="sm">
          <b>Get started by joining the <a href="community-cloud">Operate First Community Cloud</a>.</b>
        </Text>
        <Text py="sm">
          <b>Get started by:</b>
          <ul>
            <li>Reading our <a href="srepractices">SRE Practices page</a> to learn how we operate so you can jump in, too.</li>
            <li>Joining the <a href="community-cloud">Operate First Community Cloud</a>.</li>
          </ul>
        </Text>

        <Title order={3} mt="xl"><CloudUpload /> I'm a data scientist...</Title>
        <Text pt="sm">
          <i>I am a data scientist who wants to know more about the work
          currently happening in the Operate First space and how I might get
          involved.</i>
        </Text>
        <Text pt="sm" pb="lg">
          <b>Visit the <a href="data-scientist">Data Scientist page</a> to learn more.</b>
        </Text>

        <Title order={3} mt="xl"><Book /> I'm a student...</Title>
        <Text pt="sm">
          <i>I am a student of IT or software engineering who is interested in
          learning more about open source, DevOps, SRE, and applying open
          operations in a production environment.</i>
        </Text>
        <Text pt="sm">
          <b>Visit the <a href="docs-training">Documentation and Training page</a> to see what training we have available.</b>
        </Text>
        <Text pb="lg">
          When you revisit in the future, you can jump directly to the docs
          and training page from the menu at the top.
        </Text>

        <Title order={3} mt="xl"><DeviceLaptop /> I want to promote the Operate First movement...</Title>
        <Text  pt="sm">
          <i>I believe in the goal of Operate First and want to see the movement
          succeed. I want to follow what this community is doing and perhaps
          get involved in what's going on.</i>
        </Text>
        <Text pt="sm">
          <b>Get started by following or joining our <a href="community">Operate First Community</a>.</b>
        </Text>
        <Text pb="lg">
          When you revisit in the future, you can jump directly to the
          community page from the menu at the top.
        </Text>

        <Text pb="xl">
        </Text>

      </Container>

      <Footer />
    </main>
  )
}

export default ActionPage;
