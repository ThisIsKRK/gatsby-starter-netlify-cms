import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SearchForm from "../components/search/search"
import MeetingSpacesContent from "../components/meetingspacecontent"
import HeaderBanner from "../components/headerbanner"
import MeetingLocationSwitch from "../components/meetinglocationswitch"
import ListingCard from "../components/Card/listingcard"
import { graphql, Link } from "gatsby"
import SEOHeader from "../components/seo-header"
import SocialImage from "../img/socialimage/meeting-rooms-in-mumbai.jpg"
const MumbaiMeetingSpaces = props => {
  const [spaceFilter, setspaceFilter] = useState("All")
  const [spaceSize, setspaceSize] = useState([])
  const [ProjectFilter, setProjectFilter] = useState("false")
  const [CoffeeTeaFilter, setCoffeeTeaFilter] = useState("false")
  const [LessFiveFilter, setLessFiveFilter] = useState("false")
  const [SixtoFifteenFilter, setSixtoFifteenFilter] = useState("false")
  const [MorethanFiftyFilter, setMorethanFiftyFilter] = useState("false")

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
  function LessFiveCheck() {
    if (LessFiveFilter === "true") {
      setLessFiveFilter("false")
    } else {
      setLessFiveFilter("true")
      setspaceFilter("Less Than Five")
    }
  }
  function SixtoFifteenCheck() {
    if (SixtoFifteenFilter === "true") {
      setSixtoFifteenFilter("false")
    } else {
      setSixtoFifteenFilter("true")
      setspaceFilter("Five to Fifteen")
    }
  }
  function MorethanFiftyCheck() {
    if (MorethanFiftyFilter === "true") {
      setMorethanFiftyFilter("false")
    } else {
      setMorethanFiftyFilter("true")
      setspaceFilter("More than Fifteen")
    }
  }
  var projectquery,
    coffeeteaquery,
    fiveseatquery,
    sixtofifteenquery,
    morethanfiftyquery,
    fivefiftyquery,
    tvquery = " "

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
  if (LessFiveFilter === "true") {
    fiveseatquery = "Less Than Five"
  } else {
    fiveseatquery = " "
  }
  if (SixtoFifteenFilter === "true") {
    sixtofifteenquery = "Five to Fifteen"
  } else {
    sixtofifteenquery = " "
  }
  if (MorethanFiftyFilter === "true") {
    morethanfiftyquery = "More than Fifteen"
  } else {
    morethanfiftyquery = " "
  }
  if (LessFiveFilter === "true" && SixtoFifteenFilter === "true") {
    fivefiftyquery = "moption a"
  }
  if (LessFiveFilter === "true" && MorethanFiftyFilter === "true") {
    fivefiftyquery = "moption b"
  }
  if (SixtoFifteenFilter === "true" && MorethanFiftyFilter === "true") {
    fivefiftyquery = "moption c"
  }
  if (
    LessFiveFilter === "true" &&
    SixtoFifteenFilter === "true" &&
    MorethanFiftyFilter === "true"
  ) {
    fivefiftyquery = "moption d"
  }

  const OfficeFilter = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="officefiltercontainer">
        <ul className="OfficeFilter scrollmenu">
          <li>
            <a className={"CheckBox " + LessFiveFilter} onClick={LessFiveCheck}>
              &lt; 5 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + SixtoFifteenFilter}
              onClick={SixtoFifteenCheck}
            >
              6 to 15 Seats{" "}
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className={"CheckBox " + MorethanFiftyFilter}
              onClick={MorethanFiftyCheck}
            >
              &gt; 15 Seats{" "}
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
            <a
              className={"CheckBox " + CoffeeTeaFilter}
              onClick={CoffeeTeaCheck}
            >
              Free Tea/Coffee{" "}
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
      <SEOHeader
        title="Book Conference Rooms & Meeting Rooms in Mumbai at GoFloaters"
        description="Book Meeting Rooms In Mumbai With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in Mumbai."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-mumbai.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">Meeting Spaces in Mumbai</h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  Your search for best meeting spaces or conference rooms in
                  Mumbai has a destination at GoFloaters. We have meeting spaces
                  in Bengaluru starting from Rs 300 / hr. Some of the popular
                  localities for conducting your meetings are <a href="https://gofloaters.com/search?city=Dwarka,%20New+Delhi,%20Delhi&lat=28.5733056&lng=77.0100758&spaceType=meetingSpace">Andheri</a>, <a href="https://gofloaters.com/searchresult?city=Andheri%20East,%20Mumbai,%20%20Maharashtra&lat=19.1178548&lng=72.8631304&spaceType=meetingSpace">Andheri East</a>,{" "}
                   <a href="https://gofloaters.com/search/?city=Borivali,%20Mumbai,%20Maharashtra&lat=19.2317945&lng=72.8369492&spaceType=meetingSpace">Borivali</a>, <a href="https://gofloaters.com/search/?city=Navi%20Mumbai,%20Maharashtra,%20%20India&lat=19.0330488&lng=73.0296625&spaceType=meetingSpace">Navi Mumbai</a>, <a href="https://gofloaters.com/searchresult?city=Thane,%20Maharashtra,%20%20India&lat=19.2183307&lng=72.9780897&spaceType=meetingSpace">Thane</a> and <a href="https://gofloaters.com/search/?city=Lower%20Parel,%20Mumbai,%20%20Maharashtra&lat=18.9982461&lng=72.82696460000001&spaceType=meetingSpace">Lower Parel</a>.
                </p>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="Mumbai" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-mumbai/">
                    Coworking Spaces
                  </Link>
                </li>
              
                <li>
                  <Link to="/meeting-rooms-in-mumbai/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-mumbai/">
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
            {spaceSize} Meeting Spaces in Mumbai available for you
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
                    OriginalName={listData.OriginalName}
                    Facility={listData.Facility}
                    Slug={"/meeting-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></ListingCard>
                )
              }
              if (
                listData.Facility.search(projectquery) > 1 &&
                listData.Facility.search(coffeeteaquery) > 1 &&
                ((listData.Facility.search(fiveseatquery) > 1 &&
                  listData.Facility.search(sixtofifteenquery) > 1 &&
                  listData.Facility.search(morethanfiftyquery) > 1) ||
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
                    OriginalName={listData.OriginalName}
                    Facility={listData.Facility}
                    Slug={"/meeting-space/" + listData.slug}
                    hasCovidSafeBadge={listData.hasCovidSafeBadge}
                  ></ListingCard>
                )
              }
            })}
          </div>{" "}
          <div className="col-md-12">
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Mumbai</h4>

            <p>
              Looking for shared office spaces in Mumbai? Book the best office
              space in Mumbai for all types of meetings and events like
              presentations, discussions, interviews, workshops and video
              conferences.
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
              Meeting spaces on GoFloaters offer individuals and companies the
              flexibility of access to meeting spaces that have all the
              amenities on a simple hourly rental model. Get a meeting space of
              the right size in your budget when you want and where you want.
              Book through the app, get confirmation, pay for the space and use
              the space. That is all it takes to get your meeting the right
              meeting space.
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
              Top Meeting Space Locations in Mumbai
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
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your meeting space in Mumbai
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
export default MumbaiMeetingSpaces
export const query = graphql`
  query MumbaiMeetingSpaces {
    allListings(
      filter: { subType: { eq: "Meeting Space" }, spaceCity: { eq: "Mumbai" } }
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
