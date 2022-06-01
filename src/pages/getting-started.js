import * as React from "react";
import { Link } from "gatsby";
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
          This page is to help you get started using or contributing to the
          Operate First (Op1st) project.
        </Text>
        <Text py="sm">
          <b>Users</b> are typically interested in doing work with the tools
          available in the Op1st community cloud. This page will guide you in
          understanding what those tools are and how to access them, along with
          some documentation and pointers to more comprehensive materials.
        </Text>
        <Text py="sm">
          <b>Contributors</b> may also be doing work with the tools in the
          community cloud, but they are also interested in participating as a
          contributor. Contributions come in many forms, and from contributors
          of all experiences levels.
        </Text>
        <Text py="sm">
          Contributions may take such forms as: content (like this webpage),
          user help, cloud operations with GitOps, cloud configuration
          suggestions, blogging, giving talks, presenting at meetups and video
          series, writing code, figuring out where code needs to be written and
          enabling others to write the code, and so many more.
        </Text>
        <Text py="sm">
          Regardless of why you are here, you may ultimately be seen as a
          contributor. Users who bring workloads to the community cloud can be
          helping the underlying project purpose of gaining AI/ML insights
          from the observability of that workload running in an all-open source
          cloud.
        </Text>
        <Text py="sm">
          To understand more, read about <Link to="/about">our purpose</Link> in
          creating and maintaining the Operate First project.
        </Text>
        <Title order={2} mt="xl">Getting started examples</Title>
        <Text py="sm">
          Where you go is shaped by your background and your interests. You can
          explore how you may use or contribute to Operate First in many ways,
          such as:
        </Text>
        <Title order={3} mt="xl"><Code /> I&apos;m an app developer...</Title>
        <Text pt="sm">
          <i>I develop software applications I deploy in production cloud
          environments. I want my production deployment to have Open
          Operations so DevOps professionals and site reliability
          engineers (SREs) can study how it operates and suggest how I can
          evolve the code to improve operational qualities.</i>
        </Text>
        <Text py="sm">
          <b>Get started by:</b>
          <ul>
            <li>Reading our <Link to="/developer">Developer page</Link> with info on how to get started.</li>
            <li>Deploying your app in the <Link to="/community-cloud">Operate First Community Cloud</Link>.</li>
          </ul>
        </Text>

        <Title order={3} mt="xl"><Cloud /> I&apos;m in DevOps or SRE...</Title>
        <Text pt="sm">
          <i>I have provided DevOps or SRE services in a production cloud
          environment. I want to work in an Open Operations setting where I
          can gather information about an application&apos;s operational performance
          and suggest code changes to application developers to help them
          improve how their apps operate.</i>
        </Text>
        <Text pt="sm">
          <b>Get started by joining the <Link to="/community-cloud">Operate First Community Cloud</Link>.</b>
        </Text>
        <Text py="sm">
          <b>Get started by:</b>
          <ul>
            <li>Reading our <Link to="/srepractices">SRE Practices page</Link> to learn how we operate so you can jump in, too.</li>
            <li>Joining the <Link to="/community-cloud">Operate First Community Cloud</Link>.</li>
          </ul>
        </Text>

        <Title order={3} mt="xl"><CloudUpload /> I&apos;m a data scientist...</Title>
        <Text pt="sm">
          <i>I am a data scientist who wants to know more about the work
          currently happening in the Operate First space and how I might get
          involved.</i>
        </Text>
        <Text pt="sm" pb="lg">
          <b>Visit the <Link to="/data-scientist">Data Scientist page</Link> to learn more.</b>
        </Text>

        <Title order={3} mt="xl"><Book /> I&apos;m a student or life-long learner ...</Title>
        <Text pt="sm">
          <i>I am a student or learner of IT or software engineering who is
          interested in
          learning more about open source, DevOps, SRE, and applying open
          operations in a production environment.</i>
        </Text>
        <Text pt="sm">
          <b>Visit the <Link to="/docs-training">Documentation and Training page</Link> to see what training we have available.</b>
        </Text>
        <Text pb="lg">
          When you revisit in the future, you can jump directly to the docs
          and training page from the menu at the top.
        </Text>

        <Title order={3} mt="xl"><DeviceLaptop /> I want to promote the Operate First movement...</Title>
        <Text  pt="sm">
          <i>I believe in the goal of Operate First and want to see the movement
          succeed. I want to follow what this community is doing and perhaps
          get involved in what&apos;s going on.</i>
        </Text>
        <Text pt="sm">
          <b>Get started by following or joining our <Link to="/our-community">Operate First Community</Link>.</b>
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
