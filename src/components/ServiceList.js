// Service SVGs
import JupyterLogo from "../assets/services/jupyterhub.svg"
import ArgoLogo from "../assets/services/argo.svg";
import SupersetLogo from "../assets/services/superset.svg";
import PrometheusLogo from "../assets/services/prometheus.svg";
import GrafanaLogo from "../assets/services/grafana.svg";
import SparkLogo from "../assets/services/spark.svg";
import SeldonLogo from "../assets/services/seldon.svg";
import KafkaLogo from "../assets/services/kafka.svg";
import AirflowLogo from "../assets/services/airflow.svg";
import HueLogo from "../assets/services/hue.svg"


const services = [
    {
        title: 'JupyterHub',
        image: JupyterLogo,
        url: 'https://jupyter.org/hub',
        description: 'A multi-user version of the notebook designed for companies, classrooms and research labs',
        cluster: 'smaug'
    },
    {
        title: 'Argo',
        image: ArgoLogo,
        url: 'https://argoproj.github.io/',
        description: 'Kubernetes native workflows, events, CI and CD',
        cluster: 'smaug'
    },
    {
        title: 'Superset',
        image: SupersetLogo,
        url: 'https://superset.apache.org/',
        description: 'A modern, enterprise-ready business intelligence web application',
        cluster: 'osc'
    },
    {
        title: 'Prometheus',
        image: PrometheusLogo,
        url: 'https://prometheus.io/docs/introduction/overview/',
        description: 'Systems monitoring and alerting toolkit',
        cluster: 'smaug'
    },
    {
        title: 'Grafana',
        image: GrafanaLogo,
        url: 'https://grafana.com/docs/grafana/latest/',
        description: 'Visualization and analytics software',
        cluster: 'smaug'
    },
    {
        title: 'Spark',
        image: SparkLogo,
        url: 'https://spark.apache.org/docs/latest/',
        description: 'Unified analytics engine for large-scale data processing',
        cluster: 'osc'
    },
    {
        title: 'Seldon',
        image: SeldonLogo,
        url: 'https://docs.seldon.io/',
        description: 'Platform for rapidly deploying machine learning models on Kubernetes.',
        cluster: 'osc'
    },
    {
        title: 'Kafka',
        image: KafkaLogo,
        url: 'https://kafka.apache.org/documentation/',
        description: 'Distributed event streaming platform',
        cluster: 'smaug'
    },
    {
        title: 'Airflow',
        image: AirflowLogo,
        url: 'https://airflow.apache.org/',
        description: 'Platform to programmatically author, schedule, and monitor workflows',
        cluster: 'baloscog'
    },
    {
        title: 'Hue',
        image: HueLogo,
        url: 'https://docs.gethue.com/',
        description: 'Data exploration platform for Hive and S3 storage',
        cluster: 'osc'
    },
    {
        title: 'SparkSQL',
        image: SparkLogo,
        url: 'https://spark.apache.org/docs/latest/sql-distributed-sql-engine.html',
        description: 'Expose Spark data frames modeled as Hive tables through a JDBC connection',
        cluster: 'osc'
    },
];

export { services };
