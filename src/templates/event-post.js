import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import HeaderBanner from "../components/headerbanner"
import { Helmet } from "react-helmet"
class EventPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta
            name="description"
            content={post.frontmatter.description}
          ></meta>
          <meta property="og:title" content={post.frontmatter.title} />
          <meta
            property="og:description"
            content={post.frontmatter.description}
          />
          <meta
            property="og:image"
            content={post.frontmatter.featuredImage.publicURL}
          />
        </Helmet>
        <HeaderBanner>
          <h3>GoFloaters Events</h3>
          <p
            className="BlogTitle"
            dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
          ></p>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1
                className="BlogTitle"
                dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
              ></h1>
            </div>
            <div className="col-md-3 eventImage">
              <img
                src={post.frontmatter.featuredImage.publicURL}
                class="img-responsive"
              ></img>
            </div>
            <div className="col-md-9">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <p>
                <strong>
                  Event Date : {post.frontmatter.eventdate}
                  {post.frontmatter.eventenddate
                    ? " - " + post.frontmatter.eventenddate
                    : ""}
                </strong>
              </p>
              <p>
                <b>
                  {post.frontmatter.eventtime
                    ? "Event Time : " + post.frontmatter.eventtime
                    : ""}
                </b>
              </p>
            </div>

            <div className="col-md-12">
              <hr />

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
                    <Link to={"/events" + next.fields.slug} rel="next">
                      ←{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: next.frontmatter.title,
                        }}
                      ></span>
                    </Link>
                  )}
                </li>
                <li>
                  {previous && (
                    <Link to={"/events" + previous.fields.slug} rel="prev">
                      →{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: previous.frontmatter.title,
                        }}
                      ></span>
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

export default EventPostTemplate

export const pageQuery = graphql`
  query EventPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        eventdate(formatString: "MMMM DD, YYYY")
        eventtime
        eventenddate(formatString: "MMMM DD, YYYY")
        featuredImage {
          relativeDirectory
          publicURL
        }
      }
    }
  }
`
