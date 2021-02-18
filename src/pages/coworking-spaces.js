import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchForm from "../components/search/search"
import OfficeSpaceLocationSwitch from "../components/coworkingspacelocationswitch"
import DailyListingCard from "../components/Card/dailylistingcard"
import { graphql, Link } from "gatsby"
import SEOHeader from "../components/seo-header"
const CoworkingSpace = props => {
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
  var officequery,
    metroquery,
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
  if (
    privateCabinFilter === "false" &&
    DailyPassFilter === "false" &&
    MetroNearByFilter === "false" &&
    TwentyFourFilter === "false"
  ) {
    officequery = true
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
        title="Coworking Spaces in India available in 18 cities - GoFloaters"
        description="Book furnished coworking spaces for a day instantly. Great amenities and spacious coworking spaces  available in 18 cities for you to choose from."
        socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="office-space"></HeaderBanner>*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="listingpageTitle">Coworking Spaces</h1>
              <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                Coworking Spaces for every size |
                All inclusive pricing
              </h2>
              <div className="padding-20"></div>
              <SearchForm spacetype="dailyofficeSpace"></SearchForm>
              <br></br>
              <div className="padding-20"></div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-12">
              <OfficeSpaceLocationSwitch city="Chennai" />
            </div>
          </div>
          <div className="filterbar" style={{ marginTop: 15 }}>
            <ul className="SearchListingFilter scrollmenu">
              <li>
                <Link to="/coworking-spaces-in-chennai/" className="active">
                  Coworking Spaces
                </Link>
              </li>
              
              <li>
                <Link to="/meeting-rooms-in-chennai/">Meeting Spaces</Link>
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
        <div className="container">
          <p>
            <br></br>
            {spaceSize} Coworking Spaces in Chennai available for you
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
                listData.dayPassAvailable === true &&
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
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>
              Best Coworking Spaces Near Me
            </h4>
            <p>
              Are you a freelancer or an independent professional? Do you own a
              startup or a small/medium business or part of a large enterprise?
              We know exactly what you need when it comes to an office.
              We&rsquo;ve done all the work for you! We&rsquo;ve handpicked
              office spaces in your city - spaces that come with fast Wi-Fi,
              well-designed interiors and ample plug points. If you have just
              typed &ldquo;coworking spaces near me&rdquo; and landed at this
              page, then congratulations, you are at the right place. Here you
              can find a huge variety of coworking spaces, office spaces for
              different team sizes and meeting spaces that suit your every
              meeting need.
            </p>
            <br />
            <h4 style={{ fontWeight: "bold" }}>What is a Coworking Space?</h4>
            <p>
              The origins of coworking spaces can be attributed to the hacker
              spaces that came up in cities like Berlin, San Francisco and
              Brooklyn in 1995. In 1995 the word&nbsp; &ldquo;coworking&rdquo;
              was first used by Bernard DeKoven, who described it as
              &ldquo;working together as equals.&rdquo;&nbsp; Coworking spaces
              offer individuals and companies the flexibility of access to work
              spaces that have all the amenities of a traditional office and
              sometimes more on a simple rental model. The biggest advantage of
              coworking spaces is the networking opportunities. Coworking spaces
              on GoFloaters platform are available on day basis rentals where
              you just pay-per-use as per your need. You don&rsquo;t sign any
              contracts or lock-in your money on security deposits.&nbsp;
            </p>
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              What are the benefits of shared office spaces and coworking
              spaces?
            </h4>

            <p>
              Traditional offices burden a business with high rents, hidden
              charges and high lock in periods. These have given way for
              stylish, contemporary and functional shared office spaces and
              coworking spaces. Whether you are a freelancer, startup or a
              service company your choice of workspace in 2021 should be
              coworking spaces or shared office spaces. Here are the top
              benefits that you get when you choose either of the two :&nbsp;
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
export default CoworkingSpace
export const query = graphql`
  query CoworkingSpace {
    allListings(
      filter: {
        subType: { eq: "Office Space" }
        spaceCity: { eq: "Chennai" }
        dayPassAvailable: { eq: true }
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
