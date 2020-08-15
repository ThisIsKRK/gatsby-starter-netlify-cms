import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import HeaderBanner from "../components/headerbanner"
import ContactForm from "../components/ContactForm"
import Knowledge from "../img/knowledge-sharing.png"
import PartnerBenfits from "../img/partner-benefits.png"
import HybirdRemote from "../img/hybrid-remote-working.png"
import DiscountedOffers from "../img/discounted-offers.png"
import GoFloatersCommunityAssistance from "../components/gofloaterscap"
const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>GoFloaters Community Assistance Program</title>
        <meta
          name="description"
          content="Startups and small businesses across the country have been severely affected by the COVID-19 crisis. "
        ></meta>
        <meta name="keywords" content="GoFloaters COVID 19" />
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>GoFloaters Community Assistance Program</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                <br></br>
                Startups and small businesses across the country have been
                severely affected by the COVID-19 crisis. Some industries have
                been impacted more than others. It is critical for startups and
                businesses to tune their business model and operations to
                survive this crisis to thrive later. GoFloaters has been the
                voice of the community for long and has been helping this
                community through its innovative on-demand workspace model and
                all community initiatives.
                <br /> GoFloaters with its “Community Assistance Program” is
                lending a helping hand to all small businesses and startups that
                have been severely impacted by the current crisis.
              </p>
            </div>
            <div className="col-md-12">
              <br></br>
              <h2 className="text-center">GoSeeK Webinars</h2>
            </div>
            <div className="col-md-3 text-center">
              <img src={Knowledge} alt="GoFloaters" width="200" />
            </div>
            <div className="col-md-9">
              <p>
                <br></br>
                GoFloaters along with leaders in the industry is conducting a
                series of webinars to help businesses gain expertise in certain
                aspects of the business that can help them do more with less.
                Follow GoFloaters on social media to get updated on these
                events. Bookmark GoFloaters events page to stay updated on these
                events.<br></br>
                <br></br>
                <a href="/event" className="claimnowButton">
                  Goto Events Page
                </a>
              </p>
            </div>
            <div className="col-md-12">
              <br></br>
              <h2 className="text-center">Community Partner Offers</h2>
            </div>
            <div className="col-md-3 text-center">
              <img src={PartnerBenfits} alt="GoFloaters" width="200" />
            </div>
            <div className="col-md-9">
              <p>
                <br></br>
                GoFloaters along with leaders in the industry is conducting a
                series of webinars to help businesses gain expertise in certain
                aspects of the business that can help them do more with less.
                Follow GoFloaters on social media to get updated on these
                events. Bookmark GoFloaters events page to stay updated on these
                events.
                <br></br>
                <br></br>
                <Link to="/our-community-partners" className="claimnowButton">
                  Claim Benefits
                </Link>
              </p>
            </div>
            <div className="col-md-12">
              <br></br>
              <h2 className="text-center">WorkPods</h2>
            </div>
            <div className="col-md-3 text-center">
              <img src={HybirdRemote} alt="GoFloaters" width="200" />
            </div>
            <div className="col-md-9">
              <p>
                <br></br>
                While some of you may decide to continue working remotely post
                the lockdown as well, you might need an office on certain days
                of the month to meet, collaborate and work with your team.
                GoFloaters is putting together an innovative offering called
                “WorkPods” that gets you and your team an office for a few days
                of the month at a fraction of the cost of a full time office. If
                you are interested in this or want to get your team a
                hybrid-remote office fill the form below.
                <br></br>
                <br></br>
                <a href="#form" className="claimnowButton">
                  I am interested in WorkPodss
                </a>
              </p>
            </div>
            <div className="col-md-12">
              <br></br>
              <h2 className="text-center">Discounted Shared Office</h2>
            </div>
            <div className="col-md-3 text-center">
              <img src={DiscountedOffers} alt="GoFloaters" width="200" />
            </div>
            <div className="col-md-9">
              <p>
                <br></br>
                Office rent could prove to be a killer for your business. At the
                same time it could be a critical ingredient for you to make
                progress with your business. We solve this dilemma with
                discounted shared office spaces that you can get on a monthly
                subscription basis without binding contracts. Get upto 50% off
                on office rent for 3 months post lockdown (for eligible
                startups*). <br></br>
                <br></br>
                <Link to="/our-community-partners" className="claimnowButton">
                  Claim Benefits
                </Link>
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-6" id="form">
              <br></br>
              <br></br>
              <h2 className="text-center">Claim Now</h2>
              <GoFloatersCommunityAssistance></GoFloatersCommunityAssistance>
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
