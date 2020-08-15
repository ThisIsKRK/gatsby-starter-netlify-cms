import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import freshworks from "../../img/partner/Freshworks-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Freshworks</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Freshworks</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Freshworks
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={freshworks} alt="Draper Startup House"></img>
            </div>
            <div className="col-md-9">
              <p>
                Through our partnership with Freshworks, we are able to offer
                the following amazing benefits to our community.
              </p>
              <p>
                Freshworks Credits: $2000 worth credits across Freshworks suite
                of products
                <br />
                (Freshdesk, Freshservice, Freshsales, Freshchat, Freshmarketer,
                Freshcaller, Freshteam, Freshrelease).
              </p>
              <ul>
                <li>Individual product credits worth $250 respectively</li>
                <li>
                  Credits cannot be transferred from one product to another
                </li>
                <li>
                  Credit period valid for 1 year – starting date of sign up for
                  first product
                </li>
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
export default aws
