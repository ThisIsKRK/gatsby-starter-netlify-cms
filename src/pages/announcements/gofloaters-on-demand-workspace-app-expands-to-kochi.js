import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import awslogo from "../../img/partner/aws-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const announcementone = () => {
  return (
    <div>
      <Helmet>
        <title>GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO KOCHI</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO KOCHI</h1>
          <h2 style={{ textAlign: "center" }}>
            THE PLATFORM WILL OFFER FLEXIBLE OFFICE SPACES IN KOCHI FOR REMOTE
            WORK
          </h2>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/press/">Company Announcements</Link> / GOFLOATERS,
              ON-DEMAND WORKSPACE APP EXPANDS TO KOCHI
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Kochi, June 20, 2020: GoFloaters, the on-demand workspace
                platform is launching its operations in Kochi. GoFloaters app
                allows users to choose and book affordable flexible space for
                work and meetings across the city. Spaces can be booked on
                hourly, daily and monthly basis. GoFloaters app is available for
                iPhones, Android phones, and for users to book on a browser.{" "}
              </p>
              <p>
                <strong>Some interviews on this story:</strong>
                <strong> </strong>
                <a
                  href="http://www.uniindia.com/gofloaters-launches-app-for-booking-office-spaces-in-kerala/business-economy/news/2046087.html"
                  target="_blank"
                  rel="nofollow"
                >
                  <strong>United News India</strong>
                </a>
              </p>
              <p>
                Established in 2017, GoFloaters currently has presence across 8
                cities with 1000+ spaces. Following the success of its launch in
                Chennai, Coimbatore, Bengaluru, Hyderabad, Pune and NCR,
                GoFloaters is now entering the Kochi.{" "}
              </p>
              <p>
                Each of GoFloaters spaces would follow the quality and
                guidelines for the post-COVID space needs ensuring the safety of
                its users.{" "}
              </p>
              <p>
                GoFloaters is committed to building a sustainable model for
                office spaces, especially in the post COVID era by helping
                businesses reduce their spending on office space anywhere
                between 20% to 80% on average.
              </p>
              <p>
                <strong>About GoFloaters: </strong>
                <br />
                GoFloaters aims to foster a dynamic and vibrant community of
                start-ups, entrepreneurs, freelancers and businesses
                professionals. It believes the 'Future of Office'​ is anywhere
                and everywhere. It enables the entrepreneurs and digital nomads
                to discover the new way of working and new levels of
                productivity and creativity. GoFloaters comprehensive office
                solution of on-demand workspaces, conference rooms and training
                rooms will help them focus on their core business through its
                cost-effective pay-as-you-use model.{" "}
              </p>
              Website:
              <a href="https://www.gofloaters.com">
                {" "}
                https://www.gofloaters.com
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default announcementone
