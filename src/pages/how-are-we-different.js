import React from "react"
import Layout from "../components/layout"
import HeaderBanner from "../components/headerbanner"
import SEOHeader from "../components/seo-header"
export default () => (
  <div>
    <SEOHeader
      title="List Your Space | Coworking, Office Space & Meeting Rooms"
      description="We can help you find short/long term clients by listing your property on our platform. All our properties are vetted, and relevant amenities are highlighted."
      socialURL="https://assets.gofloaters.com/socialimage/how-we-are.jpg"
      pinterest="true"
    ></SEOHeader>
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
            <img
              src="https://assets.gofloaters.com/how-we-work-03.jpg"
              className="img-responsive"
              alt="How GoFloaters Work?"
            ></img>
            <br></br>
          </div>
        </div>
      </div>
      <br></br>
    </Layout>
  </div>
)
