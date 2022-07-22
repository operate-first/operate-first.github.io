// /** @jsx jsx */
import * as React from 'react';
// import { jsx, Heading } from "theme-ui"
import { Title, Text, Badge, createStyles } from '@mantine/core';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from './Layout';
// import ItemTags from "./item-tags"
// import Seo from "./seo"
// import PostFooter from "./post-footer"

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },
}));

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      canonicalUrl?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

// const px = [`32px`, `16px`, `8px`, `4px`]
// const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

export const Post = ({ data: { post } }: PostProps) => {
  const { classes, cx } = useStyles();
  return (
    <Layout>
      <div className={classes.wrapper}>
        <Title>{post.title}</Title>
        {post.tags && post.tags.map((tag) => <Badge>{tag.name}</Badge>)}
        <Text color="dimmed" mt="md">
          {post.date}
          {post.timeToRead && ` — `}
          {post.timeToRead && <span>{post.timeToRead} min read</span>}
        </Text>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
    // <Layout>
    //   <Seo
    //     title={post.title}
    //     description={post.description ? post.description : post.excerpt}
    //     image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
    //     pathname={post.slug}
    //     canonicalUrl={post.canonicalUrl}
    //   />
    //   <Heading as="h1" variant="styles.h1">
    //     {post.title}
    //   </Heading>
    //   <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
    //     <time>{post.date}</time>
    //     {post.tags && (
    //       <React.Fragment>
    //         {` — `}
    //         <ItemTags tags={post.tags} />
    //       </React.Fragment>
    //     )}
    //     {post.timeToRead && ` — `}
    //     {post.timeToRead && <span>{post.timeToRead} min read</span>}
    //   </p>
    //   <section
    //     sx={{
    //       my: 5,
    //       ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
    //       variant: `layout.content`,
    //     }}
    //   >
    //     <MDXRenderer>{post.body}</MDXRenderer>
    //   </section>
    //   <PostFooter post={post} />
    // </Layout>
  );
};

export default Post;
