import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import EventSpaceContent from "../components/eventspacecontent"
import HeaderBanner from "../components/headerbanner"
import EventSpaceLocationSwitch from "../components/eventlocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql } from "gatsby"

const ChennaiEventSpaces = props => {
  const [spaceFilter, setspaceFilter] = useState("All")
  const [spaceSize, setspaceSize] = useState([])
  const [ProjectFilter, setProjectFilter] = useState("false")
  const [LessThirtyFilter, setLessThirtyFilter] = useState("false")
  const [ThirtyToSixtyFilter, setThirtyToSixtyFilter] = useState("false")
  const [MorethanSixtyFilter, setMorethanSixtyFilter] = useState("false")
  const [AudioEquipmentFilter, setAudioEquipmentFilter] = useState("false")

  function ProjectCheck() {
    if (ProjectFilter === "true") {
      setProjectFilter("false")
    } else {
      setProjectFilter("true")
      setspaceFilter("Projector")
    }
  }
  function LessThirtyCheck() {
    if (LessThirtyFilter === "true") {
      setLessThirtyFilter("false")
    } else {
      setLessThirtyFilter("true")
      setspaceFilter("Less Than Thirty")
    }
  }
  function ThirtytoSixtyCheck() {
    if (ThirtyToSixtyFilter === "true") {
      setThirtyToSixtyFilter("false")
    } else {
      setThirtyToSixtyFilter("true")
      setspaceFilter("Thirty To Sixty")
    }
  }
  function MorethanSixtyCheck() {
    if (MorethanSixtyFilter === "true") {
      setMorethanSixtyFilter("false")
    } else {
      setMorethanSixtyFilter("true")
      setspaceFilter("More than Sixty")
    }
  }
  function AudioEquipmentCheck() {
    if (AudioEquipmentFilter === "true") {
      setAudioEquipmentFilter("false")
    } else {
      setAudioEquipmentFilter("true")
      setspaceFilter("Audio Equipment")
    }
  }

  var projectquery,
    lessthanthirtyquery,
    thirtytosixtyquery,
    morethansixtyquery,
    audioquery,
    fivefiftyquery = ""

  if (ProjectFilter === "true") {
    projectquery = "Projector"
  } else {
    projectquery = " "
  }

  if (LessThirtyFilter === "true") {
    lessthanthirtyquery = "Less Than Thirty"
  } else {
    lessthanthirtyquery = " "
  }
  if (ThirtyToSixtyFilter === "true") {
    thirtytosixtyquery = "Thirty To Sixty"
  } else {
    thirtytosixtyquery = " "
  }
  if (MorethanSixtyFilter === "true") {
    morethansixtyquery = "More than Sixty"
  } else {
    morethansixtyquery = " "
  }

  if (LessThirtyFilter === "true" && ThirtyToSixtyFilter === "true") {
    fivefiftyquery = "eoption a"
  }
  if (LessThirtyFilter === "true" && MorethanSixtyFilter === "true") {
    fivefiftyquery = "eoption b"
  }
  if (ThirtyToSixtyFilter === "true" && MorethanSixtyFilter === "true") {
    fivefiftyquery = "eoption c"
  }
  if (
    LessThirtyFilter === "true" &&
    ThirtyToSixtyFilter === "true" &&
    MorethanSixtyFilter === "true"
  ) {
    fivefiftyquery = "eoption d"
  }
  if (AudioEquipmentFilter === "true") {
    audioquery = "Audio Equipment"
  } else {
    audioquery = " "
  }

  const OfficeFilter = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="officefiltercontainer">
        <b>Filter:</b>
        <ul className="OfficeFilter">
          <li>
            <a
              className={"CheckBox " + LessThirtyFilter}
              onClick={LessThirtyCheck}
            >
              &lt; 30 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + ThirtyToSixtyFilter}
              onClick={ThirtytoSixtyCheck}
            >
              30 to 60 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + MorethanSixtyFilter}
              onClick={MorethanSixtyCheck}
            >
              &gt; 60 Seats{" "}
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
              className={"CheckBox " + AudioEquipmentFilter}
              onClick={AudioEquipmentCheck}
            >
              Audio Equipment{" "}
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
      <Helmet>
        <title>Event spaces in Chennai - GoFloaters</title>
        <meta
          name="og:title"
          content="Event spaces in Chennai - GoFloaters"
        ></meta>
        <meta
          name="description"
          content="Meeting spaces, conference rooms, training rooms, event spaces at great prices are available at GoFloaters. Get exactly what you need when you book with us!"
        ></meta>
        <meta
          name="og:description"
          content="Meeting spaces, conference rooms, training rooms, event spaces at great prices are available at GoFloaters. Get exactly what you need when you book with us!"
        ></meta>
      </Helmet>
      <Layout>
        <HeaderBanner headerclass="event-space">
          {" "}
          <h1>Event Spaces in Chennai</h1>
        </HeaderBanner>
        <div className="container">
          <EventSpaceContent />
        </div>
        <div className="SpaceGray">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="padding-20"></div>
                <SearchForm spacetype="trainingRoom"></SearchForm>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>

              <div className="col-md-12">
                <br></br> <br></br>
                <EventSpaceLocationSwitch city="Chennai" />
              </div>
            </div>
            <br />
            <div>
              <OfficeFilter></OfficeFilter>
            </div>
          </div>
        </div>
        <div className="container">
          <p>
            <br></br>
            {spaceSize} Event Spaces available for you
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
                    Facility={listData.Facility}
                    Slug={listData.slug}
                  ></ListingCard>
                )
              }
              if (
                listData.Facility.search(projectquery) > 1 &&
                listData.Facility.search(audioquery) > 1 &&
                ((listData.Facility.search(thirtytosixtyquery) > 1 &&
                  listData.Facility.search(morethansixtyquery) > 1 &&
                  listData.Facility.search(lessthanthirtyquery) > 1) ||
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
                    Facility={listData.Facility}
                    Slug={listData.slug}
                  ></ListingCard>
                )
              }
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default ChennaiEventSpaces
export const query = graphql`
  query ChennaiEventSpaces {
    allListings(
      filter: { spaceCity: { eq: "Chennai" }, subType: { eq: "Event Space" } }
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
