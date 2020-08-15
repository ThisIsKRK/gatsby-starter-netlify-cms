import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import lawyered from "../../img/partner/Lawyered-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Lawyered = () => {
  return (
    <div>
      <Helmet>
        <title>Lawyered</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Lawyered</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Lawyered
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={lawyered} alt="Lawyered"></img>
            </div>
            <div className="col-md-9">
              <p>
                Through our partnership with Lawyered, we are able to offer the
                following benefits to our community:
              </p>
              <ul>
                <li>
                  Pay zero-service fees &amp; connect with a lawyer for all
                  legal requirements instantly
                </li>
                <li>
                  Get an introductory consultation with a Lawyer free of cost
                </li>
                <li>
                  Avail up to 20% discount on the professional fees directly
                  from the lawyer
                </li>
              </ul>
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
export default Lawyered
