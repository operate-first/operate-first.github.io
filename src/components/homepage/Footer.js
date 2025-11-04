import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Container, Group, Anchor } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: '#151515',
        borderTop: '2px solid rgb(140, 132, 119)',
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export function Footer() {
    const footerItems = [
        {
            link: 'https://openinfra.dev/legal/code-of-conduct',
            label: 'Code of Conduct',
        },
    ];

    const { classes } = useStyles();
    const items = footerItems.map((link) => (
        <Anchor
            color="dimmed"
            key={link.label}
            href={link.link}
            target="_blank"
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}

Footer.propTypes = {
    links: PropTypes.array,
};
