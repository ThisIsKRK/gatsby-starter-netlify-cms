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
            <br></br>
            <a
              href={
                "/search/?city=Chennai&lat=13.052529&lng=80.220572&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Chennai
            </a>{" "}
            <a
              href={
                "/search/?city=Coimbatore&lat=12.968367&lng=77.5953411&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Coimbatore
            </a>{" "}
            <a
              href={
                "/search/?city=Bengaluru&lat=12.968367&lng=77.5953411&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Bengaluru
            </a>{" "}
            <a
              href={
                "/search/?city=Hyderabad&lat=17.4287602&lng=78.4864244&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Hyderabad
            </a>{" "}
            <a
              href={
                "/search/?city=New Delhi&lat=28.6139391&lng=77.2090212&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              New Delhi
            </a>{" "}
            <a
              href={
                "/search/?city=Noida&lat=28.543754&lng=77.385002&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Noida
            </a>{" "}
            <a
              href={
                "/search/?city=Mumbai&lat=19.0934289&lng=72.8837299&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Mumbai
            </a>{" "}
            <a
              href={
                "/search/?city=Pune&lat=18.523323&lng=73.8534987&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Pune
            </a>{" "}
            <a
              href={
                "/search/?city=Kochi&lat=9.9873421&lng=76.2646869&spaceType=" +
                spaceType
              }
              className="SearchLink"
            >
              Kochi
            </a>
            <div className="padding-20"></div>
          </div>

          <div className="col-md-12">
            <div className="filterbar" style={{ marginTop: 15 }}>
              <ul className="SearchListingFilter scrollmenu">
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
                        "&spaceType=dailyofficeSpace"
                      navigate(url)
                    }}
                    className={spaceType === "dailyofficeSpace" ? "active" : ""}
                  >
                    Coworking Spaces
                  </a>
                </li><li>
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
                        "&spaceType=monthlyofficeSpace"
                      navigate(url)
                    }}
                    className={
                      spaceType === "monthlyofficeSpace" ? "active" : ""
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
        <Listing city={city} lat={lat} lng={lng} spacetype="meetingSpace" />
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

SearchResultComponent.propTypes = {
  search: PropTypes.object,
}

export default withLocation(SearchResultComponent)
