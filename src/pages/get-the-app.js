import React from "react"
import Layout from "../components/layout"
import SEOHeader from "../components/seo-header"
import "../styles/style.scss"

export default function GetTheApp() {
  return (
    <Layout>
      <SEOHeader
        title="Get the GoFloaters App"
        description="GoFloaters is a platform that helps you find work and meeting spaces that can be booked instantly."
        socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
        pinterest="true"
      ></SEOHeader>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://assets.gofloaters.com/teams/team-app-screen.jpg"
              className="img-responsive"
            ></img>
          </div>
          <div className="col-md-8">
            <h1 className="text-center" style={{ paddingTop: "40px" }}>
              Get The GoFloaters App
            </h1>
            <p className="text-center">
              We’re consistently rated above 4.5 stars on Play Store & App Store
              for quality workspaces and proactive customer support. See for
              yourself, download now.
            </p>
            <p className="text-center padding-60">
              <a
                href="https://play.google.com/store/apps/details?id=com.gofloaters.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dhomepage%26utm_term%3Dcoworking%26utm_content%3Dhowitworks%26utm_campaign%3Dwebsite"
                target="_blank"
                title="Gofloaters @ Google Play Store"
                rel="noreferrer"
              >
                <img
                  src="https://assets.gofloaters.com/google-play-gofloaters-download.png"
                  alt="Gofloaters App @ Google Play Store"
                  width="150"
                />{" "}
              </a>
              &nbsp;
              <a
                href="https://itunes.apple.com/in/app/gofloaters/id1446010118?mt=8&uo=4&at=11l6hc&app=itunes&ct=fnd"
                rel="noreferrer"
                target="_blank"
                title="Gofloaters App @ Apple Store"
              >
                <img
                  src="https://assets.gofloaters.com/gofloater-apple-store.png"
                  alt="Gofloaters App @ Apple Store"
                  width="150"
                />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>

      <br></br>
    </Layout>
  )
}
