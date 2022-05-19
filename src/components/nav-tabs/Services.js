import * as React from "react";
import { useState } from 'react';
import '../../pages/style.css';
// Component imports
import {
    Container,
    Text,
    Title,
    Group,
    createStyles,
    Card,
    SimpleGrid,
    Anchor,
    UnstyledButton,
    Tooltip,
    Select
} from '@mantine/core';

import { services } from "../ServiceList";

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
        height: 150,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));

const ServicesBoard = () => {
    const [selectedCluster, setCluster] = useState('smaug');
    const { classes } = useStyles();

    const items = services.map((item) => item.cluster == selectedCluster ? (
        <Tooltip
            key={item.title}
            label={`Click to learn more about ${item.title}`}
            withArrow
        >
            <a href={item.url} className={classes.item} style={{ textDecoration: "none" }}>
                <UnstyledButton className={classes.item}>
                    <img src={item.image} alt={item.title} width="50" height="50"></img>
                    <Text size="sm" mt={7} weight={600}>
                        {item.title}
                    </Text>
                    <hr style={{ width: 90 }} />
                    <Text px={12} size="sm">
                        {item.description}
                    </Text>
                </UnstyledButton>
            </a>
        </Tooltip>
    ) : null);

    function handleClusterSelectionChange(e) {
        setCluster(e)
    }

    return (
        <main>
            <Container pb={69} style={{paddingLeft: 0, paddingRight: 0}}>
                <Title order={2} my="md">Popular Services</Title>
                <Card withBorder radius="md" className={classes.card}>
                    <Group position="apart">
                        <Text className={classes.title}>{selectedCluster}</Text>
                        <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                            ...
                        </Anchor>
                        <Select
                            label="Select your cluster"
                            defaultValue="infra"
                            value={selectedCluster}
                            onChange={handleClusterSelectionChange}
                            data={[
                                { value: 'infra', label: 'Infra' },
                                { value: 'smaug', label: 'Smaug' },
                                { value: 'morty', label: 'Morty' },
                                { value: 'rick', label: 'Rick' },
                                { value: 'balrog', label: 'Balrog' },
                                { value: 'osc', label: 'OSC' },
                            ]}
                        />
                    </Group>
                    <SimpleGrid cols={3} mt="md">
                        {items}
                    </SimpleGrid>
                </Card>
            </Container>
        </main>
    )
}

export default ServicesBoard;
