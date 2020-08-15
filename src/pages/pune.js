import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import OfficeSpacesContent from "../components/officespacecontent"
import HeaderBanner from "../components/headerbanner"
import OfficeSpaceLocationSwitch from "../components/officespacelocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql, Link, navigate } from "gatsby"

const Pune = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Work Cafe":
        return navigate("/coworking-spaces-in-pune")
      case "Office Spaces":
        return navigate("/office-spaces-for-rent-in-pune/")
      case "Training Room":
        return navigate("/training-rooms-in-pune/")
      case "Event Spaces":
        return navigate("/event-spaces-in-pune/")
      case "Meeting Spaces":
        return navigate("/meeting-rooms-in-pune/")
    }
  }
  const [spaceFilter, setspaceFilter] = useState("All")
  const [spaceSize, setspaceSize] = useState([])
  const [privateCabinFilter, setprivateCabinFilter] = useState("false")
  const [openDeskFilter, setopenDeskFilter] = useState("false")
  const [MetroNearByFilter, setMetroNearByFilter] = useState("false")
  const [DailyPassFilter, setDailyPassFilter] = useState("false")
  const [TwentyFourFilter, setTwentyFourFilter] = useState("false")
  function privateCabinCheck() {
    if (privateCabinFilter === "true") {
      setprivateCabinFilter("false")
    } else {
      setprivateCabinFilter("true")
      setspaceFilter("Private Cabin")
    }
  }
  function openDeskCheck() {
    if (openDeskFilter === "true") {
      setopenDeskFilter("false")
    } else {
      setopenDeskFilter("true")
      setspaceFilter("Open Desk")
    }
  }
  function MetroNearByCheck() {
    if (MetroNearByFilter === "true") {
      setMetroNearByFilter("false")
    } else {
      setMetroNearByFilter("true")
      setspaceFilter("Metro Nearby")
    }
  }

  function DailyPassCheck() {
    if (DailyPassFilter === "true") {
      setDailyPassFilter("false")
    } else {
      setDailyPassFilter("true")
      setspaceFilter("Daily Pass")
    }
  }
  function TwentyFourCheck() {
    if (TwentyFourFilter === "true") {
      setTwentyFourFilter("false")
    } else {
      setTwentyFourFilter("true")
      setspaceFilter("Twenty Four Hours")
    }
  }
  var metroquery,
    opendeskquery,
    privatecabinquery,
    dailypassquery,
    twentyfourquery = " "
  if (openDeskFilter === "true") {
    opendeskquery = "Open Desk"
  } else {
    opendeskquery = " "
  }
  if (privateCabinFilter === "true") {
    privatecabinquery = "Private Cabin"
  } else {
    privatecabinquery = " "
  }
  if (DailyPassFilter === "true") {
    dailypassquery = "Daily Pass"
  } else {
    dailypassquery = " "
  }
  if (MetroNearByFilter === "true") {
    metroquery = "Metro Nearby"
  } else {
    metroquery = " "
  }
  if (TwentyFourFilter === "true") {
    twentyfourquery = "Twenty Four Hours"
  } else {
    twentyfourquery = " "
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
              className={"CheckBox " + DailyPassFilter}
              onClick={DailyPassCheck}
            >
              Daily Pass{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + MetroNearByFilter}
              onClick={MetroNearByCheck}
            >
              Near Metro{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + privateCabinFilter}
              onClick={privateCabinCheck}
            >
              Private Cabin{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className={"CheckBox " + openDeskFilter} onClick={openDeskCheck}>
              Desk <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + TwentyFourFilter}
              onClick={TwentyFourCheck}
            >
              24x7 <i className="fa fa-times-circle" aria-hidden="true"></i>
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
        <title>
          Book Shared Offices, Coworking Spaces, Private Offices and Meeting,
          Event, Training spaces @ Pune - GoFloaters
        </title>
        <meta
          name="description"
          content=" Book Shared Offices, Coworking Spaces, Private Offices and Meeting,
          Event, Training spaces @ Pune - GoFloaters"
        ></meta>
        <meta
          name="keywords"
          content="Book Private Office, Shared office, Coworking Space"
        />
      </Helmet>
      <Layout>
        <HeaderBanner headerclass="office-space">
          <h1>Office Spaces in Pune</h1>
        </HeaderBanner>
        <div className="container">
          <ul className="ListingFilter DesktopOnly">
            <li>
              <Link to="/office-spaces-for-rent-in-pune/" className="active">
                Office Spaces
              </Link>
            </li>
            <li>
              <Link to="/coworking-spaces-in-pune/">Work Cafe</Link>
            </li>
            <li>
              <Link to="/meeting-rooms-in-pune/">Meeting Spaces</Link>
            </li>

            <li>
              <Link to="/training-rooms-in-pune/">Training Room</Link>
            </li>
            <li>
              <Link to="/event-spaces-in-pune/">Event Spaces</Link>
            </li>
          </ul>
          <div className="MobileOnly">
            <b>Showing: </b>
            <select
              className="form-control"
              onChange={e => {
                locationSelected(e.currentTarget.value)
              }}
            >
              <option value="Work Cafe">Work Cafe</option>
              <option value="Meeting Spaces">Meeting Spaces</option>
              <option value="Office Spaces" selected>
                Office Spaces
              </option>
              <option value="Training Room">Training Room</option>
              <option value="Event Spaces">Event Spaces</option>
            </select>
          </div>
        </div>
        <div className="container">
          <OfficeFilter></OfficeFilter>
        </div>
        <div className="container">
          <p>
            <br></br>
            {spaceSize} Office Spaces available for you
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
                listData.Facility.search(opendeskquery) > 1 &&
                listData.Facility.search(privatecabinquery) > 1 &&
                listData.Facility.search(dailypassquery) > 1 &&
                listData.Facility.search(metroquery) > 1 &&
                listData.Facility.search(twentyfourquery) > 1
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
export default Pune
export const query = graphql`
  query Pune {
    allListings(
      filter: { subType: { eq: "Office Space" }, spaceCity: { eq: "Pune" } }
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
