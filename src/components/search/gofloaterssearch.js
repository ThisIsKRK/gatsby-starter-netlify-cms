import React, { useState } from "react"
import Autocomplete from "react-google-autocomplete"
import { navigate } from "gatsby"
import SearchForm from "./search"

const GofloaterSearchForm = props => {
  const [spacetype, setspacetype] = useState("dailyofficeSpace")
  const [firsturl, setfirsturl] = useState(
    "/search/?city=Bengaluru&lat=12.968367&lng=77.5953411&spaceType=dailyofficeSpace"
  )
  const [url, seturl] = useState("")
  const doSomething = place => {
    let address = place.formatted_address,
      location = address.split(",")[0],
      city = address.split(",")[1],
      state = address.split(",")[2],
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng()
    location = location.trim()
    city = city.trim()
    var url =
      "/search?city=" +
      location +
      ", " +
      city +
      ", " +
      state +
      "&lat=" +
      latValue +
      "&lng=" +
      lngValue +
      "&spaceType=" +
      spacetype
    navigate(url)
  }
  function setSpacedailyofficeSpace() {
    if (spacetype === "meetingSpace") {
      setspacetype("dailyofficeSpace")
    }
  }
  function setSpaceMeetingSpace() {
    if (spacetype === "dailyofficeSpace") {
      setspacetype("meetingSpace")
    }
  }

  const SearchResult = () => {
    console.log(firsturl)
    seturl(firsturl + spacetype)
    // console.log("url", url)
    navigate(url)
  }
  return (
    <div>
      <div className="homePageSearch">
        <div className="GofloaterSearchLink">
          <a
            onClick={setSpacedailyofficeSpace}
            className={spacetype === "dailyofficeSpace" ? "active" : " "}
          >
            For Work
          </a>
          <a
            onClick={setSpaceMeetingSpace}
            className={spacetype === "meetingSpace" ? "active" : " "}
          >
            For Meeting
          </a>
        </div>
        <br></br>
        <div className="input-group has-search">
          <span
            className="fa fa-search form-control-home"
            style={{ lineHeight: 2.3 }}
          ></span>

          <label htmlFor="SearchLocation">Find the Space..</label>

          <Autocomplete
            style={{ width: "90%" }}
            className="form-control homesearchform"
            placeholder={
              props.placeholder
                ? props.placeholder
                : "where would you like to work or meet..."
            }
            name="SearchLocation"
            onPlaceSelected={place => {
              doSomething(place)
            }}
            /* onPlaceSelected={place => {
              let address = place.formatted_address,
                location = address.split(",")[0],
                city = address.split(",")[1],
                state = address.split(",")[2],
                latValue = place.geometry.location.lat(),
                lngValue = place.geometry.location.lng()
              location = location.trim()
              city = city.trim()
              var url =
                "/search/?city=" +
                location +
                ", " +
                city +
                ", " +
                state +
                "&lat=" +
                latValue +
                "&lng=" +
                lngValue +
                "&spaceType=dailyofficeSpace"
              navigate(url)
            }} */
            types={["(regions)"]}
            componentRestrictions={{ country: "in" }}
            offset="3"
          />
          <button
            onClick={SearchResult}
            className="gofloaterHomeSearchButton"
            value="Search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
export default GofloaterSearchForm
