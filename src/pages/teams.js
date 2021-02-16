import React, { useEffect, createRef } from "react"
import LayoutTeam from "../components/layoutteam"
import NavigationTeam from "../components/navigationteam"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../styles/hybrid.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import TeamFormNew from "../components/TeamFormNew"
import SEOHeader from "../components/seo-header"
import Calculator from "../components/calculator/calculator"
export default function Hybrid() {
  return (
    <div>
      <SEOHeader
        title="Flexible workspaces for your team - GoFloaters for Teams"
        description="Provide flexible, plug & play office spaces for your entire team,
 across 14 cities. Made for Enterprise."
        socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces-in-bengaluru.jpg"
        pinterest="true"
      ></SEOHeader>
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
          defer
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
          defer
        ></script>

        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is GoFloaters?","acceptedAnswer":{"@type":"Answer","text":"GoFloaters is a platform that helps you find space for work and meetings that can be booked instantly."}},{"@type":"Question","name":"What should I GoFloaters for?","acceptedAnswer":{"@type":"Answer","text":"You can use GoFloaters to book work and meeting spaces near home whenever you want. Spaces can be booked by the day for desks and by the hour for meeting spaces. For situations when you have a power disruption at home or when your internet is slow at home or when you need to focus on some important deliverable or you just need a break from the work from home monotony you can check into a GoFloaters space and be at your best.\nYou can also book GoFloaters meeting spaces to sit together as a team, have your discussions, brainstorm ideas and take decisions."}},{"@type":"Question","name":"How many spaces are listed on the platform?","acceptedAnswer":{"@type":"Answer","text":"Our spaces are available on-demand and you only pay for what you use. We have 1200+ spaces across 12 cities and we are adding more every week!"}},{"@type":"Question","name":"Which cities do you serve?","acceptedAnswer":{"@type":"Answer","text":"We are currently operational in Chennai, Bangalore, Coimbatore, Hyderabad, Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Kochi, Mumbai, Pune, Trichy, Salem & Madurai. That is 15 cities. We are continuously adding new cities."}},{"@type":"Question","name":"What amenities are included?","acceptedAnswer":{"@type":"Answer","text":"High-speed WiFi, power points, a safe & comfortable atmosphere is included in our pricing. Other amenities vary by space. You can check the individual listings on our app for more details."}},{"@type":"Question","name":"What is GoFloaters for Teams","acceptedAnswer":{"@type":"Answer","text":"GoFloaters for Teams is our offering to companies that brings all the advantages of GoFloaters to employees of companies. The entire team gets one pass that gives them access to all the GoFloaters spaces. The employees are awarded credits by the employer using which the employees can book spaces without paying money. GoFloaters bills only the employer.\nThe employer gets access to a dashboard to manage the relationship with GoFloaters and to manage their employees, award credits and look at the bookings."}},{"@type":"Question","name":"How do I know whether my account has been added to the organization or not?","acceptedAnswer":{"@type":"Answer","text":"You would have received a welcome email stating that you have been added to your organization. In addition to this you can go to the My Profile section of the app. If you see a menu item called “My Organization” then you have been added to your organization’s master account."}},{"@type":"Question","name":"What are credits?","acceptedAnswer":{"@type":"Answer","text":"Credits are the internal mechanism that GoFloaters uses to help you make bookings. Your organization buys these credits from GoFloaters and they allocate these credits to its employees."}},{"@type":"Question","name":"Where can I see my credit balance?","acceptedAnswer":{"@type":"Answer","text":"You can go to the “View Account” option in the “My Profile” tab to see your credit balance."}},{"@type":"Question","name":"What is the value of 1 credit?","acceptedAnswer":{"@type":"Answer","text":"1 credit is equal to 1 rupee."}},{"@type":"Question","name":"What do I do if I have used all my credits?","acceptedAnswer":{"@type":"Answer","text":"Please get in touch with your organization’s administrator to allocate more credits to your account."}},{"@type":"Question","name":"What would happen if I have fewer credits than the space usage fee?","acceptedAnswer":{"@type":"Answer","text":"Your remaining credits would be redeemed and you would be asked to pay by the app for the remaining amount. This is a situation that you may want to avoid in order to not have to go through the process of claiming this amount from your organization. So we recommend that you get in touch with your organization’s administrator the moment your credit balance goes below 250."}},{"@type":"Question","name":"Can I transfer credits to a colleague of mine?","acceptedAnswer":{"@type":"Answer","text":"Yes, each of the team members of the organization can transfer credits between each other.\n"}},{"@type":"Question","name":"Do credits have an expiration date?","acceptedAnswer":{"@type":"Answer","text":"Credits don’t have an expiration date."}},{"@type":"Question","name":"How do I book a GoFloaters space?","acceptedAnswer":{"@type":"Answer","text":"You can book GoFloaters spaces using our web app (  https://app.gofloaters.com/ ) or mobile apps. You can download the GoFloaters app from Google PlayStore or Apple AppStore ."}},{"@type":"Question","name":"What are “Org Approved” spaces?","acceptedAnswer":{"@type":"Answer","text":"Your organization can further curate the spaces that they want their team members to use. They might have done this considering the amenities at the space, ambiance, pricing and other factors. You will see the spaces that have been approved by your organization’s admin in the “Org Approved” category.\n"}},{"@type":"Question","name":"What are “HQ Spaces”?","acceptedAnswer":{"@type":"Answer","text":"Your organization might have set up hot desks in your organization headquarters that you can book and use. GoFloaters platform also supports this kind of a space booking that is called “hoteling”. If your organization has set up this feature on GoFloaters then you will see all those shared spaces inside your organization's headquarters that are available for booking. Booking of these spaces will not use up your credits. If your organisation has not set up this feature then you will not see any spaces listed under this category."}},{"@type":"Question","name":"What are the working hours for GoFloaters spaces?","acceptedAnswer":{"@type":"Answer","text":"Each space has different operation times which is mentioned on the detail page of the individual listings. Most of the spaces are open from 9 AM to 7 PM."}},{"@type":"Question","name":"Can I bring a guest or a friend to a GoFloaters space?","acceptedAnswer":{"@type":"Answer","text":"You will have to book the space for your friend or colleague too if they want to sit along with you and work. \n"}},{"@type":"Question","name":"What is the cancellation policy?","acceptedAnswer":{"@type":"Answer","text":"Daily office spaces: If canceled 6 hours in advance, will be refunded in the form of future credits. If canceled within 6 hours, no refunds.\nMeeting spaces: If canceled 2 days in advance, will be refunded fully in the form of credits. If canceled within 2 days, no refunds."}},{"@type":"Question","name":"Why is my booking space request under process and not confirmed yet?","acceptedAnswer":{"@type":"Answer","text":"Please give us some lead time to confirm your booking. Our team will look into your booking and confirm the booking at the earliest. Depending on the volume of requests, sometimes it is possible that we have not been able to get your booking within 30 minutes. If your booking is still not confirmed after 30 mins of your booking, then kindly reach out to our team through chat. Upon booking confirmation, you will get an SMS and E-mail confirmation. The status will also reflect in the app."}},{"@type":"Question","name":"Do I pay for the bookings that I make?","acceptedAnswer":{"@type":"Answer","text":"You, as an employee, use the credits that have been allocated to you to make the bookings. Refer to the Credits section of the FAQ to understand more about credits."}}]}
    `}
        </script>
      </Helmet>
      <LayoutTeam>
        <div className="TeamBanner">
          <NavigationTeam />
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="TeamTextContent">
                  <h1>Flexible workspaces for your team</h1>
                  <p>
                    Pay-per-use coworking & meeting spaces for your team
                    starting from ₹200/day
                  </p>
                  <br></br>
                  <a
                    onClick={() => scrollTo("#signup")}
                    className="teamGetStarted"
                  >
                    Get Started
                  </a>
                  <a
                    onClick={() => scrollTo("#calculate")}
                    className="teamCalculate"
                  >
                    Calculate Savings
                  </a>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="bannerImage DesktopOnly">
            <img src="https://assets.gofloaters.com/teams/banners.png"></img>
          </div>
        </div>
        <div className="container" id="howwork">
          <div className="row teamPadding teamHowWeWork">
            <div className="col-md-12">
              <h2>How it works</h2>
            </div>
            <div className="col-md-3">
              <div className="teamPageIcon">
                <img src="https://assets.gofloaters.com/teams/usericon.svg"></img>
              </div>
              <img
                src="https://assets.gofloaters.com/teams/line-1.svg"
                className="lines"
              ></img>
              <h3>Sign up</h3>
              <p>Create an account on our platform within 3 clicks.</p>
            </div>
            <div className="col-md-3">
              <div className="teamPageIcon">
                <img src="https://assets.gofloaters.com/teams/preference.svg"></img>
              </div>
              <img
                src="https://assets.gofloaters.com/teams/line-2.svg"
                className="lines step2line"
              ></img>
              <h3>Choose Preferences</h3>
              <p>
                Add team-mates, select cities & spaces, and set your budget.
              </p>
            </div>
            <div className="col-md-3">
              <div className="teamPageIcon">
                <img src="https://assets.gofloaters.com/teams/payperuse.svg"></img>
              </div>
              <img
                src="https://assets.gofloaters.com/teams/line-3.svg"
                className="lines"
              ></img>
              <h3>Pay-per-use</h3>
              <p>Never pay fixed rent, utilities or maintenance charges.</p>
            </div>
            <div className="col-md-3">
              <div className="teamPageIcon">
                <img src="https://assets.gofloaters.com/teams/onebill.svg"></img>
              </div>
              <h3>One bill for the entire team</h3>
              <p>Pay a consolidated monthly bill only for the spaces used.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row teamTrustBy">
            <div className="col-md-12">
              <p>Trusted by</p>
            </div>
            <br></br>
            <div className="col-md-2 col-4 text-center img-teams noLeftPadding">
              <img src="https://assets.gofloaters.com/teams/decalthaonlogo.svg" alt="Decalthaon"></img>
            </div>
            <div className="col-md-2 col-4 text-center img-teams">
              <img src="https://assets.gofloaters.com/teams/indusind.png" alt="Indusind"></img>
            </div>
            <div className="col-md-2 col-4 text-center img-teams">
              <img src="https://assets.gofloaters.com/teams/nippon.png" alt="Nippon"></img>
            </div>
            <div className="col-md-2 col-4 text-center img-teams">
              <img src="https://assets.gofloaters.com/teams/homelane.png" alt="Homelane"></img>
            </div>
            <div className="col-md-2 col-4 text-center img-teams">
              <img src="https://assets.gofloaters.com/clients/shriram.png" alt="Shriram"></img>
            </div>
            <div className="col-md-2 col-4 text-center img-teams">
              <img src="https://assets.gofloaters.com/clients/notion-press.png" alt="Notion Press"></img>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row teamPadding TeamsWorkFromHome">
            <div className="col-md-12 text-center">
              <h2>Working from home or living from work?</h2>
              <br></br>
              <p className="TeamsWorkFromHomePara">
                Employees over-work and report higher levels of fatigue when
                working from home.<br></br>Burnout is a very real challenge in a
                remote-first world. Not anymore.
              </p>
            </div>
            <div className="col-md-4 text-center TeamsWorkFromHomePoint">
              <img
                src="https://assets.gofloaters.com/teams/officespacegotbetter.svg"  alt="officespacegotbetter"
                width="45"
              ></img>
              <h3>Office space got better</h3>
              <p>
                Eliminate advances, contracts, coworking rents, utililty charges
                etc with our flat pricing.
              </p>
            </div>
            <div className="col-md-4 text-center TeamsWorkFromHomePoint">
              <img
                src="https://assets.gofloaters.com/teams/countrywise.svg" alt="countrywise"
                width="45"
              ></img>
              <h3>Countrywide network</h3>
              <p>
                Get instant access to 1800+ vetted workspaces across 18 cities,
                pan-India.
              </p>
            </div>
            <div className="col-md-4 text-center TeamsWorkFromHomePoint">
              <img
                src="https://assets.gofloaters.com/teams/fullyloadedspaces.svg" alt="Fullyloadedspaces"
                width="45"
              ></img>
              <h3>Fully loaded spaces</h3>
              <p>
                Never worry about fast internet, parking, pantry, utilities and
                furniture. We cover it all.
              </p>
            </div>
            <div className="col-md-4 text-center TeamsWorkFromHomePoint">
              <img
                src="https://assets.gofloaters.com/teams/prioritysupport.svg" alt="Priority Support"
                width="45"
              ></img>
              <h3>Priority Support 24x7</h3>
              <p>
                We’re always available to ensure your team-mates have the best
                experience .
              </p>
            </div>
            <div className="col-md-4 text-center TeamsWorkFromHomePoint">
              <img
                src="https://assets.gofloaters.com/teams/onebill.svg" alt="One Bill"
                width="45"
              ></img>
              <h3>One bill for the entire team</h3>
              <p>
                Set budgets & preferences on the org or employee-level and track
                them in one place.
              </p>
            </div>
            <div className="col-md-4 text-center TeamsWorkFromHomePoint">
              <img
                src="https://assets.gofloaters.com/teams/covid.svg" alt="Covid"
                width="45"
              ></img>
              <h3>Vetted for COVID Safety </h3>
              <p>
                We make sure that partner spaces comply with stringent
                precautions against COVID-19.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#D5FAFC" }}>
          <div className="container">
            <div className="row teamPadding">
              <div className="col-md-6">
                <img
                  src="https://assets.gofloaters.com/teams/aptos.svg"  alt="Gofloaters"
                  className="aptos homePageAptos"
                ></img>
                <div className="aptostext">
                  <h2 className="h1 mob-h1">Nothing can beat a face-to-face</h2>
                  <p>Don’t take our word for it!</p>
                </div>
                <div className="teamTestimonialOne">
                  <div>
                    <img
                      src="https://assets.gofloaters.com/teams/future-impact.png" alt="Future Impact"
                      className="teamTestimoniallogo"
                      width="150"
                    ></img>
                    <div className="teamTestimonailWrapper">
                      <img
                        src="https://assets.gofloaters.com/teams/aptos.svg"  alt="Gofloaters"
                        width="20"
                        className="SmallaAptos"
                      ></img>
                      <div className="teamTestimonailContent">
                        <p>
                          Gives me the freedom to set up my office across cities
                        </p>
                        <span>
                          <b>Vinay Pushpakaran</b>
                          <br />
                          Future Impact Learning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="teamTestimonialTwo">
                  <div>
                    <img
                      src="https://assets.gofloaters.com/teams/spi-cinemas.png"
                      className="teamTestimoniallogo" alt="SPI Cinemas"
                      width="150"
                    ></img>
                    <div className="teamTestimonailWrapper">
                      <img
                        src="https://assets.gofloaters.com/teams/aptos.svg"  alt="SmallaAptos"
                        width="20"
                        className="SmallaAptos"
                      ></img>
                      <div className="teamTestimonailContent">
                        <p>
                          GoFloaters been a brilliant tool allowing us to offer
                          managed workplace flexibility.
                        </p>
                        <span>
                          <b>Ratheesh Krishnan</b>
                          <br />
                          Head of New Initiatives, SPI Cinemas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="teamTestimonialThree">
                  <div>
                    <img
                      src="https://assets.gofloaters.com/teams/effilor.webp" alt="effilor"
                      className="teamTestimoniallogo"
                      width="120"
                    ></img>
                    <div className="teamTestimonailWrapper">
                      <img
                        src="https://assets.gofloaters.com/teams/aptos.svg" alt="SmallaAptos"
                        width="20"
                        className="SmallaAptos"
                      ></img>
                      <div className="teamTestimonailContent">
                        <p>My go-to platform for all our external meetings</p>
                        <span>
                          <b>Balesh Raghurajan</b>
                          <br />
                          Effilor Consulting Services
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row teamPadding">
            <div className="col-md-6 teamFormWorkSpace">
              <h2>Remote work ≠ Working from home</h2>
              <p>
                Let’s face it. Working from home is stressful, distracting and
                lonely for most people. Sure, things get done. But no tool can
                ever replace the spontaneity and collaboration that happens when
                a team sits together.
                <br />
              </p>
              <br />
            </div>
            <div className="col-md-6">
              <div className="row">
                <br></br>
                <div className="col-md-6 TeamsSellingPoint">
                  <div className="points">
                    <div className="row">
                      <div className="col-md-3 col-2 text-center">
                        <img src="https://assets.gofloaters.com/teams/1200spaces.svg"  alt="1200 Spaces"></img>
                      </div>
                      <div className="col-md-9 col-10">
                        <h4>1800+</h4>
                        <p>Vetted Workspaces</p>
                      </div>
                    </div>
                  </div>
                  <div className="points">
                    <div className="row">
                      <div className="col-md-3 col-2 text-center">
                        <img src="https://assets.gofloaters.com/teams/500booking.svg"  alt="500 Booking"></img>
                      </div>
                      <div className="col-md-9 col-10">
                        <h4>500+</h4>
                        <p>Bookings per day</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 TeamsSellingPoint">
                  <div className="points">
                    <div className="row">
                      <div className="col-md-3 col-2 text-center">
                        <img src="https://assets.gofloaters.com/teams/14cities.svg"  alt="14 Cities"></img>
                      </div>
                      <div className="col-md-9 col-10">
                        <h4>18</h4>
                        <p>Cities in India</p>
                      </div>
                    </div>
                  </div>
                  <div className="points">
                    <div className="row">
                      <div className="col-md-3 col-2 text-center">
                        <img src="https://assets.gofloaters.com/teams/15000customers.svg" alt="15000 Customers"></img>
                      </div>
                      <div className="col-md-9 col-10">
                        <h4>15,000+</h4>
                        <p>Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row teamPadding">
            <div className="col-md-6 text-center">
              <img
                src="https://assets.gofloaters.com/teams/indiamap.png"  alt="Indian Map"
                className="img-responsive"
              ></img>
            </div>
            <div className="col-md-5 teamFormWorkSpace SupoD pad120">
              <h2>
                That’s why we built the largest workspace network in the country
              </h2>
              <p>
                Provide flexible, plug & play workspaces for your entire team,
                across 18 cities, on-demand. Track spend in real-time and pay a
                consolidated monthly bill. No contracts involved.
              </p>
              <a
                onClick={() => scrollTo("#signup")}
                style={{ color: "#8C30F5" }}
                className=""
              >
                Made for Enterprise{" "}
                <img
                  src="https://assets.gofloaters.com/teams/arrow.svg" alt="Gofloaters Arrow"
                  width="20"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#F6F9FF" }}>
          <div id="calculate" className="teamPadding">
            <div className="container">
              <Calculator />
            </div>
          </div>
          <div id="signup">
            <div className="container">
              <div className="row teamPadding">
                <div className="col-md-6 teamForm ">
                  <h2>Talk to us</h2>
                  <p>Never sign an office contract again. </p>
                </div>
              </div>
              <div className="row teamMinPadding teamForm">
                <TeamFormNew />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row teamPadding">
              <div className="col-md-4">
                <div className="teamTestimonailCard">
                  <div className="textWrapper">
                    <h4>Re-inventing coworking</h4>
                    <p>
                      GoFloaters has doubled down on serving India’s 15 million
                      freelancers, and creating a co-work ecosystem powerfully
                      returning co-working to its initial vision
                    </p>
                  </div>
                  <div className="TeamslogoWrapper">
                    <img
                      src="https://assets.gofloaters.com/teams/forbes.png" alt="Forbes"
                      className="forbes"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="teamTestimonailCard">
                  <div className="textWrapper">
                    <h4>Uber for the Gig Economy</h4>
                    <p>
                      Discovering a property that is most suitable - and
                      affordable - can often be tedious. But, we found a fix in
                      the GoFloaters app.
                    </p>
                  </div>
                  <div className="TeamslogoWrapper">
                    <img
                      src="https://assets.gofloaters.com/teams/yourstory.png" alt="Your Story"
                      className="yourstory"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="teamTestimonailCard">
                  <div className="textWrapper">
                    <h4>A sustainable work model</h4>
                    <p>
                      Pay-as-you-use service app that tech start ups,
                      freelancers, artists, hobbyists and sales and enterprise
                      teams can use,
                    </p>
                  </div>
                  <div className="TeamslogoWrapper">
                    <img
                      src="https://assets.gofloaters.com/teams/the-hindu.png" alt="The Hindu"
                      className="hindus"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 padding60">
              <br></br>
              <h2 style={{ fontWeight: "600" }}>GoFloaters for Teams FAQ's</h2>
              <br></br>
            </div>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#price">
                  Credits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu2">
                  Booking
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="home" className="container tab-pane active">
                {" "}
                <br />
                <br />
                <br />
                <p style={{ textAlign: "justify" }}>
                  <strong>What is GoFloaters?</strong>
                  <br />
                  GoFloaters is a platform that helps you find space for work
                  and meetings that can be booked instantly.
                  <br />
                  <br />
                  <strong>What should I GoFloaters for?</strong>
                  <br />
                  You can use GoFloaters to book work and meeting spaces near
                  home whenever you want. Spaces can be booked by the day for
                  desks and by the hour for meeting spaces. For situations when
                  you have a power disruption at home or when your internet is
                  slow at home or when you need to focus on some important
                  deliverable or you just need a break from the work from home
                  monotony you can check into a GoFloaters space and be at your
                  best.
                  <br />
                  You can also book GoFloaters meeting spaces to sit together as
                  a team, have your discussions, brainstorm ideas and take
                  decisions.
                  <br />
                  <br />
                  <strong>How many spaces are listed on the platform?</strong>
                  <br />
                  Our spaces are available on-demand and you only pay for what
                  you use. We have 1200+ spaces across 12 cities and we are
                  adding more every week!
                  <br />
                  <br />
                  <strong>Which cities do you serve?</strong>
                  <br />
                  We are currently operational in Chennai, Bangalore,
                  Coimbatore, Hyderabad, Delhi, Noida, Gurugram, Ghaziabad,
                  Faridabad, Kochi, Mumbai, Pune, Trichy, Salem &amp; Madurai.
                  That is 15 cities. We are continuously adding new cities.
                  <br />
                  <br />
                  <strong>What amenities are included?</strong>
                  <br />
                  High-speed WiFi, power points, a safe &amp; comfortable
                  atmosphere is included in our pricing. Other amenities vary by
                  space. You can check the individual listings on our app for
                  more details.
                  <br />
                  <br />
                  <strong>What is GoFloaters for Teams</strong>
                  <br />
                  GoFloaters for Teams is our offering to companies that brings
                  all the advantages of GoFloaters to employees of companies.
                  The entire team gets one pass that gives them access to all
                  the GoFloaters spaces. The employees are awarded credits by
                  the employer using which the employees can book spaces without
                  paying money. GoFloaters bills only the employer.
                  <br />
                  The employer gets access to a dashboard to manage the
                  relationship with GoFloaters and to manage their employees,
                  award credits and look at the bookings.
                  <br />
                  <br />
                  <strong>
                    How do I know whether my account has been added to the
                    organization or not?
                  </strong>
                  <br />
                  You would have received a welcome email stating that you have
                  been added to your organization. In addition to this you can
                  go to the My Profile section of the app. If you see a menu
                  item called &ldquo;My Organization&rdquo; then you have been
                  added to your organization&rsquo;s master account.
                  <br />
                  <br />
                </p>
                <p> </p>
                <p> </p>
              </div>
              <div id="price" className="container tab-pane">
                {" "}
                <br />
                <br />
                <br />
                <p style={{ textAlign: "justify" }}>
                  <strong>What are credits?</strong>
                  <br />
                  Credits are the internal mechanism that GoFloaters uses to
                  help you make bookings. Your organization buys these credits
                  from GoFloaters and they allocate these credits to its
                  employees.
                  <br />
                  <br />
                  <strong>Where can I see my credit balance?</strong>
                  <br />
                  You can go to the &ldquo;View Account&rdquo; option in the
                  &ldquo;My Profile&rdquo; tab to see your credit balance.
                  <br />
                  <br />
                  <strong>What is the value of 1 credit?</strong>
                  <br />
                  1 credit is equal to 1 rupee.
                  <br />
                  <br />
                  <strong>What do I do if I have used all my credits?</strong>
                  <br />
                  Please get in touch with your organization&rsquo;s
                  administrator to allocate more credits to your account.
                  <br />
                  <br />
                  <strong>
                    What would happen if I have fewer credits than the space
                    usage fee?
                  </strong>
                  <br />
                  Your remaining credits would be redeemed and you would be
                  asked to pay by the app for the remaining amount. This is a
                  situation that you may want to avoid in order to not have to
                  go through the process of claiming this amount from your
                  organization. So we recommend that you get in touch with your
                  organization&rsquo;s administrator the moment your credit
                  balance goes below 250.
                  <br />
                  <br />
                  <strong>
                    Can I transfer credits to a colleague of mine?
                  </strong>
                  <br />
                  Yes, each of the team members of the organization can transfer
                  credits between each other.
                  <br />
                  <br />
                  <strong>Do credits have an expiration date?</strong>
                  <br />
                  Credits don&rsquo;t have an expiration date. <br />
                  <br />
                </p>
                <p> </p>
                <p> </p>
              </div>
              <div id="menu2" className="container tab-pane fade">
                {" "}
                <br />
                <br />
                <p style={{ textAlign: "justify" }}>
                  <strong>How do I book a GoFloaters space?</strong>
                  <br />
                  You can book GoFloaters spaces using our{" "}
                  <a
                    href="https://app.gofloaters.com/"
                    target="_blank"
                    rel="nofollow"
                    title="Gofloater Web App"
                  >
                    web app
                  </a>{" "}
                  or mobile apps. You can download the GoFloaters app from{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gofloaters.app&hl=en_IN"
                    target="_blank"
                    rel="nofollow" title="Gofloater Google Play Store"
                  >
                    Google PlayStore
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://apps.apple.com/in/app/gofloaters/id1446010118"
                    target="_blank"
                    rel="nofollow" title="Gofloater Apple Store"
                  >
                    Apple AppStore
                  </a>
                  .
                  <br />
                  <br />
                  <strong>What are &ldquo;Org Approved&rdquo; spaces?</strong>
                  <br />
                  Your organization can further curate the spaces that they want
                  their team members to use. They might have done this
                  considering the amenities at the space, ambiance, pricing and
                  other factors. You will see the spaces that have been approved
                  by your organization&rsquo;s admin in the &ldquo;Org
                  Approved&rdquo; category.
                  <br />
                  <br />
                  <strong>What are &ldquo;HQ Spaces&rdquo;?</strong>
                  <br />
                  Your organization might have set up hot desks in your
                  organization headquarters that you can book and use.
                  GoFloaters platform also supports this kind of a space booking
                  that is called &ldquo;hoteling&rdquo;. If your organization
                  has set up this feature on GoFloaters then you will see all
                  those shared spaces inside your organization's headquarters
                  that are available for booking. Booking of these spaces will
                  not use up your credits. If your organisation has not set up
                  this feature then you will not see any spaces listed under
                  this category.
                  <br />
                  <br />
                  <strong>
                    What are the working hours for GoFloaters spaces?
                  </strong>
                  <br />
                  Each space has different operation times which is mentioned on
                  the detail page of the individual listings. Most of the spaces
                  are open from 9 AM to 7 PM.
                  <br />
                  <br />
                  <strong>
                    Can I bring a guest or a friend to a GoFloaters space?
                  </strong>
                  <br />
                  You will have to book the space for your friend or colleague
                  too if they want to sit along with you and work.&nbsp;
                  <br />
                  <br />
                  <strong>What is the cancellation policy?</strong>
                  <br />
                  Daily office spaces: If canceled 6 hours in advance, will be
                  refunded in the form of future credits. If canceled within 6
                  hours, no refunds.
                  <br />
                  Meeting spaces: If canceled 2 days in advance, will be
                  refunded fully in the form of credits. If canceled within 2
                  days, no refunds.
                  <br />
                  <br />
                  <strong>
                    Why is my booking space request under process and not
                    confirmed yet?
                  </strong>
                  <br />
                  Please give us some lead time to confirm your booking. Our
                  team will look into your booking and confirm the booking at
                  the earliest. Depending on the volume of requests, sometimes
                  it is possible that we have not been able to get your booking
                  within 30 minutes. If your booking is still not confirmed
                  after 30 mins of your booking, then kindly reach out to our
                  team through chat. Upon booking confirmation, you will get an
                  SMS and E-mail confirmation. The status will also reflect in
                  the app.
                  <br />
                  <br />
                  <strong>Do I pay for the bookings that I make?</strong>
                  <br />
                  You, as an employee, use the credits that have been allocated
                  to you to make the bookings. Refer to the Credits section of
                  the FAQ to understand more about credits. <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutTeam>
    </div>
  )
}
