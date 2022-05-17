import * as React from "react";
import '../../pages/style.css';
// Component imports
import { Link } from "gatsby"
import { Container, Text, Title, Group } from '@mantine/core';
import { createStyles, Card, SimpleGrid, UnstyledButton, Anchor } from '@mantine/core';
import { Book, Cloud } from 'tabler-icons-react';
// Service SVGs
import JupyterLogo from "../../assets/services/jupyterhub.svg"
import ArgoLogo from "../../assets/services/argo.svg";
import SupersetLogo from "../../assets/services/superset.svg";
import PrometheusLogo from "../../assets/services/prometheus.svg";
import GrafanaLogo from "../../assets/services/grafana.svg";
import SparkLogo from "../../assets/services/spark.svg";
import SeldonLogo from "../../assets/services/seldon.svg";
import KafkaLogo from "../../assets/services/kafka.svg";
import AirflowLogo from "../../assets/services/airflow.svg";
import HueLogo from "../../assets/services/hue.svg";

const clusters = [
    {
        title: 'JupyterHub',
        image: JupyterLogo,
        url: 'https://jupyter.org/hub'
    },
    {
        title: 'Argo',
        image: ArgoLogo,
        url: 'https://argoproj.github.io/'
    },
    {
        title: 'Superset',
        image: SupersetLogo,
        color: 'blue',
        url: 'https://superset.apache.org/',
    },
    {
        title: 'Prometheus',
        image: PrometheusLogo,
        url: 'https://prometheus.io/docs/introduction/overview/'
    },
    {
        title: 'Grafana',
        image: GrafanaLogo,
        url: 'https://grafana.com/docs/grafana/latest/',
    },
    {
        title: 'Spark',
        image: SparkLogo,
        url: 'https://spark.apache.org/docs/latest/',
    },
    {
        title: 'Seldon',
        image: SeldonLogo,
        url: 'https://docs.seldon.io/',
    },
    {
        title: 'Kafka',
        image: KafkaLogo,
        url: 'https://kafka.apache.org/documentation/',
    },
    {
        title: 'Airflow',
        image: AirflowLogo,
        url: 'https://airflow.apache.org/',
    },
    {
        title: 'Hue',
        image: HueLogo,
        url: 'https://docs.gethue.com/',
    },
    {
        title: 'SparkSQL',
        image: SparkLogo,
        url: 'https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html',
    },
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

const ODHServices = () => {
    const { classes, theme } = useStyles();
    const items = clusters.map((item) => (
        <a href={item.url} key={item.title} className={classes.item}>
            <UnstyledButton key={item.title} className={classes.item}>
                <img src={item.image} alt={item.title} width="50" height="50"></img>
                <Text size="sm" mt={7} weight={600}>
                    {item.title}
                </Text>
            </UnstyledButton>
        </a>
    ));

    return (
        <main>
            <Container pb={69}>
                <Title order={2} my="md">OSC</Title>

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
        </main>
    )
}

export default ODHServices;
