import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import ListYourSpaces from "../components/ListYourSpaces"
import SEOHeader from "../components/seo-header"
import SocialImage from "../img/socialimage/listyourspace.jpg"
const SuggestThanks = () => {
  return (
    <div>
      <SEOHeader
        title="Thank you for filling out your information! | GoFloaters"
        description="Thank you for filling out your information!"
        socialURL="https://assets.gofloaters.com/socialimage/listyourspace.jpg"
      ></SEOHeader>
      <Layout>
        <div className="header-banner">
          <h1>Thank you for your suggestion!</h1>
          <h4>
            We will evaluate and add the space to our platform if found
            suitable.
            <br></br>
            <br></br>
            <br></br>
            Have a great day!
            <br></br>
            <br></br>
          </h4>
        </div>
      </Layout>
    </div>
  )
}

export default SuggestThanks
