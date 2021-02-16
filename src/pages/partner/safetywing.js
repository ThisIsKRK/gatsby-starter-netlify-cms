import React from "react"
import Layout from "../../components/layout"
import arrow from "../../img/arrow-icon.png"
import { Helmet } from "react-helmet"
import safetywing from "../../img/partner/Safetywing-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Safetywing = () => {
  return (
    <div>
      <Helmet>
        <title>Safetywing - Partner Perks of GoFloaters</title>
        <div className="col-md-12 breadcrumb-container text-center">
          <p>
            <Link to="/our-community-perks">Community Benefits</Link> /
            Safetywing
          </p>
        </div>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Safetywing</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/Safetywing-logo.png"
                alt="Safetywing"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                Are you a freelancer looking to get travel insurance for your
                next getaway? Look no further.
              </p>
              <p>
                Safety Wing is the world&rsquo;s first insurance exclusively for
                Digital Nomads traveling abroad.
              </p>
              <p>
                Our community nomads get a flat 15% cashback on purchasing any
                of their plans.
              </p>
              <p>Safe Travels indeed!</p>
              <p>*Insurance offered in partnership with Tokio Marine</p>

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
export default Safetywing
