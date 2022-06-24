import React from "react"
import { graphql } from "gatsby"
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
export default function Blog({ data }) {
    return (

        <div>
            <Nav />
            <h1>{data.mdx.frontmatter.title}</h1>
            <h2>{data.mdx.frontmatter.author}</h2>
            <p>{data.mdx.excerpt}</p>


            <Footer />
        </div>
    )
}

export const query = graphql`
  {
    mdx {
      frontmatter {
        author
        date
        description
        title
      }
      id
      excerpt
    }
  }`