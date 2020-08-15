import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import into from "../../img/partner/Into-Logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Into = () => {
  return (
    <div>
      <Helmet>
        <title>Into Design Researh</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Into Design Researh</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Into Design Researh
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={into} alt="Into Design Researh"></img>
            </div>
            <div className="col-md-9">
              <p>
                Through our partnership with IDR, we are able to offer a minimum
                10% discount on all their service offerings.
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
export default Into
