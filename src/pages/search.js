import React from "react"
import Layout from "../components/layout"
import SearchComponent from "../components/SearchComponent"
import SEOHeader from "../components/seo-header"

export default () => (
  <div>
    <SEOHeader
      title="Find a coworking space near you | Gofloaters"
      description="Know an awesome spot that you think should be on the GoFloaters platform? Fill in the details and we’ll see what we can do."
      socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
      pinterest="true"
    ></SEOHeader>
    <Layout>
      <SearchComponent />
    </Layout>
  </div>
)
