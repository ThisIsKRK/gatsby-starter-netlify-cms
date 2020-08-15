import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchResultComponent from "../components/SearchResultComponent"

export default () => (
  <div>
    <Helmet>
      <title>Find Spaces | GoFloaters</title>
    </Helmet>
    <Layout>
      <SearchResultComponent />
    </Layout>
  </div>
)
