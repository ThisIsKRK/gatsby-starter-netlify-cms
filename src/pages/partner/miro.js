import React from "react"
import Layout from "../../components/layout"
import arrow from "../../img/arrow-icon.png"
import { Helmet } from "react-helmet"

import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const miro = () => {
  return (
    <div>
      <Helmet>
        <title>Miro for Startups - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Miro for Startups</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> / Miro
              for Startups
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/miro.png"
                alt="Miro for Startups"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                We believe that Miro can help startup teams collaborate faster
                and more clearly, inspire new ideas during interactive meetings,
                and design products that keep user research front and center.
                That’s why we partnered with Miro on the{" "}
                <a
                  href="https://go.miro.com/e2t/tc/VX8cXB6hjb7ZN1bm_1BYB4bZW2bnPc74gDVqDN1WCR-_3p_8SV1-WJV7CgGbKW6f5RkL8Js1nXW1xd62P3x1rHgW2xDbf26NRDFWW7l_26x8HcyJyW8fXQfP3jQFL1W2q_R9X2y8xNJW1tf0Vx81pfK4W46Zn3Y88TJLNW5cyS224fDJfLW4pNVgr1Tm329W2YTDNK2rkjfbW5vMhdc9j8tcQN6g8VBtcXKdQW7x5fSP5CYwfDW8X-NpH7xTgdVW6n84f-6G7CSPW3rPj0j6_VwFhW7Jvzzk5z4_D_W62hwnX11HBN5W2PyryT7xPt3WW5VkgGJ1NnLxRW3VY4yf4vdgN_3kpF1"
                  target="_blank"
                  rel="nofollow"
                >
                  Startups Program
                </a>
                .<br></br> <br></br> All our startups new to Miro will get
                $1,000 in credits to grow their business.
              </p>
              <p>
                <br />
                If you are part of our community and wish to avail this benefit{" "}
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
export default miro
