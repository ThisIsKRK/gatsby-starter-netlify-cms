import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchComponent from "../components/SearchComponent"

export default () => (
  <div>
    <Helmet>
      <title>Find Spaces | GoFloaters</title>
    </Helmet>
    <Layout>
      <SearchComponent />
    </Layout>
  </div>
)
