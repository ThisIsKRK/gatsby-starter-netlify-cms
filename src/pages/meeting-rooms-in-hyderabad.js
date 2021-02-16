import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchForm from "../components/search/search"
import HeaderBanner from "../components/headerbanner"
import MeetingLocationSwitch from "../components/meetinglocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql, Link } from "gatsby"
import SEOHeader from "../components/seo-header"
const HyderabadMeetingSpaces = props => {
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
        title="Book Conference Rooms & Meeting Rooms in Hyderabad at GoFloaters"
        description="Book Meeting Rooms In Hyderabad With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in Hyderabad."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-hyderabad.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Meeting Spaces in Hyderabad
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <p style={{ fontSize: "13px" }}>
                  If you are looking for the best meeting space in Hyderabad
                  then you have come to the right page. We have meeting spaces
                  in Bengaluru starting from Rs 250 / hr. The popular localities
                  are <a href="https://gofloaters.com/search/?city=Sainikpuri,%20Secunderabad,%20Telangana&lat=17.4840989&lng=78.5468455&spaceType=meetingSpace">Sainikpuri</a>, <a href="https://gofloaters.com/search/?city=Madhapur,%20Telangana&lat=17.4484772&lng=78.3741361&spaceType=meetingSpace">Madhapur</a>, <a href="https://gofloaters.com/search/?city=Jubilee Hills,%20Hyderabad,%20Telangana&lat=17.4310834&lng=78.4010167&spaceType=meetingSpace">Jubilee Hills</a>.
                </p>
                <div className="padding-20"></div>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="Hyderabad" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-hyderabad/">
                    Coworking Spaces
                  </Link>
                </li>
              
                <li>
                  <Link to="/meeting-rooms-in-hyderabad/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-hyderabad/">
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
            {spaceSize} Meeting Spaces in Hyderabad available for you
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
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Hyderabad</h4>
            <p>
              Looking for meeting spaces in Hyderabad? Book the best meeting
              space in Hyderabad for all types of meetings and events like
              presentations, discussions, interviews, workshops and video
              conferences.
              <br></br>
              Muhammad Quli Qutb Shah established Hyderabad in 1591 to extend
              the capital beyond the fortified Golconda. It occupies 625 square
              kilometres on the Deccan Plateau along the banks of the Musi
              River, in the northern part of South India. Hyderabad is admired
              for its jaw-dropping pearls, the spicy biryani, the striking
              Charminar monument and its speeding Information Technology (IT)
              industry over the past few years.
              <br></br>
              <br></br>
              The city is the sixth most productive Indian metropolitan city
              hence it has attracted prominent multinational companies and
              startups from all over the globe. The city is home to more than
              1300 IT and ITES firms. Global conglomerates include Microsoft,
              Apple, Amazon, Google, IBM, Yahoo!, Oracle Corporation, Dell,
              Facebook, CISCO and major Indian firms including Tech Mahindra,
              Infosys, Tata Consultancy Services (TCS), Polaris, Cyient and
              Wipro have presence here. In 2009 the World Bank Group ranked the
              city as the second best Indian city for doing business.
              <br></br>
              <br></br>
              Hyderabad has also become the breeding ground for startups. This
              has led to the demand spurt in coworking spaces and incubators.
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
              Hyderabad is home to a fast paced IT industry and is bestowed with
              some of the best coworking spaces in the country. Some popular
              brands of coworking spaces in Hyderabad are IndiQube, Octo Spaces,
              OYO Workflo, Draper Street House, Novel Offices and 91Springboard.
              <br></br>
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Meeting Space Locations in Hyderabad
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>HITEC City</h5>
            <p>
              HITEC CITY, the acronym for Hyderabad Information Technology and
              Engineering Consulting City, is a hub of Information Technology,
              Financial Business, Medical, Engineering and Bioinformatics.
              Popularly acclaimed at &lsquo;Cyberabad&rsquo;, this city spans
              over 200 acres of land. Being the center of all IT action, it is
              also the base for some of the most popular coworking spaces and
              office spaces for rent.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Madhapur</h5>
            <p>
              What belonged to an era of suburbs, rocky villages and small towns
              in the 1990s, is the current nucleus of all things IT. Madhapur,
              today boasts of the best coworking spaces in and across Hyderabad
              and also houses the now famous HITEC City. The destination is
              rapidly becoming ideal for business meetings.
            </p>
            <br /> <h5 style={{ fontWeight: "bold" }}>Jubilee Hills</h5>
            <p>
              Jubilee Hills is a luxurious neighbourhood spread across the west
              of Hyderabad. It is one of the high-priced residential,
              recreational, political and commercial localities of the city with
              land prices crossing the sky. This suburb is sandwiched between
              the wealthy commercial district of Banjara Hills and is located
              within two kilometres of Hyderabad's IT hub of HITEC City.
              <br />
              <br />
              Globally known companies like PricewaterhouseCoopers (PWC), ICICI
              and HDFC banks, Seaways, Gateway Media, Lanco Global Systems and
              many more have their headquarters here.&nbsp;
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Begumpet</h5>
            <p>
              Begumpet (&quot;Begum's Place&quot;) is a part of Secunderabad,
              Hyderabad. Begumpet is named after the daughter of the sixth Nizam
              (Mahbub Ali Khan, Asaf Jah VI), Basheer Unnisa Begum. The
              neighbourhood is one of the crucial commercial and residential
              hubs sandwiched between Secunderabad and Hyderabad.
              <br />
              <br />A lucrative business destination for Information Technology
              (IT) companies, it is witnessing a spur in coworking spaces with
              all basic facilities. Begumpet Railway Station provides rail
              connectivity to the area. Other MMTS stations in the vicinity
              include Sanjeevaiah Park and James Street. State-owned TSRTC runs
              the city bus service, connecting Begumpet to major parts of the
              city.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Banjara Hills</h5>
            <p>
              Banjara Hills is an urban commercial centre and one of the most
              affluent neighbourhoods in Hyderabad, Telangana, India. This is an
              upmarket locality close to Jubilee Hills. This area was a hilly
              forest and was least inhabited in the past. It is considered as
              the most expensive zip code in India.
              <br />
              <br />
              This neighbourhood has now been completely transformed and
              comprises prestigious malls like GVK One, City Centre, Midtown,
              hotels such as Taj Mahal, Park Hyatt, ITC, Treebo, The Westin,
              restaurants like Barbeque Nation, Hard Rock Cafe, Bikanervala,
              Olive Bistro, and world-renowned multinational companies like
              Genpact, Infosys, Microsoft India, Hitachi Consulting and many
              more.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your coworking space in Hyderabad
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
export default HyderabadMeetingSpaces
export const query = graphql`
  query HyderabadMeetingSpaces {
    allListings(
      filter: {
        subType: { eq: "Meeting Space" }
        spaceCity: { eq: "Hyderabad" }
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
