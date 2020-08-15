import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import spree from "../../img/partner/Spree-thinking-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const ThinkingSpree = () => {
  return (
    <div>
      <Helmet>
        <title>Thinking Spree</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Thinking Spree</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Thinking Spree
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={spree} alt="Thinking Spree"></img>
            </div>
            <div className="col-md-9">
              <p>
                Thinking Spree&rsquo;s unique services include formulating
                growth and expansion strategies by its rich network of industry
                experts who are alumni of premium institutes like ISB, IIMs, and
                IITs.
              </p>
              <p>
                Thinking Spree offers the following discounts to our community.
              </p>
              <ul>
                <li>10% Discount on Catalysts and Mastermind packages</li>
                <li>20% Discount on Veteran packages</li>
                <li>
                  Additional 30% discount/free upgrade on the second case for
                  the same business. (This will be applicable only if the second
                  case is done within 1 month of the completion of the first
                  case)
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
export default ThinkingSpree
