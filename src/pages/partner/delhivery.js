import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import delihivery from "../../img/partner/Delhivery-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Delhivery</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Delhivery</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Delhivery
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={delihivery} alt="Delhivery"></img>
            </div>
            <div className="col-md-9">
              <p>
                Our community members get an exclusive 20% off on Delhivery
                shipping solutions. (
                <a href="https://direct.delhivery.com/">
                  https://direct.delhivery.com
                </a>
                ).
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
