import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import todoist from "../../img/partner/todoist-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Todoist = () => {
  return (
    <div>
      <Helmet>
        <title>Todoist Business</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Todoist Business</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Todoist Business
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={todoist} alt="Thinking Spree"></img>
            </div>
            <div className="col-md-9">
              <p>
                Loved by 18+ million people, Todoist is a simple yet powerful
                task manager that helps organize teamwork. Through our
                partnership with them, we are able to offer 1 free year of
                Todoist Business with full access to all of Todoist’s most
                team-friendly features.
              </p>

              <p>
                <br />
                If you are part of our community and wish to avail this benefit
                -{" "}
                <a
                  href="https://gofloatersscdd.typeform.com/to/vwAJwR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="claimnowButton"
                >
                  Claim Now
                </a>
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Todoist
