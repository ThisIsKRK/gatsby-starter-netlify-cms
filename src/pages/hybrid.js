import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import SimpleSlider from "../components/slider"
import homeSlider from "../img/credit-card@1X.png"
import postAJob from "../img/post-a-job@1X.png"
import happy from "../img/happy@1X.png"
import SearchForm from "../components/search/search"

import HybridBackground from "../img/homepage/background.jpg"
import "../styles/hybrid.scss"
import HybridForm from "../components/HybridForm"
export default function Hybrid() {
  return (
    <div>
      <Helmet>
        <title>
          Pay & Use Private Offices, Coworking Space & Shared Office -
          GoFloaters
        </title>
        <meta
          name="description"
          content="Book Private Office, Shared office, Coworking Space in Chennai, Bangalore, Coimbatore, Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Mumbai & Pune."
        ></meta>
        <meta
          name="keywords"
          content="Book Private Office, Shared office, Coworking Space"
        />
      </Helmet>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-7 homeBanner">
              <h1 className="h1 center-h1">
                Grow your company, not your bills
              </h1>
              <h3 className="h3-lite center-h1">
                Find day-offices for your remote team
              </h3>
              <SearchForm
                spacetype="dailyofficeSpace"
                placeholder="Search location"
              />
              <p style={{ fontSize: "14px" }}>
                <br></br>
                Trusted by <b>10,000+ </b>customers including
              </p>
              <img
                src="https://assets.gofloaters.com/trusted-by.jpg"
                className="img-responsive"
                alt="Trusted by 10,000+ customers"
              ></img>
            </div>

            <div className="col-md-5 padding-60">
              <h3 className="text-center">
                <img
                  src="https://assets.gofloaters.com/credit-card@1X.png"
                  className="img-responsive"
                  alt="Pay for an office only when you use it"
                ></img>
              </h3>
            </div>
          </div>
        </div>

        <div className="container padding-60">
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <div className="row aligner">
                  <div className="col-md-12">
                    <h1 className="h1">What is hybrid remote working?</h1>
                    <p>
                      Remote work is great, but nothing can beat a face-to-face.
                      Hybrid is when you’re remote by default, but co-locate to
                      collaborate. This way, you can
                    </p>
                    <br></br>
                  </div>
                  <div className="col-md-12">
                    <h2>
                      <span className="hybrid-highlight">
                        Reduce your overheads
                      </span>
                    </h2>
                    <p>Never sign a contract, just pay-per-use</p>
                    <h2>
                      <span className="hybrid-highlight">
                        Improve productivity
                      </span>
                    </h2>
                    <p>Review progress and brainstorm in person</p>
                    <h2>
                      <span className="hybrid-highlight">
                        Get the best of both worlds
                      </span>
                    </h2>
                    <p>Flexibility of remote, stability of co-location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <h3 className="text-center">
                <img src={postAJob} className="img-responsive hybrid-image" />
              </h3>
            </div>
          </div>
        </div>

        <div className="padding-60rs ">
          <div style={{ paddingBottom: "0px" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h1 className="h1 hybrid-h1-2">
                    Unshackle yourself from hefty office contracts
                  </h1>
                  <p className=" hybrid-p-2" style={{ paddingBottom: "20px" }}>
                    <b>We can help you go hybrid</b>
                  </p>

                  <Link
                    to="/search"
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      background: "#4f9fc8",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      marginTop: "10px",
                    }}
                  >
                    TELL ME MORE
                    <img
                      src="https://assets.gofloaters.com/arrow-icon.png"
                      alt="arrow"
                      style={{ width: "20px", paddingBottom: "3px" }}
                      alt="Tell Me More - GoFloaters"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12 ">
              <PartnerSlider />
            </div> */}
          </div>
        </div>
        <div className="container ">
          <div className="row padding-60 mob-image-hybrid">
            <div className="col-md-6">
              <img
                src={happy}
                className="img-responsive hybrid-image-1"
                alt="GoFloaters Hybrid Spaces"
              ></img>
            </div>
            <div className="col-md-6 pt unshackle-container ">
              <span
                className="hybrid-p-unshackle"
                style={{ position: "relative", top: "8px" }}
              >
                <b>Work out of</b>
              </span>
              <span style={{ lineHeight: "45px" }}> </span> <br />{" "}
              <span className="hybrid-h1-unshackle">1000+</span>
              <span className="hybrid-p-unshackle">
                {" "}
                vetted office spaces,
              </span>{" "}
              <br /> <span style={{ lineHeight: "10px" }}> </span>
              <span className="hybrid-p-unshackle">spread across </span>{" "}
              <span className="hybrid-h1-unshackle">8 cities countrywide</span>
              <br />
              <span style={{ lineHeight: "10px" }}> </span>
              <span className="hybrid-p-unshackle">that are </span>
              <span className="hybrid-h1-unshackle">pay-per-use</span>
              <br></br>
              <br></br>
              <Link
                to="/office-spaces/"
                style={{
                  fontSize: "0.9rem",
                  color: "#fff",
                  background: "#4f9fc8",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  marginTop: "10px",
                }}
              >
                SHOW ME SPACES
                <img
                  src="https://assets.gofloaters.com/arrow-icon.png"
                  alt="arrow"
                  style={{ width: "20px", paddingBottom: "3px" }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="container padding-60">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-12 text-center">
              <img
                src="https://assets.gofloaters.com/partner/Google-Cloud-logo.png"
                className="google-cloud partner-image"
              />
              <img
                src="https://assets.gofloaters.com/partner/IBM-Cloud-logo.png"
                className="ibm-cloud partner-image"
              />
              <img
                src="https://assets.gofloaters.com/partner/Hubspot-logo.png"
                className="hubspot partner-image"
              />
              <img
                src="https://assets.gofloaters.com/partner/Typeform-logo.png"
                className="typeform partner-image"
              />
              <img
                src="https://assets.gofloaters.com/partner/todoist-logo.png"
                className="todoist partner-image"
              />
              <img
                src="https://assets.gofloaters.com/partner/Udemy.png"
                className="udemy partner-image"
              />
            </div>
            <div className="col-md-12 text-center">
              <h5 className="partner-h5">Our Partner</h5>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="SignUpBanner">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 text-left col-xs-1">
                <div className="form-container padding-50">
                  <h4>
                    <b>Talk to us</b>
                  </h4>
                  <p style={{ paddingBottom: "20px" }}>
                    We'll get your team set up in no time.
                  </p>
                  <HybridForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="partner-h5">Featured on</h5>
            </div>
            <div className="col-md-12 text-center">
              <SimpleSlider />
            </div>
            <div className="col-md-2"></div> <br></br>
          </div>
        </div>
        <br></br>
        <div>
          <div className="padding-20"></div>
        </div>
      </Layout>
    </div>
  )
}
