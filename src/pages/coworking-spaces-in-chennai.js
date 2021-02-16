import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import OfficeSpacesContent from "../components/officespacecontent"
import HeaderBanner from "../components/headerbanner"
import OfficeSpaceLocationSwitch from "../components/coworkingspacelocationswitch"
import DailyListingCard from "../components/Card/dailylistingcard"
import SEOHeader from "../components/seo-header"

import { graphql, Link } from "gatsby"

const ChennaiCoworkingSpace = props => {
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
        title="Best coworking spaces in Chennai | Office for rent in Chennai | Gofloaters"
        description="Book furnished coworking spaces in Chennai for a day instantly. Great amenities and spacious coworking spaces available in Chennai for you to choose from."
        socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces-in-chennai.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        <div>
          {/*<HeaderBanner headerclass="office-space"></HeaderBanner>*/}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Coworking Spaces in Chennai
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Coworking Spaces for every size | All inclusive pricing
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  If you are looking for the best coworking space in Chennai
                  then you have come to the right page. An average cost of a hot
                  desk in Chennai is in the range of Rs 250 / day. Some of the
                  popular localities are{" "}
                  <a href="https://gofloaters.com/search?city=Guindy,%20Chennai,%20%20Tamil%20Nadu&lat=13.0066625&lng=80.2206369&spaceType=dailyofficeSpace">
                    Guindy
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search?city=Nungambakkam,%20Chennai,%20%20Tamil%20Nadu&lat=13.0569467&lng=80.242469&spaceType=dailyofficeSpace">
                    Nungambakkam
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/searchresult?city=Teynampet,%20Chennai,%20%20Tamil%20Nadu&lat=13.0404742&lng=80.25033350000001&spaceType=dailyofficeSpace">
                    Teynampet
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search?city=Alwarpet,%20Chennai,%20%20Tamil%20Nadu&lat=13.0334869&lng=80.2531271&spaceType=officeSpace">
                    Alwarpet
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/searchresult?city=Anna%20Nagar,%20Chennai,%20%20Tamil%20Nadu&lat=13.0849557&lng=80.2101342&spaceType=dailyofficeSpace">
                    Anna Nagar
                  </a>{" "}
                  and{" "}
                  <a href="https://gofloaters.com/searchresult?city=Perungudi,%20Chennai,%20%20Tamil%20Nadu&lat=12.9653652&lng=80.2461057&spaceType=dailyofficeSpace">
                    Perungudi
                  </a>
                  .
                  <br />
                </p>
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
                listData.dayPassAvailable === true &&
                listData.Facility.search(opendeskquery) > 1 &&
                listData.Facility.search(privatecabinquery) > 1 &&
                listData.Facility.search(dailypassquery) > 1 &&
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
          </div>{" "}
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>
              Coworking Space in Chennai&nbsp;
            </h4>

            <p>
              Looking for coworking spaces in Chennai? Book the best coworking
              space in Chennai for teams of all sizes with all amenities from
              hot desks to private cabins.
              <br></br>
              <br></br>
              Chennai, formerly known as Madras, is a 369-year-old city and is
              the capital of the southern state of Tamilnadu. It serves as one
              of the main gateways to South India and has a thriving local
              culture and art scene and is one of the major destinations for
              medical tourism. It is considered as one of the world's fastest
              growing cities although ranks 13th in terms of cleanliness. It is
              on the Coromandel coast of the Bay of Bengal and has the second
              longest beach front of any municipality in the world.
              <br></br>
              <br></br>
              With an exponential growth in the entrepreneurial ecosystem in
              Chennai, the startup culture is gaining prominence. Chennai is
              considered the SaaS capital of India with startups like Zoho,
              Freshworks, ChargeBee to claim Chennai their home. Coworking is
              picking up as the popular choice as the way of working for
              startups and many small and medium enterprises.&nbsp;
              <br></br>
              <br></br>
              Coworking spaces offer individuals and companies the flexibility
              of access to work spaces that have all the amenities of a
              traditional office and sometimes more on a simple rental model.
              The biggest advantage of coworking spaces is the networking
              opportunities. Coworking spaces on GoFloaters platform are
              available on day basis rentals where you just pay-per-use as per
              your need. You don&rsquo;t sign any contracts or lock-in your
              money on security deposits.&nbsp;
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Coworking Locations in Chennai
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Old Mahabalipuram Road&nbsp;</h5>
            <p>
              This stretch of road starts from Madhya Kailash till it ends in
              Mahabalipuram. This road is also called the IT Expressway with
              many IT parks and large IT MNC dotting the road. It is also
              well-known for many educational, technical institutions and
              medical laboratories. Startups and service companies prefer to
              take up space on this road as the talent pool is available to
              tap.&nbsp;
            </p>
            <br></br>
            <h5 style={{ fontWeight: "bold" }}>Guindy</h5>
            <p>
              A largely industrial district, Guindy is also home to Guindy
              National Park. The Kathipara Junction with its butterfly flyover
              is a prominent landmark in this area. Three main roads of Chennai
              namely Anna Salai, Mount-Poonamallee Road, Inner Ring Road, 100
              Feet Road or Jawaharlal Nehru Road, and GST Road meet here. Guindy
              is well connected by road and train services. It is also well
              connected by the trains with MRTS and Metro station. Guindy is
              also located 10 km away from the airport. Due to its connectivity
              many startups, small businesses and large companies have Guindy as
              their first preference when it comes to office space.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Teynampet</h5>
            <p>
              Teynampet is one of the busiest commercial localities in the city
              of Chennai. Teynampet is along Anna Salai, the arterial road of
              Chennai. Teynampet also has some of the poshest pieces of real
              estate and properties in Chennai. Teynampet is also well connected
              via public bus and metro transport. Startups prefer Teynampet for
              its connectivity.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Nungambakkam</h5>
            <p>
              Nungambakkam is one of the oldest parts of Chennai. Located along
              Anna Salai, Nungambakkam is the official downtown of Chennai. The
              neighborhood is home to many multi-national commercial
              establishments, important government offices, foreign consulates,
              sprawling educational institutions, shopping malls, sporting
              facilities, tourist spots, star hotels, restaurants, and cultural
              centers. Nungambakkam is also a prime residential area in Chennai.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Anna Nagar</h5>
            <p>
              Anna Nagar is located in the north-western part of Chennai. It is
              one of the prime residential areas in Chennai and is home to
              several prominent doctors, lawyers and politicians. Real estate
              prices are among the highest in the city. Anna Nagar has several
              established schools and colleges, places of worship and shopping
              areas.&nbsp;
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your coworking space in Chennai
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
export default ChennaiCoworkingSpace
export const query = graphql`
  query ChennaiCoworkingSpace {
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
