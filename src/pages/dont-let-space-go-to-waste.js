import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import ListYourSpaces from "../components/ListYourSpaces"
import SEOHeader from "../components/seo-header"
import SocialImage from "../img/socialimage/listyourspace.jpg"
const ListYourSpace = () => {
  return (
    <div>
      <SEOHeader
        title="GoFloaters | How Are We Different From Others"
        description="Low rental cost, No Contracts, No Lock-in Periods, Cool working environment & Community Partner Benefits"
        socialURL="https://assets.gofloaters.com/socialimage/listyourspace.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <div className="header-banner makemoney">
          <h1 style={{ color: "#fff" }}>
            Make Money from your Unoccupied Spaces
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 style={{ color: "#4f9fc8" }}>
                Coworking Space or Business Center owners
              </h3>
              <p>
                We can help you find short/long term clients by listing your
                property on our platform. All our properties are vetted, and
                relevant amenities are highlighted to ensure customers know all
                your offerings. We also frequently collaborate with Coworking
                Spaces to conduct sponsored events that can bring visibility.
              </p>
            </div>

            <div className="col-md-12 text-center">
              <br></br>
              <h3 style={{ color: "#4f9fc8" }}>
                Business owners with spare office space
              </h3>
              <p className="text-center">
                We can help you hire out your spare seating and make your
                business some money in the process. List your underutilized
                spaces on GoFloaters, help your business generate extra income
                on the side.
              </p>
            </div>

            <div className="col-md-12 text-center">
              <br></br>
              <h3 style={{ color: "#4f9fc8" }}>
                Owners of any other kind of space
              </h3>

              <p className="text-center">
                During closed hours or off-peak times, it can double as a
                meeting spot or an event space or even a place to sit and work.
                If you have spare space of any kind
                <strong> we can help you make some money off it</strong>!
              </p>
            </div>

            <div className="col-md-12 text-center">
              <br></br>
              <h2 style={{ color: "#4f9fc8" }}>Interested in knowing more?</h2>
              <p>
                Please fill and submit the form below and we will be in touch.
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ListYourSpaces></ListYourSpaces>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ListYourSpace
