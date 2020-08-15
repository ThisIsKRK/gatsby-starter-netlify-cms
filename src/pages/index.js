import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

import SimpleSlider from "../components/slider"
import homeSlider from "../img/homepage/remote-team.svg"
import homeSearchGroup from "../img/homepage/home-search-gro.png"
import homeSearchPeople from "../img/homepage/home-search-icons.png"
import TestimonialSlider from "../components/testimonial/testimonialslider"
import PartnerSlider from "../components/partners/partnerslider"
import SearchForm from "../components/search/search"
import DownloadApp from "../img/homepage/download-app.png"
import FindSpace from "../img/homepage/find-space.png"
import BookSpace from "../img/homepage/book.png"
import ConvertMonth from "../img/homepage/convert-month.png"
import GooglePlay from "../img/google-play-gofloaters-download.png"
import AppleStore from "../img/gofloater-apple-store.png"
import GoFloatersApp from "../img/gofloaters-app.png"
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>
          Book Shared Offices, Coworking Spaces, Private Offices and Meeting,
          Event, Training spaces - GoFloaters
        </title>
        <meta
          name="description"
          content="Book Shared offices, Coworking Spaces in Chennai, Bangalore, Coimbatore, Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Mumbai & Pune"
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
                Pay for an office only when you use it
              </h1>
              <h3 className="h3-lite center-h1">
                Never sign a contract again. Book Instantly!
              </h3>
              <SearchForm spacetype="officeSpace" />
              <p></p>
              <p className="bannertext">
                <img
                  src={homeSearchGroup}
                  width="20"
                  alt="Private Offices for teams starting at ₹500/day"
                ></img>
                <span className="bannerspan">
                  Private Offices for teams starting at
                  <strong> ₹500/day</strong>
                </span>
              </p>
              <p className="bannertext">
                <img
                  src={homeSearchPeople}
                  width="20"
                  alt="Desks for Individuals starting at ₹250/person"
                ></img>{" "}
                <span className="bannerspan">
                  Desks for Individuals starting at
                  <strong> ₹250/day</strong>
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
              <h3 className="text-center">Featured on</h3>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <SimpleSlider></SimpleSlider>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="container-fluid padding-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1 text-center">
                  10000+ customers use our spaces, and love it
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <TestimonialSlider></TestimonialSlider>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h1 text-padding text-center mob-h1">
                Here’s why you will too
              </h1>
            </div>
            <div className="col-md-12 homepage-know-why">
              <div className="container">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="container know-why-text">
                      <div className="row aligner">
                        {/* <div className="col-md-3 text-center">
                          <img
                            className="alignnone size-full wp-image-4404"
                            src="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/05/gofloaters-icons-01.png"
                            alt=""
                            width="90"
                            height="91"
                          />
                        </div>*/}
                        <div className="col-md-12">
                          <h3>
                            <span className="highlight">Flexible</span> Office
                            Spaces
                          </h3>
                          <p>Book for a day or a month</p>
                        </div>
                      </div>
                      <div className="row">&nbsp;</div>
                      <div className="row aligner">
                        {/* <div className="col-md-3 text-center">
                          <img
                            className="alignnone size-full wp-image-4404"
                            src="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/05/gofloaters-icons-02.png"
                            alt=""
                            width="90"
                            height="91"
                          />
  </div>*/}
                        <div className="col-md-12">
                          <h3>
                            <span className="highlight">No Contracts</span> Ever
                          </h3>
                          <p>We hate commitment as much as you do</p>
                        </div>
                      </div>
                      <div className="row">&nbsp;</div>
                      <div className="row aligner">
                        {/* <div className="col-md-3 text-center">
                          <img
                            className="alignnone size-full wp-image-4404"
                            src="https://staging-gofloaterscom.kinsta.cloud/wp-content/uploads/2020/05/gofloaters-icons-03.png"
                            alt=""
                            width="90"
                            height="91"
                          />
                        </div>*/}
                        <div className="col-md-12">
                          <h3>
                            <span className="highlight">All Inclusive</span>{" "}
                            Pricing
                          </h3>
                          <p>High speed WiFi, AC &amp; essentials guaranteed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-60rs ">
          <div className="partners">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h1 className="h1 text-center">
                    Also, save money for your business
                  </h1>
                  <p className="text-center">
                    Access partner benefits worth ₹1 Crore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 ">
              <PartnerSlider />
            </div>
          </div>
        </div>

        {/* <div className="padding-20">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1 text-padding text-center">
                  Imagine having 1000+ offices around the country
                </h1>
              </div>
            </div>
          </div>
          <SimpleMap></SimpleMap>
                      </div> */}

        <div>
          <div className="padding-20"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 DesktopOnly">
                <video
                  width="100%"
                  class="dc_video_vd"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/gofloaterscomprod.appspot.com/o/GoFloaters.mp4?alt=media&token=be4a24dd-0a4b-460d-90fd-f6d4bbb262c0"
                    type="video/mp4"
                  />
                </video>
                {/*<img
                  src={GoFloatersApp}
                  className="img-responsive"
                  alt="GoFloaters App"
                ></img> */}
              </div>

              <div className="col-md-6">
                <br></br>
                <h1 className="h1 text-padding padding-20">How it works?</h1>
                <p className="bannertext">
                  <img
                    src={DownloadApp}
                    alt="Download the app"
                    width="30"
                    height="30"
                  />
                  <span>Download the app</span>
                </p>
                <p className="bannertext">
                  <img
                    src={FindSpace}
                    alt="Find your space"
                    width="30"
                    height="30"
                  />
                  <span>Find your space</span> 
                </p>

                <p className="bannertext">
                  <img
                    src={BookSpace}
                    alt="it instantly to use"
                    width="30"
                    height="30"
                  />
                  <span>Book it instantly to use</span>   
                </p>

                <p className="bannertext">
                  <img
                    src={ConvertMonth}
                    alt="Convert to monthly only if you want!"
                    width="30"
                    height="30"
                  />
                  <span>Convert to monthly only if you want!</span> 
                </p>
                <br></br>
                <p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gofloaters.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dhomepage%26utm_term%3Dcoworking%26utm_content%3Dhowitworks%26utm_campaign%3Dwebsite"
                    target="_blank"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={GooglePlay}
                      alt="Gofloaters Google Play"
                      width="150"
                    />{" "}
                  </a>
                  &nbsp;
                  <a
                    href="https://itunes.apple.com/in/app/gofloaters/id1446010118?mt=8&uo=4&at=11l6hc&app=itunes&ct=fnd"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={AppleStore}
                      alt="Gofloaters Apple Store"
                      width="150"
                    />{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </Layout>
    </div>
  )
}
