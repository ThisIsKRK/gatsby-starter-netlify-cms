import React from "react"
import PropTypes from "prop-types"
import HeaderBanner from "../components/headerbanner"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { cate } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const category = Object.values(data.category.distinct)
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } on "${cate}" category`
  const Category = category.map(cates => {
    return (
      <li>
        <Link
          to={
            "/blog/category/" +
            cates
              .replace(/&/g, "")
              .toLowerCase()
              .replace("  ", "-")
              .replace(" ", "-")
          }
          className={cate === cates ? "active" : ""}
        >
          {cates}
        </Link>
      </li>
    )
  })
  return (
    <div>
      <Helmet>
        <title>{cate} - Blog Category</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>{tagHeader}</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="categoryType">
                <li>
                  <Link to="/blog">All</Link>
                </li>
                {Category}
              </ul>
            </div>
          </div>
        </div>
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

Category.propTypes = {
  pageContext: PropTypes.shape({
    Category: PropTypes.string.isRequired,
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

export default Category

export const CategoryQuery = graphql`
  query($cate: String) {
    category: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
        fileAbsolutePath: { regex: "/(blog)/" }
      }
    ) {
      distinct(field: frontmatter___category)
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$cate] } } }
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
