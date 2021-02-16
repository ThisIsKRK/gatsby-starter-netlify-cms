import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchForm from "../components/search/search"
import HeaderBanner from "../components/headerbanner"
import MeetingLocationSwitch from "../components/meetinglocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql, Link } from "gatsby"
import SEOHeader from "../components/seo-header"
const PuneMeetingSpaces = props => {
  const [spaceFilter, setspaceFilter] = useState("All")
  const [spaceSize, setspaceSize] = useState([])
  const [ProjectFilter, setProjectFilter] = useState("false")
  const [CoffeeTeaFilter, setCoffeeTeaFilter] = useState("false")
  const [LessFiveFilter, setLessFiveFilter] = useState("false")
  const [SixtoFifteenFilter, setSixtoFifteenFilter] = useState("false")
  const [MorethanFiftyFilter, setMorethanFiftyFilter] = useState("false")

  function CoffeeTeaCheck() {
    if (CoffeeTeaFilter === "true") {
      setCoffeeTeaFilter("false")
    } else {
      setCoffeeTeaFilter("true")
      setspaceFilter("Coffee/Tea")
    }
  }
  function ProjectCheck() {
    if (ProjectFilter === "true") {
      setProjectFilter("false")
    } else {
      setProjectFilter("true")
      setspaceFilter("Projector")
    }
  }
  function LessFiveCheck() {
    if (LessFiveFilter === "true") {
      setLessFiveFilter("false")
    } else {
      setLessFiveFilter("true")
      setspaceFilter("Less Than Five")
    }
  }
  function SixtoFifteenCheck() {
    if (SixtoFifteenFilter === "true") {
      setSixtoFifteenFilter("false")
    } else {
      setSixtoFifteenFilter("true")
      setspaceFilter("Five to Fifteen")
    }
  }
  function MorethanFiftyCheck() {
    if (MorethanFiftyFilter === "true") {
      setMorethanFiftyFilter("false")
    } else {
      setMorethanFiftyFilter("true")
      setspaceFilter("More than Fifteen")
    }
  }
  var projectquery,
    coffeeteaquery,
    fiveseatquery,
    sixtofifteenquery,
    morethanfiftyquery,
    fivefiftyquery,
    tvquery = " "

  if (ProjectFilter === "true") {
    projectquery = "Projector"
    tvquery = "Television"
  } else {
    projectquery = " "
    tvquery = " "
  }
  if (CoffeeTeaFilter === "true") {
    coffeeteaquery = "Coffee/Tea"
  } else {
    coffeeteaquery = " "
  }
  if (LessFiveFilter === "true") {
    fiveseatquery = "Less Than Five"
  } else {
    fiveseatquery = " "
  }
  if (SixtoFifteenFilter === "true") {
    sixtofifteenquery = "Five to Fifteen"
  } else {
    sixtofifteenquery = " "
  }
  if (MorethanFiftyFilter === "true") {
    morethanfiftyquery = "More than Fifteen"
  } else {
    morethanfiftyquery = " "
  }
  if (LessFiveFilter === "true" && SixtoFifteenFilter === "true") {
    fivefiftyquery = "moption a"
  }
  if (LessFiveFilter === "true" && MorethanFiftyFilter === "true") {
    fivefiftyquery = "moption b"
  }
  if (SixtoFifteenFilter === "true" && MorethanFiftyFilter === "true") {
    fivefiftyquery = "moption c"
  }
  if (
    LessFiveFilter === "true" &&
    SixtoFifteenFilter === "true" &&
    MorethanFiftyFilter === "true"
  ) {
    fivefiftyquery = "moption d"
  }

  const OfficeFilter = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="officefiltercontainer">
        <ul className="OfficeFilter scrollmenu">
          <li>
            <a className={"CheckBox " + LessFiveFilter} onClick={LessFiveCheck}>
              &lt; 5 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + SixtoFifteenFilter}
              onClick={SixtoFifteenCheck}
            >
              6 to 15 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + MorethanFiftyFilter}
              onClick={MorethanFiftyCheck}
            >
              &gt; 15 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className={"CheckBox " + ProjectFilter} onClick={ProjectCheck}>
              Projector / LED{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + CoffeeTeaFilter}
              onClick={CoffeeTeaCheck}
            >
              Free Tea/Coffee{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
  const lists = props.data.allListings.edges
  return (
    <div>
      <SEOHeader
        title="Book Conference Rooms & Meeting Rooms in Pune at GoFloaters"
        description="Book Meeting Rooms In Pune With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in Pune."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-pune.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">Meeting Spaces in Pune</h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  Your search for best meeting spaces or conference rooms in
                  Pune has a destination at GoFloaters. We have meeting spaces
                  in Bengaluru starting from Rs 300 / hr. Some of the popular
                  localities for conducting your meetings are <a href="https://gofloaters.com/search/?city=Baner,%20Pune,%20%20Maharashtra&lat=18.5642452&lng=73.7768511&spaceType=monthlyofficeSpace">Baner</a>,{" "}
                <a href="https://gofloaters.com/search/?city=Koregaon%20Park,%20Pune,%20%20Maharashtra&lat=18.5362084&lng=73.8939748&spaceType=meetingSpace">Koregaon Park</a>  and <a href="https://gofloaters.com/search?city=Kharadi,%20Pune,%20%20Maharashtra&lat=18.5538241&lng=73.9476689&spaceType=officeSpace">Kharadi</a>.
                </p>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="Pune" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-pune/">Coworking Spaces</Link>
                </li>
              
                <li>
                  <Link to="/meeting-rooms-in-pune/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-pune/">
                    Office Spaces
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <OfficeFilter></OfficeFilter>
            </div>
          </div>
        </div>
        <div className="container">
          <p>
            <br></br>
            {spaceSize} Meeting Spaces in Pune available for you
          </p>
          <div className="row">
            {lists.map((list, i) => {
              const listData = list.node
              if (spaceFilter === "All") {
                return (
                  <ListingCard
                    key={listData.spaceId}
                    spacetype={listData.spaceType}
                    listingImg={listData.spaceImage}
                    title={listData.spaceTitle}
                    gftitle={listData.spaceGFName}
                    spaceAddress={listData.spaceAddress}
                    priceHr={listData.priceHr}
                    priceDay={listData.priceDay}
                    priceMonth={listData.priceMonth}
                    monthPassAvailable={listData.monthPassAvailable}
                    dayPassAvailable={listData.dayPassAvailable}
                    hourPassAvailable={listData.hourPassAvailable}
                    spaceId={listData.spaceId}
                    officeSpaceType={listData.officeSpaceType}
                    spaceDisplayName={listData.spaceDisplayName}
                    OriginalName={listData.OriginalName}
                    Facility={listData.Facility}
                    Slug={"/meeting-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></ListingCard>
                )
              }
              if (
                listData.Facility.search(projectquery) > 1 &&
                listData.Facility.search(coffeeteaquery) > 1 &&
                ((listData.Facility.search(fiveseatquery) > 1 &&
                  listData.Facility.search(sixtofifteenquery) > 1 &&
                  listData.Facility.search(morethanfiftyquery) > 1) ||
                  listData.Facility.search(fivefiftyquery) > 1)
              ) {
                return (
                  <ListingCard
                    key={listData.spaceId}
                    spacetype={listData.spaceType}
                    listingImg={listData.spaceImage}
                    title={listData.spaceTitle}
                    gftitle={listData.spaceGFName}
                    spaceAddress={listData.spaceAddress}
                    priceHr={listData.priceHr}
                    priceDay={listData.priceDay}
                    priceMonth={listData.priceMonth}
                    monthPassAvailable={listData.monthPassAvailable}
                    dayPassAvailable={listData.dayPassAvailable}
                    hourPassAvailable={listData.hourPassAvailable}
                    spaceId={listData.spaceId}
                    officeSpaceType={listData.officeSpaceType}
                    spaceDisplayName={listData.spaceDisplayName}
                    OriginalName={listData.OriginalName}
                    Facility={listData.Facility}
                    Slug={"/meeting-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></ListingCard>
                )
              }
            })}
          </div>{" "}
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Pune</h4>
            <p>
              Looking for office spaces in Pune? Book the best shared office
              space in Pune for all types of meetings and events like
              presentations, discussions, interviews, workshops and video
              conferences.
              <br></br>
              <br></br>
              The eighth largest metropolitan city in India, Pune is located in
              the western Indian state of Maharashtra, with a population of 31.2
              lakhs. It is the second largest city after Mumbai and is rapidly
              showing growth in its economic and industrial spheres. Once the
              land of Marathas in the 18th century, the presence of the various
              edifices in the city reflect the rich and glorious history.
              <br></br>
              <br></br>
              Pune has a traditional economic base due to the continuous growth
              of already established companies. Pune also stands out to be one
              of the major educational hubs of the country, ideally known as
              ‘The Oxford of the East’. Students all over the globe travel to
              the city to get the best of education from renowned universities
              like Savitribai Phule University, Symbiosis International
              University, MIT World Peace University, Bharati Vidyapeeth
              University among others.
              <br></br>
              <br></br>
              With this, it has seen an upsurge in real estate, engineering,
              automotive, information technology industries as well. This has
              attracted many companies to build their office base in the city
              for all good reasons. From Tata Consultancy Services, Jaguar,
              Kohler Power, Wipro, Volkswagen, Cognizant to other
              multinationals, you would find them all.
              <br></br>
              <br></br>
              Meeting spaces on GoFloaters offer individuals and companies the
              flexibility of access to meeting spaces that have all the
              amenities on a simple hourly rental model. Get a meeting space of
              the right size in your budget when you want and where you want.
              Book through the app, get confirmation, pay for the space and use
              the space. That is all it takes to get your meeting the right
              meeting space.
              <br></br>
              <br></br>
              Pune has very quickly become the IT hub in the west. Many startups
              have also found their home in Pune. Pune has a variety of
              coworking spaces for you to choose from. Some popular brands of
              coworking spaces in Pune are Awfis, Regus, Smartworks, Meraki
              Spaces, Collab Workspace, 91Springboard and IndiQube.
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Meeting Space Locations in Pune
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Yerawada</h5>
            <p>
              Also known as Yeraoda, Yerwada is home to famous places like Tech
              Park One, Commerce zone, Business bay, and Muttha Towers. These
              names are enough to define the infrastructural and commercial
              power of this area.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Baner</h5>
            <p>
              Baner is widely known for its traditional rituals and bhakti
              aradhana. However, the place is well known for commercial setups
              too. Prabhavee Tech Park and Nanospace IT Park are the two famous
              and must-go places in Baner.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Kharadi</h5>
            <p>
              Located at the banks of Mula-mutha river, Kharadi is a suburb in
              Pune, known for IT companies. EON IT park and world trade center
              are the two attractions of the place.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Hinjawadi</h5>
            <p>
              Pune&rsquo;s Hinjewadi area has travelled far from rural to urban
              at the speed of IT. Once an anonymous destination comprising small
              villages, Hinjewadi is now a crucial spot of real estate. With the
              inauguration of the 2800 acre Rajiv Gandhi Infotech Park and
              subsequent entry of IT companies, this area has witnessed a huge
              growth in its working population.&nbsp;
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Magarpatta</h5>
            <p>
              Magarpatta is a 450 acre, privately owned community, located in
              the Hadapsar area of Pune. It is a rapidly growing commercial hub
              with companies like Deutsche Bank, WNS Global Services, Accenture,
              HCL Technologies among other commercial setups.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your meeting space in Pune
            </h4>
            <p>
              GoFloaters has been in the space of helping individuals and teams
              find flexible and affordable workspaces for over 3 years now.
              GoFloaters was started with a vision to help anyone get an office
              space when they want, where they want and within their budget. We
              set out to build office spaces for a distributed world where
              individuals and teams should be able to work near home.
            </p>
            <br />
            <p>
              Following are the advantages of booking coworking spaces and
              meeting spaces on the GoFloaters app:
            </p>
            <ul>
              <li>
                <p>
                  <strong>Work Near Home :</strong> In most of the cities that
                  we serve you can get a space within 5 kms of your home or
                  wherever you are
                </p>
              </li>
              <li>
                <p>
                  <strong>Pay-per-use : </strong>You can book coworking spaces
                  on a daily basis and meeting spaces on an hourly basis and pay
                  only for the time you have used it.
                </p>
              </li>
              <li>
                <p>
                  <strong>No contracts :</strong> You don&rsquo;t have to sign
                  any kind of contracts with us.&nbsp;
                </p>
              </li>
              <li>
                <p>
                  <strong>Cost effective :</strong> We have negotiated heavily
                  with our space partners to bring you savings of at least 20%
                  if not more on the day pass rates and the meeting room rents.
                </p>
              </li>
              <li>
                <p>
                  <strong>Instant Bookings : </strong>No need to call anyone or
                  email anyone to check space availability. You can book
                  coworking spaces instantaneously. Meeting spaces just need 30
                  mins of time for confirmation.&nbsp;&nbsp;
                </p>
              </li>
              <li>
                <p>
                  <strong>Community Perks :</strong> GoFloaters has partnered
                  with over 65+ companies to bring you over Rs 1 Crore of
                  benefits to you.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default PuneMeetingSpaces
export const query = graphql`
  query PuneMeetingSpaces {
    allListings(
      filter: { subType: { eq: "Meeting Space" }, spaceCity: { eq: "Pune" } }
    ) {
      totalCount
      edges {
        node {
          monthPassAvailable
          dayPassAvailable
          hourPassAvailable
          officeSpaceType
          purposesList
          spaceAddress
          spaceGFName
          OriginalName
          spaceCity
          spaceId
          spaceImage
          spaceTitle
          spaceType
          subType
          priceDay
          priceHr
          priceMonth
          spaceDisplayName
          Facility
          slug
          hasCovidSafeBadge
        }
      }
    }
  }
`
