import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import googlecloud from "../../img/partner/Google-Cloud-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Google Cloud</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Google Cloud</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Google Cloud
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={googlecloud} alt="Google Cloud"></img>
            </div>
            <div className="col-md-9">
              <p>
                The <b>Google Cloud for Startups</b> Program is designed to help
                startups build and scale using Google Cloud.
                <br /> <br />
                Through this partnership, we are able to offer the following
                amazing benefits to our community. <br /> <br />
                <b>Google Credits:</b> $3,000 in Google Cloud Platform and
                Firebase Credits, good for 12 months.
                <br /> <br /> In addition to Google Cloud Platform Credits, we
                offer the following benefits: <br /> <br />
                ● Invitations to exclusive, local Google Cloud events. <br />{" "}
                <br />
                ● Access to Hire FREE for 6 months – a $600 value. <br /> <br />
                ● $500 in Qwiklabs credits to kickstart your company’s hands-on
                lab training initiatives. <br /> <br />● One year of free G
                Suite (up to 5 users – only valid for new domains), or a year of
                discounted upgrades to G Suite Business or G Suite Enterprise.{" "}
                <br /> <br />● An opportunity to apply to Google Spark program
                to extend your credits to up to $20,000 for a second year as
                your business continues to grow.
                <br /> <br />
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
