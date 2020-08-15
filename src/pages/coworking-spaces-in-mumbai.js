import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import WorkCafeContent from "../components/workcafecontent"
import HeaderBanner from "../components/headerbanner"
import WorkSpaceLocationSwitch from "../components/workspaceslocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql } from "gatsby"

const MumbaiWorkCafe = props => {
  const [spaceFilter, setspaceFilter] = useState("All")
  const [spaceSize, setspaceSize] = useState([])
  const [MetroNearByFilter, setMetroNearByFilter] = useState("false")
  const [OpenSixFilter, setOpenSixFilter] = useState("false")
  const [MostPopularFilter, setMostPopularFilter] = useState("false")
  function MetroNearByCheck() {
    if (MetroNearByFilter === "true") {
      setMetroNearByFilter("false")
    } else {
      setMetroNearByFilter("true")
      setspaceFilter("Metro Nearby")
    }
  }

  function OpenSixCheck() {
    if (OpenSixFilter === "true") {
      setOpenSixFilter("false")
    } else {
      setOpenSixFilter("true")
      setspaceFilter("Open 6PM")
    }
  }
  function MostPopularCheck() {
    if (MostPopularFilter === "true") {
      setMostPopularFilter("false")
    } else {
      setMostPopularFilter("true")
      setspaceFilter("Most Popular")
    }
  }
  var metroquery,
    opensixquery,
    mostpopularquery = " "

  if (MetroNearByFilter === "true") {
    metroquery = "Metro Nearby"
  } else {
    metroquery = " "
  }
  if (OpenSixFilter === "true") {
    opensixquery = "Open 6PM"
  } else {
    opensixquery = " "
  }
  if (MostPopularFilter === "true") {
    mostpopularquery = "Most Popular"
  } else {
    mostpopularquery = " "
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
              className={"CheckBox " + MetroNearByFilter}
              onClick={MetroNearByCheck}
            >
              Near Metro{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className={"CheckBox " + OpenSixFilter} onClick={OpenSixCheck}>
              Open &gt; 6PM{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + MostPopularFilter}
              onClick={MostPopularCheck}
            >
              Most Popular{" "}
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
        <title>Work Cafes | Coworking Spaces in Mumbai - GoFloaters</title>
        <meta
          property="og:title"
          content="Work Cafes | Coworking Spaces in Mumbai - GoFloaters"
        />
        <meta
          name="description"
          content="Coworking cafés at GoFloaters offer a calm and productive environment to get work done. High speed Wi-Fi, plug points, and excellent seating is guaranteed!"
        ></meta>

        <meta
          name="og:description"
          content="Coworking cafés at GoFloaters offer a calm and productive environment to get work done. High speed Wi-Fi, plug points, and excellent seating is guaranteed!"
        ></meta>
        <meta
          name="keywords"
          content="gofloaters ahmedabad, Book Private Office, Shared office, Coworking Space"
        />
      </Helmet>
      <Layout>
        <HeaderBanner headerclass="work-cafe">
          {" "}
          <h1>Coworking Spaces in Mumbai</h1>
        </HeaderBanner>
        <div className="container">
          <WorkCafeContent />
        </div>
        <div className="SpaceGray">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="padding-20"></div>
                <SearchForm spacetype="officeSpace"></SearchForm>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>

              <div className="col-md-12">
                <br></br> <br></br>
                <WorkSpaceLocationSwitch city="Mumbai" />
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
            {spaceSize} Work Cafes available for you
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
                listData.Facility.search(opensixquery) > 1 &&
                listData.Facility.search(mostpopularquery) > 1 &&
                listData.Facility.search(metroquery) > 1
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
export default MumbaiWorkCafe
export const query = graphql`
  query MumbaiWorkCafe {
    allListings(
      filter: { subType: { eq: "Work Cafe" }, spaceCity: { eq: "Mumbai" } }
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
