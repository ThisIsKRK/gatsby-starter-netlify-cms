import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import Listing from "./listing"
import SearchFormAlter from "./search/searchalter"
import { navigate, Link } from "gatsby"
import MonthlyOfficeSpaceLocationSwitch from "../components/monthlyofficespacelocationswitch"
import OfficeSpaceLocationSwitch from "../components/officespacelocationswitch"
import MeetingLocationSwitch from "../components/meetinglocationswitch"
const SearchComponent = ({ search }) => {
  var { city } = search
  var { lat } = search
  var { lng } = search
  var { spaceType } = search
  const [listingFilter, setlistingFilter] = useState([])
  const [inCity, setinCity] = useState([])
  if (!lat) {
    city = "Bengaluru"
    lat = "12.968367"
    lng = "77.5953411"
    spaceType = "dailyofficeSpace"
  }

  useEffect(() => {
    if (listingFilter == "") {
      setlistingFilter(spaceType)
    }
  }, [listingFilter])

  useEffect(() => {
    if (inCity == "") {
      setinCity(city)
    }
  })
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="listingpageTitle">Search Results</h1>
          </div>
          <div className="col-md-12">
            <SearchFormAlter
              placeholder={inCity}
              spacetype="dailyofficeSpace"
            />
            <br></br>
            {listingFilter === "dailyofficeSpace" ? (
              <OfficeSpaceLocationSwitch />
            ) : (
              ""
            )}
            {listingFilter === "monthlyofficeSpace" ? (
              <MonthlyOfficeSpaceLocationSwitch />
            ) : (
              ""
            )}
            {listingFilter === "meetingSpace" ? <MeetingLocationSwitch /> : ""}

            <div className="padding-20"></div>
          </div>

          <div className="col-md-12">
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
                <li>
                  <a
                    onClick={e => {
                      setlistingFilter("dailyofficeSpace")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=dailyofficeSpace"
                      navigate(url)
                    }}
                    className={
                      listingFilter === "dailyofficeSpace" ? "active" : ""
                    }
                  >
                    Coworking Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
                      setlistingFilter("meetingSpace")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=meetingSpace"
                      navigate(url)
                    }}
                    className={listingFilter === "meetingSpace" ? "active" : ""}
                  >
                    Meeting Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
                      setlistingFilter("monthlyofficeSpace")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=monthlyofficeSpace"
                      navigate(url)
                    }}
                    className={
                      listingFilter === "monthlyofficeSpace" ? "active" : ""
                    }
                  >
                    Office Spaces
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {city !== "" &&
      lat !== "" &&
      lng !== "" &&
      spaceType === "dailyofficeSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="dailyofficeSpace" />
      ) : (
        ""
      )}
      {city !== "" &&
      lat !== "" &&
      lng !== "" &&
      spaceType === "monthlyofficeSpace" ? (
        <Listing
          city={city}
          lat={lat}
          lng={lng}
          spacetype="monthlyofficeSpace"
        />
      ) : (
        ""
      )}
      {city !== "" &&
      lat !== "" &&
      lng !== "" &&
      spaceType === "meetingSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="meetingSpace" />
      ) : (
        ""
      )}
    </div>
  )
}

SearchComponent.propTypes = {
  search: PropTypes.object,
}

export default withLocation(SearchComponent)
