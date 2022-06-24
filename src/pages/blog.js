import React from "react"
import { graphql } from "gatsby"
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import Link from 'gatsby-link'
export default function Blog({ data }) {
    return (
        <div>
            <Nav />
             {data.allMdx.nodes.map(blogData =>(
              <div id={blogData.id}>
                <h1>{blogData.frontmatter.title}</h1>
                <p>Written by: {blogData.frontmatter.author}</p>
                <p>Date: {blogData.frontmatter.date}</p>
                <Link to={'/'+blogData.id}>Read More!</Link>
              </div>
            ))}
            <Footer />
        </div>
    )
}

export const query = graphql`
{
    allMdx {
      nodes {
        id
        frontmatter {
          title
          author
          date(fromNow: true)
          description
        }
      }
    }
  }
`