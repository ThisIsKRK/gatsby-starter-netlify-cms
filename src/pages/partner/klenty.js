import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import klenty from "../../img/partner/Klenty.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Klenty = () => {
  return (
    <div>
      <Helmet>
        <title>Klenty</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Klenty</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Klenty
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={klenty} alt="Klenty"></img>
            </div>
            <div className="col-md-9">
              <p>
                Klenty offers 30% discount on a monthly subscription (1st 3
                months ) and 50% discount on an annual plan (1st year) to our
                community.
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
export default Klenty
