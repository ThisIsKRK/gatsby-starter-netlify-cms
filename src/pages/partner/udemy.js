import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import udemy from "../../img/partner/Udemy.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Udemy = () => {
  return (
    <div>
      <Helmet>
        <title>Udemy</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Udemy</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Udemy
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={udemy} alt="Udemy"></img>
            </div>
            <div className="col-md-9">
              <p>
                Access more than 130 million courses on almost everything under
                the sun (and beyond!) with exclusive discounts.
              </p>
              <p>
                Through our partnership with Udemy, we are able to offer their
                courses at exclusive discounts to our customers. Be it for
                yourself or your employees, always get the best deals on all
                Udemy courses via GoFloaters.
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
export default Udemy
