import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import MeetingSpacesContent from "../components/meetingspacecontent"
import HeaderBanner from "../components/headerbanner"
import MeetingLocationSwitch from "../components/meetinglocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql, Link } from "gatsby"
import SEOHeader from "../components/seo-header"
import SocialImage from "../img/socialimage/meeting-rooms-in-chennai.jpg"

const ChennaiMeetingSpaces = props => {
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
        title="Book Conference Rooms & Meeting Rooms in Chennai at GoFloaters"
        description="Book Meeting Rooms In Chennai With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in Chennai."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-chennai.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Meeting Spaces in Chennai
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  If you are looking for the best coworking space in Chennai
                  then you have come to the right page. An average cost of a hot
                  desk in Chennai is in the range of Rs 250 / day. Some of the
                  popular localities are{" "}
                  <a href="https://gofloaters.com/search?city=Guindy,%20Chennai,%20%20Tamil%20Nadu&lat=13.0066625&lng=80.2206369&spaceType=meetingSpace">
                    Guindy
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search?city=Nungambakkam,%20Chennai,%20%20Tamil%20Nadu&lat=13.0569467&lng=80.242469&spaceType=meetingSpace">
                    Nungambakkam
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/searchresult?city=Teynampet,%20Chennai,%20%20Tamil%20Nadu&lat=13.0404742&lng=80.25033350000001&spaceType=meetingSpace">
                    Teynampet
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search?city=Alwarpet,%20Chennai,%20%20Tamil%20Nadu&lat=13.0334869&lng=80.2531271&spaceType=officeSpace">
                    Alwarpet
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/searchresult?city=Anna%20Nagar,%20Chennai,%20%20Tamil%20Nadu&lat=13.0849557&lng=80.2101342&spaceType=meetingSpace">
                    Anna Nagar
                  </a>{" "}
                  and{" "}
                  <a href="https://gofloaters.com/searchresult?city=Perungudi,%20Chennai,%20%20Tamil%20Nadu&lat=12.9653652&lng=80.2461057&spaceType=meetingSpace">
                    Perungudi
                  </a>
                  .
                  <br />
                </p>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="Chennai" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-chennai/">
                    Coworking Spaces
                  </Link>
                </li>
               
                <li>
                  <Link to="/meeting-rooms-in-chennai/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-chennai/">
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
            {spaceSize} Meeting Spaces in Chennai available for you
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
          </div>
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Chennai</h4>

            <p>
              Looking for meeting spaces in Chennai? Book the best meeting space
              in Chennai for teams of all sizes with all amenities from hot
              desks to private cabins.
              <br></br>
              <br></br>
              Chennai, formerly known as Madras, is a 369-year-old city and is
              the capital of the southern state of Tamilnadu. It serves as one
              of the main gateways to South India and has a thriving local
              culture and art scene and is one of the major destinations for
              medical tourism. It is considered as one of the world's fastest
              growing cities although ranks 13th in terms of cleanliness. It is
              on the Coromandel coast of the Bay of Bengal and has the second
              longest beach front of any municipality in the world.
              <br></br>
              <br></br>
              With an exponential growth in the entrepreneurial ecosystem in
              Chennai, the startup culture is gaining prominence. Chennai is
              considered the SaaS capital of India with startups like Zoho,
              Freshworks, ChargeBee to claim Chennai their home. Coworking is
              picking up as the popular choice as the way of working for
              startups and many small and medium enterprises.&nbsp;
              <br></br>
              <br></br>
              Meeting spaces on GoFloaters offer individuals and companies the
              flexibility of access to meeting spaces that have all the
              amenities on a simple hourly rental model. Get a meeting space of
              the right size in your budget when you want and where you want.
              Book through the app, get confirmation, pay for the space and use
              the space. That is all it takes to get your meeting the right
              meeting space.<br></br>
              <br></br> Chennai has seen its fair share of coworking spaces come
              up in the last few years. Some national brands have also made a
              recent entry into Chennai like Awfis, OYO Workflo, Innov8, Cowrks
              and IndiQube. Chennai also has its own homegrown brands like
              Workafella, Disruptors of Tomorrow, Dhwarco Coworking and Reach
              Offices.
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Meeting Space Locations in Chennai
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Old Mahabalipuram Road&nbsp;</h5>
            <p>
              This stretch of road starts from Madhya Kailash till it ends in
              Mahabalipuram. This road is also called the IT Expressway with
              many IT parks and large IT MNC dotting the road. It is also
              well-known for many educational, technical institutions and
              medical laboratories. Startups and service companies prefer to
              take up space on this road as the talent pool is available to
              tap.&nbsp;
            </p>
            <br></br>
            <h5 style={{ fontWeight: "bold" }}>Guindy</h5>
            <p>
              A largely industrial district, Guindy is also home to Guindy
              National Park. The Kathipara Junction with its butterfly flyover
              is a prominent landmark in this area. Three main roads of Chennai
              namely Anna Salai, Mount-Poonamallee Road, Inner Ring Road, 100
              Feet Road or Jawaharlal Nehru Road, and GST Road meet here. Guindy
              is well connected by road and train services. It is also well
              connected by the trains with MRTS and Metro station. Guindy is
              also located 10 km away from the airport. Due to its connectivity
              many startups, small businesses and large companies have Guindy as
              their first preference when it comes to office space.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Teynampet</h5>
            <p>
              Teynampet is one of the busiest commercial localities in the city
              of Chennai. Teynampet is along Anna Salai, the arterial road of
              Chennai. Teynampet also has some of the poshest pieces of real
              estate and properties in Chennai. Teynampet is also well connected
              via public bus and metro transport. Startups prefer Teynampet for
              its connectivity.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Nungambakkam</h5>
            <p>
              Nungambakkam is one of the oldest parts of Chennai. Located along
              Anna Salai, Nungambakkam is the official downtown of Chennai. The
              neighborhood is home to many multi-national commercial
              establishments, important government offices, foreign consulates,
              sprawling educational institutions, shopping malls, sporting
              facilities, tourist spots, star hotels, restaurants, and cultural
              centers. Nungambakkam is also a prime residential area in Chennai.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Anna Nagar</h5>
            <p>
              Anna Nagar is located in the north-western part of Chennai. It is
              one of the prime residential areas in Chennai and is home to
              several prominent doctors, lawyers and politicians. Real estate
              prices are among the highest in the city. Anna Nagar has several
              established schools and colleges, places of worship and shopping
              areas.&nbsp;
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your meeting space in Chennai
            </h4>
            <p>
              GoFloaters has been in the space of helping individuals and teams
              find flexible and affordable workspaces for over 3 years now.
              GoFloaters was started with a vision to help anyone get an office
              space when they want, where they want and within their budget. We
              set out to build office spaces for a distributed world where
              individuals and teams should be able to work near home.&nbsp;
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
export default ChennaiMeetingSpaces
export const query = graphql`
  query ChennaiMeetingSpaces {
    allListings(
      filter: { subType: { eq: "Meeting Space" }, spaceCity: { eq: "Chennai" } }
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
        }
      }
    }
  }
`
