import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import awslogo from "../../img/partner/aws-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Amazon Web Services</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Amazon Web Services</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Amazon Web Services
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={awslogo} alt="Amazon Web Services"></img>
            </div>
            <div className="col-md-9">
              <p>
                If you are the startup and want to take advantage of low cost,
                easy to use infrastructure needed to scale and grow your
                business, you are in for some great news! <br></br>
                <br></br>
                Through our partnership with AWS, we are able to offer the
                following amazing benefits to our community.<br></br>
                <br></br>
                <b>AWS Credits:</b> $1,000 in AWS promotional credits valid for
                1 year that can be used for a wide variety of 70+ services.
                <br></br>
                <br></br>
                <b>Premium Support:</b> AWS Business support valid for 2 months.
                Have 24*7 access to cloud support Engineers via email, chat, and
                phone. Trusted Advisor checks and guidance to help reduce cost,
                increase performance and fault tolerance, and improve security.{" "}
                <br></br>
                <br></br>
                <b>Training:</b> 80 credits for Self-Paced Labs ($80 value)
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
