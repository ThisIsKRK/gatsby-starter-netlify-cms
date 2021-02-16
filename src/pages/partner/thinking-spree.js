import React from "react"
import Layout from "../../components/layout"
import arrow from "../../img/arrow-icon.png"
import { Helmet } from "react-helmet"
import spree from "../../img/partner/Spree-thinking-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const ThinkingSpree = () => {
  return (
    <div>
      <Helmet>
        <title>Thinking Spree - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Thinking Spree</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> /
              Thinking Spree
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/Spree-thinking-logo.png"
                alt="Thinking Spree"
              ></img>
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
                <br />
                <br />
                <a
                  href="https://gofloatersscdd.typeform.com/to/vwAJwR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  style={{
                    fontSize: "0.9rem",
                    color: "#fff",
                    background: "#4f9fc8",
                    borderRadius: "5px",
                    padding: "7px 15px",
                    marginTop: "10px",
                  }}
                >
                  Claim Now{" "}
                  <img
                    src="https://assets.gofloaters.com/arrow-icon.png"
                    alt="arrow"
                    style={{ width: "20px", paddingBottom: "3px" }}
                  />
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
