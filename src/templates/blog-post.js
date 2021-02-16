import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEOHeader from "../components/seo-header"
import { kebabCase } from "lodash"
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = post.frontmatter.tags

    return (
      <Layout location={this.props.location} title={siteTitle} type="blogPage">
        <SEOHeader
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          socialLocalURL={post.frontmatter.featuredImage.publicURL}
          pinterest="true"
          socialURL=""
        ></SEOHeader>

        <div className="container">
          <div className="row">
            <div className="col-md-12 blog">
              <h5 className="categoryLink">
                <Link
                  to={`/blog/category/${kebabCase(post.frontmatter.category)}/`}
                >
                  {post.frontmatter.category}
                </Link>
              </h5>
              <h1>{post.frontmatter.title}</h1>
              <h2>
                {post.frontmatter.subTitle ? post.frontmatter.subTitle : ""}
              </h2>
              <p className="blogDate">
                {post.frontmatter.date} |{" "}
                <a
                  className="authorlinks"
                  href={post.frontmatter.authorURL}
                  target="_blank"
                  rel="nofollow"
                >
                  {post.frontmatter.author}
                </a>
              </p>
              <img
                src={post.frontmatter.featuredImage.publicURL}
                alt={post.frontmatter.title}
                className="img-responsive"
              ></img>

              <div
                className="blogContent"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <hr />
              <h5>
                Category:{" "}
                <b>
                  {" "}
                  <Link
                    to={`/blog/category/${kebabCase(
                      post.frontmatter.category
                    )}/`}
                  >
                    {post.frontmatter.category}
                  </Link>
                </b>
              </h5>
              {tags && tags.length ? (
                <div style={{ marginTop: `1rem` }}>
                  <ul className="taglist">
                    <h5>
                      Tags:{" "}
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/blog/tags/${kebabCase(tag)}/`}>
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </h5>
                  </ul>
                </div>
              ) : null}
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {next && (
                    <Link to={"/blog" + next.fields.slug} rel="next">
                      ← {next.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {previous && (
                    <Link to={"/blog" + previous.fields.slug} rel="prev">
                      {previous.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        subTitle
        date(formatString: "MMMM DD, YYYY")
        author
        tags
        category
        description
        authorURL
        featuredImage {
          relativeDirectory
          publicURL
        }
      }
    }
  }
`
