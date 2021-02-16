import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import ListYourSpaces from "../components/ListYourSpaces"
import SEOHeader from "../components/seo-header"
import SocialImage from "../img/socialimage/listyourspace.jpg"
const Thanks = () => {
  return (
    <div>
      <SEOHeader
        title="Thank you for filling out your information! | GoFloaters"
        description="Thank you for filling out your information!"
      ></SEOHeader>
      <Layout>
        <div className="header-banner">
          <h1>Thank you for filling out your information!</h1>
          <h4>
            We have received your message and will get back to you soon.
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

export default Thanks
