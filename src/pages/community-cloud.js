import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import ServicesBoard from "../components/nav-tabs/Services";
// Mantine imports
import {
    Button,
    Container,
    Text,
    Title,
    Group,
    createStyles,
    Card,
    SimpleGrid,
    UnstyledButton,
    Anchor
} from '@mantine/core';
import { Book, Cloud } from 'tabler-icons-react';

const clusters = [
    { title: 'Infra', icon: Cloud, color: 'red', url: 'http://console-openshift-console.apps.moc-infra.massopen.cloud/' },
    { title: 'Smaug', icon: Cloud, color: 'red', url: 'http://console-openshift-console.apps.smaug.na.operate-first.cloud/' },
    { title: 'Morty', icon: Cloud, color: 'blue', url: 'https://console-openshift-console.apps.morty.emea.operate-first.cloud/', },
    { title: 'Rick', icon: Cloud, color: 'blue', url: 'https://console-openshift-console.apps.rick.emea.operate-first.cloud/', },
    { title: 'Balrog', icon: Cloud, color: 'orange', url: 'https://console-openshift-console.apps.balrog.aws.operate-first.cloud/', },
];

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: 90,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));




const CommunityCloudPage = () => {
    const { classes, theme } = useStyles();
    const items = clusters.map((item) => (
        <a href={item.url} key={item.title} className={classes.item}>
            <UnstyledButton key={item.title} className={classes.item}>
                <item.icon color={theme.colors[item.color][6]} size={32} />
                <Text size="sm" mt={7} weight={600}>
                    {item.title}
                </Text>
            </UnstyledButton>
        </a>
    ));

    return (
        <main>
            <Nav />
            <Container pb={69}>
                <Title order={2} my="md">Op1st Community Cloud</Title>
                <Text>
                    The Operate First Community Cloud is a shared environment for Open Source projects and SRE practicioners.
                </Text>
                <Text>
                    It&apos;s operated under a community SLA and as open and transparent as possible.
                </Text>

                <Title order={2} my="lg">Resources</Title>

                <Group mb={40}>
                    <a href="https://www.operate-first.cloud/apps/content/README.html">
                        <Button leftIcon={<Book />} color="dark">GitOps Docs</Button>
                    </a>
                    <a href="https://github.com/operate-first/blueprint" >
                        <Button leftIcon={<Book />} color="dark">Blueprints and architectural decision records</Button>
                    </a>
                    <a href="https://github.com/operate-first/support" >
                        <Button leftIcon={<Book />} color="dark">Get support</Button>
                    </a>
                </Group>

                <Title order={2} my="md">Clusters</Title>

                <Card withBorder radius="md" className={classes.card}>
                    <Group position="apart">
                        <Text className={classes.title}>Services</Text>
                        <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                            ...
                        </Anchor>
                    </Group>
                    <SimpleGrid cols={3} mt="md">
                        {items}
                    </SimpleGrid>
                </Card>

                <ServicesBoard />

                <Title order={2} my="md">Workloads</Title>
                <iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/smaug&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameBorder="0"></iframe>
                <iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/infra&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameBorder="0"></iframe>
                <iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=emea/balrog&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameBorder="0"></iframe>
            </Container>
            <Footer />
        </main>
    )
}

export default CommunityCloudPage;
