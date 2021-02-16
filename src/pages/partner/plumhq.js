import React from "react"
import Layout from "../../components/layout"
import arrow from "../../img/arrow-icon.png"
import { Helmet } from "react-helmet"
import HeaderBanner from "../../components/headerbanner.js"
import { Link } from "gatsby"
const PlumHQ = () => {
  return (
    <div>
      <Helmet>
        <title>Plum - Partner Perks of GoFloaters</title>
      </Helmet>
      <Layout>
        <HeaderBanner>
          <h1>Plum</h1>
          <div className="col-md-12 breadcrumb-container text-center">
            <p>
              <Link to="/our-community-perks">Community Benefits</Link> / Plum
            </p>
          </div>
        </HeaderBanner>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src="https://assets.gofloaters.com/partner/plumhq.png"
                alt="Plum"
              ></img>
            </div>
            <div className="col-md-9">
              <p>
                Plum is a comprehensive employee benefits platform for startups.
                Plum provides premium health insurance including complete
                medical, dental, vision, physical &amp; mental wellness benefits
                to your team. Additionally, Plum makes managing health benefits
                and administering claims hassle-free through a real-time,
                simplified dashboard experience.
              </p>
              <p>
                <strong>Offer brief:</strong>{" "}
              </p>
              <p>
                1. Plum is waiving platform fees for the first year for all
                companies with less than 500 employees at GoFloaters. These
                benefits total up to ₹50,000 annually.
                <br /> 2. Free OPD consultations accessible to all GoFloaters
                companies taking up their group medical cover through Plum.
                <br />
                3. Enroll a team as lean as 5 employees with the flexibility of
                paying per month through Plum One.
              </p>
              <p>
                <strong>Benefits:</strong>
              </p>
              <p>
                <strong>COVID-19 Treatment Coverage</strong>
                <br />A must-have in the present times, with Plum health
                insurance plans, your employees get coverage of treatment costs
                for Coronavirus. This includes hospitalization bills, pre, and
                post-hospitalization costs, quarantine costs, and even a free
                doctor consultation.
              </p>
              <p>
                <strong>Pre-Existing Disease Coverage</strong>
                <br />
                Most insurance providers keep a window of 2-4 years for
                Pre-Existing Diseases(PED) like Diabetes, Cataract, Epilepsy,
                Cancer, Sleep Apnea, etc. With Plum, your employees get PED
                coverage from Day 1.
              </p>
              <p>
                <strong>Maternity and Newborn Cover</strong>
                <br />
                Younger members of your workforce are often worried about the
                financial strain that comes with the birth of a child. We take
                this away by covering all maternity and newborn care costs from
                the day the policy is issued.
              </p>
              <p>
                <strong>Cover For Dependents</strong>
                <br />
                We offer plans to include the spouse, children, and even parents
                of your employees depending on your budget. Every member of the
                family added to the cover enjoys the same benefits as the
                employee.
              </p>
              <p>
                <strong>Zero Waiting Periods</strong>
                <br />
                Plum Health Insurance Cover begins as soon as you buy the
                policy, making claim benefits possible from the very first day.
              </p>
              <p>
                <strong>No Hidden Terms and Conditions</strong>
                <br />
                No hidden room rents or ICU caps. Plum is transparent about
                what&rsquo;s covered and what&rsquo;s not through a simplified
                user dashboard.
              </p>
              <p>
                <strong>Priority Claims</strong>
                <br />
                Your employees can log into their dashboard or email Plum and
                initiate claims in less than 5 mins. Our Customer Success
                experts then help your employees from end-to-end, coordinate
                with insurance partners or network hospitals, and take the worry
                away from your employees.
              </p>
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
export default PlumHQ
