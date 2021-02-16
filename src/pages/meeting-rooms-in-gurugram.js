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
import SocialImage from "../img/socialimage/meeting-rooms-in-gurugram.jpg"
const GurugramMeetingSpaces = props => {
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
        title="Book Conference Rooms & Meeting Rooms in Gurugram at GoFloaters"
        description="Book Meeting Rooms In Gurugram With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in Gurgram."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-gurugram.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Meeting Spaces in Gurugram
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  Your search for best meeting spaces or conference rooms in
                  Gurgaon has a destination at GoFloaters. We have meeting
                  spaces in Gurgaon starting from Rs 300 / hr. Some of the
                  popular localities are Udyog Vihar, Golf Course Road, Huda
                  city Centre and Cyber City.
                </p>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="Gurugram" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-gurugram/">
                    Coworking Spaces
                  </Link>
                </li>
             
                <li>
                  <Link to="/meeting-rooms-in-gurugram/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-gurugram/">
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
            {spaceSize} Meeting Spaces in Gurugram available for you
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
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Gurgaon </h4>

            <p>
              Looking for meeting spaces in Gurgaon? Book the best meeting space
              in Gurgaon for all types of meetings and events like
              presentations, discussions, interviews, workshops and video
              conferences.
              <br></br>
              <br></br>
              Gurgaon, also known as Gurugram, is a city with over 870,000
              residents, situated in the northern Indian state of Haryana,
              around 30 kilometers south-west of New Delhi. Well-connected,
              National Highway 48 provides access to Delhi and Mumbai, while
              Indira Gandhi International Airport is located just outside of
              Gurgaon, near National Highway 8.
              <br></br>
              <br></br>
              Gurgaon is India's second largest information technology hub and
              third largest financial and banking hub. Gurgaon is also home to
              India's largest medical tourism industry. Despite being India's
              56th largest city in terms of population, Gurgaon is the 8th
              largest city in the country in terms of total wealth. Gurgaon's
              economic growth started in the 1970s when Maruti Suzuki India
              Limited established a manufacturing plant and gathered pace after
              General Electric established its business outsourcing operations
              in the city in collaboration with real-estate firm DLF.
              <br></br>
              <br></br>
              Various international companies, including Coca-Cola, Pepsi, BMW,
              Agilent Technologies, Hyundai have chosen Gurgaon to be their
              Indian corporate headquarters. Retail is an important industry in
              Gurgaon, with the presence of 26 shopping malls.
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
              Gurgaon has very quickly become the IT hub in the North. Many
              startups have also found their home in Gurgaon. Gurgaon has a
              variety of coworking spaces for you to choose from. Some popular
              brands of coworking spaces in Gurgaon are WeWork, Plus Offices,
              91Springboard and ABL Workspaces.
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Meeting Space Locations in Gurgaon
            </h4>
            <br />

            <h5 style={{ fontWeight: "bold" }}>Udyog Vihar</h5>

            <p>
              Udyog Vihar is located near Delhi-Gurgaon Border and 8 km from
              Indira Gandhi International Airport on National Highways 8. The
              location is planned and well connected with roads. Rapid Metro
              rail is the most feasible transport option available. DLF Phase
              III is the nearest metro station to Udyog Vihar which is connected
              to Sikandarpur Metro Station, which further connects metro to
              different parts of Delhi and Gurgaon. Hyatt Place, The Leela,
              Trident Hotel, The Oberoi and Country Inn Carlson are some of the
              famous hotels near Udyog Vihar. It is one of the best locations
              for office space in Gurgaon.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Sector- 54</h5>
            <p>
              From the point of connectivity, Sector-54 chowk itself is a metro
              station, from where one can easily reach out to Delhi in just a
              few minutes. HCL healthcare clinic and Gmerk hospital is in the
              radius of 10 Kms. South point Mall, Fabindia and Sahara Mall are
              the all-time favorite hotspots for fun lovers and visitors. Also,
              the Suncity project in sector-54 offers a best residential premise
              as per your budget, if you are looking to settle down there.
              Sector-54 well supports the co-working spaces in Gurgaon, meeting
              rooms and conference rooms.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Sector-48 &amp; 49</h5>
            <p>
              Both the sectors are known for its excellent education facilities
              including world class schools such as G.D. Goenka public school,
              Eden castle school, Budding minds, GEMS modern academy etc. The
              area has Merchant marine academy, E.C.H.S Polyclinic, Quest
              diagnostics and many more with world class medical facilities. If
              you are a foodie, you have the choice of Cyber adda 24, Mehfil
              Restaurant, Subway, the coriander, Colonel&rsquo;s kitchen and
              many more.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>DLF Cyber City</h5>
            <p>
              As the name suggests, Cyber city is the Cyber hub of big corporate
              and IT Industries from all over the world. This is a highly
              recommended location, if you are looking for office space for rent
              or shared office space or co-working space in Gurgaon. DLF Cyber
              city and Udyog Vihar are only 2-3 Kms. Apart from that, facilities
              are almost similar to those in Udyog Vihar. Presence of several
              companies in a small area makes this a busy part of the city.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your meeting space in Gurgaon
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
export default GurugramMeetingSpaces
export const query = graphql`
  query GurugramMeetingSpaces {
    allListings(
      filter: {
        subType: { eq: "Meeting Space" }
        spaceCity: { eq: "Gurugram" }
      }
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
