import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { CommunityCard } from '../elements/CommunityCard.js';

const communities = [
  {
    image:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?cs=srgb&dl=pexels-christina-morillo-1181354.jpg&auto=compress&cs=tinysrgb&h=800&w=320',
    category: 'Communities',
    title: 'Data Science',
    description:
      'Before we attempt to apply any AI or machine learning techniques to improve the CI workflow, it is important that we know how to both quantify and evaluate the current state of the CI workflow. In order to do this we must establish and collect the relevant metrics and key performance indicators (KPIs) needed to measure it. This is a critical first step as it allows us to quantify the state of CI operations, as well as apply the KPIs we will need to evaluate the impact of our AI tools in the future.',
    footer: 'Issues: 99:233 | PRs 8:244',
    stars: 16,
    forks: 59,
    contributors: 24,
    landingpage: 'https://github.com/aicoe-aiops/ocp-ci-analysis',
  },
  {
    image:
      'https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&w=800&h=320&dpr=1',
    category: 'Communities',
    title: 'SIG Operations',
    description:
      'This repository contains all the SRE (Site Reliability Engineering) principles and guidelines for managing the Operate First services. SRE is a software engineering approach to manage operations for systems, applications and services. We use software as a tool to manage systems, solve problems, and automate operations tasks.',
    footer: 'Issues: 34:400 | PRs 0:44',
    stars: 19,
    forks: 23,
    contributors: 8,
    landingpage: 'https://github.com/operate-first/operations',
  },
  {
    image:
      'https://images.pexels.com/photos/3782228/pexels-photo-3782228.jpeg?auto=compress&cs=tinysrgb&w=800&h=320&dpr=1',
    category: 'Communities',
    title: 'SIG Community',
    description:
      'This repository is used by all members of the Operate First community for managing the ongoing support and sustaining the community of persons and organizations around this initiative.',
    footer: 'Issues: 78:54 | PRs 8:74',
    stars: 6,
    forks: 0,
    contributors: 22,
    landingpage: 'https://github.com/operate-first/community',
  },
  {
    image: 'https://mma.prnewswire.com/media/1866773/OS_Climate_Logo.jpg',
    category: 'Communities',
    title: 'OS Climate',
    description:
      'Using Open Data Hub toolkit and Operate First infrastructure for OS-Climate -  This repository is the central location for the demos the Open Services (previously AICoE) team is developing within the OS-Climate project.',
    footer: 'Issues: 33:81 | PRs 10:71',
    stars: 7,
    forks: 13,
    contributors: 10,
    landingpage: 'https://github.com/os-climate/aicoe-osc-demo',
  },
  {
    image:
      'https://www.operate-first.cloud/static/opf-logo-b2b74c6d556f96066bf5836da3e43d61.png',
    category: 'Communities',
    title: 'Operate First Apps',
    description:
      'This repository serves as a centralized source of truth for the Operate First Community Cloud Offering. In this repository you will find various OCP/K8s manifests that define the desired state of all our clusters and different services deployed on these clusters.',
    footer: 'Issues: 51:289 | PRs 21:1,878',
    stars: 29,
    forks: 113,
    contributors: 95,
    landingpage: 'https://github.com/operate-first/apps',
  },
];

export function ListCommunities() {
  return (
    <SimpleGrid
      cols={3}
      spacing={30}
      breakpoints={[{ maxWidth: 'md', cols: 1 }]}
    >
      {communities.map((community, index) => (
        <CommunityCard key={index} {...community} />
      ))}
    </SimpleGrid>
  );
}
