import React, { useState, useEffect } from "react"
import Axios from "axios"
import SearchListingCard from "../components/Card/searchlistingcard"
import logo from "../img/flyingtilo.gif"

const Listing = props => {
  const [Lists, SetLists] = useState([])
  const [spaceSize, setspaceSize] = useState([])
  const [spaceFilter, setspaceFilter] = useState("All")
  const [Loader, SetLoader] = useState("load")
  var spaceType = "officeSpace"
  if (props.spacetype === "undefined" || props.spacetype === "") {
    spaceType = "officeSpace"
  }
  if (props.spacetype === "officeSpace") {
    spaceType = "Office Spaces"
  }
  if (props.spacetype === "workCafe") {
    spaceType = "Work Cafes"
  }
  if (props.spacetype === "meetingSpace") {
    spaceType = "Meeting Spaces"
  }
  if (props.spacetype === "eventSpace") {
    spaceType = "Event Spaces"
  }
  if (props.spacetype === "trainingRoom") {
    spaceType = "Training Spaces"
  }
  function FacilityList(facility) {
    facility = facility.toString()
    //facility = facility.replace("Television", "Projector")
    return facility
  }
  function TwentyFour(operationTiming) {
    var operationDays = operationTiming.days.friday
    if (operationDays.from === "00:00") {
      return ",Twenty Four Hours"
    } else {
      return ""
    }
  }

  function SixPM(operationTiming) {
    var operationDays = operationTiming.days.friday
    if (operationDays.to > "18:00") {
      return ",Open 6PM"
    } else {
      return ""
    }
  }
  function DayPass(dayPass) {
    if (dayPass) {
      return "Daily Pass"
    } else {
      return ""
    }
  }
  function MeetingSpaceSize(Size, spaceType) {
    if (Size <= 5 && spaceType === "meetingSpace") {
      return "option a,option b,option d,Less Than Five"
    } else if (Size >= 6 && Size <= 15 && spaceType === "meetingSpace") {
      return "option a,option c,option d,Five to Fifteen"
    } else if (Size >= 15 && spaceType === "meetingSpace") {
      return "option b,option c,option d,More than Fifteen"
    } else return ""
  }
  function EventSpaceSize(Size, spaceType) {
    if (Size <= 30 && spaceType === "eventSpace") {
      return "option a,option b,option d,Less Than Thirty"
    } else if (Size > 30 && Size < 60 && spaceType === "eventSpace") {
      return "option a,option c,option d,Thirty To Sixty"
    } else if (Size >= 60 && spaceType === "eventSpace") {
      return "option b,option c,option d,More than Sixty"
    } else return ""
  }
  function TrainingSpaceSize(Size, spaceType) {
    if (Size <= 10 && spaceType === "trainingRoom") {
      return "option a,option b,option d,Less Than Ten"
    } else if (Size >= 10 && Size <= 20 && spaceType === "trainingRoom") {
      return "option a,option c,option d,Ten To Twenty"
    } else if (Size >= 20 && spaceType === "trainingRoom") {
      return "option b,option c,option d,More than Twenty"
    } else return ""
  }

  function decimalAdjust(type, value, exp) {
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value)
    }
    value = +value
    exp = +exp
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN
    }
    value = value.toString().split("e")
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)))
    value = value.toString().split("e")
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp))
  }
  const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp)
  function getAvgRating(feedbacks) {
    var rating = 0
    if (!feedbacks) {
      rating = 0
    } else {
      rating = 0
      var length = 0
      var feedbackvalue = Object.values(feedbacks)
      const feedbackArray = feedbackvalue
      feedbackArray.map((answer, i) => {
        rating = rating + answer.rating
        length = i + 1
      })
      rating = rating / length
      //console.log("Entered", rating, length)
      rating = ceil10(rating, -1)
    }
    return rating
  }
  function getMostPopular(feedbacks) {
    var rating = 0
    if (!feedbacks) {
      rating = 0
    } else {
      rating = 0
      var length = 0
      var feedbackvalue = Object.values(feedbacks)
      const feedbackArray = feedbackvalue
      feedbackArray.map((answer, i) => {
        rating = rating + answer.rating
        length = i + 1
      })
      rating = rating / length
      //console.log("Entered", rating, length)
      rating = ceil10(rating, -1)
    }
    if (rating > 3) {
      return "Most Popular"
    } else {
      return ""
    }
  }
  function Slug(spaceDisplayName, gofloatersSpaceName, locality, city) {
    var str,
      slug = ""
    if (gofloatersSpaceName) {
      var str = gofloatersSpaceName
      str =
        str +
        "-" +
        spaceDisplayName +
        "-" +
        locality.trim().replace(".", "") +
        "-" +
        city
      str = str.trim()
      slug = str.replace(/\s+/g, "-").toLowerCase()
      slug = slug.replace("&", "and")
      slug = slug.replace("'", "")
      slug = slug.replace("é", "e")
      slug = slug.replace(".", "-")
      slug = slug.replace("|", "-")
      slug = slug.replace("---", "-")
      slug = slug.replace("--", "-")
    }
    if (gofloatersSpaceName === "N/A") {
      var str = spaceDisplayName.replace(/\s+/g, "-").toLowerCase()
      str = str + "-" + locality.trim().replace(".", "") + "-" + city
      str = str.trim()
      slug = str.replace(/\s+/g, "-").toLowerCase()
      slug = slug.replace("&", "and")
      slug = slug.replace("'", "")
      slug = slug.replace("é", "e")
      slug = slug.replace(".", "-")
      slug = slug.replace("|", "-")
      slug = slug.replace("---", "-")
      slug = slug.replace("--", "-")
    }
    return slug
  }

  const fetchDetails = async () => {
    const response = await Axios.get(
      `https://gofloaters.firebaseapp.com/spaces/nearby?lat=${props.lat}&lng=${props.lng}&spaceSubType=${props.spacetype}`,
      {}
    )
    let responsevalue = Object.values(response.data)
    const details = responsevalue
    const allList = details.map(detail => ({
      spaceId: detail.spaceId,
      spaceImage: detail.photos[0].replace(
        "https://firebasestorage.googleapis.com/v0/b/gofloaters.appspot.com/o",
        "https://cdn.app.gofloaters.com"
      ),
      spaceTitle: detail.spaceDisplayName,
      spaceGFName: detail.gofloatersSpaceName,
      spaceType: detail.spaceType,
      spaceAddress: detail.address.locality,
      spaceCity: detail.address.city,
      priceHr: detail.priceperhr,
      priceDay: detail.priceperday,
      priceMonth: detail.pricepermonth,
      monthPassAvailable: detail.monthPassAvailable,
      dayPassAvailable: detail.dayPassAvailable,
      hourPassAvailable: detail.hourPassAvailable,
      officeSpaceType: detail.officeSpaceType,
      spaceDisplayName: detail.spaceDisplayName,
      Distance: detail.distance,
      DistanceRound: Math.round(detail.distance),
      Rating: getAvgRating(detail.feedback),
      slug: Slug(
        detail.spaceDisplayName,
        detail.gofloatersSpaceName,
        detail.address.locality,
        detail.address.city
      ),
      Facility:
        "All," +
        getMostPopular(detail.feedback) +
        "," +
        detail.officeSpaceType +
        "," +
        FacilityList(detail.facilitiesList) +
        "" +
        TwentyFour(detail.operationTiming) +
        "" +
        SixPM(detail.operationTiming) +
        "," +
        DayPass(detail.dayPassAvailable) +
        "," +
        MeetingSpaceSize(detail.minHeadCount, props.spacetype) +
        "," +
        EventSpaceSize(detail.minHeadCount, props.spacetype) +
        "," +
        TrainingSpaceSize(detail.minHeadCount, props.spacetype),
      operationTiming: TwentyFour(detail.operationTiming),
    }))

    SetLists(allList)
    SetLoader("completed")
  }
  useEffect(() => {
    fetchDetails()
  }, [])

  const [privateCabinFilter, setprivateCabinFilter] = useState("false")
  const [openDeskFilter, setopenDeskFilter] = useState("false")
  const [MetroNearByFilter, setMetroNearByFilter] = useState("false")
  const [DailyPassFilter, setDailyPassFilter] = useState("false")
  const [OpenSixFilter, setOpenSixFilter] = useState("false")
  const [TwentyFourFilter, setTwentyFourFilter] = useState("false")
  const [MostPopularFilter, setMostPopularFilter] = useState("false")
  const [ProjectFilter, setProjectFilter] = useState("false")
  const [CoffeeTeaFilter, setCoffeeTeaFilter] = useState("false")
  const [LessFiveFilter, setLessFiveFilter] = useState("false")
  const [SixtoFifteenFilter, setSixtoFifteenFilter] = useState("false")
  const [MorethanFiftyFilter, setMorethanFiftyFilter] = useState("false")
  const [LessTenFilter, setLessTenFilter] = useState("false")
  const [TenToTwentyFilter, setTenToTwentyFilter] = useState("false")
  const [MorethanTwentyFilter, setMorethanTwentyFilter] = useState("false")
  const [LessThirtyFilter, setLessThirtyFilter] = useState("false")
  const [ThirtyToSixtyFilter, setThirtyToSixtyFilter] = useState("false")
  const [MorethanSixtyFilter, setMorethanSixtyFilter] = useState("false")
  const [AudioEquipmentFilter, setAudioEquipmentFilter] = useState("false")
  const [SystemFilter, setSystemFilter] = useState("false")

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
  function OpenSixCheck() {
    if (OpenSixFilter === "true") {
      setOpenSixFilter("false")
    } else {
      setOpenSixFilter("true")
      setspaceFilter("Open 6PM")
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
  function MostPopularCheck() {
    if (MostPopularFilter === "true") {
      setMostPopularFilter("false")
    } else {
      setMostPopularFilter("true")
      setspaceFilter("Most Popular")
    }
  }
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
  function LessThirtyCheck() {
    if (LessThirtyFilter === "true") {
      setLessThirtyFilter("false")
    } else {
      setLessThirtyFilter("true")
      setspaceFilter("Less Than Thirty")
    }
  }
  function ThirtytoSixtyCheck() {
    if (ThirtyToSixtyFilter === "true") {
      setThirtyToSixtyFilter("false")
    } else {
      setThirtyToSixtyFilter("true")
      setspaceFilter("Thirty To Sixty")
    }
  }
  function MorethanSixtyCheck() {
    if (MorethanSixtyFilter === "true") {
      setMorethanSixtyFilter("false")
    } else {
      setMorethanSixtyFilter("true")
      setspaceFilter("More than Sixty")
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
  function AudioEquipmentCheck() {
    if (AudioEquipmentFilter === "true") {
      setAudioEquipmentFilter("false")
    } else {
      setAudioEquipmentFilter("true")
      setspaceFilter("Audio Equipment")
    }
  }

  var twentyfourquery,
    metroquery,
    opendeskquery,
    privatecabinquery,
    dailypassquery,
    opensixquery,
    mostpopularquery,
    projectquery,
    coffeeteaquery,
    fiveseatquery,
    sixtofifteenquery,
    morethanfiftyquery,
    fivefiftyquery,
    lesstenquery,
    tentotwenty,
    morethantwentyquery,
    lessthanthirtyquery,
    thirtytosixtyquery,
    morethansixty,
    audioquery,
    systemquery = " "

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
  if (ProjectFilter === "true") {
    projectquery = "Projector"
  } else {
    projectquery = " "
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
    fivefiftyquery = "option a"
  }
  if (LessFiveFilter === "true" && MorethanFiftyFilter === "true") {
    fivefiftyquery = "option b"
  }
  if (SixtoFifteenFilter === "true" && MorethanFiftyFilter === "true") {
    fivefiftyquery = "option c"
  }
  if (
    LessFiveFilter === "true" &&
    SixtoFifteenFilter === "true" &&
    MorethanFiftyFilter === "true"
  ) {
    fivefiftyquery = "option d"
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

  if (LessTenFilter === "true" && TenToTwentyFilter === "true") {
    fivefiftyquery = "option a"
  }
  if (LessTenFilter === "true" && MorethanTwentyFilter === "true") {
    fivefiftyquery = "option b"
  }
  if (TenToTwentyFilter === "true" && MorethanTwentyFilter === "true") {
    fivefiftyquery = "option c"
  }
  if (
    LessTenFilter === "true" &&
    TenToTwentyFilter === "true" &&
    MorethanTwentyFilter === "true"
  ) {
    fivefiftyquery = "option d"
  }

  if (LessThirtyFilter === "true") {
    lessthanthirtyquery = "Less Than Thirty"
  } else {
    lessthanthirtyquery = " "
  }
  if (ThirtyToSixtyFilter === "true") {
    thirtytosixtyquery = "Thirty To Sixty"
  } else {
    thirtytosixtyquery = " "
  }
  if (MorethanSixtyFilter === "true") {
    morethansixty = "More than Sixty"
  } else {
    morethansixty = " "
  }

  if (LessThirtyFilter === "true" && ThirtyToSixtyFilter === "true") {
    fivefiftyquery = "option a"
  }
  if (LessThirtyFilter === "true" && MorethanSixtyFilter === "true") {
    fivefiftyquery = "option b"
  }
  if (ThirtyToSixtyFilter === "true" && MorethanSixtyFilter === "true") {
    fivefiftyquery = "option c"
  }
  if (
    LessThirtyFilter === "true" &&
    ThirtyToSixtyFilter === "true" &&
    MorethanSixtyFilter === "true"
  ) {
    fivefiftyquery = "option d"
  }

  if (SystemFilter) {
    systemquery = "System"
  } else {
    systemquery = " "
  }
  if (AudioEquipmentFilter === "true") {
    audioquery = "Audio Equipment"
  } else {
    audioquery = " "
  }

  const OfficeSpace = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="padding-20"></div>
          <div>
            {" "}
            <b>Filter:</b>
            <ul className="search OfficeFilter">
              <li>
                <a
                  className={"CheckBox " + DailyPassFilter}
                  onClick={DailyPassCheck}
                >
                  Daily Pass{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
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
                <a
                  className={"CheckBox " + openDeskFilter}
                  onClick={openDeskCheck}
                >
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
        </div>
        <div className="col-md-12">
          <br />
        </div>
        <div className="padding-20"></div>
        <div className="col-md-12">
          {spaceSize} Office Spaces available for you
        </div>

        {Lists?.sort((a, b) => (a.Distance > b.Distance ? 1 : -1)).map(List => {
          if (spaceFilter === "All") {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
          if (
            List.Facility.search(opendeskquery) > 1 &&
            List.Facility.search(privatecabinquery) > 1 &&
            List.Facility.search(dailypassquery) > 1 &&
            List.Facility.search(metroquery) > 1 &&
            List.Facility.search(twentyfourquery) > 1
          ) {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
        })}
      </div>
    )
  }

  const WorkCafe = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="padding-20"></div>
          <div>
            {" "}
            <b>Filter:</b>
            <ul className="search OfficeFilter">
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
                  className={"CheckBox " + OpenSixFilter}
                  onClick={OpenSixCheck}
                >
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
          <div className="padding-20"></div>
        </div>
        <div className="col-md-12">
          <br />
        </div>
        <div className="padding-20"></div>

        <div className="col-md-12">
          {spaceSize} Work Cafes available for you
        </div>
        {Lists?.sort((a, b) => (a.Distance > b.Distance ? 1 : -1)).map(List => {
          if (spaceFilter === "All") {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
          if (
            List.Facility.search(opensixquery) > 1 &&
            List.Facility.search(metroquery) > 1 &&
            List.Facility.search(mostpopularquery) > 1
          ) {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
        })}
      </div>
    )
  }

  const MeetingSpace = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="padding-20"></div>
          <div>
            {" "}
            <b>Filter:</b>
            <ul className="search OfficeFilter">
              <li>
                <a
                  className={"CheckBox " + LessFiveFilter}
                  onClick={LessFiveCheck}
                >
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
                <a
                  className={"CheckBox " + ProjectFilter}
                  onClick={ProjectCheck}
                >
                  Projector / LED{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={"CheckBox " + CoffeeTeaFilter}
                  onClick={CoffeeTeaCheck}
                >
                  Free Tea/Cofee{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <br />
        </div>
        <div className="padding-20"></div>

        <div className="col-md-12">
          {spaceSize} Meeting Spaces available for you
        </div>
        {Lists?.sort((a, b) => (a.Distance > b.Distance ? 1 : -1)).map(List => {
          if (spaceFilter === "All") {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
          if (
            List.Facility.search(projectquery) > 1 &&
            List.Facility.search(coffeeteaquery) > 1 &&
            ((List.Facility.search(fiveseatquery) > 1 &&
              List.Facility.search(sixtofifteenquery) > 1 &&
              List.Facility.search(morethanfiftyquery) > 1) ||
              List.Facility.search(fivefiftyquery) > 1)
          ) {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
        })}
      </div>
    )
  }

  const EventSpace = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="padding-20"></div>
          <div>
            {" "}
            <b>Filter:</b>
            <ul className="search OfficeFilter">
              <li>
                <a
                  className={"CheckBox " + LessThirtyFilter}
                  onClick={LessThirtyCheck}
                >
                  &lt; 30 Seats{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={"CheckBox " + ThirtyToSixtyFilter}
                  onClick={ThirtytoSixtyCheck}
                >
                  30 to 60 Seats{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={"CheckBox " + MorethanSixtyFilter}
                  onClick={MorethanSixtyCheck}
                >
                  &gt; 60 Seats{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={"CheckBox " + ProjectFilter}
                  onClick={ProjectCheck}
                >
                  Projector / LED{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className={"CheckBox " + AudioEquipmentFilter}
                  onClick={AudioEquipmentCheck}
                >
                  Audio Equipment{" "}
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <br />
        </div>
        <div className="padding-20"></div>

        <div className="col-md-12">
          {spaceSize} Event Spaces available for you
        </div>
        {Lists?.sort((a, b) => (a.Distance > b.Distance ? 1 : -1)).map(List => {
          if (spaceFilter === "All") {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
          if (
            List.Facility.search(projectquery) > 1 &&
            List.Facility.search(audioquery) > 1 &&
            ((List.Facility.search(lessthanthirtyquery) > 1 &&
              List.Facility.search(thirtytosixtyquery) > 1 &&
              List.Facility.search(morethansixty) > 1) ||
              List.Facility.search(fivefiftyquery) > 1)
          ) {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
        })}
      </div>
    )
  }

  const TrainingSpace = () => {
    useEffect(() => {
      setspaceSize(document.querySelectorAll(".listingCardPadding").length)
    })
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="padding-20"></div>
          <div>
            {" "}
            <b>Filter:</b>
            <ul className="search OfficeFilter">
              <li>
                <a
                  className={"CheckBox " + LessTenFilter}
                  onClick={LessTenCheck}
                >
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
                <a
                  className={"CheckBox " + ProjectFilter}
                  onClick={ProjectCheck}
                >
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
        </div>
        <div className="col-md-12">
          <br />
        </div>
        <div className="padding-20"></div>

        <div className="col-md-12">
          {spaceSize} Training Spaces available for you
        </div>
        {Lists?.sort((a, b) =>
          a.DistanceRound > b.DistanceRound ? 1 : -1
        ).map(List => {
          if (spaceFilter === "All") {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
          if (
            List.Facility.search(projectquery) > 1 &&
            ((List.Facility.search(lesstenquery) > 1 &&
              List.Facility.search(tentotwenty) > 1 &&
              List.Facility.search(morethantwentyquery) > 1) ||
              List.Facility.search(fivefiftyquery) > 1)
          ) {
            return (
              <SearchListingCard
                key={List.spaceId}
                spacetype={List.spaceType}
                listingImg={List.spaceImage}
                title={List.spaceTitle}
                gftitle={List.spaceGFName}
                spaceAddress={List.spaceAddress}
                priceHr={List.priceHr}
                priceDay={List.priceDay}
                priceMonth={List.priceMonth}
                monthPassAvailable={List.monthPassAvailable}
                dayPassAvailable={List.dayPassAvailable}
                hourPassAvailable={List.hourPassAvailable}
                spaceId={List.spaceId}
                officeSpaceType={List.officeSpaceType}
                filter={spaceFilter}
                spaceDisplayName={List.spaceDisplayName}
                Distance={List.Distance}
                Rating={List.Rating}
                Facility={List.Facility}
                Slug={List.slug}
              ></SearchListingCard>
            )
          }
        })}
      </div>
    )
  }
  return (
    <div>
      <div className={"loader " + Loader}>
        <img src={logo} width="200"></img>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 padding-20">
            <p></p>
          </div>
        </div>
        {props.spacetype === "officeSpace" ? <OfficeSpace></OfficeSpace> : ""}
        {props.spacetype === "workCafe" ? <WorkCafe></WorkCafe> : ""}
        {props.spacetype === "meetingSpace" ? (
          <MeetingSpace></MeetingSpace>
        ) : (
          ""
        )}
        {props.spacetype === "eventSpace" ? <EventSpace></EventSpace> : ""}
        {props.spacetype === "trainingRoom" ? (
          <TrainingSpace></TrainingSpace>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
export default Listing
