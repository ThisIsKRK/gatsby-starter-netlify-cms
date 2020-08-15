import React, { useState } from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import Listing from "./listing"
import SearchForm from "./search/search"
import { navigate } from "gatsby"

const SearchResultComponent = ({ search }) => {
  const { city } = search
  const { lat } = search
  const { lng } = search
  const { spaceType } = search

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchForm placeholder={city} spacetype="officeSpace" />
            <div className="padding-20"></div>
          </div>

          <div className="col-md-12">
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter">
                Showing: &nbsp;
                <li>
                  <a
                    onClick={e => {
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
                    className={spaceType == "officeSpace" ? "active" : ""}
                  >
                    Office Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
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
                    className={spaceType == "workCafe" ? "active" : ""}
                  >
                    Work Cafes
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
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
                    className={spaceType == "meetingSpace" ? "active" : ""}
                  >
                    Meeting Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
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
                    className={spaceType == "eventSpace" ? "active" : ""}
                  >
                    Events Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={e => {
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
                    className={spaceType == "trainingRoom" ? "active" : ""}
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

SearchResultComponent.propTypes = {
  search: PropTypes.object,
}

export default withLocation(SearchResultComponent)
