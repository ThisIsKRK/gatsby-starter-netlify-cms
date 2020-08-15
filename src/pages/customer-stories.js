import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import "../styles/style.scss"
import "../styles/csstyle.scss"
import Vinay from "../img/testimonial/vinay-004.jpg"
import Arpitaa from "../img/testimonial/arpita-002.jpg"
import Devi from "../img/testimonial/deviprasad-003.jpg"
import Balesh from "../img/testimonial/balesh-001.jpg"
import Lavanya from "../img/testimonial/Lavanya-Testimonial.png"
export default function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>GoFloaters Customer Stories</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>GoFloaters Customer Stories</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="CustomerStoryCard bgtwo">
                <h4>
                  &quot;Never have to worry about Internet or Plug Points.&quot;
                </h4>
                <img
                  src={Arpitaa}
                  className="customerimage"
                  alt="Arpitha Ramani"
                ></img>
                <br></br>
                <p>
                  <b>Arpitha Ramani</b>
                  <br></br> GE Healthcare<br></br>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="CustomerStoryCard bgone">
                <h4>
                  &quot;Gives me the freedom to set up my office across
                  cities.&quot;
                </h4>
                <img
                  src={Vinay}
                  className="customerimage"
                  alt="Vinay Pushpakaran"
                ></img>
                <br></br>
                <p>
                  <b>Vinay Pushpakaran</b>
                  <br></br> Future Impact Learning<br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="CustomerStoryCard ">
                <div className="row paddingar20">
                  <div className="col-md-6">
                    <a
                      href="https://www.youtube.com/watch?v=tDwuXV7kPEw"
                      target="_blank"
                    >
                      <img
                        src={Lavanya}
                        className="responsiveimg"
                        alt="Lavanya Soman, CEO and Founder of Straight Circles"
                      ></img>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <h4>
                      Lavanya Soman, CEO and Founder of Straight Circles talks
                      about how GoFloaters cafe coworking spaces and meeting
                      spaces have helped her and her team be productive and save
                      time and money.
                    </h4>
                    <p>
                      <b>Lavanya Soman</b>
                      <br></br> Entrepreneur<br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="CustomerStoryCard bgtwo">
                <h4>
                  &quot;Tons of options and they offer amazing community
                  benefits.&quot;
                </h4>
                <img
                  src={Devi}
                  className="customerimage"
                  alt="Devi Prasad"
                ></img>
                <br></br>
                <p>
                  <b>Devi Prasad</b>
                  <br></br> Freerangerz<br></br>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="CustomerStoryCard bgone">
                <h4>
                  &quot;My go-to platform for all our external meetings.&quot;
                </h4>
                <img
                  src={Balesh}
                  className="customerimage"
                  alt="Balesh Raghurajan"
                ></img>
                <br></br>
                <p>
                  <b>Balesh Raghurajan</b>
                  <br></br> Effilor Consulting Services<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
