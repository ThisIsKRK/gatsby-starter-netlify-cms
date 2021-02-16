import React from "react"
import Layout from "../../components/layout"
import arrow from "../../img/arrow-icon.png"
import { Helmet } from "react-helmet"
import googlecloud from "../../img/partner/Google-Cloud-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Google Cloud - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Google Cloud</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> / Google
              Cloud
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/Google-Cloud-logo.png"
                alt="Google Cloud"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                The <strong>Google Cloud for Startups</strong> Program is
                designed to help startups build and scale using Google Cloud.
                <br />
                <br />
                Through this partnership, we are able to offer the following
                amazing benefits to our community.
                <br />
                <br />
                <strong>Google Credits:</strong> up to $100,000 in Google Cloud
                Platform and Firebase Credits, good for 12 months.
                <br />
                <br />
                In addition to GCP Credits, startups re eligible for:
              </p>
              <ul>
                <li>
                  $500 in Qwiklabs credits plus 1 free month to kickstart your
                  hands-on lab training initiatives.
                </li>
                <li>
                  $600 Google Maps Platform credits per month for 12 months.{" "}
                </li>
                <li>
                  One year of free Google Workspace Business Starter (up to 10
                  users, new domains only) or a year of discounted upgrades to
                  Business Standard/Plus (25% off for up to 300 users) or
                  Enterprise Standard/Plus (30% off for unlimited users).
                </li>
                <li>
                  $150 off Stripe Atlas incorporation and fully waived
                  processing fees for your first $10,000 in Stripe transactions.
                </li>
                <li>
                  $50,000 in Segment credit for startups less than 2 years old
                  with less than $5M in total funding.
                </li>{" "}
              </ul>
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
