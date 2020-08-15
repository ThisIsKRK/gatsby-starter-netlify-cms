import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contact Us | GoFloaters Contact Us - GoFloaters - Hire an Office Space
        </title>
        <meta
          name="description"
          content="Looking to hire an office space? Connect with us using any of our support options like online chat, email or phone. Our working spaces are located in primary locations with cool amenities."
        ></meta>
        <meta
          name="keywords"
          content="Book Private Office, Shared office, Coworking Space"
        />
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Contact Us</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
            <div className="col-md-12 text-center"></div>

            <div className="col-md-4 text-center">
              <i className="fa fa-chat"></i>
              <h3>Chat</h3>
              <p>Click the chat bubble in the bottom right of this page.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa fa-chat"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:support@gofloaters.com" className="MailLinks">
                  support@gofloaters.com
                </a>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa fa-chat"></i>
              <h3>Phone</h3>
              <p>+91-7338730800</p>
            </div>
            <div className="col-md-12 text-center">
              <br></br>
              <p>
                Alternatively you can fill out the form below. Our team will get
                back to you shortly.
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <br></br>
              <ContactForm></ContactForm>
              <br></br>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default ContactPage
