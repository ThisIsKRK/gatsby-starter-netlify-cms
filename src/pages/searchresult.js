import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchResultComponent from "../components/SearchResultComponent"
import SEOHeader from "../components/seo-header"

export default () => (
  <div>
    <SEOHeader
      title="Search Result | Check The Result From GoFloaters.com"
      description="Know an awesome spot that you think should be on the GoFloaters platform? Fill in the details and we’ll see what we can do."
      socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
      pinterest="true"
    ></SEOHeader>
    <Layout>
      <SearchResultComponent />
    </Layout>
  </div>
)
