import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import tedxchennai from "../../img/partner/TEDx-Chennai-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const TedXCChennai = () => {
  return (
    <div>
      <Helmet>
        <title>TedX Chennai </title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>TedX Chennai </h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              TedX Chennai
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={tedxchennai} alt="TedX Chennai"></img>
            </div>
            <div className="col-md-9">
              <p>
                TEDx Chennai offers event-based discounts/benefits to our
                community.
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
export default TedXCChennai
