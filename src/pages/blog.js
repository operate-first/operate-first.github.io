import React from "react"
import { graphql } from "gatsby"
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
export default function Blog({ data }) {
    const blogData = Object.entries(data.allMdx.nodes)
    blogData.forEach((data)=> console.log(data[1].id))


    return (
        <div>
            <Nav />
            {blogData.map((data)=>{<li>{data[1].author}</li>})}
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