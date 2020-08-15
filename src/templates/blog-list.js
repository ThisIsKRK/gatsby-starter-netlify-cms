import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import HeaderBanner from "../components/headerbanner"
import "../styles/style.scss"
import "../styles/blog.scss"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, blognumPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === blognumPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <div>
        {" "}
        <SEO
          title={siteTitle}
          keywords={[
            `gofloaters`,
            `remote works`,
            `productive working remotely`,
          ]}
        />
        <Layout location={this.props.location} title={siteTitle}>
          <HeaderBanner>
            <h1>Blog</h1>
          </HeaderBanner>

          <div className="container">
            <div className="row">
              {posts.map(({ node }) => {
                var divStyle = {
                  height: "300px",
                  backgroundImage:
                    "url(" + node.frontmatter.featuredImage.publicURL + ")",
                  backgroundSize: "cover",
                  WebkitTransition: "all", // note the capital 'W' here
                  msTransition: "all", // 'ms' is the only lowercase vendor prefix
                  borderRadius: "15px",
                }
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div className="col-md-6">
                    <br></br>
                    <div className="BlogCard" key={node.fields.slug}>
                      <Link to={"/blog" + node.fields.slug}>
                        <h4 className="BlogTitle">{title}</h4>
                        <div style={divStyle}></div>
                        <br></br>
                        <p className="BlogDate">
                          {node.frontmatter.date} | {node.frontmatter.author}
                        </p>
                        <p
                          className="BlogDesc"
                          dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        />
                        <br></br>
                        <Link
                          className="claimnowButton"
                          to={"/blog" + node.fields.slug}
                        >
                          Read More
                        </Link>
                        <br></br>
                      </Link>
                      <br></br>
                    </div>
                  </div>
                )
              })}
              <div className="col-md-12">
                <br></br>
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {!isFirst && (
                    <Link to={"/blog/" + prevPage} rel="prev">
                      ← Previous Page
                    </Link>
                  )}
                  {Array.from({ length: blognumPages }, (_, i) => (
                    <li
                      key={`pagination-number${i + 1}`}
                      style={{
                        margin: 0,
                      }}
                    >
                      <Link
                        to={`/blog/${i === 0 ? "" : i + 1}`}
                        style={{
                          padding: "10px 15px",
                          borderRadius: "50%",
                          textDecoration: "none",
                          color: i + 1 === currentPage ? "#ffffff" : "",
                          background: i + 1 === currentPage ? "#007acc" : "",
                        }}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                  {!isLast && (
                    <Link to={"/blog/" + nextPage} rel="next">
                      Next Page →
                    </Link>
                  )}
                </ul>
                <br></br>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      limit: $limit
      skip: $skip
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
`
