import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import thepaperdolphin from "../../img/partner/The-Paper-Dolphin-Logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const PaperDolphin = () => {
  return (
    <div>
      <Helmet>
        <title>The Paper Dolphin</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>The Paper Dolphin</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              The Paper Dolphin
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={thepaperdolphin} alt="The Paper Dolphin"></img>
            </div>
            <div className="col-md-9">
              <p>
                Through our partnership with The Paper Dolphin, we are able to
                offer a 20% discount on all their stationery products.
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
export default PaperDolphin
