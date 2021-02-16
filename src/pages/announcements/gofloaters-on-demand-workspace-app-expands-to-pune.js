import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import awslogo from "../../img/partner/aws-logo.png"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
import SEOHeader from "../../components/seo-header"
import SocialImage from "../../img/socialimage/homepage.jpg"
const announcementone = () => {
  return (
    <div>
      <SEOHeader
        title="GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO PUNE"
        description="GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO PUNE"
       socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces-in-bengaluru.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <HeaderBanner>
          <h1>GOFLOATERS, ON-DEMAND WORKSPACE APP EXPANDS TO PUNE</h1>
          <h2 style={{ textAlign: "center" }}>
            THE PLATFORM WILL OFFER 20+ SPACES IN PUNE FOR REMOTE WORK
          </h2>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/press/">Company Announcements</Link> / GOFLOATERS,
              ON-DEMAND WORKSPACE APP EXPANDS TO PUNE
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                <strong>Pune, June 2nd, 2020: </strong>GoFloaters, the on-demand
                workspace platform is launching its operations in Pune. The
                GoFloaters app allows users to choose and book on-demand
                flexible workspaces across the city. The app is available for
                iPhones, Android phones, and for users to book on a browser.{" "}
                <br />
                <strong>Some interviews on this story:</strong>
                <a
                  href="http://techtrail.in/bizz-buzz/gofloaters-on-demand-workspace-app-expand-ds-to-pune/"
                  target="_blank"
                  rel="nofollow"
                >
                  <strong> TechTrails</strong>
                </a>{" "}
                <br />
                To begin with GoFloaters will offer on-demand workspaces will
                offer 20+ spaces across Pune city including the location of
                Baner, Chandan Nagar, Chinchwad, Earandwade, Kharadi,
                Lullanagar, Shivajinagar. Each of the spaces would be following
                the quality and standards required for the post-COVID space
                needs ensuring the well-being of the users.
                <br />
                Pune is one of India&rsquo;s hottest start-up hubs and has a
                range of working professionals, freelancers, and a large student
                population. The platform can help businesses save a significant
                amount on rental and boost the morale and productivity of the
                employees by offering variety in office ambiance.
                <br />
                &ldquo;What the new normal is going to be is anyone&rsquo;s
                guess. But one thing is for sure that we are going to see
                organisations trying out different working models giving their
                employees more flexibility. A recent GoFloaters survey of
                entrepreneurs and business professionals revealed nearly 75% of
                the respondents wanted to work outside the office at least twice
                a week. Many leaders we spoke to all echoed that they saw a 20%
                increase in employee productivity during the lockdown.&rdquo;
                said Shyam Sundar Nagarajan, Founder &amp; CEO of GoFloaters.{" "}
                <br />
                GoFloaters is at the core of solving both the rising problem of
                space for both remote workforces across industry and workspace
                owners. GoFloaters is committed to building a sustainable model
                for the coworking marketplace, especially in the post COVID era
                by helping businesses reduce their spending on office space
                anywhere between 20% to 80% on average.
                <br />
                Established in 2017, GoFloaters is a start-up with a 100% remote
                team. Spaces across its centers are strategically located near
                township and CBDs to help professionals across industries with
                easy accessibility and affordability.{" "}
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
