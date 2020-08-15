import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import SuggestForm from "../components/SuggestForm"
export default () => (
  <div>
    <Helmet>
      <title>Suggest a Space</title>
    </Helmet>
    <Layout>
      <HeaderBanner>
        <h1>Suggest a Space</h1>
      </HeaderBanner>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>

          <div className="col-md-12 text-center">
            <p>
              Know an awesome spot that you think should be on the GoFloaters
              platform? Fill in the details and we’ll see what we can do.
            </p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <br></br>
            <SuggestForm />
            <br></br>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </Layout>
  </div>
)
