import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Privacy Policy</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                We, at GoFloaters, don’t store any of your personal data on our
                servers, nor do we pass it on to a third party. We only request
                certain permissions to make the sign up and login process easier
                for you. While our app does request for location access, we
                don’t store your location data.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default PrivacyPolicy
