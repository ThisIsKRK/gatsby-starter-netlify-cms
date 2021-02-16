import React from "react"
import { StaticQuery,graphql, Link } from "gatsby"
const Header = ({ data }) => (
    <header>
      <h1>{data.allMarkdownRemark.edges.node.frontmatter.title}</h1>
    </header>
  )
const BlogCard = props => {
  
    return (
        <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: {
                  fileAbsolutePath: { regex: "/(blog)/" }
                  frontmatter: { templateKey: { eq: "blog-post" } }
                }
                limit: 1
              ) {
                edges {
                  node {
                    excerpt
                    fields {
                      slug
                    }
                    frontmatter {
                      date(formatString: "DD MMMM, YYYY")
                      title
                      author
                      featuredImage {
                        relativeDirectory
                        publicURL
                      }
                    }
                  }
                }
              }
          }
        `}
        render={(data) => console.log("data",data) }
      />
    )
  
}

export default BlogCard
