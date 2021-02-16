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

const PuneCoworkingSpace = props => {
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
         title="Best coworking spaces in Pune | Office for rent in Pune | Gofloaters"
         description="Book furnished coworking spaces in Pune for a day instantly. Great amenities and spacious coworking spaces available in Pune for you to choose from."
        socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces-in-pune.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="office-space"></HeaderBanner>*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="listingpageTitle">Coworking Spaces in Pune</h1>
              <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                Coworking Spaces for every size |
                All inclusive pricing
              </h2>
              <div className="padding-20"></div>
              <p style={{ fontSize: "13px" }}>
                Your search for best coworking space in Pune has a destination
                at GoFloaters. The range of a hot desk in Pune is from Rs 200 /
                day to Rs 700 / day. Some of the popular localities are <a href="https://gofloaters.com/search/?city=Baner,%20Pune,%20%20Maharashtra&lat=18.5642452&lng=73.7768511&spaceType=monthlyofficeSpace">Baner</a>,{" "}
                <a href="https://gofloaters.com/search/?city=Koregaon%20Park,%20Pune,%20%20Maharashtra&lat=18.5362084&lng=73.8939748&spaceType=dailyofficeSpace">Koregaon Park</a>  and <a href="https://gofloaters.com/search?city=Kharadi,%20Pune,%20%20Maharashtra&lat=18.5538241&lng=73.9476689&spaceType=officeSpace">Kharadi</a>.
              </p>
              <SearchForm spacetype="dailyofficeSpace"></SearchForm>
              <br></br>
              <div className="padding-20"></div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-12">
              <OfficeSpaceLocationSwitch city="Pune" />
            </div>
          </div>
          <div className="filterbar" style={{ marginTop: 15 }}>
            <ul className="SearchListingFilter scrollmenu">
              <li>
                <Link to="/coworking-spaces-in-pune/" className="active">
                  Coworking Spaces
                </Link>
              </li>
             
              <li>
                <Link to="/meeting-rooms-in-pune/">Meeting Spaces</Link>
              </li>
              <li>
                <Link to="/office-spaces-for-rent-in-pune/">Office Spaces</Link>
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
            {spaceSize} Coworking Spaces in Pune available for you
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
          </div>{" "}
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>Coworking Space in Pune </h4>
            <p>
              Looking for coworking spaces in Pune? Book the best coworking
              space in Pune for teams of all sizes with all amenities from hot
              desks to private cabins.
              <br></br>
              <br></br>
              The eighth largest metropolitan city in India, Pune is located in
              the western Indian state of Maharashtra, with a population of 31.2
              lakhs. It is the second largest city after Mumbai and is rapidly
              showing growth in its economic and industrial spheres. Once the
              land of Marathas in the 18th century, the presence of the various
              edifices in the city reflect the rich and glorious history.
              <br></br>
              <br></br>
              Pune has a traditional economic base due to the continuous growth
              of already established companies. Pune also stands out to be one
              of the major educational hubs of the country, ideally known as
              ‘The Oxford of the East’. Students all over the globe travel to
              the city to get the best of education from renowned universities
              like Savitribai Phule University, Symbiosis International
              University, MIT World Peace University, Bharati Vidyapeeth
              University among others.
              <br></br>
              <br></br>
              With this, it has seen an upsurge in real estate, engineering,
              automotive, information technology industries as well. This has
              attracted many companies to build their office base in the city
              for all good reasons. From Tata Consultancy Services, Jaguar,
              Kohler Power, Wipro, Volkswagen, Cognizant to other
              multinationals, you would find them all.
              <br></br>
              <br></br>
              Coworking spaces offer individuals and companies the flexibility
              of access to work spaces that have all the amenities of a
              traditional office and sometimes more on a simple rental model.
              The biggest advantage of coworking spaces is the networking
              opportunities. Coworking spaces on GoFloaters platform are
              available on day basis rentals where you just pay-per-use as per
              your need. You don’t sign any contracts or lock-in your money on
              security deposits.
              <br></br>
              <br></br>
              Some popular brands of coworking spaces in Pune are Awfis, Regus,
              Smartworks, Meraki Spaces, Collab Workspace, 91Springboard and
              IndiQube.
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Coworking Locations in Pune
            </h4>
            <br /> <h5 style={{ fontWeight: "bold" }}>Yerawada</h5>
            <p>
              Also known as Yeraoda, Yerwada is home to famous places like Tech
              Park One, Commerce zone, Business bay, and Muttha Towers. These
              names are enough to define the infrastructural and commercial
              power of this area.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Baner</h5>
            <p>
              Baner is widely known for its traditional rituals and bhakti
              aradhana. However, the place is well known for commercial setups
              too. Prabhavee Tech Park and Nanospace IT Park are the two famous
              and must-go places in Baner.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Kharadi</h5>
            <p>
              Located at the banks of Mula-mutha river, Kharadi is a suburb in
              Pune, known for IT companies. EON IT park and world trade center
              are the two attractions of the place.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Hinjawadi</h5>
            <p>
              Pune&rsquo;s Hinjewadi area has travelled far from rural to urban
              at the speed of IT. Once an anonymous destination comprising small
              villages, Hinjewadi is now a crucial spot of real estate. With the
              inauguration of the 2800 acre Rajiv Gandhi Infotech Park and
              subsequent entry of IT companies, this area has witnessed a huge
              growth in its working population.&nbsp;
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Magarpatta</h5>
            <p>
              Magarpatta is a 450 acre, privately owned community, located in
              the Hadapsar area of Pune. It is a rapidly growing commercial hub
              with companies like Deutsche Bank, WNS Global Services, Accenture,
              HCL Technologies among other commercial setups.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your coworking space in Pune
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
export default PuneCoworkingSpace
export const query = graphql`
  query PuneCoworkingSpace {
    allListings(
      filter: {
        subType: { eq: "Office Space" }
        spaceCity: { eq: "Pune" }
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
