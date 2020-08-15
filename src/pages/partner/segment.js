import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import segment from "../../img/partner/Segment-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Segment = () => {
  return (
    <div>
      <Helmet>
        <title>Segment</title>
        <div className="col-md-12 breadcrumb-container text-center">
          <p>
            <Link to="/our-community-partners/">Community Benefits</Link> /
            Segment
          </p>
        </div>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Segment</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={segment} alt="Segment"></img>
            </div>
            <div className="col-md-9">
              <p>
                If your company is &lt;2 years since founding and raised &lt;$5M
                &amp; a member of the GoFloaters community – you are eligible
                for $50,000 free Segment credits per year.
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
export default Segment
