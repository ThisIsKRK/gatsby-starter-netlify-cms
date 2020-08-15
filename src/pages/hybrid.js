import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import SimpleSlider from "../components/slider"
import homeSlider from "../img/credit-card@1X.png"
import postAJob from "../img/post-a-job@1X.png"
import happy from "../img/happy@1X.png"
import homeSearchGroup from "../img/homepage/home-search-gro.png"
import homeSearchPeople from "../img/homepage/home-search-icons.png"
import TestimonialSlider from "../components/testimonial/testimonialslider"
import PartnerSlider from "../components/partners/partnerslider"
import SearchForm from "../components/search/search"
import SimpleMap from "../components/map/simplemap"
import DownloadApp from "../img/homepage/download-app.png"
import FindSpace from "../img/homepage/find-space.png"
import BookSpace from "../img/homepage/book.png"
import ConvertMonth from "../img/homepage/convert-month.png"
import GooglePlay from "../img/google-play-gofloaters-download.png"
import AppleStore from "../img/gofloater-apple-store.png"
import GoFloatersApp from "../img/gofloaters-app.png"
import googleCloud from "../img/partner/Google-Cloud-logo.png"
import ibmCloud from "../img/partner/IBM-Cloud-logo.png"
import hubspot from "../img/partner/Hubspot-logo.png"
import todoist from "../img/partner/todoist-logo.png"
import udemy from "../img/partner/Udemy.png"
import typeform from "../img/partner/Typeform-logo.png"
import arrow from "../img/arrow-icon.png"
import "../styles/hybrid.scss"

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

              <div className="" style={{ padding: "10px 0" }}>
                <Link to="/search" className="hybrid-community hybrid-link">
                  <span
                    style={{
                      fontSize: "24px",
                      paddingBottom: "3px",
                      verticalAlign: "middle",
                    }}
                  >
                    FIND YOUR OFFICE{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{ width: "20px", paddingBottom: "3px" }}
                    />
                  </span>
                </Link>
              </div>

              <p></p>
              <p className="bannertext">
                <img
                  src={homeSearchGroup}
                  width="20"
                  alt="Private Offices for teams starting at ₹500/day"
                ></img>
                <span className="bannerspan">
                  &nbsp; Private Offices for teams starting at
                  <strong> ₹500/day</strong>
                </span>
              </p>
              <p className="bannertext">
                <img
                  src={homeSearchPeople}
                  width="20"
                  alt="Desks for Individuals starting at ₹150/person"
                ></img>{" "}
                <span className="bannerspan">
                  &nbsp; Desks for Individuals starting at
                  <strong> ₹250/person</strong>
                </span>
              </p>
            </div>
            <div className="col-md-5 padding-60">
              <h3 className="text-center">
                <img
                  src={homeSlider}
                  className="img-responsive"
                  alt="Pay for an office only when you use it"
                ></img>
              </h3>
            </div>
          </div>
        </div>

        <div className="container padding-60">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Our Partners</h3>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-12 text-center">
              <img src={googleCloud} className="google-cloud partner-image" />
              <img src={ibmCloud} className="ibm-cloud partner-image" />
              <img src={hubspot} className="hubspot partner-image" />
              <img src={typeform} className="typeform partner-image" />
              <img src={todoist} className="todoist partner-image" />
              <img src={udemy} className="udemy partner-image" />
            </div>
          </div>
        </div>
        <div className="container-fluid padding-60">
          <div className="container"></div>
          <div className="row">
            <div className="col-md-12 ">
              <TestimonialSlider></TestimonialSlider>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <h1 className="h1 text-padding text-center mob-h1 hybrid-h1">
                  What is hybrid remote working?
                </h1>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <p
                      style={{ marginLeft: "110px", paddingTop: "23px" }}
                      className="hybrid-p"
                    >
                      Remote work is great, but nothing can beat a face-to-face.
                      Hybrid is when you’re remote by default, but co-locate to
                      collaborate. This way, you can
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="container know-why-text hybrid-know-why">
                      <div className="row aligner">
                        <div className="col-md-12" style={{ paddingLeft: "0" }}>
                          <h3>
                            <span className="hybrid-highlight">
                              Reduce your overheads
                            </span>
                          </h3>
                          <p>Never sign a contract</p>
                        </div>
                      </div>
                      <div className="row">&nbsp;</div>
                      <div className="row aligner">
                        <div className="col-md-12" style={{ paddingLeft: "0" }}>
                          <h3>
                            <span className="hybrid-highlight">
                              Improve productivity
                            </span>
                          </h3>
                          <p>Review progress and transform in person</p>
                        </div>
                      </div>
                      <div className="row">&nbsp;</div>
                      <div className="row aligner">
                        <div className="col-md-12" style={{ paddingLeft: "0" }}>
                          <h3>
                            <span className="hybrid-highlight">
                              Get the best of both worlds
                            </span>
                          </h3>
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
                      <img
                        src={postAJob}
                        className="img-responsive hybrid-image"
                      />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-60rs ">
          <div className="partners" style={{ paddingBottom: "0px" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h1 className="h1 text-center hybrid-h1-2">
                    Unshackle yourself from hefty office contracts
                  </h1>
                  <p className="text-center hybrid-p-2">
                    <b>We can help you go hybrid</b>
                  </p>
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
              <img src={happy} className="img-responsive hybrid-image-1"></img>
            </div>
            <div className="col-md-6 pt unshackle-container text-center">
              <span
                className="hybrid-p-unshackle"
                style={{ position: "relative", top: "8px" }}
              >
                Work out of
              </span>
              <span style={{ lineHeight: "45px" }}> </span> <br />{" "}
              <span className="hybrid-h1-unshackle">1000+</span>
              <span className="hybrid-p-unshackle">
                {" "}
                pre-vetted office spaces,
              </span>{" "}
              <br /> <span style={{ lineHeight: "10px" }}> </span>
              <span className="hybrid-p-unshackle">spread across </span>{" "}
              <span className="hybrid-h1-unshackle">8 cities countrywide</span>
              <br />
              <span style={{ lineHeight: "10px" }}> </span>
              <span className="hybrid-p-unshackle">that are </span>
              <span className="hybrid-h1-unshackle">pay-per-use</span>
            </div>
          </div>
        </div>

        <div className="container-fluid container-partner ">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <SimpleSlider />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-12 text-center">
              <h5 className="partner-h5">Featured on</h5>
            </div>
          </div>
        </div>

        <div className="container form-container-1 margin-60 padding-60">
          <div className="row">
            <div className="col-md-6 text-center col-lg-6">
              <div className="container d-none d-sm-block d-md-block">
                <div className="row">
                  <div className="col-md-12 connect-text">
                    <h1 style={{ fontSize: "3.0rem" }}>
                      <b>Pay-per-use Offices</b>
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 connect-text">
                    <h3>No Contracts or Commitments</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-left col-xs-1">
              <div className="form-container padding-50">
                <h4>
                  <b>Talk to us</b>
                </h4>
                <p style={{ paddingBottom: "20px" }}>
                  We'll get your team set up in no time.
                </p>
                <form
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSffOhAgaxn8mILelKaIoONA1eySj_TGZTatNC8cxCXY1m12RQ/formResponse"
                  target="_self"
                  method="POST"
                  id="mG61Hd"
                >
                  <div className="form-group">
                    <input
                      name="entry.1140567895"
                      placeholder=" Your name"
                      className="input-field form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="entry.2103357484"
                      placeholder=" Work Email"
                      className="input-field form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="entry.316076166"
                      placeholder=" Team Size"
                      className="input-field form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="entry.967879750"
                      placeholder=" Choose City"
                      className="input-field form-control"
                    />
                  </div>

                  <div className="text-center" style={{ marginTop: "20px" }}>
                    <button className="btn btn-hybrid text-white" type="submit">
                      GO HYBRID NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="padding-20"></div>
        </div>
      </Layout>
    </div>
  )
}
