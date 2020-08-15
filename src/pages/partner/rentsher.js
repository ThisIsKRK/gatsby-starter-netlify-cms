import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import rentsher from "../../img/partner/rentsher-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Rentsher = () => {
  return (
    <div>
      <Helmet>
        <title>Rentsher</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Rentsher</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Rentsher
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={rentsher} alt="Rentsher"></img>
            </div>
            <div className="col-md-9">
              <p>
                Through our partnership with Rentsher, we are able to offer our
                community a minimum 10% discount on any rental from their
                platform.
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
export default Rentsher
