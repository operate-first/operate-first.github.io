import React from "react"
import { graphql } from "gatsby"
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import Link from 'gatsby-link'
export default function BlogTemplate({ data }) {
    return (
        <div>
            <Nav />



            <Footer />
        </div>
    )
}

export const query = graphql`
query($id: String!)
{
    mdx(id: { eq: $id } ) {
      frontmatter {
        author
        date
        title
      }
    }
  }
`