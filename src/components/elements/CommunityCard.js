import { Text, Group } from '@mantine/core';
import React from 'react';

import { ActionIcon, Image, Card, Badge, createStyles } from '@mantine/core';
import { Star, Bookmark, Man, ExternalLink } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

// export function CommunityCard({image, title, category, author, footer}) {
export function CommunityCard(c) {
  const { classes, theme } = useStyles();
  // console.log(props);

  return (
    <Card
      withBorder
      p="lg"
      radius="md"
      className={classes.card}
      component="a"
      href={c.landingpage}
    >
      <Card.Section mb="sm">
        <Image src={c.image} alt={c.title} height={180} />
      </Card.Section>

      <Badge>{c.category}</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        {c.title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {c.description}
      </Text>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="m" color="dimmed">
            {c.footer}
          </Text>
        </Group>
        <Group spacing={20}>
          <Group spacing={1}>
            <Star size={18} color={theme.colors.yellow[6]} />
            {c.stars}
          </Group>
          <Group spacing={1}>
            <Bookmark size={18} color={theme.colors.red[6]} />
            {c.forks}
          </Group>
          <Group spacing={1}>
            <Man size={18} color={theme.colors.green[6]} />
            {c.contributors}
          </Group>
          <ActionIcon>
            <ExternalLink size={18} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
}

// CommunityCard.propTypes = {
//     image: PropTypes.node,
// }
