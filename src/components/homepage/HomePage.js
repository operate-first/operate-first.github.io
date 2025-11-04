import React from 'react';
import {
    createStyles,
    Overlay,
    Container,
    Title,
    Button,
    Group,
} from '@mantine/core';
import { Link } from 'gatsby';
import Logo from '../../assets/opf-logo.png';
import Concrete from '../../assets/concrete.png';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage: `url(${Concrete})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingTop: theme.spacing.xl * 8,
        paddingBottom: theme.spacing.xl * 8,
        zIndex: 0,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            paddingTop: theme.spacing.xl * 5,
            paddingBottom: theme.spacing.xl * 5,
        },
    },

    title: {
        color: theme.white,
        fontSize: 55,
        fontWeight: 600,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 40,
            lineHeight: 1.2,
            marginBottom: theme.spacing.md * 1,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 25,
            lineHeight: 1.3,
        },
    },

    linkedText: {
        textDecoration: 'none',
        color: '#ffcc00',

        '&:hover': {
            textDecoration: '#ffcc00 underline',
            color: '#808080',
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.sm * 0.2,
            width: 250,
            fontSize: theme.fontSizes.md * 1.1,
            marginLeft: theme.spacing.lg * 2,
        },

        '@media (max-width: 360px)': {
            marginLeft: theme.spacing.lg,
        },

        '&:hover': {
            color: '#fcc419',
            backgroundColor: 'black',
        },
    },
}));

export function HomePage() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <img src={Logo} width={'35%'} alt=""></img>
                <Title className={classes.title}>
                    Building an all-Open Source community for cloud operations
                </Title>
            </Container>
        </div>
    );
}
