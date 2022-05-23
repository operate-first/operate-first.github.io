// Service SVGs
import GrafanaLogo from "../assets/services/grafana.svg";
import ODHLogo from "../assets/services/odh.png";
import ArgoLogo from "../assets/services/argo.svg";
import ObservatoriumLogo from "../assets/services/observatorium.svg";
import RedHatLogo from "../assets/services/redhat.svg";
import Dexlogo from "../assets/services/dex.svg"

const services = [
    {
        title: 'Grafana',
        image: GrafanaLogo,
        url: 'https://grafana.com/docs/grafana/latest/',
        description: 'Visualization and analytics software, which we use for monitoring and dashboards',
    },
    {
        title: 'OpenDataHub',
        image: ODHLogo,
        url: 'https://opendatahub.io/',
        description: 'We manage a deployment of Open Data Hub (ODH) on the Smaug cluster and OSC cluster',
    },
    {
        title: 'ArgoCD',
        image: ArgoLogo,
        url: 'https://argo-cd.readthedocs.io/en/stable/',
        description: 'Kubernetes native workflows, events, CI and CD. We manage a multi-tenant deployment of ArgoCD on the MOC Infra cluster',
    },
    {
        title: 'Observatorium',
        image: ObservatoriumLogo,
        url: 'https://github.com/observatorium',
        description: 'We have an instance of Observatorium currently being used to provision Thanos and Loki',
    },
    {
        title: 'OpenShift Data Foundation',
        image: RedHatLogo,
        url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift-data-foundation',
        description: 'ODF provides both persistent volumes and S3 compatible object storage via Rook Operator',
    },
    {
        title: 'Dex OIDC Provider',
        image: Dexlogo,
        url: 'https://github.com/dexidp/dex',
        description: 'We manage an instance of Dex on the Smaug cluster to provide authentication for some of our services',
    },
];

export { services };
