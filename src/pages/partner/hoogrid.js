import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Hoogrid = () => {
  return (
    <div>
      <Helmet>
        <title>Hoogrid - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Hoogrid</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> /
              Hoogrid
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/hoogrid.png"
                alt="Hoogrid"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                Hoogrid is a drag drop website ecommerce builder that provides
                web designers, marketers, and business owners with a set of web
                design tools to start their next awesome business or ecommerce
                stores within minutes. No coding or designer skills needed.
              </p>
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
export default Hoogrid
