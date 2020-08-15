import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import hostinger from "../../img/partner/Hostinger.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Hostinger</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Hostinger</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Hostinger
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={hostinger} alt="Hostinger"></img>
            </div>
            <div className="col-md-9">
              <p>
                Hostinger’s low-cost Web & VPS hosting platform offers a flat
                15% off on their existing plans to our community who can now buy
                hosting plans for as cheap as ₹38/month.
                <br /> <br /> If you are part of our community and wish to avail
                this benefit - <br />
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
