import * as React from "react";
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Button, Container, Text, Title, Group, List } from '@mantine/core';
import { Book, Cloud, Database } from 'tabler-icons-react';

const CommunityCloudPage = () => {

    return (
        <main>
        <Nav/>
        <Container>
        <Title order={2} my="md">Op1st Community Cloud</Title>

        <iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/smaug&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameborder="0"></iframe>

        <iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/infra&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameborder="0"></iframe>

        <iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=emea/balrog&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameborder="0"></iframe>
        </Container>
        <Footer/>
        </main>

        );
    }

export default CommunityCloudPage;
