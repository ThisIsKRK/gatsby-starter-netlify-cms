import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SafeSpace from "../img/safety-badge.jpg"
import { Link } from "gatsby"
const CovidSafety = () => {
  return (
    <div>
      <Helmet>
        <title>Covid-19 Safety Measures - GoFloaters</title>
        <meta
          name="description"
          content="GoFloaters cares about your well being and wants to ensure that
          you feel safe while working out of our spaces."
        ></meta>
      </Helmet>
      <Layout>
        <div className="text-center" style={{ padding: "30px 0px" }}>
          <h1 style={{ color: "#000", fontWeight: "bold" }}>
            Covid-19 Safety Measures
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <p>
                GoFloaters cares about your well being and wants to ensure that
                you feel safe while working out of our spaces. That’s why we’ve
                developed the Safety Badge program along with our partner
                spaces.
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <br></br>
              <p className="text-center">
                The program is a voluntary pledge that our spaces take to ensure
                that their space meets our requirements for health and safety
                standards.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div
            className="row"
            style={{
              border: "1px solid #d2dcf0",
              padding: "15px 20px",
              margin: "50px",
              borderRadius: "8px",
            }}
          >
            <div className="col-md-12 text-center">
              <h3>Safety Badge Requirements</h3>
              <p style={{ color: "#303030" }}>
                Required for Verified COVID Safety Badge
              </p>
              <br></br>
            </div>
            <div className="col-md-12 covid-response MobileOnly">
              <ul>
                <li>Mask Required</li>
                <li>Hand Sanitizer Provided</li>
                <li>Social Distancing between Workstations</li>
                <li>Cleaning and disinfection of Common Surfaces</li>
                <li>Safe Food Preparation and Pantry Services</li>
                <li>Visitor Records for Contact Tracing</li>
              </ul>
            </div>
            <div className="col-md-6 covid-response DesktopOnly">
              <ul>
                <li>Mask Required</li>
                <li>Hand Sanitizer Provided</li>
                <li>Social Distancing between Workstations</li>
              </ul>
            </div>
            <div className="col-md-6 covid-response DesktopOnly">
              <ul>
                <li>Cleaning and disinfection of Common Surfaces</li>
                <li>Safe Food Preparation and Pantry Services</li>
                <li>Visitor Records for Contact Tracing</li>
              </ul>
            </div>
          </div>
          <div
            className="row"
            style={{
              padding: "15px 20px",
              margin: "40px",
            }}
          >
            <div className="col-md-6">
              <br></br>
              <h3>Identifying Safe Spaces</h3>
              <p>
                GoFloaters Safe Space badge will appear next to spaces that have
                verified safety measures undertaken and have met our safety
                standards.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={SafeSpace}
                style={{ width: "200px" }}
                alt="GoFloaters Verified Safe"
              ></img>
            </div>
          </div>
          <div
            className="row"
            style={{
              padding: "15px 20px",
              margin: "40px",
            }}
          >
            <div className="col-md-12 text-center">
              <h3>For more information</h3>
              <br></br>
            </div>
            <div className="col-md-4 text-center borderRight">
              <p>
                For the latest updates on safety precautions against COVID-19
                please visit the
                <a
                  href="https://www.mohfw.gov.in/pdf/ProtectivemeasuresEng.pdf"
                  target="_blank"
                  rel="nofollow"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  {" "}
                  Ministry of Health Guidelines
                </a>
              </p>
            </div>
            <div className="col-md-4 text-center borderRight">
              <p>
                If you’re a GoFloaters Customer and you have questions about our
                Safety Badge Program, please{" "}
                <Link
                  to="/contact-us/"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  Contact Us
                </Link>
                .
              </p>
            </div>
            <div className="col-md-4 text-center paddingTopFify">
              <p>
                If you’re a Partner Space in our network and you have questions
                or would like to join this program, please{" "}
                <Link
                  to="/contact-us/"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  Contact Us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CovidSafety
