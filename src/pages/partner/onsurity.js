import React from "react"
import Layout from "../../components/layout"
import { Helmet } from "react-helmet"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const Onsurity = () => {
  return (
    <div>
      <Helmet>
        <title>Onsurity - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Onsurity</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> /
              Onsurity
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/onsurity.png"
                alt="Docsend"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                Onsurity is India's leading employee healthcare partner of
                startups, emerging businesses and SMEs. They are bringing your
                teams all-inclusive, complete healthcare with group insurance
                benefits, telehealth facilities, fitness and wellness benefits
                and much more on a single platform.{" "}
              </p>
              <p>
                <strong>Offer brief:</strong> GoFloaters members get 15% off on
                first year subscription on Onsurity plans.
                <br />
              </p>
              <p>
                <strong>Benefits for Employers</strong>
              </p>
              <ul>
                <li>Plans starting at Rs.145/employee/month</li>
                <li>Monthly payments that don't eat up your working capital</li>
                <li>Flexible digital dashboard for easy employee management</li>
                <li>
                  Healthcare membershhip for temporary and permanent employees
                  (freelancers, contractual, part-time etc.)
                </li>
              </ul>
              <p>
                <strong>Benefits for Employees</strong>
              </p>
              <ul>
                <li>
                  {" "}
                  Discounts on tele-consulting, online medicines orders, and
                  health check-ups
                </li>
                <li> Assistance for claims support during hospitalization</li>
                <li> Group medical insurance benefits</li>
                <li> One app for all healthcare needs</li>
                <li> Healthcare membership extension to family</li>
              </ul>
              <p>
                <br />
                If you are part of our community and wish to avail this benefit
                <br />
                <br />
                <a
                  href="https://gofloatersscdd.typeform.com/to/vwAJwR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  style={{
                    fontSize: "0.9rem",
                    color: "#fff",
                    background: "#4f9fc8",
                    borderRadius: "5px",
                    padding: "7px 15px",
                    marginTop: "10px",
                  }}
                >
                  Claim Now{" "}
                  <img
                    src="https://assets.gofloaters.com/arrow-icon.png"
                    alt="arrow"
                    style={{ width: "20px", paddingBottom: "3px" }}
                  />
                </a>
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Onsurity
