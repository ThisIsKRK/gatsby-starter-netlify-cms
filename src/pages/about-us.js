import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import Shyam from "../img/Shyam_Portrait.png"
import Srivatsan from "../img/Srivatsan_Portrait.png"
import Ramesh from "../img/Ramesh_Portrait.png"
import Sukumar from "../img/Sukumar_Portrait.png"
import Leo from "../img/Leo_Portrait.png"

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Meet The Team</title>
      </Helmet>
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
                <b>The Founders</b>
              </h3>
              <br></br>
            </div>
            <div className="col-md-6 text-center">
              <img src={Shyam} width="200"></img>
              <br></br>
              <h2>Shyam Sundar</h2>
              <b>Founder & CEO</b> <br></br> A former Fulbright Scholar, Shyam
              is a technologist who likes nothing better than solving complex
              problems.
            </div>
            <div className="col-md-6 text-center">
              <img src={Srivatsan} width="200"></img>
              <br></br>
              <h2>Srivatsan Padmanabhan</h2>
              <b>Co-Founder & COO</b> <br></br> A serial entrepreneur and
              innovative Growth Hacker, Srivatsan is a #futureofwork enthusiast.
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
              <img src={Ramesh} width="150"></img>
              <h3>Ramesh Kumar</h3>
              <b>STRATEGIC ADVISOR</b>
              <br /> This Silicon Valley veteran is a Startup Incubator and
              Growth Hacker.
            </div>

            <div className="col-md-4 text-center">
              <img src={Leo} width="150"></img>
              <h3>Leo A. Giacometto</h3>
              <b>STRATEGIC ADVISOR</b>
              <br /> The Founder and CEO of Gage international is also advisor
              to dozens of Fortune 500 companies and startups.
            </div>
            <div className="col-md-4 text-center">
              <img src={Sukumar} width="150"></img>
              <h3>Sukumar R</h3>
              <b>STRATEGIC ADVISOR</b>
              <br /> The Former CIO and Head of Innovation at Cognizant, is the
              Founder and CEO of Tiny Magiq.
            </div>
          </div>
          <br></br>
        </div>
      </Layout>
    </div>
  )
}

export default AboutUs
