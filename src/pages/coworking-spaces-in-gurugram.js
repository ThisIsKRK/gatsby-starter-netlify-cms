import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import OfficeSpacesContent from "../components/officespacecontent"
import HeaderBanner from "../components/headerbanner"
import OfficeSpaceLocationSwitch from "../components/coworkingspacelocationswitch"
import DailyListingCard from "../components/Card/dailylistingcard"
import SEOHeader from "../components/seo-header"
import SocialImage from "../img/socialimage/office-spaces-for-rent-in-gurugram.jpg"
import { graphql, Link } from "gatsby"

const GurgaonCoworkingSpace = props => {
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
        title="Best coworking spaces in Gurgaon | Office for rent in Gurgaon | Gofloaters"
        description="Book furnished coworking spaces in Gurgaon for a day instantly. Great amenities and spacious coworking spaces available in Gurgaon for you to choose from."
        socialURL="https://assets.gofloaters.com/socialimage/coworking-spaces-in-gurugram.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="office-space"></HeaderBanner>*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="listingpageTitle">
                Coworking Spaces in Gurgaon
              </h1>
              <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                Coworking Spaces for every size |
                All inclusive pricing
              </h2>
              <div className="padding-20"></div>{" "}
              <p style={{ fontSize: "13px" }}>
                Your search for best coworking space in Gurgaon has a
                destination at GoFloaters. The range of a hot desk in Gurgaon is
                from Rs 200 / day to Rs 700 / day. Some of the popular
                localities are Udyog Vihar, Golf Course Road, Huda city Centre
                and Cyber City.
              </p>
              <SearchForm spacetype="dailyofficeSpace"></SearchForm>
              <br></br>
              <div className="padding-20"></div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-12">
              <OfficeSpaceLocationSwitch city="Gurugram" />
            </div>
          </div>
          <div className="filterbar" style={{ marginTop: 15 }}>
            <ul className="SearchListingFilter scrollmenu">
              <li>
                <Link to="/coworking-spaces-in-gurugram/" className="active">
                  Coworking Spaces
                </Link>
              </li>
            
              <li>
                <Link to="/meeting-rooms-in-gurugram/">Meeting Spaces</Link>
              </li>
              <li>
                <Link to="/office-spaces-for-rent-in-gurugram/">
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
            {spaceSize} Coworking Spaces in Gurugram available for you
          </p>
          <div className="row">
            {lists.map((list, i) => {
              const listData = list.node
              if (spaceFilter === "All") {
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
            <h4 style={{ fontWeight: "bold" }}>Coworking Space in Gurgaon </h4>

            <p>
              Looking for coworking spaces in Gurgaon? Book the best coworking
              space in Gurgaon for teams of all sizes with all amenities from
              hot desks to private cabins.
              <br></br>
              <br></br>
              Gurgaon, also known as Gurugram, is a city with over 870,000
              residents, situated in the northern Indian state of Haryana,
              around 30 kilometers south-west of New Delhi. Well-connected,
              National Highway 48 provides access to Delhi and Mumbai, while
              Indira Gandhi International Airport is located just outside of
              Gurgaon, near National Highway 8.
              <br></br>
              <br></br>
              Gurgaon is India's second largest information technology hub and
              third largest financial and banking hub. Gurgaon is also home to
              India's largest medical tourism industry. Despite being India's
              56th largest city in terms of population, Gurgaon is the 8th
              largest city in the country in terms of total wealth. Gurgaon's
              economic growth started in the 1970s when Maruti Suzuki India
              Limited established a manufacturing plant and gathered pace after
              General Electric established its business outsourcing operations
              in the city in collaboration with real-estate firm DLF.
              <br></br>
              <br></br>
              Various international companies, including Coca-Cola, Pepsi, BMW,
              Agilent Technologies, Hyundai have chosen Gurgaon to be their
              Indian corporate headquarters. Retail is an important industry in
              Gurgaon, with the presence of 26 shopping malls.
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
              Gurgaon has a variety of coworking spaces for you to choose from.
              Some popular brands of coworking spaces in Gurgaon are WeWork,
              Plus Offices, 91Springboard and ABL Workspaces.
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Coworking Locations in Gurgaon
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Udyog Vihar</h5>

            <p>
              Udyog Vihar is located near Delhi-Gurgaon Border and 8 km from
              Indira Gandhi International Airport on National Highways 8. The
              location is planned and well connected with roads. Rapid Metro
              rail is the most feasible transport option available. DLF Phase
              III is the nearest metro station to Udyog Vihar which is connected
              to Sikandarpur Metro Station, which further connects metro to
              different parts of Delhi and Gurgaon. Hyatt Place, The Leela,
              Trident Hotel, The Oberoi and Country Inn Carlson are some of the
              famous hotels near Udyog Vihar. It is one of the best locations
              for office space in Gurgaon.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Sector- 54</h5>
            <p>
              From the point of connectivity, Sector-54 chowk itself is a metro
              station, from where one can easily reach out to Delhi in just a
              few minutes. HCL healthcare clinic and Gmerk hospital is in the
              radius of 10 Kms. South point Mall, Fabindia and Sahara Mall are
              the all-time favorite hotspots for fun lovers and visitors. Also,
              the Suncity project in sector-54 offers a best residential premise
              as per your budget, if you are looking to settle down there.
              Sector-54 well supports the co-working spaces in Gurgaon, meeting
              rooms and conference rooms.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Sector-48 &amp; 49</h5>
            <p>
              Both the sectors are known for its excellent education facilities
              including world class schools such as G.D. Goenka public school,
              Eden castle school, Budding minds, GEMS modern academy etc. The
              area has Merchant marine academy, E.C.H.S Polyclinic, Quest
              diagnostics and many more with world class medical facilities. If
              you are a foodie, you have the choice of Cyber adda 24, Mehfil
              Restaurant, Subway, the coriander, Colonel&rsquo;s kitchen and
              many more.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>DLF Cyber City</h5>
            <p>
              As the name suggests, Cyber city is the Cyber hub of big corporate
              and IT Industries from all over the world. This is a highly
              recommended location, if you are looking for office space for rent
              or shared office space or co-working space in Gurgaon. DLF Cyber
              city and Udyog Vihar are only 2-3 Kms. Apart from that, facilities
              are almost similar to those in Udyog Vihar. Presence of several
              companies in a small area makes this a busy part of the city.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your coworking space in Gurgaon
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
export default GurgaonCoworkingSpace
export const query = graphql`
  query GurgaonCoworkingSpace {
    allListings(
      filter: {
        subType: { eq: "Office Space" }
        spaceCity: { eq: "Gurugram" }
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
