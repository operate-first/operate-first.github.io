import React from 'react';
import {
  createStyles,
  Title,
  Container,
  Accordion,
  ThemeIcon,
  Button,
  Group,
} from '@mantine/core';
import {
  Book,
  BrandGithub,
  BrandSlack,
  Dashboard,
  Plus,
} from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      minHeight: 700,
      background:
        'linear-gradient(180deg, rgb(52 52 52) 0%, rgb(35 35 35) 50%, rgb(10 10 10) 100%)',
      position: 'relative',
    },

    title: {
      color: theme.white,
      fontSize: 40,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      marginTop: theme.spacing.xl,
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: 'rotate(0deg)',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  };
});

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          iconPosition="right"
          initialItem={0}
          classNames={{
            item: classes.item,
            itemOpened: classes.itemOpened,
            control: classes.control,
            icon: classes.icon,
            contentInner: classes.content,
          }}
          icon={
            <ThemeIcon radius="xl" color="yellow" size={32}>
              <Plus size={18} />
            </ThemeIcon>
          }
        >
          <Accordion.Item label="How can I get access to my service/cluster?">
            <p>
              Check the{' '}
              <a href="https://www.operate-first.cloud/apps/content/README.html">
                operational docs
              </a>{' '}
              for the service. See if there&apos;s a section on how to access
              it. This will often instruct you on how to self provision access
              via a github PR. You need some basic git knowledge.
              <br />
              If you want someone to do it for you, you can make an issue in
              github support, but keep in mind the turnaround time for this is
              highly dependent on current workload of operations team.
            </p>
            <Group>
              <Button
                leftIcon={<Book />}
                className={classes.button}
                component="a"
                href="https://www.operate-first.cloud/apps/content/README.html"
              >
                Operations Docs
              </Button>
              <Button
                leftIcon={<BrandGithub />}
                className={classes.button}
                component="a"
                href="https://github.com/operate-first/support/issues/new/choose"
              >
                Create a issue
              </Button>
            </Group>
          </Accordion.Item>
          <Accordion.Item label="Does Operate First have a particular operator/service?">
            <p>
              Check the docs{' '}
              <a href="https://www.operate-first.cloud/apps/content/README.html">
                https://www.operate-first.cloud/apps/content/README.html
              </a>
              , check workloads dashboards:{' '}
              <a href="https://www.operate-first.cloud/community-cloud">
                https://www.operate-first.cloud/community-cloud
              </a>{' '}
              If it&apos;s listed there we probably have it. You can also check
              the apps repo:{' '}
              <a href="https://github.com/operate-first/apps">
                https://github.com/operate-first/apps
              </a>
              . <br /> <br />
              For operators, if it&apos;s listed{' '}
              <a href="https://github.com/operate-first/apps/tree/master/cluster-scope/base/operators.coreos.com/subscriptions">
                here
              </a>
              . We probably have it in at least one of our clusters. To
              determine which one,
              <br />I would check the{' '}
              <code>
                apps/cluster-scope/overlays/prod/&lt;env&gt;/&lt;cluster&gt;/kustomization.yaml
              </code>{' '}
              (some of them might appear as bundles).
            </p>
            <p>
              For other services, check the apps repo root, if a directory for
              that service exists, we probably have it in one of our clusters,
              check overlays sub folder to see which ones.
            </p>
            <Group>
              <Button
                leftIcon={<Book />}
                className={classes.button}
                component="a"
                href="https://www.operate-first.cloud/apps/content/README.html"
              >
                Operations Docs
              </Button>
              <Button
                leftIcon={<Dashboard />}
                className={classes.button}
                component="a"
                href="https://www.operate-first.cloud/community-cloud"
              >
                Workload dashboards
              </Button>
            </Group>
          </Accordion.Item>
          <Accordion.Item label="How can I get hardware for free?">
            <p>
              We are not here to hand out free hardware. Our intended goal is to
              invite developers/service maintainers to come use our environments
              to develop, deploy, and operate their services in an open fashion.
              You should be able to make a case on how you are planning to do
              this with our clusters. An example of how to do this is to get
              onboarded to one of our namespaces, follow a gitops model to store
              your application manifests in a transparent version control hub
              like github. We also offer a public{' '}
              <a href="https://www.operate-first.cloud/apps/content/argocd-gitops/docs/README.html">
                ArgoCD
              </a>{' '}
              instance that you can use to do this. Make your service available
              in our{' '}
              <a href="https://www.operate-first.cloud/community-cloud">
                workloads dashboards
              </a>
              . Provide instructions on how others can access / use your
              service. Provide monitoring capabilities for your service, and
              some commitment on your part to maintain/operate this service. We
              would of course walk you through/help you out in this process.
            </p>
          </Accordion.Item>
          <Accordion.Item label="Is a certain service down?">
            <p>
              We don&apos;t have an uptime dashboard/page yet, so you will
              basically have to ask in the #support slack channel or make an
              issue in the github repo.
            </p>
            <Button
              leftIcon={<BrandSlack />}
              className={classes.button}
              component="a"
              href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww"
              style={{ width: 200 }}
            >
              Join our Slack
            </Button>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
