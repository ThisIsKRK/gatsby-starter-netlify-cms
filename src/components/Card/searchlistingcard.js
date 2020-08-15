import React from "react"
import "../Card/listingCard.scss"
import { Link } from "gatsby"
import locationIcon from "./locationicon.png"
const SearchListingCard = props => {
  const url = `https://app.gofloaters.com/#/home/explore/spacedetail/${props.spaceId}`
  var divStyle = {
    height: "200px",
    backgroundImage: "url(" + props.listingImg + ")",
    backgroundSize: "cover",
    WebkitTransition: "all", // note the capital 'W' here
    msTransition: "all", // 'ms' is the only lowercase vendor prefix
    borderRadius: "15px",
  }
  //console.log(props.Facility)
  if (props.officeSpaceType || props.Facility) {
    var facility = props.Facility.replace(/\s+/g, "-").toLowerCase()
    var officespace = ""
    if (props.officeSpaceType) {
      officespace = props.officeSpaceType
    } else {
      officespace = ""
    }
    var str = officespace + "," + facility
    str = str.replace(/\s+/g, "-").toLowerCase()
    str = str.replace(/,/g, " ")
    str = str.replace("/", "-")
  } else {
    str = ""
  }
  const HourPrice = () => {
    return (
      <span>
        Hourly: ₹ {props.priceHr} <br></br>
      </span>
    )
  }
  const MonthlyPrice = () => {
    return (
      <span>
        Monthly: ₹ {props.priceMonth} <br></br>
      </span>
    )
  }
  const DailyPrice = () => {
    return (
      <span>
        Daily: ₹ {props.priceDay}
        <br></br>
      </span>
    )
  }
  const DailyFree = () => {
    return (
      <span>
        Daily: NA
        <br></br>
      </span>
    )
  }
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value)
    }
    value = +value
    exp = +exp
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN
    }
    // Shift
    value = value.toString().split("e")
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)))
    // Shift back
    value = value.toString().split("e")
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp))
  }
  const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp)
  return (
    <div className={"col-md-4 listingCardPadding " + str}>
      <Link to={"/space/" + props.Slug}>
        <div className="listingCard">
          <div className="listingimages">
            <div style={divStyle}></div>
          </div>
          <div className="listingDetail">
            <div className="row aligner">
              <div className="col-9">
                {props.spacetype != "Cafe" ? <h1>{props.gftitle} </h1> : ""}
                {props.spacetype === "Cafe" ? <h1>{props.title} </h1> : ""}
              </div>
              <div className="col-3 text-right">
                {props.Rating ? (
                  <p>
                    <i className="fa fa-star star"></i> {props.Rating}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-12">
                {props.spacetype != "Cafe" ? (
                  <p>{props.spaceDisplayName}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="col-6">
                <p className="spaceaddress">
                  <img src={locationIcon} width="30"></img>
                  {props.spaceAddress}
                </p>
              </div>
              <div className="col-6 text-right">
                <span className="distance">
                  in {ceil10(props.Distance, -2)} kms
                </span>
              </div>
            </div>
            <hr />
            <div className="row aligner minheight">
              <div className="col-6">
                <p>
                  {props.hourPassAvailable ? <HourPrice /> : ""}
                  {props.dayPassAvailable ? <DailyPrice /> : ""}
                  {props.monthPassAvailable ? <MonthlyPrice /> : ""}
                </p>
              </div>
              <div className="col-6 text-right">
                <Link to={"/space/" + props.Slug} className="viewButton">
                  View
                </Link>
                {/*<a className="viewButton" href={url} target="_blank">
                View
              </a>*/}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default SearchListingCard
