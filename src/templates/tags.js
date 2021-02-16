import React from "react"
import PropTypes from "prop-types"
import HeaderBanner from "../components/headerbanner"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <Helmet>
        <title>{tag}</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>{tagHeader}</h1>
        </HeaderBanner>

        <div className="container">
          <div className="row">
            {edges.map(({ node }) => {
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
              const { slug } = node.fields

              return (
                <div className="col-md-6">
                  <br></br>
                  <div className="BlogCard" key={node.fields.slug}>
                    <Link to={"/blog" + node.fields.slug}>
                      <h4 className="BlogTitle">{node.frontmatter.title}</h4>
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
          </div>
        </div>
      </Layout>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            description
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
