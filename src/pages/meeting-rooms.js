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
import SocialImage from "../img/socialimage/meeting-rooms.jpg"

const MeetingSpaces = props => {
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
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">Meeting Spaces</h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
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
            <h4 style={{ fontWeight: "bold" }}>
              What kind of meeting spaces can I get on GoFloaters?
            </h4>
            <p>
              GoFloaters has meeting spaces of all sizes and for all kinds of
              meetings. Whether you are looking to just have a team discussion
              or looking for a room for a presentation or a training session we
              have you covered. You can also get spaces to conduct your
              interviews, onboarding of your new employees or conduct workshops
              at GoFloaters meeting spaces. All of the spaces come equipped with
              the amenities that help you get going the moment you enter.&nbsp;
            </p>

            <br />
            <ul>
              <li>
                <strong>Flexibility</strong> : No long term contracts that block
                you{" "}
              </li>
              <li>
                <strong>Cost Effective</strong> : You pay one simple and
                affordable rent for the space and all the amenities{" "}
              </li>
              <li>
                <strong>Pay-per-use</strong> : This is something unique to
                GoFloaters where we have made the choicest of spaces available
                on daily and hourly rentals.&nbsp;
              </li>
              <li>
                <strong>Location choice</strong> : With thousands of options
                available you can get a work space where you need it{" "}
              </li>
              <li>
                <strong>Community</strong> : Coworking spaces are the breeding
                ground for strong communities of entrepreneurs and freelancers{" "}
              </li>
            </ul>
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why should I use the GoFloaters app to book?
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
                <strong>Work Near Home </strong>: In most of the cities that we
                serve you can get a space within 5 kms of your home or wherever
                you are{" "}
              </li>
              <li>
                <strong>Pay-per-use</strong> : You can book coworking spaces on
                a daily basis and meeting spaces on an hourly basis and pay only
                for the time you have used it.{" "}
              </li>
              <li>
                <strong>No contracts </strong>: You don&rsquo;t have to sign any
                kind of contracts with us.&nbsp;
              </li>
              <li>
                <strong>Cost effective</strong> : We have negotiated heavily
                with our space partners to bring you savings of at least 20% if
                not more on the day pass rates and the meeting room rents.{" "}
              </li>
              <li>
                <strong>Instant Bookings</strong> : No need to call anyone or
                email anyone to check space availability. You can book coworking
                spaces instantaneously. Meeting spaces just need 30 mins of time
                for confirmation.&nbsp;&nbsp;
              </li>
              <li>
                <strong>Community Perks</strong> : GoFloaters has partnered with
                over 65+ companies to bring you over Rs 1 Crore of benefits to
                you.{" "}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default MeetingSpaces
export const query = graphql`
  query MeetingSpace {
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
          hasCovidSafeBadge
        }
      }
    }
  }
`
