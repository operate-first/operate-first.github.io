import * as React from "react";
import '../pages/style.css';
// Component imports
import { Link } from "gatsby"
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Button, Container, Text, Title, Group, List } from '@mantine/core';
import { createStyles, Card, SimpleGrid, UnstyledButton, Anchor } from '@mantine/core';
import { Book, Cloud, Database } from 'tabler-icons-react';

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
        <Link to={item.url} key={item.title} className={classes.item}>
            <UnstyledButton key={item.title} className={classes.item}>
                <item.icon color={theme.colors[item.color][6]} size={32} />
                <Text size="xs" mt={7}>
                    {item.title}
                </Text>
            </UnstyledButton>
        </Link>
    ));

    return (
        <main>
            <Nav/>
            <Container>
                <Title order={2} my="md">Op1st Community Cloud</Title>
                <Text>
                    The Operate First community makes use of the GitHub open source DevOps platform and integrated community management tools. The links here direct you to resources within that community space at GitHub:
                </Text>
                <List my="md">
                    <List.Item>Data Science Apps</List.Item>
                    <List.Item>Open Source Developer content</List.Item>
                    <List.Item>SRE Operations</List.Item>
                    <List.Item>Blueprints</List.Item>
                    <List.Item>Support</List.Item>
                </List>

                <Title order={2} my="md">Community Cloud Documentation</Title>

                <Group style={{ marginBottom: 50 }}>
                    <a href="https://www.operate-first.cloud/apps/content/README.html">
                        <Button leftIcon={<Book />} color="dark">GitOps Docs</Button>
                    </a>
                </Group>

                <Title order={2} my="md">Community Cloud Clusters</Title>

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


            </Container>
            <Footer />
        </main>
    )
}

export default CommunityCloudPage;
