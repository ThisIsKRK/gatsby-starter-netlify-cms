import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import OfficeSpacesContent from "../components/officespacecontent"
import HeaderBanner from "../components/headerbanner"
import OfficeSpaceLocationSwitch from "../components/officespacelocationswitch"
import MonthlyListingCard from "../components/Card/monthlylistingcard"
import SEOHeader from "../components/seo-header"

import { graphql, Link } from "gatsby"

const MumbaiDailyOfficeSpace = props => {
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
        title="Office for rent in Mumbai | Best coworking spaces in Mumbai | Gofloaters"
        description="Furnished Office Space for rent in Mumbai with High-Speed Internet. Great amenities and spacious offices available for you to choose from. Book Instantly."
        socialURL="https://assets.gofloaters.com/socialimage/office-spaces-for-rent-in-mumbai.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="office-space"></HeaderBanner>*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="listingpageTitle">Monthly Office Spaces in Mumbai</h1>
              <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                Office for every size | All inclusive
                pricing
              </h2>
              <div className="padding-20"></div>
              <p style={{ fontSize: "13px" }}>
                Your search for best office space on rent in Mumbai has a
                destination at GoFloaters. The range of a dedicated desk in
                Mumbai is from Rs 4000 / month to Rs 8000 / month. Some of the
                popular localities are <a href="https://gofloaters.com/search?city=Dwarka,%20New+Delhi,%20Delhi&lat=28.5733056&lng=77.0100758&spaceType=monthlyofficeSpace">Andheri</a>, <a href="https://gofloaters.com/searchresult?city=Andheri%20East,%20Mumbai,%20%20Maharashtra&lat=19.1178548&lng=72.8631304&spaceType=monthlyofficeSpace">Andheri East</a>,{" "}
                   <a href="https://gofloaters.com/search/?city=Borivali,%20Mumbai,%20Maharashtra&lat=19.2317945&lng=72.8369492&spaceType=monthlyofficeSpace">Borivali</a>, <a href="https://gofloaters.com/search/?city=Navi%20Mumbai,%20Maharashtra,%20%20India&lat=19.0330488&lng=73.0296625&spaceType=meetingSpace">Navi Mumbai</a>, <a href="https://gofloaters.com/searchresult?city=Thane,%20Maharashtra,%20%20India&lat=19.2183307&lng=72.9780897&spaceType=monthlyofficeSpace">Thane</a> and <a href="https://gofloaters.com/search/?city=Lower%20Parel,%20Mumbai,%20%20Maharashtra&lat=18.9982461&lng=72.82696460000001&spaceType=monthlyofficeSpace">Lower Parel</a>.
              </p>
              <SearchForm spacetype="dailyofficeSpace"></SearchForm>
              <br></br>
              <div className="padding-20"></div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-12">
              <OfficeSpaceLocationSwitch city="Mumbai" />
            </div>
          </div>
          <div className="filterbar" style={{ marginTop: 15 }}>
            <ul className="SearchListingFilter scrollmenu">
              <li>
                <Link to="/coworking-spaces-in-mumbai/">Coworking Spaces</Link>
              </li>
            
              <li>
                <Link to="/meeting-rooms-in-mumbai/">Meeting Spaces</Link>
              </li>
              <li>
                <Link
                  to="/office-spaces-for-rent-in-mumbai/"
                  className="active"
                >
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
            {spaceSize} Office Spaces in Mumbai available for you
          </p>
          <div className="row">
            {lists.map((list, i) => {
              const listData = list.node
              if (
                spaceFilter === "All" &&
                listData.monthPassAvailable === true
              ) {
                return (
                  <MonthlyListingCard
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
                    Slug={"/office-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></MonthlyListingCard>
                )
              }
              if (
                listData.Facility.search(opendeskquery) > 1 &&
                listData.Facility.search(privatecabinquery) > 1 &&
                listData.monthPassAvailable === true &&
                listData.Facility.search(metroquery) > 1 &&
                listData.Facility.search(twentyfourquery) > 1
              ) {
                return (
                  <MonthlyListingCard
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
                    Slug={"/office-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></MonthlyListingCard>
                )
              }
            })}
          </div>
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>Office Spaces in Mumbai</h4>
            <p>
              Looking for shared office spaces in Mumbai? Book the best office
              space in Mumbai for teams of all sizes with all amenities from hot
              desks to private cabins.
              <br></br>
              <br></br>
              Mumbai, the country’s renowned financial centre, is the largest
              city of India. Mumbai is also the richest city of India and has
              the highest GDP. Mumbai is also ranked among top 10 commercial
              centres of the world.
              <br></br>
              <br></br>
              Being the commercial capital of the country, Mumbai is one of the
              most preferred destinations for both the Indian and International
              companies. It houses important financial institutions such as the
              Reserve Bank of India, the Bombay Stock Exchange, and the
              corporate headquarters of many companies. The city is rapidly
              establishing a convenient work culture owing to its strong
              economic background. More and more businesses are doing away with
              the traditional ways of working.
              <br></br>
              <br></br>
              Shared office spaces offer individuals and companies the
              flexibility of access to work spaces that have all the amenities
              of a traditional office and sometimes more on a simple rental
              model. The biggest advantage of shared office spaces is their
              affordability. Office spaces on GoFloaters platform are available
              on monthly basis rentals without long term contracts that block
              you in.
              <br></br>
              <br></br>
              Mumbai, being the financial capital of India has a variety of
              coworking spaces for you to choose from. Some popular brands of
              coworking spaces in Mumbai are Awfis, Innov8, Ikeva, Regus,
              91Springboard and WeWork.
              <br></br>
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Office Space Locations in Mumbai
            </h4>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Navi Mumbai</h5>
            <p>
              Navi Mumbai is one of the prime locations for coworking spaces in
              Mumbai. The city is divided into two parts, North Navi Mumbai and
              South Navi Mumbai. It houses a wide range of major educational
              institutions, MNCs like Reliance, Accenture, Siemens, L&amp;T,
              recreational facilities Central Park, Golf Course, Wonder Park
              etc. This destination is the new preference for shared office
              spaces in Mumbai. The basic amenities include parking, spacious
              floors, electricity back up, proximity to the railway station and
              airport among others.&nbsp;
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>
              Andheri and neighbouring areas
            </h5>
            <p>
              Andheri is the heart of Mumbai. A luxurious locality with renowned
              national and international offices, along with prime residential
              societies. It is one of the growing coworking space destinations
              in Mumbai for many commercial, financial and media houses. The key
              reasons for the area&rsquo;s growth are its proximity to the
              airport and availability of all amenities including an efficient
              transportation system.&nbsp;
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Nariman Point</h5>
            <p>
              Nariman point is known as the home to all the famous banks,
              financial institutions, and many top business houses. From huge
              car parking space to well-maintained buildings, Nariman Point is
              one of the renowned commercial hubs in India.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Thane</h5>
            <p>
              New buildings, presence of all the important amenities and the
              house for all types of office spaces for IT &amp; ITES companies.
              One of the attractive specialties of the place is availability of
              inexpensive office spaces. Not only this, you can get larger floor
              areas for less cost when compared to other areas.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Worli</h5>
            <p>
              Worli is one of Mumbai's affluent areas in South Mumbai, offering
              a charm of both the new and old. The place attracts a lot of
              commercial development annually by big players ensuring 24-hour
              power backup, spacious office spaces, air conditioning, car
              parking and other basic facilities. With this, proximity to the
              nearest railway station and airport makes this destination the
              most ideal out of all.
            </p>
            <br /> <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your office space in Mumbai
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
export default MumbaiDailyOfficeSpace
export const query = graphql`
  query MumbaiDailyOfficeSpace {
    allListings(
      filter: {
        subType: { eq: "Office Space" }
        spaceCity: { eq: "Mumbai" }
        monthPassAvailable: { eq: true }
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
