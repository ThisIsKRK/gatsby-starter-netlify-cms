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
import SocialImage from "../img/socialimage/meeting-rooms-in-new-delhi.jpg"
const NewDelhiMeetingSpaces = props => {
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
        title="Book Conference Rooms & Meeting Rooms in New Delhi at GoFloaters"
        description="Book Meeting Rooms In New Delhi With GoFloaters. Conduct your meetings professionally with the well-equipped Conference rooms in New Delhi."
        socialURL="https://assets.gofloaters.com/socialimage/meeting-rooms-in-new-delhi.jpg"
        pinterest="true"
      ></SEOHeader>
      <Layout>
        {/*<HeaderBanner headerclass="meeting-space"></HeaderBanner>*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="listingpageTitle">
                  Meeting Spaces in New Delhi
                </h1>
                <h2 style={{ fontSize: "1.2em", lineHeight: "1.2" }}>
                  Meeting Spaces by the hour | Fully-equipped spaces | Pocket
                  Friendly
                </h2>
                <div className="padding-20"></div>
                <p style={{ fontSize: "13px" }}>
                  Your search for best meeting spaces or conference rooms in
                  Delhi has a destination at GoFloaters. We have meeting spaces
                  in Delhi starting from Rs 300 / hr. Some of the popular
                  localities are <a href="https://gofloaters.com/search?city=Dwarka,%20New+Delhi,%20Delhi&lat=28.5733056&lng=77.0100758&spaceType=meetingSpace">Dwarka</a>, <a href="https://gofloaters.com/search?city=Nehru%20Place,%20New%20Delhi,%20Delhi&lat=28.5491606&lng=77.2505877&spaceType=meetingSpace">Nehru place</a>, <a href="https://gofloaters.com/search?city=Janakpuri,%20New%20Delhi,%20Delhi&lat=28.6210419&lng=77.0817702&spaceType=meetingSpace">Janakpuri</a>, <a href="https://gofloaters.com/search?city=Saket,%20New%20Delhi,%20Delhi&lat=28.5235574&lng=77.2045469&spaceType=meetingSpace">Saket</a> and {" "}
                <a href="https://gofloaters.com/search?city=Connaught%20Place,%20New%20Delhi,%20Delhi&lat=28.6289113&lng=77.2109096&spaceType=meetingSpace">Connaught Place</a>.
                </p>
                <SearchForm spacetype="meetingSpace"></SearchForm>
                <br></br>
                <div className="padding-20"></div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-12">
                <MeetingLocationSwitch city="New Delhi" />
              </div>
            </div>
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <Link to="/coworking-spaces-in-new-delhi/">
                    Coworking Spaces
                  </Link>
                </li>
               
                <li>
                  <Link to="/meeting-rooms-in-new-delhi/" className="active">
                    Meeting Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/office-spaces-for-rent-in-new-delhi/">
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
            {spaceSize} Meeting Spaces in New Delhi available for you
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
            <h4 style={{ fontWeight: "bold" }}>Meeting Space in Delhi</h4>
            <p>
              Looking for meeting spaces in Delhi? Book the best meeting space
              in Delhi for all types of meetings and events like presentations,
              discussions, interviews, workshops and video conferences.
              <br></br> <br></br>
              Delhi is an amalgamation of old and the new. A favourite
              destination of tourists throughout the year, it is enriched with
              the Mughal history along with the growing modern culture. With an
              area of 1,484 square kilometres and a population over 1.9 crores,
              the city is a dream come true for many.
              <br></br> <br></br>
              The city is the hub of the entire National Capital Region (NCR)
              that extends to other neighbouring cities of Ghaziabad, Noida,
              Gurgaon and Faridabad. It has become the corporate hub for many
              national and international corporates including Google, IBM,
              Zomato, Ernst and Young (EY), Bain and Company, Microsoft,
              Flipkart, Genpact, SAP and Ericsson. Startups are also flourishing
              in Delhi as they are able to tap into the ecosystem of large
              corporates and the talent pool.
              <br></br> <br></br>
              With an exponential growth in the entrepreneurial ecosystem in
              Delhi, the startup culture is gaining prominence and is strongly
              backed by the government. After Bangalore, Delhi is now the second
              largest hub for start-up activity. The entire trend of office
              culture has shifted into a more explorable, innovative and
              interest building work culture. Coworking is picking up as the
              popular choice as the way of working for startups and many small
              and medium enterprises.
              <br></br> <br></br>
              Meeting spaces on GoFloaters offer individuals and companies the
              flexibility of access to meeting spaces that have all the
              amenities on a simple hourly rental model. Get a meeting space of
              the right size in your budget when you want and where you want.
              Book through the app, get confirmation, pay for the space and use
              the space. That is all it takes to get your meeting the right
              meeting space.
              <br></br> <br></br>
              Delhi being the national capital, serves as the HQ for many
              companies. Delhi has a variety of coworking spaces for you to
              choose from. Some popular brands of coworking spaces in Indore are
              91Springboard, ABL Workspaces, CoworkIn, Workingdom and Co-Offiz.
              <br></br> <br></br>
            </p>
            <br></br>
            <h4 style={{ fontWeight: "bold" }}>
              Top Meeting Space Locations in Delhi
            </h4>
            <br /> <h5 style={{ fontWeight: "bold" }}>Connaught Place</h5>
            <p>
              A shoppers paradise and a well-known financial, commercial and
              business hub in central Delhi, Connaught Place offers a lot more
              than this. From historic monuments like Jantar Mantar and Agrasen
              ki Baoli, well-known shopping streets like Janpath, religious
              places like Hanuman Mandir and Gurudwara Bangla Sahib, iconic
              restaurants like Sarvana Bavan and Indian Coffee House,
              headquarters of prominent Indian firms like Hindustan Times and
              British Broadcasting Corporation (BBC), the place is a fusion of
              both the ancient and modern.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Rajouri Garden</h5>
            <p>
              Rajouri Garden is a popular residential and market place in West
              Delhi and is marked by its distinct Delhi architecture. It is a
              home of budget-friendly work stations for creative freelancers,
              newly established startups, small and medium enterprises,
              corporates etc.&nbsp;
            </p>
            <br /> <h5 style={{ fontWeight: "bold" }}>Nehru Place</h5>
            <p>
              Nehru Place derives its name from the first Prime Minister of
              India, Pandit Jawaharlal Nehru. The neighbourhood is an epicentre
              of all Information Technology hardware, such as computers,
              networking resources, software, documentation facilities and
              allied services and hence, it is a computer fanatic&rsquo;s
              shopping paradise. Along with this, it is a favourite destination
              for Generation Y as it houses well-known hotels, restaurants and
              multiplexes in its vicinity.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Hauz Khas</h5>
            <p>
              Hauz Khas is one of the favourite destinations of millennials,
              giving a feel of both the urban and rural. Well known in medieval
              times, the Hauz Khas village has amazing buildings built around
              the reservoir. There&rsquo;s a lot one can do in this developing
              neighbourhood. Not only this, but a lot of startups and SMEs are
              also opening their offices here due to the growing innovative
              culture.
            </p>
            <br />
            <h5 style={{ fontWeight: "bold" }}>Greater Kailash</h5>
            <p>
              Located along the Outer Ring Road, Greater Kailash is one of the
              well-to-do neighbourhoods in South Delhi. Greater Kailash is a
              residential area in South Delhi comprising several neighborhoods
              and multiple markets. It is a synthesis of posh houses and
              bungalows, affluent N and M block markets, cafes, restaurants and
              branded retail stores. Along with these, it is gradually
              transforming into a major workplace hub for budding entrepreneurs,
              creative freelancers and newly born startups.
            </p>
            <br />
            <br />
            <h4 style={{ fontWeight: "bold" }}>
              Why Choose GoFloaters to book your meeting space in Delhi
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
export default NewDelhiMeetingSpaces
export const query = graphql`
  query NewDelhiMeetingSpaces {
    allListings(
      filter: {
        subType: { eq: "Meeting Space" }
        spaceCity: { eq: "New Delhi" }
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
