import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import HeaderBanner from "../components/headerbanner"
import "../styles/style.scss"
import "../styles/blog.scss"
class EventIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <div>
        {" "}
        <SEO
          title={siteTitle + " Events"}
          keywords={[
            `gofloaters`,
            `remote works`,
            `productive working remotely`,
          ]}
        />
        <Layout location={this.props.location} title={siteTitle}>
          <HeaderBanner>
            <h1>GoFloaters Events</h1>
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
                    <div className="BlogCard" key={node.fields.slug}>
                      <Link to={"/events" + node.fields.slug}>
                        <h4
                          className="BlogTitle"
                          dangerouslySetInnerHTML={{ __html: title }}
                        ></h4>
                        <div style={divStyle}></div>
                        <br></br>
                        <p className="BlogDate">
                          <b>
                            {" "}
                            {node.frontmatter.eventdate}
                            {node.frontmatter.eventtime
                              ? " | " + node.frontmatter.eventtime
                              : ""}
                          </b>
                        </p>
                        <p
                          className="BlogDesc"
                          dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        />
                        <br></br>
                        <Link
                          className="claimnowButton"
                          to={"/events" + node.fields.slug}
                        >
                          Know More
                        </Link>
                        <br></br>
                      </Link>
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
                    <Link to={"/events/" + prevPage} rel="prev">
                      ← Previous Page
                    </Link>
                  )}
                  {Array.from({ length: numPages }, (_, i) => (
                    <li
                      key={`pagination-number${i + 1}`}
                      style={{
                        margin: 0,
                      }}
                    >
                      <Link
                        to={`/events/${i === 0 ? "" : i + 1}`}
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
                    <Link to={"/events/" + nextPage} rel="next">
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

export default EventIndex

export const pageQuery = graphql`
  query EventPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___eventdate], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(event)/" } }
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
            eventdate(formatString: "MMMM DD, YYYY")
            eventtime
            title
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
