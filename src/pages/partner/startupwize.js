import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import startupwize from "../../img/partner/startupwize-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const StartupClub = () => {
  return (
    <div>
      <Helmet>
        <title>StartupWize </title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>StartupWize </h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              StartupWize
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={startupwize} alt="StartupWize"></img>
            </div>
            <div className="col-md-9">
              <p>
                StartupWize offers a free 1-hour consultation to any Startup/SME
                in our community followed by a flat 25% discount on their
                service charges.
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
export default StartupClub
