import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import ibm from "../../img/partner/IBM-Cloud-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>IBM Cloud</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>IBM Cloud</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              IBM Cloud
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={ibm} alt="IBM Cloud"></img>
            </div>
            <div className="col-md-9">
              <p>
                We are an IBM for Startups partner and our customers get up to
                $120,000 in free IBM Cloud credits. It can be used to build
                applications and scale quickly through their blockchain, IoT, ML
                offerings as a part of their cloud platform.
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
export default aws
