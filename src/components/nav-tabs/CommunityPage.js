import { Button, Container, Text, Title, Group } from '@mantine/core';
import React from 'react';

import { createStyles, SimpleGrid, ThemeIcon, Grid, Col } from '@mantine/core';
import { BuildingCommunity, MailFast, Speakerphone, BrandTwitter } from 'tabler-icons-react';

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
        'You can also find us on Twitter, or view community project demos and updates on <a href="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg">YouTube</a>',
    },
];

export function CommunityContent() {
    const { classes } = useStyles();

    const items = features.map((feature) => (
        <div key={feature.title}>
        <ThemeIcon
            size={44}
            radius="md"
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
        >
            <feature.icon size={26} />
        </ThemeIcon>
        <Text size="lg" mt="sm" weight={500}>
            {feature.title}
        </Text>
        <Text color="dimmed" size="sm">
            {feature.description}
        </Text>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Grid gutter={80}>
            <Col span={12} md={5}>
                <Title className={classes.title} order={2}>
                Who are we?
                </Title>
                <Text color="dimmed">
                We are data scientists, software engineers and DevOps professionals working within the Operate First framework on open source software with open infrastructure, focused on solving large scale operational issues around developing intelligent applications and managing hybrid cloud systems through the application of advanced automation and machine learning.
                </Text>

                <Text>
                Join us!
                </Text>
                <Text color="dimmed">
                    Find our code on GitHub, meet the community on Slack, and join our mailing lists for announcements and discussions:
                </Text>

                <Text color="dimmed">
                    If you’re interested in data science, check out our data <a href="https://www.operate-first.cloud/data-science/projectsoverview.md">science projects</a>. If you are more interested in site reliability engineering, we have SRE resources to help you get started!
                </Text>
            </Col>
            <Col span={12} md={7}>
                <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {items}
                </SimpleGrid>
            </Col>
            </Grid>
        </div>
    );
}
