import React from "react"
import Layout from "../components/layout"
import HeaderBanner from "../components/headerbanner"
import ContactForm from "../components/ContactForm"
import SEOHeader from "../components/seo-header"

const ContactPage = () => {
  return (
    <div>
      <SEOHeader
        title="Contact Gofloaters For Office Space & Meeting Rooms in India"
        description="Call us - +91-7338730800, E-Mail - support@gofloaters.com & Click the chat bubble in the bottom right of this page."
        socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces-in-bengaluru.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <HeaderBanner>
          <h1>Contact Us</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
            <div className="col-md-12 text-center"></div>

            <div className="col-md-6 text-center">
              <i className="fa fa-chat"></i>
              <h3>Chat</h3>
              <p>Click the chat bubble in the bottom right of this page.</p>
            </div>
            <div className="col-md-6 text-center">
              <i className="fa fa-chat"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:support@gofloaters.com" className="MailLinks">
                  support@gofloaters.com
                </a>
              </p>
            </div>
            {/* <div className="col-md-4 text-center">
              <i className="fa fa-chat"></i>
              <h3>Phone</h3>
              <p>+91-7338730800</p>
            </div> */}
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
