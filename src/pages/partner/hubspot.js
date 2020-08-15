import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import hubspot from "../../img/partner/Hubspot-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const HubSpot = () => {
  return (
    <div>
      <Helmet>
        <title>HubSpot</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>HubSpot</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              HubSpot
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={hubspot} alt="HubSpot"></img>
            </div>
            <div className="col-md-9">
              <p>
                We are an approved <strong>HubSpot for Startups</strong>
                 Partner, and our customers get exclusive benefits and discounts
                tailormade for startups and SMEs. Some of the benefits include:
              </p>
              <ul>
                <li>90% off on any/all HubSpot Products for the first year</li>
                <li>Access to HubSpot Knowledge Base</li>
                <li>Exclusive Events/Training/Mentoring Sessions by HubSpot</li>
              </ul>
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
export default HubSpot
