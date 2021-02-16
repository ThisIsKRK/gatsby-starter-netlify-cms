import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import Sound from "../img/Sound_Portrait.png"
import SEOHeader from "../components/seo-header"
const AboutUs = () => {
  return (
    <div>
      <SEOHeader
        title="About us - Founders and team behind GoFloaters"
        description="Meet the rock solid team behind GoFloaters. Read About Founder & CEO - Shyam Sundar & Co-Founder & COO Srivatsan Padmanabhan"
        socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <HeaderBanner>
          <h1>Meet The Team</h1>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Meet the rock solid team behind GoFloaters.</h2>
              <br></br>
              <h3>
                <b>The Core Team</b>
              </h3>
              <br></br>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://assets.gofloaters.com/Shyam_Portrait.png"
                width="200"
                alt="Shyam Sundar"
              ></img>
              <br></br>
              <h2>Shyam Sundar</h2>
              <b>Founder & CEO</b> <br></br> A former Fulbright Scholar, Shyam
              is a technologist who likes nothing better than solving complex
              problems.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/sundarns/"
                target="_blank"
                rel="nofollow"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://assets.gofloaters.com/Srivatsan_Portrait.png"
                width="200"
                alt="Srivatsan Padmanabhan"
              ></img>
              <br></br>
              <h2>Srivatsan Padmanabhan</h2>
              <b>Co-Founder & COO</b> <br></br> A serial entrepreneur and
              innovative Growth Hacker, Srivatsan is a #futureofwork enthusiast.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/srivatsanp/"
                target="_blank"
                rel="nofollow"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://assets.gofloaters.com/Sound_Portrait.png"
                width="200"
                alt="Soundhariya"
              ></img>
              <br></br>
              <h2>Soundhariya V</h2>
              <b>CMO</b> <br></br> PR and branding veteran. Community builder
              and remote work evangelist.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/soundhariyav/"
                target="_blank"
                rel="nofollow"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="col-md-12 padding-20 text-center">
              <br></br>
              <br></br>
              <br></br>
              <h3>
                <b>Our Advisors</b>
              </h3>
              <br></br>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://assets.gofloaters.com/Ramesh_Portrait.png"
                width="150"
                alt="Ramesh Kumar"
              ></img>
              <h3>Ramesh Kumar</h3>
              <b>STRATEGIC ADVISOR</b>
              <br /> This Silicon Valley veteran is a Startup Incubator and
              Growth Hacker.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/vcramesh1"
                target="_blank"
                rel="nofollow"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <div className="col-md-4 text-center">
              <img
                src="https://assets.gofloaters.com/Leo_Portrait.png"
                width="150"
                alt="Leo A. Giacometto"
              ></img>
              <h3>Leo A. Giacometto</h3>
              <b>STRATEGIC ADVISOR</b>
              <br /> The Founder and CEO of Gage international is also advisor
              to dozens of Fortune 500 companies and startups.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/leogiacometto"
                target="_blank"
                rel="nofollow"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://assets.gofloaters.com/Sukumar_Portrait.png"
                width="150"
                alt="Sukumar R"
              ></img>
              <h3>Sukumar R</h3>
              <b>STRATEGIC ADVISOR</b>
              <br /> The Former CIO and Head of Innovation at Cognizant, is the
              Founder and CEO of Tiny Magiq.
              <br />
              <br />
              <a
                href="https://www.linkedin.com/in/rajagopalsukumar/"
                target="_blank"
                rel="nofollow"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <br></br>
        </div>
      </Layout>
    </div>
  )
}

export default AboutUs
