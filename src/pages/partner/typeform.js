import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import typeform from "../../img/partner/Typeform-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const TypeForm = () => {
  return (
    <div>
      <Helmet>
        <title>Typeform</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Typeform</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Typeform
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={typeform} alt="Typeform"></img>
            </div>
            <div className="col-md-9">
              <p>
                As Typeform’s Startups Partner, we are able to offer a 50%
                discount on any monthly or yearly plan.
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
export default TypeForm
