import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HeaderBanner from "../components/headerbanner"
import SEOHeader from "../components/seo-header"

class EventPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEOHeader
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          socialLocalURL={post.frontmatter.featuredImage.publicURL}
          pinterest="true"
          socialURL=""
        ></SEOHeader>
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
                className="img-responsive"
                alt={post.frontmatter.title}
              ></img>
            </div>
            <div className="col-md-9">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <p>
                <strong>Event Date</strong> : {post.frontmatter.eventdate}
                {post.frontmatter.eventenddate
                  ? " - " + post.frontmatter.eventenddate
                  : ""}
              </p>
              <p>
                <strong>Event Time </strong> :{" "}
                {post.frontmatter.eventtime ? post.frontmatter.eventtime : ""}
              </p>
              <p>
                <br />
                {post.frontmatter.calendarLink ? (
                  <a
                    href={post.frontmatter.calendarLink}
                    target="_blank"
                    rel="nofollow"
                    className="addtoCalendar "
                  >
                    <i className="fa fa-calendar"></i> Add to Calendar
                  </a>
                ) : (
                  ""
                )}
                <br />

                {post.frontmatter.watchLive &&
                post.frontmatter.watchLive != "None" ? (
                  <a
                    href={post.frontmatter.watchLive}
                    target="_blank"
                    rel="nofollow"
                    className="addtoCalendar "
                  >
                    <i className="fa fa-play"></i> Watch Live
                  </a>
                ) : (
                  ""
                )}
                <br />
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
        description
        eventenddate(formatString: "MMMM DD, YYYY")
        calendarLink
        watchLive
        featuredImage {
          relativeDirectory
          publicURL
        }
      }
    }
  }
`
