import * as React from "react";
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Container, Title, createStyles, } from '@mantine/core';

const grafanaLinks = [
    {
        name: "smaug",
        link: "https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/smaug&var-namespace=All&theme=light&panelId=4"
    },
    {
        name: "infra",
        link: "https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/infra&var-namespace=All&theme=light&panelId=4",
    },
    {
        name: "balrog",
        link: "https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=emea/balrog&var-namespace=All&theme=light&panelId=4"
    }
]

const useStyles = createStyles(() => ({
    frame: {
        width: '100%',
        height: 400,
        border: 'none',
    }
}));
const CommunityCloudPage = () => {
    const { classes } = useStyles();

    return (
        <main>
            <Nav />
            <Container>
                <Title order={2} my="md">Op1st Community Cloud</Title>
                <iframe src={grafanaLinks[0].link} className={classes.frame}></iframe>
                <iframe src={grafanaLinks[1].link} className={classes.frame}></iframe>
                <iframe src={grafanaLinks[2].link} className={classes.frame}></iframe>
            </Container>
            <Footer />
        </main>
    );
}

export default CommunityCloudPage;
