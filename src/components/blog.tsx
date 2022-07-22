// import Layout from "./layout"
// import Listing from "./listing"
// import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
// import replaceSlashes from "../utils/replaceSlashes"
// import Seo from "./seo"

import React from 'react';
import PropTypes from 'prop-types';

import { ActionIcon, Image, Card, Center, Badge, Avatar, createStyles, useMantineTheme } from '@mantine/core';
import { Heart, Bookmark, Share } from 'tabler-icons-react';

import { Text, SimpleGrid, Container, Title } from '@mantine/core';
import { Group } from '@mantine/core';

import { Code, Cloud, BuildingCommunity } from 'tabler-icons-react';

import { Link } from "gatsby"

import { Layout } from "./Layout";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

interface ArticleCardProps {
  // image: string;
  link: string;
  title: string;
  description: string;
  // rating: string;
  // author: {
  //   name: string;
  //   image: string;
  // };
}

export function ArticleCard({
  className,
  // image,
  link,
  title,
  description,
  // author,
  // rating,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const linkProps = { href: link, rel: 'noopener noreferrer' };

  return (
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
      {/* <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={180} />
        </a>
      </Card.Section> */}

      {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {rating}
      </Badge> */}

      <Text className={classes.title} weight={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4} component="a" {...linkProps}>
        {description}
      </Text>

      {/* <Group position="apart" className={classes.footer}>
        <Center>
          <Avatar src={author.image} size={24} radius="xl" mr="xs" />
          <Text size="sm" inline>
            {author.name}
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action} style={{ color: theme.colors.red[6] }}>
            <Heart size={16} />
          </ActionIcon>
          <ActionIcon className={classes.action} style={{ color: theme.colors.yellow[7] }}>
            <Bookmark size={16} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <Share size={16} />
          </ActionIcon>
        </Group>
      </Group> */}
    </Card>
  );
}

export const Blog = ({ posts }: PostsProps) => {
  // const { tagsPath, basePath } = useMinimalBlogConfig()
  const { classes, cx } = useStyles();
  const linkProps = { href: '', target: '_blank', rel: 'noopener noreferrer' };
  // console.log(posts);

  return (
    <Layout>
                  <div className={classes.wrapper}>

      <SimpleGrid cols={3} mt="md">
        {posts.map((post) => (
          <ArticleCard
            link={post.slug}
            title={post.title}
            description={post.excerpt}
          />
        ))}
      </SimpleGrid>
      </div>
    </Layout>
  );
}

export default Blog
