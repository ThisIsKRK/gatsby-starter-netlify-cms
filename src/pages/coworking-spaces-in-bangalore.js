import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SearchForm from "../components/search/search"
import HeaderBanner from "../components/headerbanner"
import OfficeSpaceLocationSwitch from "../components/coworkingspacelocationswitch"
import DailyListingCard from "../components/Card/dailylistingcard"
import SEOHeader from "../components/seo-header"

import { graphql, Link } from "gatsby"

const BangaloreCoworkingSpace = props => {
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
        title="Best coworking spaces in Bangalore | Office for rent in Bangalore | Gofloaters"
        description="Book furnished coworking spaces in Bangalore for a day instantly. Great amenities and spacious coworking spaces available in Bangalore for you to choose from."
        socialURL="https://assets.gofloaters.com/socialimage/office-spaces-for-rent-in-bengaluru.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="office-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Coworking Spaces in Bangalore
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Coworking Spaces for every size | All inclusive pricing
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  If you are looking for the best coworking space in Bangalore
                  then you have come to the right page. An average cost of a hot
                  desk in Bangalore is in the range of Rs 250 / day. Some of the
                  popular localities are{" "}
                  <a href="https://gofloaters.com/search/?city=Koramangala,%20Bengaluru,%20%20Karnataka&lat=12.9351929&lng=77.62448069999999&spaceType=dailyofficeSpace">
                    Koramangala
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search/?city=Indiranagar,%20Bengaluru,%20%20Karnataka&lat=12.9783692&lng=77.6408356&spaceType=dailyofficeSpace">
                    Indiranagar
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com/search?city=Mahatma%20Gandhi%20Rd,%20Bengaluru,%20Karnataka&lat=12.9747066&lng=77.6072206&spaceType=dailyofficeSpace">
                    MG Road
                  </a>
                  ,{" "}
                  <a href="https://gofloaters.com//search?city=J.%20P.%20Nagar,%20Bengaluru&lat=12.8896976&lng=77.5605652&spaceType=dailyofficeSpace">
                    JP Nagar
                  </a>{" "}
                  and{" "}
                  <a href="https://gofloaters.com/search?city=Malleshwaram,%20Bengaluru&lat=13.0076971&lng=77.5585626&spaceType=dailyofficeSpace">
                    Malleswaram
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
                <OfficeSpaceLocationSwitch city="Bengaluru" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-bangalore/" className="active">
                    Coworking Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/meeting-rooms-in-bangalore/">Meeting Spaces</Link>
                </li>{" "}
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
            {spaceSize} Coworking Spaces in Bangalore available for you
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
            <h4 style={{ fontWeight: "bold" }}>Coworking Space in Bangalore</h4>
            <p>
              Looking for coworking spaces in Bangalore? Book the best coworking
              space in Bangalore for teams of all sizes with all amenities from
              hot desks to private cabins.
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
              Coworking spaces offer individuals and companies the flexibility
              of access to work spaces that have all the amenities of a
              traditional office and sometimes more on a simple rental model.
              The biggest advantage of coworking spaces is the networking
              opportunities. Coworking spaces on GoFloaters platform are
              available on day basis rentals where you just pay-per-use as per
              your need. You don&rsquo;t sign any contracts or lock-in your
              money on security deposits.
              <br />
              <br />
              Bangalore, being the startup capital of India has probably the
              largest concentration of coworking spaces. Some popular brands of
              coworking spaces in Bengaluru are IndiQube, OYO Workflo, Draper
              Street House, Novel Offices and 91Springboard.&nbsp;
            </p>
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Top Coworking Locations in Bangalore
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Koramangala</h5>
            <p>
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
            <h5 style={{ fontWeight: "bold" }}>HSR Layout</h5>
            <p>
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
            <br /> <h5 style={{ fontWeight: "bold" }}>Indiranagar</h5>
            <p>
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
            <h5 style={{ fontWeight: "bold" }}>Whitefield</h5>
            <p>
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
            <h5 style={{ fontWeight: "bold" }}>J.P. Nagar</h5>
            <p>
              Jayaprakash Narayan Nagara, popularly known as J. P. Nagar, is an
              established posh upmarket residential area located in the south of
              Bangalore. Initially, it was recognised as a major housing colony
              but gradually changed into a profitable opportunity for commercial
              projects during the IT boom in the late 1990s.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your coworking space in Bengaluru
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
export default BangaloreCoworkingSpace
export const query = graphql`
  query BangaloreCoworkingSpace {
    allListings(
      filter: {
        subType: { eq: "Office Space" }
        spaceCity: { eq: "Bengaluru" }
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
