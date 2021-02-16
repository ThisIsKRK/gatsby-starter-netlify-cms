import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchForm from "../components/search/search"
import DailyListingCard from "../components/Card/dailylistingcard"
import { graphql, Link, navigate } from "gatsby"
import SEOHeader from "../components/seo-header"
const Kochi = props => {
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
        <ul className="OfficeFilter scrollmenu">
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
      <SEOHeader
        title="Best Coworking Spaces in Kochi | Office for rent in Kochi | Gofloaters"
        description="Furnished & Ready-to-move-in office space for rent in Kochi. Flexible plans that suit your needs. Coworking Spaces for teams. All-inclusive pricing."
        socialURL="https://assets.gofloaters.com/socialimage/kochi.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Coworking Spaces in Kochi
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Coworking Spaces for every size |
                  All inclusive pricing
                </h2>

                <SearchForm spacetype="meetingSpace"></SearchForm>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-kochi/" className="active">
                    Coworking Spaces
                  </Link>
                </li>
               
                <li>
                  <Link to="/meeting-rooms-in-kochi/">Meeting Spaces</Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-kochi/">
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
            {spaceSize} Coworking Spaces in Kochi available for you
          </p>
          <div className="row">
            {lists.map((list, i) => {
              const listData = list.node
              if (spaceFilter === "All" && listData.dayPassAvailable === true) {
                return (
                  <DailyListingCard
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
                    Slug={"/coworking-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></DailyListingCard>
                )
              }
              if (
                listData.Facility.search(opendeskquery) > 1 &&
                listData.Facility.search(privatecabinquery) > 1 &&
                listData.Facility.search("Daily Pass") > 1 &&
                listData.Facility.search(metroquery) > 1 &&
                listData.Facility.search(twentyfourquery) > 1
              ) {
                return (
                  <DailyListingCard
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
                    Slug={"/coworking-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></DailyListingCard>
                )
              }
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Kochi
export const query = graphql`
  query Kochi {
    allListings(
      filter: { subType: { eq: "Office Space" }, spaceCity: { eq: "Kochi" } }
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
