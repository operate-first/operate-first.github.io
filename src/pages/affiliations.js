import * as React from 'react';
import { Container, Title } from '@mantine/core';
import { Layout } from '../components/Layout';

import { Grid, Skeleton } from '@mantine/core';
import { Image } from '@mantine/core';
import mocalliancelogo from '../assets/Aff-Logo-MOC-Alliance.png';
import openinfralabslogo from '../assets/Aff-Logo-OpenInfraLabs.png';
import rhlogo from '../assets/Aff-Logo-Red-Hat.png';

const child = <Skeleton height={140} radius="md" animate={false} />;

const ActionPage = () => {
  return (
    <Layout>
      <Container>
        <Title order={2} my="md">
          Affiliations
        </Title>
        <Container my="md">
          <Grid>
            <Grid.Col xs={4}>
              <a
                href="https://massopen.cloud/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    width: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                >
                  <Image radius="md" src={mocalliancelogo} alt="MOC Alliance" />
                </div>
              </a>
            </Grid.Col>
            <Grid.Col xs={8}>
              Mission The MOC Alliance aims to accelerate the pace of discovery
              and innovation in an open production research-focused cloud.
            </Grid.Col>
            <Grid.Col xs={8}>{child}</Grid.Col>
            <Grid.Col xs={4}>
              <a
                href="https://openinfralabs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    width: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                >
                  <Image
                    radius="md"
                    src={openinfralabslogo}
                    alt="OpenInfra Labs"
                  />
                </div>
              </a>
            </Grid.Col>
            <Grid.Col xs={4}>
              <a
                href="https://www.redhat.com/en"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    width: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                >
                  <Image radius="md" src={rhlogo} alt="Red Hat" />
                </div>
              </a>
            </Grid.Col>
            <Grid.Col xs={8}>{child}</Grid.Col>
          </Grid>
        </Container>
      </Container>
    </Layout>
  );
};

export default ActionPage;
