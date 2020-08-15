import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import Listing from "./listing"
import SearchFormAlter from "./search/searchalter"
import { navigate } from "gatsby"

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
    spaceType = "officeSpace"
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
            <SearchFormAlter placeholder={inCity} spacetype="officeSpace" />
            <div className="padding-20"></div>
          </div>

          <div className="col-md-12">
            <div className="filterbar" style={{ marginTop: 15 }}>
              <b>Showing: &nbsp;</b>
              <ul className="SearchListingFilter">
                <li>
                  <a
                    onClick={e => {
                      setlistingFilter("officeSpace")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=officeSpace"
                      navigate(url)
                    }}
                    className={listingFilter === "officeSpace" ? "active" : ""}
                  >
                    Office Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
                      setlistingFilter("workCafe")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=workCafe"
                      navigate(url)
                    }}
                    className={listingFilter === "workCafe" ? "active" : ""}
                  >
                    Work Cafes
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
                      setlistingFilter("eventSpace")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=eventSpace"
                      navigate(url)
                    }}
                    className={listingFilter === "eventSpace" ? "active" : ""}
                  >
                    Events Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
                      setlistingFilter("trainingRoom")
                      var url =
                        "/search/?city=" +
                        city +
                        "&lat=" +
                        lat +
                        "&lng=" +
                        lng +
                        "&spaceType=trainingRoom"
                      navigate(url)
                    }}
                    className={listingFilter === "trainingRoom" ? "active" : ""}
                  >
                    Training Spaces
                  </a>
                </li>
              </ul>
              <br></br>
              {/*  <select
                className="form-control officeselector"
                onChange={e => {
                  var url =
                    "/search/?city=" +
                    city +
                    "&lat=" +
                    lat +
                    "&lng=" +
                    lng +
                    "&spaceType=" +
                    e.currentTarget.value
                  navigate(url)
                }}
              >
                <option value="officeSpace">Office Spaces</option>
                <option value="workCafe">Work Cafes</option>
                <option value="meetingSpace">Meeting Spaces</option>
                <option value="eventSpace">Events Spaces</option>
                <option value="trainingRoom">Training Spaces</option>
              </select>*/}
            </div>
          </div>
        </div>
      </div>
      {city !== "" &&
      lat !== "" &&
      lng !== "" &&
      spaceType === "officeSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="officeSpace" />
      ) : (
        ""
      )}
      {city !== "" && lat !== "" && lng !== "" && spaceType === "workCafe" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="workCafe" />
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
      {city !== "" && lat !== "" && lng !== "" && spaceType === "eventSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="eventSpace" />
      ) : (
        ""
      )}
      {city !== "" &&
      lat !== "" &&
      lng !== "" &&
      spaceType === "trainingRoom" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="trainingRoom" />
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
