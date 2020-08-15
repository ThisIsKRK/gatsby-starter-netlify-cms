import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import startupclub from "../../img/partner/Startup-Club-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const StartupClub = () => {
  return (
    <div>
      <Helmet>
        <title>Startups Club</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Startups Club</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Startups Club
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={startupclub} alt="Startups Club"></img>
            </div>
            <div className="col-md-9">
              <p>
                Startups Club offers 50% discount to the Demo Day 2019 (On 23rd
                and 24th November 2019 at St. John&rsquo;s Auditorium,
                Koramangala, Bengaluru) event to our community.
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
export default StartupClub
