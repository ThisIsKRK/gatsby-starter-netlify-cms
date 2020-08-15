import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import budli from "../../img/partner/budli-dot-in-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Budli = () => {
  return (
    <div>
      <Helmet>
        <title>Budli.in</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Budli.in</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Budli.in
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={budli} alt="Budli.in"></img>
            </div>
            <div className="col-md-9">
              <p>
                Budli offers 5% discount to our community members who want to
                buy or sell a device on their platform.
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
export default Budli
