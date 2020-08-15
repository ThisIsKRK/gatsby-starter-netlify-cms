import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import tinyfirmsv from "../../img/partner/Tiny-Firmsv.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const TinyFirm = () => {
  return (
    <div>
      <Helmet>
        <title>Tinyfirms</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Tinyfirms</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Tinyfirms
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={tinyfirmsv} alt="Tinyfirms"></img>
            </div>
            <div className="col-md-9">
              <p>
                Through our partnership with Tinyfirms, we are able to offer the
                first three months free of cost.
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
export default TinyFirm
