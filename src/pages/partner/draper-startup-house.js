import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import draper from "../../img/partner/draper-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const aws = () => {
  return (
    <div>
      <Helmet>
        <title>Draper Startup House</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Draper Startup House</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Draper Startup House
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={draper} alt="Draper Startup House"></img>
            </div>
            <div className="col-md-9">
              <p>
                Draper offers a 15% discount on their hostel bookings for the
                GoFloaters Community.
                <br></br>
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
