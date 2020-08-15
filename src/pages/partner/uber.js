import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import uberbusiness from "../../img/partner/Uber-for-Business-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Uber = () => {
  return (
    <div>
      <Helmet>
        <title>Uber</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Uber</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Uber
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={uberbusiness} alt="Uber"></img>
            </div>
            <div className="col-md-9">
              <p>helling out too much of your expenses on your commute?</p>
              <p>Now save tons through Uber for Business.</p>
              <p>Some of the benefits our customers get:</p>
              <ul>
                <li>No surge pricing</li>
                <li>No cancellation charges</li>
                <li>Exclusive UberExecutive discounts for frequent riders.</li>
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
export default Uber
