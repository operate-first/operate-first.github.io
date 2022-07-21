import * as React from "react";
import { Button, Container, Text, Title, Center } from '@mantine/core';
import { createStyles, SimpleGrid, ThemeIcon, Grid, Col } from '@mantine/core';
import { BuildingCommunity, MailFast, Speakerphone, BrandTwitter } from 'tabler-icons-react';

import { Layout } from "../components/Layout.tsx";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

const features = [
    {
        icon: BuildingCommunity,
        title: <a href="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/">Community mailing list</a>,
        description: 'for Operate First project user and contributor discussions',
    },
    {
        icon: Speakerphone,
        title: <a href="https://lists.operate-first.cloud/admin/lists/announcements.lists.operate-first.cloud/">Announcements list</a>,
        description: 'for the latest project news',
    },
    {
        icon: MailFast,
        title: <a href="http://lists.opendev.org/cgi-bin/mailman/listinfo/openinfralabs">OpenInfra Labs mailing list</a>,
        description:
            'for those interested in open source cloud operations more broadly',
    },
    {
        icon: BrandTwitter,
        title: <a href="https://twitter.com/operatefirst">Twitter</a>,
        description:
            <p style={{ margin: 0, padding: 0 }}>You can also find us on Twitter, or view community project demos and updates on <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg">YouTube</a></p>,
    },
];


const CommunityPage = () => {

    const { classes } = useStyles();

    const items = features.map((feature) => (
        <div key={feature.icon}>
            <ThemeIcon
                size={44}
                radius="md"
                color='dark'
            >
                <feature.icon size={26} />
            </ThemeIcon>
            <Text size="lg" mt="sm" weight={600}>
                {feature.title}
            </Text>
            <Text color="dimmed" size="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <Layout>
            <div className={classes.wrapper}>
                <Container>
                    <Title className={classes.title} order={2}>
                        Who are we?
                    </Title>
                    <Text py="sm">
                        We are data scientists, software engineers, and DevOps
                        professionals working within the Operate First framework on
                        Open Source software with Open Operations and infrastructure.
                    </Text>
                    <Text py="sm">
                        We are focused on solving large scale operational issues
                        around developing intelligent applications and managing hybrid
                        cloud systems through the application of advanced automation
                        and machine learning.
                    </Text>
                    <Text py="sm">
                        In short, <b>we are building an all-Open Source
                            community cloud as the best and clear way to understand and
                            solve common, interrelated problems, while documenting the
                            methods and practices of running a cloud</b>.
                    </Text>
                    <Title pt="md" order={2}>Join us!</Title>
                    <Text py="md">
                        <a href="/getting-started"><b>Jump to Getting Started page</b></a>
                    </Text>
                    <Text py="sm">
                        Find our code on <a href="https://github.com/operate-first/apps">GitHub</a>, meet the community on Slack, and <a href="https://lists.operate-first.cloud/">join our mailing lists</a> for announcements and discussions:
                    </Text>
                    <Text py="sm">
                        If you’re interested in data science, check out our data <a href="https://old.operate-first.cloud/data-science/projectsoverview.md">science projects</a>. If you are more interested in site reliability engineering, we have SRE resources to help you get started!
                    </Text>
                </Container>
                <Grid gutter={80} justify='center' style={{ paddingTop: 20, margin: 0 }}>
                    <Col span={12} md={7}>
                        <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                            {items}
                        </SimpleGrid>
                    </Col>
                </Grid>
            </div>

            <Center pb={40}>
                <a href="https://www.operate-first.cloud/community/README.html">
                    <Button color="dark">Open community cloud</Button>
                </a>
            </Center>
        </Layout>
    )
}

export default CommunityPage;
