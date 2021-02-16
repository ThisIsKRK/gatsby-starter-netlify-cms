import React, { useEffect, createRef } from "react"
import { Helmet } from "react-helmet"
import LayoutTeam from "../components/layoutteam"
import NavigationHome from "../components/navigationnewhome"
import { Link } from "gatsby"
import GofloaterSearchForm from "../components/search/gofloaterssearch"
import "../styles/hybrid.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import SimpleSlider from "../components/slider"
import SEOHeader from "../components/seo-header"
import teamLogo from "../img/TeamLogo.svg"
import lottie from "lottie-web"
import animation from "../animations/newhomeanimation.json"
export default function Home() {
  let animationContainer = createRef()
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    })
    return () => {
      animationContainer.current = animationContainer.current || {}
      anim.destroy(animationContainer.current)
    } // optional clean up for unmounting
  }, [animationContainer])
  return (
    <div>
      <SEOHeader
        title="GoFloaters: Book Coworking Spaces for work and meetings"
        description="Looking for coworking, shared office, or meeting space? Book spaces by the hour or by the day or monthly. Book instantly ⚡ from a range of workspaces across 18+ cities and save at least 25%."
        socialURL="https://assets.gofloaters.com/socialimage/homepage.jpg"
        pinterest="true"
      ></SEOHeader>
      <Helmet>
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org/",
          "@type": "Organization",
          "name": "GoFloaters",
          "url":"https://gofloaters.com/",
          "logo":"https://app.gofloaters.com/assets/imgs/gofloaters_logo.png",
          "sameAs":["https://www.facebook.com/gofloatersindia", "https://www.instagram.com/gofloatersapp", "https://twitter.com/gofloaters", "https://www.youtube.com/channel/UCy_PdgFKsHuZY_hZ2r8gQvg","https://www.linkedin.com/company/gofloaters/"],
          "contactPoint":{
            "@type":"ContactPoint",
            "telephone":"+91 7338 7308 00",
            "contactType":"Customer Service"
          }
        }`}
        </script>
      </Helmet>
      <LayoutTeam>
        <div className="GofloaterHome" id="hometop">
          <div className="GofloaterHomeSearch">
            <NavigationHome />
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 GofloaterSearchForm">
                  <h1>Find a coworking space near you</h1>
                  <GofloaterSearchForm />
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid" style={{ padding: "0px" }}>
            <div className="row">
              <div className="col-md-3 col-3 DesktopOnly">
                <img
                  src="https://assets.gofloaters.com/teams/newhome/trust-left.png"
                  className="gofloaterhomeleft"
                ></img>
              </div>
              <div className="col-md-6 gofloatershometext gofloatershometrusttext">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12 nocolpadding">
                      <p>Trusted by 10,000+ customers including</p>
                    </div>
                    <br></br>
                    <div className="col-md-2 col-4 text-center img-hteams noLeftPadding">
                      <img src="https://assets.gofloaters.com/teams/decalthaonlogo.svg" alt="Decalthaon"></img>
                    </div>
                    <div className="col-md-2 col-4 text-center img-hteams">
                      <img src="https://assets.gofloaters.com/teams/indusind.png" alt="Indusind"></img>
                    </div>
                    <div className="col-md-2 col-4 text-center img-hteams">
                      <img src="https://assets.gofloaters.com/teams/nippon.png" alt="Nippon"></img>
                    </div>
                    <div className="col-md-2 col-4 text-center img-hteams">
                      <img src="https://assets.gofloaters.com/teams/homelane.png" alt="Homelane"></img>
                    </div>
                    <div className="col-md-2 col-4 text-center img-hteams">
                      <img src="https://assets.gofloaters.com/clients/shriram.png" alt="Shriram"></img>
                    </div>
                    <div className="col-md-2 col-4 text-center img-hteams">
                      <img src="https://assets.gofloaters.com/clients/notion-press.png" alt="Notion Press"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 MobileOnly">
                <img
                  src="https://assets.gofloaters.com/teams/newhome/trust-left.png" alt="Trust Left"
                  className="gofloaterhomeleft"
                ></img>
              </div>
              <div className="col-md-3 col-6 text-right">
                <img
                  src="https://assets.gofloaters.com/teams/newhome/trust-right.png"  alt="Trust Right"
                  className="gofloaterhomeright"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="howwork">
          <div className="row teamPadding GofloaterHomeCoworking">
            <div className="col-md-6 DesktopOnly">
              <img
                src="https://assets.gofloaters.com/teams/newhome/coworking-spaces2.jpg"
                className="img-responsive" alt="Gofloaters Teams"
              ></img>
            </div>
            <div className="col-md-6">
              <h2>Book a coworking space</h2>
              <p>
                GoFloaters helps you find and book a coworking space near you
                for meetings and work.
              </p>
              <div className="points">
                <div className="row">
                  <div className="col-md-2 col-3 text-center">
                    <img
                      src="https://assets.gofloaters.com/teams/newhome/pay-per-use.svg"
                      alt="Pay per Use"
                    ></img>
                  </div>
                  <div className="col-md-10 col-9">
                    <h4>Pay-per-use</h4>
                    <p>
                      No contracts, or commitments.<br></br>Book for an hour or
                      a day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="points">
                <div className="row">
                  <div className="col-md-2 col-3 text-center">
                    <img
                      src="https://assets.gofloaters.com/teams/newhome/plug-and-play.svg"
                      alt="plug and play"
                    ></img>
                  </div>
                  <div className="col-md-10 col-9">
                    <h4>Plug and play</h4>
                    <p>
                      Prices inclusive of all amenities<br></br>Prices starting
                      ₹200/day
                    </p>
                  </div>
                </div>
              </div>

              <a
                onClick={() => scrollTo("#hometop")}
                className=" searchWorkspace"
              >
                Search Workspaces
              </a>
            </div>
          </div>
        </div>
        <div className="container" id="howwork">
          <div className="row teamPadding gofloaterHomeNumber teamHowWeWork">
            <div className="col-md-3">
              <h3>18</h3>
              <p>Cities we operate in</p>
            </div>
            <div className="col-md-3">
              <h3>1800+</h3>
              <p>Curated Workspaces</p>
            </div>
            <div className="col-md-3">
              <h3>20,000+</h3>
              <p>Customers booking monthly</p>
            </div>
            <div className="col-md-3">
              <h3>4.6</h3>
              <p>Average rating on App Store</p>
            </div>
            {/* <div className="col-md-4">
              <h3>₹200</h3>
              <p>Starting price per day</p>
            </div>*/}
          </div>
        </div>
        <div style={{ background: "#F6F9FF" }} id="signup">
          <div className="container">
            <div className="row teamPadding">
              <div className="col-md-12 text-center gofloaterHomenothing">
                <h2>Nothing can beat a face-to-face</h2>
                <p>Don’t take our word for it</p>
                <br></br>
              </div>
              <div className="col-md-4">
                <div className="HomeTestimonailCard">
                  <div className="hometextWrapper">
                    <h4>Freedom to set up my office</h4>
                    <p>
                      Gives me the freedom to set up my office across cities
                    </p>
                  </div>
                  <span className="MarkersHomeTestimonailCard"></span>
                  <div className="homelogoWrapper">
                    <img
                      src="https://assets.gofloaters.com/teams/newhome/vinay-004.jpg"
                      alt="Vinay Pushpakaran"
                    ></img>
                    <p className="text-center">Vinay Pushpakaran</p>
                    <span>Future Impact Learning</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="HomeTestimonailCard">
                  <div className="hometextWrapper">
                    <h4>Plug and Play</h4>
                    <p>Never have to worry about Internet or Plug Points.</p>
                  </div>
                  <span className="MarkersHomeTestimonailCard"></span>
                  <div className="homelogoWrapper">
                    <img
                      src="https://assets.gofloaters.com/teams/newhome/arpita-002.jpg"
                      alt="Arpitha Ramani"
                    ></img>
                    <p className="text-center">Arpitha Ramani </p>
                    <span>GE Healthcare</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="HomeTestimonailCard">
                  <div className="hometextWrapper">
                    <h4>External meeting made easy</h4>
                    <p>My go-to platform for all our external meetings</p>
                  </div>
                  <span className="MarkersHomeTestimonailCard"></span>
                  <div className="homelogoWrapper">
                    <img
                      src="https://assets.gofloaters.com/teams/newhome/balesh-001.jpg"
                      alt="Balesh Raghurajan"
                    ></img>
                    <p className="text-center">Balesh Raghurajan</p>
                    <span>Effilor Consulting Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="TeamHomeBanner">
          <div className="container">
            <div className="row teamPadding">
              <div className="col-md-4 TeamHomeBannerleft">
                <h2 style={{ fontWeight: "bold", lineHeight: "1.3" }}>
                  Introducing<br></br>GoFloaters for Teams
                </h2>
                <br></br>
                <img src={teamLogo} width="250"></img>
                <br></br> <br></br>
                <p>
                  Save more than 60% from your current office rental contract by
                  offering pay-per-use office space for your remote team.
                </p>
                <Link to="/teams/" className="searchWorkspace ">
                  Show me how
                </Link>
                <br></br>
                <br></br>
              </div>
              <div className="col-md-6">
                <div className="GoflaoterHomeRight">
                  <div className="row">
                    <div className="col-md-8">
                      <h4>SIGN UP</h4>
                      <p>
                        Sign up on our platform within 3 minutes. No credit card
                        required.
                      </p>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-md-8">
                      <h4>CHOOSE WORKSPACES</h4>
                      <p>
                        Choose your workspaces among 1500+ high quality
                        workspaces across the country.
                      </p>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-md-8">
                      <h4>PAY-PER USE</h4>
                      <p>
                        Set your monthly budget and pay only when your employees
                        use our spaces. No contracts or upfront payments
                        involved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 introImage">
                <div className="animation-container" ref={animationContainer} />
              </div>
            </div>
          </div>
        </div>
        <div className="" id="unlockDeals">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Unlock exclusive deals when you sign up</h2>
                <p>
                  We offer ₹1.5 Crores in free benefits and discounts for
                  eligible startups* through our partner program
                </p>
              </div>
            </div>
            <div className="row MobileOnly">
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/todoist.svg"
                    className="height"
                    alt="todoist"
                  ></img>
                  <p>1 free year of Business plan</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/miro.svg"
                    className="width"
                    alt="miro"
                  ></img>
                  <p>$1000 in credits</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/aws.png"
                    className="height"
                    alt="aws"
                  ></img>
                  <p>$1000 credit for 2 years</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/razorpay.png"
                    className="width"
                    alt="razorpay"
                  ></img>
                  <p>Zero transaction fee upto ₹4L</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/hubspot.png"
                    className="height"
                    alt="hubspot"
                  ></img>
                  <p>90% off on yearly plans</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/udemy.png"
                    className="height"
                    alt="udemy"
                  ></img>
                  <p>Upto 95% off on courses</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/segment.svg"
                    className="height"
                    alt="segment"
                  ></img>
                  <p>
                    $50,000 in credits + discounts on 35+ products worth $1M
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/typeform.png"
                    className="height"
                    alt="typeform"
                  ></img>
                  <p>50% of monthly & yearly plans</p>
                </div>
              </div>
              <div className="col-6">
                <div className="partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/kaleyra.png"
                    className="height"
                    alt="kaleyra"
                  ></img>
                  <p>₹8000 credit for 1 year</p>
                </div>
              </div>
            </div>
            <div className="row gofloaterHomePartner DesktopOnly">
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <div className="column1 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/todoist.svg"
                    className="height"
                    alt="todoist"
                  ></img>
                  <p>1 free year of Business plan</p>
                </div>
              </div>
              <div className="col-md-2 columns2">
                <div className=" column2 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/miro.svg"
                    className="width"
                    alt="miro"
                  ></img>
                  <p>$1000 in credits</p>
                </div>
                <div className="column2 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/aws.png" alt="aws"
                    className="height"
                  ></img>
                  <p>$1000 credit for 2 years</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="column3 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/razorpay.png" 
                    className="width"
                    alt="razorpay"
                  ></img>
                  <p>Zero transaction fee upto ₹4L</p>
                </div>
                <div className="column3 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/hubspot.png"
                    className="height"
                    alt="hubspot"
                  ></img>
                  <p>90% off on yearly plans</p>
                </div>
                <div className="column3 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/udemy.png"
                    className="height"
                    alt="udemy"
                  ></img>
                  <p>Upto 95% off on courses</p>
                </div>
              </div>
              <div className="col-md-2 columns2">
                <div className=" column4 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/segment.svg"
                    className="height"
                    alt="segment"
                  ></img>
                  <p>
                    $50,000 in credits + discounts on 35+ products worth $1M
                  </p>
                </div>
                <div className="column4 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/typeform.png"
                    className="height"
                    alt="typeform"
                  ></img>
                  <p>50% of monthly & yearly plans</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="column5 partnerOffer">
                  <img
                    src="https://assets.gofloaters.com/teams/newhome/logos/kaleyra.png"
                    className="height"
                    alt="kaleyra"
                  ></img>
                  <p>₹8000 credit for 1 year</p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>&nbsp;</p>
                <Link
                  to="/our-community-perks/"
                  title="Our Community Perks"
                  style={{ color: "#303030", fontWeight: "bold" }}
                >
                  ...and many more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="gofloaterHomeApp">
          <div className="container">
            <div className="row ">
              <div className="gofloaterHomeAppBackground">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/gofloaterscomprod.appspot.com/o/home_page_animation.gif?alt=media&token=fa657a52-51f8-4928-84de-ec1baea133af"
                  className="appImage"
                ></img>
                <div className="col-md-6 "></div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                  <br></br>
                  <h2>Download the app</h2>
                  <p>
                    We’re consistently rated above 4.5 stars on Play Store & App
                    Store for quality workspaces and proactive customer support.
                    See for yourself, download now.
                  </p>
                  <br></br>
                  <br></br>
                  <p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.gofloaters.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dhomepage%26utm_term%3Dcoworking%26utm_content%3Dhowitworks%26utm_campaign%3Dwebsite"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://assets.gofloaters.com/google-play-gofloaters-download.png"
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
                        src="https://assets.gofloaters.com/gofloater-apple-store.png"
                        alt="Gofloaters Apple Store"
                        width="150"
                      />{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container padding-60">
          <div className="row homepage">
            <div className="col-md-12 text-center">
              <h2 className="h1">Featured in</h2>
            </div>

            <div className="col-md-12">
              <SimpleSlider></SimpleSlider>
            </div>
          </div>
        </div>
      </LayoutTeam>
    </div>
  )
}
