import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"

import HeaderBanner from "../../components/headerbanner"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Amazon Web Services - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Amazon Web Services</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> / Amazon
              Web Services
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/aws-logo.png"
                alt="Amazon Web Services"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                If you are the startup and want to take advantage of low cost,
                easy to use infrastructure needed to scale and grow your
                business, you are in for some great news!<br></br>
                <br></br>
                Through our partnership with AWS, we are able to offer the
                following amazing benefits to our community.<br></br>
                <br></br>
                <b>AWS Credits:</b> $1,000 in AWS promotional credits valid for
                2 years that can be used for a wide variety of 70+ services.
                <br></br>
                <br></br>
                <b>Technical Support:</b> Receive $350 USD in{" "}
                <a
                  href="https://aws.amazon.com/premiumsupport/plans/developers/"
                  target="_blank"
                  rel="nofollow"
                >
                  AWS Developer Support
                </a>{" "}
                credits, valid for one year, that cover technical support via
                email during business hours as well as general architectural
                guidance as you build and test. You can open an unlimited number
                of cases while your support plan is active.
              </p>
              <p>
                <br />
                If you are part of our community and wish to avail this benefit
                <br />
                <br />
                <a
                  href="https://gofloatersscdd.typeform.com/to/vwAJwR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  style={{
                    fontSize: "0.9rem",
                    color: "#fff",
                    background: "#4f9fc8",
                    borderRadius: "5px",
                    padding: "7px 15px",
                    marginTop: "10px",
                  }}
                >
                  Claim Now{" "}
                  <img
                    src="https://assets.gofloaters.com/arrow-icon.png"
                    alt="arrow"
                    style={{ width: "20px", paddingBottom: "3px" }}
                  />
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
