import * as React from "react";
import '../../pages/style.css';
// Component imports
import { Link } from "gatsby"
import { Container, Text, Title, Group } from '@mantine/core';
import { createStyles, Card, SimpleGrid, Anchor, UnstyledButton, Tooltip } from '@mantine/core';
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
        url: 'https://jupyter.org/hub',
        description: 'A multi-user version of the notebook designed for companies, classrooms and research labs',
    },
    {
        title: 'Argo',
        image: ArgoLogo,
        url: 'https://argoproj.github.io/',
        description: 'Kubernetes native workflows, events, CI and CD',
    },
    {
        title: 'Superset',
        image: SupersetLogo,
        url: 'https://superset.apache.org/',
        description: 'A modern, enterprise-ready business intelligence web application',
    },
    {
        title: 'Prometheus',
        image: PrometheusLogo,
        url: 'https://prometheus.io/docs/introduction/overview/',
        description: 'Systems monitoring and alerting toolkit',
    },
    {
        title: 'Grafana',
        image: GrafanaLogo,
        url: 'https://grafana.com/docs/grafana/latest/',
        description: 'Visualization and analytics software',
    },
    {
        title: 'Spark',
        image: SparkLogo,
        url: 'https://spark.apache.org/docs/latest/',
        description: 'Unified analytics engine for large-scale data processing',
    },
    {
        title: 'Seldon',
        image: SeldonLogo,
        url: 'https://docs.seldon.io/',
        description: 'Platform for rapidly deploying machine learning models on Kubernetes.',
    },
    {
        title: 'Kafka',
        image: KafkaLogo,
        url: 'https://kafka.apache.org/documentation/',
        description: 'Distributed event streaming platform',
    },
    {
        title: 'Airflow',
        image: AirflowLogo,
        url: 'https://airflow.apache.org/',
        description: 'Platform to programmatically author, schedule, and monitor workflows',
    },
    {
        title: 'Hue',
        image: HueLogo,
        url: 'https://docs.gethue.com/',
        description: 'Data exploration platform for Hive and S3 storage',
    },
    {
        title: 'SparkSQL',
        image: SparkLogo,
        url: 'https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html',
        description: 'Expose Spark data frames modeled as Hive tables through a JDBC connection',
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
        height: 150,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));

const ODHServices = () => {
    const { classes } = useStyles();
    const items = clusters.map((item) => (
        <Tooltip
            label={`Click to learn more about ${item.title}`}
            withArrow
        >
        <a href={item.url} key={item.title} className={classes.item} style={{textDecoration: "none"}}>
            <UnstyledButton key={item.title} className={classes.item}>
                <img src={item.image} alt={item.title} width="50" height="50"></img>
                <Text size="sm" mt={7} weight={600}>
                    {item.title}
                </Text>
                <hr style={{width: 90}}/>
                <Text px={12} size="sm">
                    {item.description}
                </Text>
            </UnstyledButton>
        </a>
        </Tooltip>
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
