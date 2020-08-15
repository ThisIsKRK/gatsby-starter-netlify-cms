import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import twist from "../../img/partner/Twist-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Twist = () => {
  return (
    <div>
      <Helmet>
        <title>Twist</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Twist</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Twist
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={twist} alt="Twist"></img>
            </div>
            <div className="col-md-9">
              <p>
                Twist is a team communication app that keeps work conversations
                organized, on-topic and easy to find (forever). Through our
                partnership with them, we are able to offer $200 off on Twist
                Unlimited subscriptions.
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
export default Twist
