import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import ListYourSpaces from "../components/ListYourSpaces"

const ListYourSpace = () => {
  return (
    <div>
      <Helmet>
        <title>
          Don't let space go to waste | GoFloaters Register your spare spaces or
          rooms in GoFloaters app
        </title>
        <meta
          name="description"
          content="Do you have a vacant space in your office or any spare seating in your cafe? Don’t let the space go to waste. Instead list your spare space in our GoFloaters app & make money."
        ></meta>
        <meta
          name="keywords"
          content="gofloaters Pune, Book Private Office, Shared office, Coworking Space"
        />
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Make Money from your Unoccupied Spaces</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Why let a space go to waste, when you can make money?</h1>
              <br></br>
              Workspace is valuable real estate in today’s world. So, do you
              have spare seating in your café or restaurant? Are you a business
              owner who has vacant space in your office?
            </div>

            <div className="col-md-12 text-center">
              <br></br>
              <h1 style={{ color: "#4f9fc8" }}>Cafe or Restaurant owners</h1>
              <br></br>
              <p className="text-center">
                Even the busiest eatery has <strong>lean hours</strong>, when
                footfall slows down. But that doesn&rsquo;t mean you stop paying
                rent for those hours or turn off the electricity. So, why not 
                <strong>make some money off the available seating</strong>
                 during that time? That&rsquo;s where we come in. We can 
                <strong>
                  increase the number of walk-ins, get you new customers
                </strong>
                , and help make your space a cool, vibrant &amp; happening one.
                Yup, you read right!
              </p>
            </div>

            <div className="col-md-12 text-center">
              <br></br>
              <h1 style={{ color: "#4f9fc8" }}>
                Business owners with spare office space
              </h1>
              <br></br>
              <p className="text-center">
                Maybe you have a <strong>couple of desks</strong> at the back of
                your office that <strong>no one is using</strong>? Or a private
                office or a <strong>meeting room that is underutilized</strong>?
                Why let it sit empty and gather dust? <strong>We</strong> can 
                <strong>help you hire out your spare seating</strong> and 
                <strong>make </strong>your business <strong>some money</strong>
                 in the process. You get to add to your revenue without putting
                in any effort. What&rsquo;s not to love!
              </p>
            </div>

            <div className="col-md-12 text-center">
              <br></br>
              <h1 style={{ color: "#4f9fc8" }}>
                Owners of any other kind of space
              </h1>
              <br></br>
              <p className="text-center">
                Do you own an art studio or a gallery? Or maybe run a library or
                a store? <strong>Your place can be used</strong> for more than
                just what it was originally planned for! 
                <strong>During closed hours or off-peak times</strong>, it can
                double as a 
                <strong>
                  meeting spot or an event space or even a place to sit and work
                </strong>
                . If you have spare space of any kind 
                <strong>we can help you make some money off it</strong>!
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
