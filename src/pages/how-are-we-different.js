import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../components/headerbanner"
import BeforeAfterSlider from "react-before-after-slider"
import HowWeWork01 from "../img/how-we-work-01.jpg"
import HowWeWork02 from "../img/how-we-work-02.jpg"
import HowWeWork03 from "../img/how-we-work-03.jpg"
import HowWeWork04 from "../img/how-we-work-04.jpg"
import HowWeWork05 from "../img/how-we-work-05.jpg"
export default () => (
  <div>
    <Helmet>
      <title>How are we different | GoFloaters</title>
      <meta name="description" content="How are we different"></meta>
      <meta name="keywords" content="gofloaters event spaces, event spaces" />
    </Helmet>
    <Layout>
      <HeaderBanner>
        <h1>How are we different</h1>
      </HeaderBanner>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table how-we-are-table table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>GoFloaters</th>
                    <th>
                      Traditional
                      <br /> coworking space
                    </th>
                    <th>
                      Business
                      <br /> centre
                    </th>
                    <th>
                      Rental
                      <br /> office
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rental cost</td>
                    <td>Low, pay as you go</td>
                    <td>High</td>
                    <td>High</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Contracts</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Multiple locations</td>
                    <td>Yes</td>
                    <td>Maybe</td>
                    <td>Maybe</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Saves travel time</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Lock-in periods?</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>
                      Managed space
                      <br /> (Plug and Play)
                    </td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>
                      No
                      <br /> (Vibrant &amp; active community)
                    </td>
                  </tr>
                  <tr>
                    <td>Community</td>
                    <td>
                      Yes
                      <br /> (Vibrant &amp; active community)
                    </td>
                    <td>Maybe</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Cool Work Environment</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Community Partner Benefits</td>
                    <td>
                      Yes
                      <br /> (1Cr worth benefits)
                    </td>
                    <td>Maybe</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12"></div>

          <div className="col-md-12 text-center">
            <br></br>
            <br></br>
            <h3>GoFloaters Office Space</h3> <br></br>
          </div>
          <div className="col-md-12 text-center">
            <img src={HowWeWork03} className="img-responsive"></img>
            <br></br>
          </div>
          <div className="col-md-12 text-center">
            <br></br>
            <h3>
              Working from home Vs <strong>GoFloaters Work Cafe</strong>
            </h3>
            <br></br>
          </div>
          <div className="col-md-6 text-center">
            <img src={HowWeWork02} className="img-responsive"></img>
            <p>Working from home</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={HowWeWork01} className="img-responsive"></img>
            <p>Working from GoFloaters Work Cafe</p>
          </div>
          <div className="col-md-12 text-center">
            <br></br> <br></br>
            <h3>
              Working from cafe Vs Working from
              <strong> GoFloaters Work Cafe</strong>
            </h3>
            <br></br>
          </div>
          <div className="col-md-6 text-center">
            <img src={HowWeWork04} className="img-responsive"></img>
            <p>Working from cafe</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={HowWeWork05} className="img-responsive"></img>
            <p>Working from GoFloaters Work Cafe</p>
          </div>
        </div>
      </div>
      <br></br>
    </Layout>
  </div>
)
