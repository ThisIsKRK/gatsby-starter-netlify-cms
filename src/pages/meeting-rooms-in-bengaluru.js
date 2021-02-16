import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchForm from "../components/search/search"
import HeaderBanner from "../components/headerbanner"
import MeetingLocationSwitch from "../components/meetinglocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql, Link } from "gatsby"
import SEOHeader from "../components/seo-header"

const BengaluruMeetingSpaces = props => {
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
        title="Book Conference Rooms & Meeting Rooms in Bangalore at GoFloaters"
        description="Book Meeting Rooms In Bangalore With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in Bangalore."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-bengaluru.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Meeting Spaces in Bangalore
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  If you are looking for meeting spaces or conference rooms in
                  Bengaluru then you have come to the right page. We have
                  meeting spaces in Bengaluru starting from Rs 250 / hr. Some of
                  the popular localities for conducting your meetings are
                  {" "}
                  <a href="https://gofloaters.com/search/?city=Koramangala,%20Bengaluru,%20%20Karnataka&lat=12.9351929&lng=77.62448069999999&spaceType=meetingSpace">
                    Koramangala
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search/?city=Indiranagar,%20Bengaluru,%20%20Karnataka&lat=12.9783692&lng=77.6408356&spaceType=meetingSpace">
                    Indiranagar
                  </a>
                  , <a href="https://gofloaters.com/search?city=Mahatma%20Gandhi%20Rd,%20Bengaluru,%20Karnataka&lat=12.9747066&lng=77.6072206&spaceType=meetingSpace">MG Road</a>,  <a href="https://gofloaters.com//search?city=J.%20P.%20Nagar,%20Bengaluru&lat=12.8896976&lng=77.5605652&spaceType=meetingSpace">JP Nagar</a> and <a href="https://gofloaters.com/search?city=Malleshwaram,%20Bengaluru&lat=13.0076971&lng=77.5585626&spaceType=meetingSpace">Malleswaram</a>.
                </p>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="Bengaluru" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-bangalore/">
                    Coworking Spaces
                  </Link>
                </li>
                
                <li>
                  <Link to="/meeting-rooms-in-bangalore/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-bangalore/">
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
            {spaceSize} Meeting Spaces in Bangalore available for you
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
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Bangalore </h4>
            <p>
              Looking for meeting space for rent in Bangalore? Book the best
              meeting space in Bangalore for all types of meetings and events
              like presentations, discussions, interviews, workshops and video
              conferences.
              <br />
              <br />
              Bangalore, officially named as Bengaluru is the capital of the
              state of Karnataka. The city was founded by Kempe Gowda in 1537.
              It is a favorite tourist destination with its pleasant climate
              throughout the year. The city is the third most populous city in
              India with almost 8 million population.
              <br />
              <br />
              Bangalore is called the Silicon Valley of India because it is home
              to some of the large IT MNCs and technology manufacturing
              companies. Indian Space Research Organisation (ISRO), Infosys,
              Wipro, Hindustan Aeronautics Limited (HAL), Flipkart, Oracle all
              call Bangalore their home.
              <br />
              <br />
              Bangalore also has one of the best institutions like Indian
              Institute of Science (IISc), Indian Institute of Management (IIM),
              National Institute of Fashion Technology (NIFT), National
              Institute of Design (NID), International Institute of Information
              Technology (IIIT) and National Law School of India University
              (NLSIU).
              <br />
              <br />
              The city has become the launchpad for more than 7,000+ startups.
              This has created a growing demand for office spaces. But paying
              exorbitant sums of money for rental deposits and office leasing
              was a major challenge for startups and small businesses. Bangalore
              has the most vibrant coworking ecosystem in the country. From
              affordable coworking spaces for bootstrapped startups to the most
              decked up coworking spaces, Bangalore has it all.
              <br />
              <br />
              Meeting spaces on GoFloaters offer individuals and companies the
              flexibility of access to meeting spaces that have all the
              amenities on a simple hourly rental model. Get a meeting space of
              the right size in your budget when you want and where you want.
              Book through the app, get confirmation, pay for the space and use
              the space. That is all it takes to get your meeting the right
              meeting space.
              <br />
              <br /> Bengaluru, being the startup capital of India has probably
              the largest concentration of coworking spaces. Some popular brands
              of coworking spaces in Bengaluru are IndiQube, OYO Workflo, Draper
              Street House, Novel Offices and 91Springboard.
            </p>
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Top Meeting Locations in Bangalore
            </h4>
            <br />
            <p>
              <strong>Koramangala</strong>
              <br />
              Koramangala is the hub of Indian startup ecosystem. Flipkart and
              Swiggy were two startups that have had humble beginnings here. Not
              only this, Toshiba, Ola, Accel Partners, Instamojo, Robert Bosch,
              Meesho, Mcafee, HackerEarth, Terra Logic among others are based
              here.
              <br />
              <br />
              Located in South-East Bangalore, it is a well-to-do neighbourhood
              with all residential and commercial facilities, exceptional
              infrastructure, social life, and proximity to office locations via
              the roadways, the Kempegowda International Airport for airways
              service and Trinity station for metro rail facilities.&nbsp;
            </p>
            <br />
            <p>
              <strong>HSR Layout</strong>
              <br />
              Hosur-Sarjapur Road or HSR Layout is an affluent neighbourhood
              located in South-East Bangalore. Developed in the 1980s now it has
              emerged into a leading residential area due to its proximity to IT
              Parks in Bangalore. It is also a gateway to Electronic City, a
              major IT hub of the city. HSR Layout is growing rapidly as a
              startup hub of Bangalore as it houses many startups Like Zomato,
              Udaan, CureFit, Gameskraft, OYE Fintech, ThoughtSpot, Trebound
              Etc. It has many co-working spaces like BHIVE Workspace, IndiQube,
              The Venture Studios where many startups work out of.&nbsp;&nbsp;
            </p>
            <br />
            <p>
              <strong>Indiranagar</strong>
              <br />
              Indiranagar was developed in the early 1980s, and named after the
              former Prime Minister of India Smt. Indira Gandhi. Initially, the
              neighbourhood was a sight of picturesque houses, mostly owned by
              the government staff. But currently, it has been the focal point
              of Bangalore's phenomenal growth that has turned the city into a
              technology, retail, e-commerce, hospitality paradise.
              <br />
              <br />
              Top companies in and around the area are Dunzo, Boeing, IBM,
              Karbonn Mobiles, Oyo, HSBC, Oracle, Ogilvy, PwC, Cognizant, Dell,
              LinkedIn and many more. With the provision of all modern
              facilities and proximity to other prime business locations via the
              roadways, metro, and the airways, Indiranagar is a favourite
              destination for the businesses who are looking for coworking space
              in Bangalore.
            </p>
            <br />
            <p>
              <strong>Whitefield</strong>
              <br />
              Established in the late 1800s as a settlement for the Eurasians
              and Anglo Indians of Bangalore, Whitefield remained a quaint
              little settlement at the eastern periphery of Bangalore city till
              the late 1990s when the local IT boom turned it into a major
              suburb. Whitefield in Bangalore, Karnataka was named after D.S.
              White, the founder of the European and Anglo Indian Association
              <br />
              <br />
              With the development of budget-friendly residential localities,
              the corporate hub got a major boost too. It is home to maximum
              technology parks, having thousands of companies such as Accenture,
              Hewlett Packard, AIG, Tesco, TCS, Oracle, Wipro, Unilever,
              Flipkart, SAP, Huawei, Capgemini, IBM, Dell, L&amp;T Infotech
              among others.&nbsp;
            </p>
            <br />
            <p>
              <strong>J.P. Nagar</strong>
              <br />
              Jayaprakash Narayan Nagara, popularly known as J. P. Nagar, is an
              established posh upmarket residential area located in the south of
              Bangalore. Initially, it was recognised as a major housing colony
              but gradually changed into a profitable opportunity for commercial
              projects during the IT boom in the late 1990s.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your meeting space in Bangalore
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
                <strong>Work Near Home:</strong> In most of the cities that we
                serve you can get a space within 5 kms of your home or wherever
                you are
              </li>
              <li>
                <strong>Pay-per-use:</strong> You can book coworking spaces on a
                daily basis and meeting spaces on an hourly basis and pay only
                for the time you have used it.
              </li>
              <li>
                <strong>No contracts:</strong> You don&rsquo;t have to sign any
                kind of contracts with us.&nbsp;
              </li>
              <li>
                <strong>Cost effective:</strong> We have negotiated heavily with
                our space partners to bring you savings of at least 20% if not
                more on the day pass rates and the meeting room rents.
              </li>
              <li>
                <strong>Instant Bookings:</strong> No need to call anyone or
                email anyone to check space availability. You can book coworking
                spaces instantaneously. Meeting spaces just need 30 mins of time
                for confirmation.&nbsp;&nbsp;
              </li>
              <li>
                <strong>Community Perks:</strong> GoFloaters has partnered with
                over 65+ companies to bring you over Rs 1 Crore of benefits to
                you.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default BengaluruMeetingSpaces
export const query = graphql`
  query BengaluruMeetingSpaces {
    allListings(
      filter: {
        subType: { eq: "Meeting Space" }
        spaceCity: { eq: "Bengaluru" }
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
