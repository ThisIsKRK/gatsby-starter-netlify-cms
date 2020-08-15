import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import textlocal from "../../img/partner/text-local-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const TextLocal = () => {
  return (
    <div>
      <Helmet>
        <title>TextLocal</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>TextLocal</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              TextLocal
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={textlocal} alt="TextLocal"></img>
            </div>
            <div className="col-md-9">
              <p>
                Textlocal offers 5000 SMS credits + Missed Call Number* (Worth
                Rs. 2000/month) for 6 months to our community. <br></br>{" "}
                <br></br>
                <b> What is Missed Call Number? </b> <br></br>A 10-digit number,
                customers can give missed calls to at zero cost. The call will
                get disconnected after 1 ring. Missed call numbers can help
                generate leads and even open up 2-way interactions by displaying
                and promoting your number(s) on various marketing channels,
                including billboards, brochures, social media,
                radio/TV/newspaper ads, website and more.
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
export default TextLocal
