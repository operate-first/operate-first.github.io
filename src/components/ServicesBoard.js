import * as React from "react";
// Component imports
import {
    Container,
    Text,
    Title,
    createStyles,
    Card,
    SimpleGrid,
    UnstyledButton,
    Tooltip,
} from '@mantine/core';

import { services } from "./ServiceList";

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
        height: 180,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));

const ServicesBoard = () => {
    const { classes } = useStyles();

    const items = services.map((item) => (
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
    ))

    return (
        <main>
            <Container pb={69} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Title order={2} my="md">Our Services</Title>
                <Card withBorder radius="md" className={classes.card}>
                    <SimpleGrid
                        cols={3}
                        mt="md"
                        breakpoints={[
                            { maxWidth: 980, cols: 2, spacing: 'md' },
                            { maxWidth: 600, cols: 1, spacing: 'sm' },
                        ]}
                    >
                        {items}
                    </SimpleGrid>
                </Card>
            </Container>
        </main>
    )
}

export default ServicesBoard;
