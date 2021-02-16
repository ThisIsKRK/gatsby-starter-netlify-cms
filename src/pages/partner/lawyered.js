import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Lawyered = () => {
  return (
    <div>
      <Helmet>
        <title>Lawyered - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Lawyered</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> /
              Lawyered
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/Lawyered-logo.png"
                alt="Lawyered"
              ></img>
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
export default Lawyered
