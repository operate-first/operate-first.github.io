import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { CommunityCard } from './CommunityCard.js';
import SigSre from '../assets/loc_sig-sre.png';
import Backstage from '../assets/loc_backstage.png';
import OSC from '../assets/osc-logo.png';
import Apicurio from '../assets/apicurio-logo.png';

const communities = [
  {
    image: SigSre,
    category: 'SIGs',
    title: 'SIG-SRE',
    description:
      'This is SIG SRE, the Special Interest Group (SIG) for Site Reliability Engineering (SRE) in the Operate First project.',
    footer: 'Issues: 6 | PRs: 46',
    stars: 28,
    forks: 26,
    contributors: 22,
    landingpage: 'https://www.operate-first.cloud/sre/README.html',
  },
  {
    image: Backstage,
    category: 'Services',
    title: 'Backstage on Operate First',
    description:
      'https://op1.st/services - This is the service catalog for the operate first community cloud. The service catalog is implemented using Backstage.',
    footer: 'Issues: 373 | PRs 2,188',
    stars: '',
    forks: '',
    contributors: '',
    landingpage: 'https://github.com/operate-first/service-catalog',
  },
  {
    image: Apicurio,
    category: 'Projects',
    title: 'Apicurio',
    description:
      'The Apicurio community strives to provide high quality open source software in the API and Schema domains. Apicurio is an umbrella community (think Hibernate) containing multiple related projects.',
    footer: 'All things API, because APIs are the cure.',
    landingpage: 'https://www.apicur.io/',
  },
  {
    image:
      'https://raw.githubusercontent.com/okd-project/okd.io/67d123d9777251d832d671dcfb354fead882cdd5/docs/img/okd-panda-flat_rocketeer_with_number.svg',
    category: 'Projects',
    title: 'OKD Streams',
    description:
      'With the Operate First, the OKD community has launched a fully open source release pipeline that the community can participate in to help support and manage the release cycle ourselves.',
    footer:
      'OKD is the community distribution of Kubernetes that powers Red Hat OpenShift.',
    landingpage:
      'https://cloud.redhat.com/blog/okd-streams-building-the-next-generation-of-okd-together',
  },
  {
    image: OSC,
    category: 'Communities',
    title: 'OS Climate',
    description:
      'Using Open Data Hub toolkit and Operate First infrastructure for OS-Climate -  This repository is the central location for the demos the Open Services (previously AICoE) team is developing within the OS-Climate project.',
    footer: 'Issues: 135 | PRs 93',
    stars: 7,
    forks: 15,
    contributors: 12,
    landingpage: 'https://github.com/os-climate/aicoe-osc-demo',
  },
  {
    image:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?cs=srgb&dl=pexels-christina-morillo-1181354.jpg&auto=compress&cs=tinysrgb&h=800&w=320',
    category: 'Communities',
    title: 'Data Science',
    description:
      'Before we attempt to apply any AI or machine learning techniques to improve the CI workflow, it is important that we know how to both quantify and evaluate the current state of the CI workflow. In order to do this we must establish and collect the relevant metrics and key performance indicators (KPIs) needed to measure it. This is a critical first step as it allows us to quantify the state of CI operations, as well as apply the KPIs we will need to evaluate the impact of our AI tools in the future.',
    footer: 'Issues: 345 | PRs 259',
    stars: 20,
    forks: 63,
    contributors: 23,
    landingpage: 'https://github.com/aicoe-aiops/ocp-ci-analysis',
  },
  {
    image:
      'https://images.pexels.com/photos/3782228/pexels-photo-3782228.jpeg?auto=compress&cs=tinysrgb&w=800&h=320&dpr=1',
    category: 'Communities',
    title: 'SIG Community',
    description:
      'This repository is used by all members of the Operate First community for managing the ongoing support and sustaining the community of persons and organizations around this initiative.',
    footer: 'Issues: 134 | PRs 95',
    stars: 6,
    forks: 6,
    contributors: 23,
    landingpage: 'https://github.com/operate-first/community',
  },
  {
    image:
      'https://www.operate-first.cloud/static/opf-logo-b2b74c6d556f96066bf5836da3e43d61.png',
    category: 'Communities',
    title: 'Operate First Apps',
    description:
      'This repository serves as a centralized source of truth for the Operate First Community Cloud Offering. In this repository you will find various OCP/K8s manifests that define the desired state of all our clusters and different services deployed on these clusters.',
    footer: 'Issues: 373 | PRs 2,188',
    stars: 34,
    forks: 122,
    contributors: 102,
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
