import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import HeaderBanner from "../components/headerbanner"
import TrainingSpaceContent from "../components/trainingspacecontent"
import TrainingLocationSwitch from "../components/traininglocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql } from "gatsby"

const GurugramTrainingRooms = props => {
  const [spaceFilter, setspaceFilter] = useState("All")
  const [spaceSize, setspaceSize] = useState([])
  const [ProjectFilter, setProjectFilter] = useState("false")
  const [CoffeeTeaFilter, setCoffeeTeaFilter] = useState("false")
  const [LessTenFilter, setLessTenFilter] = useState("false")
  const [TenToTwentyFilter, setTenToTwentyFilter] = useState("false")
  const [MorethanTwentyFilter, setMorethanTwentyFilter] = useState("false")
  const [SystemFilter, setSystemFilter] = useState("false")

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
  function LessTenCheck() {
    if (LessTenFilter === "true") {
      setLessTenFilter("false")
    } else {
      setLessTenFilter("true")
      setspaceFilter("Less Than Ten")
    }
  }

  function TenToTwentyCheck() {
    if (TenToTwentyFilter === "true") {
      setTenToTwentyFilter("false")
    } else {
      setTenToTwentyFilter("true")
      setspaceFilter("Ten to Twenty")
    }
  }
  function MoreThanTwentyCheck() {
    if (MorethanTwentyFilter === "true") {
      setMorethanTwentyFilter("false")
    } else {
      setMorethanTwentyFilter("true")
      setspaceFilter("More Than Twenty")
    }
  }
  function SystemCheck() {
    if (SystemFilter === "true") {
      setSystemFilter("false")
    } else {
      setSystemFilter("true")
      setspaceFilter("System")
    }
  }
  var projectquery,
    coffeeteaquery,
    lesstenquery,
    tentotwenty,
    morethantwentyquery,
    fivefiftyquery,
    tvquery,
    systemquery = " "

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
  if (LessTenFilter === "true") {
    lesstenquery = "Less Than Ten"
  } else {
    lesstenquery = " "
  }
  if (TenToTwentyFilter === "true") {
    tentotwenty = "Ten To Twenty"
  } else {
    tentotwenty = " "
  }
  if (MorethanTwentyFilter === "true") {
    morethantwentyquery = "More than Twenty"
  } else {
    morethantwentyquery = " "
  }
  if (SystemFilter === "true") {
    systemquery = "With Systems"
  } else {
    systemquery = " "
  }

  if (LessTenFilter === "true" && TenToTwentyFilter === "true") {
    fivefiftyquery = "toption a"
  }
  if (LessTenFilter === "true" && MorethanTwentyFilter === "true") {
    fivefiftyquery = "toption b"
  }
  if (TenToTwentyFilter === "true" && MorethanTwentyFilter === "true") {
    fivefiftyquery = "toption c"
  }
  if (
    LessTenFilter === "true" &&
    TenToTwentyFilter === "true" &&
    MorethanTwentyFilter === "true"
  ) {
    fivefiftyquery = "toption d"
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
            <a className={"CheckBox " + LessTenFilter} onClick={LessTenCheck}>
              &lt; 10 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + TenToTwentyFilter}
              onClick={TenToTwentyCheck}
            >
              10 to 20 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + MorethanTwentyFilter}
              onClick={MoreThanTwentyCheck}
            >
              &gt; 20 Seats{" "}
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
            <a className={"CheckBox " + SystemFilter} onClick={SystemCheck}>
              With Systems{" "}
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
        <title>
          Training spaces on Hourly, Daily & Monthly Rental in Gurugram -
          GoFloaters
        </title>
        <meta
          property="og:title"
          content="Training spaces on Hourly, Daily & Monthly Rental - GoFloaters"
        />
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
        <HeaderBanner headerclass="training-space">
          {" "}
          <h1>Training Spaces in Gurugram</h1>
        </HeaderBanner>
        <div className="container">
          <TrainingSpaceContent />
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
                <TrainingLocationSwitch city="Gurugram" />
              </div>
            </div>
            <br />
            <div>
              <OfficeFilter></OfficeFilter>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="container">
          <p>
            <br></br>
            {spaceSize} Training Spaces available for you
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
                listData.Facility.search(systemquery) > 1 &&
                ((listData.Facility.search(lesstenquery) > 1 &&
                  listData.Facility.search(tentotwenty) > 1 &&
                  listData.Facility.search(morethantwentyquery) > 1) ||
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
export default GurugramTrainingRooms
export const query = graphql`
  query GurugramTrainingRooms {
    allListings(
      filter: {
        subType: { eq: "Training Room" }
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
