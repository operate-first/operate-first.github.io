import { Text, Group } from '@mantine/core';
import React from 'react';

import {
  ActionIcon,
  Image,
  Card,
  Badge,
  Avatar,
  createStyles,
} from '@mantine/core';
import { Heart, Bookmark, Share } from 'tabler-icons-react';

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
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={c.image} alt={c.title} height={180} />
      </Card.Section>

      <Badge>{c.category}</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        {c.title}
      </Text>

      <Group mt="lg">
        <Avatar src={c.author.image} radius="sm" />
        <div>
          <Text weight={500}>{c.author.name}</Text>
          <Text size="xs" color="dimmed">
            {c.author.description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {c.footer}
          </Text>
        </Group>
        <Group spacing={0}>
          <ActionIcon>
            <Heart size={18} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon>
            <Bookmark size={18} color={theme.colors.yellow[6]} />
          </ActionIcon>
          <ActionIcon>
            <Share size={16} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
}

// CommunityCard.propTypes = {
//     image: PropTypes.node,
// }
