import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import razorpay from "../../img/partner/Razorpay-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const RazorPay = () => {
  return (
    <div>
      <Helmet>
        <title>Razorpay</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Razorpay</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-partners/">Community Benefits</Link> /
              Razorpay
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={razorpay} alt="razorpay"></img>
            </div>
            <div className="col-md-9">
              <p>
                Razorpay offers zero transaction fee up to INR 4 Lakhs or 6
                months whichever is earlier to the GoFloaters community after
                which the transaction charge will be 1.8%.
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
export default RazorPay
