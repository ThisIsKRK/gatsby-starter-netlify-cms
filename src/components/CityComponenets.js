import React, { useState } from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import Listing from "./listing"
import SearchForm from "./search/search"
import { navigate } from "gatsby"

const CityComponents = props => {
  const city = props.city
  const lat = props.lat
  const lng = props.lng
  const [spaceType, setspaceType] = useState(props.spaceType)
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchForm />
            <div className="padding-20"></div>
          </div>

          <div className="col-md-4">
            <div className="filterbar " style={{ marginTop: 15 }}>
              <select
                className="form-control"
                onChange={e => {
                  var url = e.currentTarget.value
                  setspaceType(url)
                }}
              >
                <option value="officeSpace">Office Spaces</option>
                <option value="workCafe">Work Cafes</option>
                <option value="meetingSpace">Meeting Spaces</option>
                <option value="eventSpace">Events Spaces</option>
                <option value="trainingRoom">Training Spaces</option>
              </select>
              {/*<ul>
                <li>
                  <a
                    onClick={() => {
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
                    className={spaceType ==== "officeSpace" ? "active" : ""}
                  >
                    Office Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
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
                    className={spaceType ==== "workCafe" ? "active" : ""}
                  >
                    Work Cafés
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
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
                    className={spaceType ==== "meetingSpace" ? "active" : ""}
                  >
                    Meeting Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
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
                    className={spaceType ==== "eventSpace" ? "active" : ""}
                  >
                    Event Spaces
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
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
                    className={spaceType ==== "trainingRoom" ? "active" : ""}
                  >
                    Training Spaces
                  </a>
                </li>
                  </ul>*/}
            </div>
          </div>
        </div>
      </div>
      {lat !== "" && lng !== "" && spaceType === "officeSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="officeSpace" />
      ) : (
        ""
      )}
      {lat !== "" && lng !== "" && spaceType === "workCafe" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="workCafe" />
      ) : (
        ""
      )}
      {lat !== "" && lng !== "" && spaceType === "meetingSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="meetingSpace" />
      ) : (
        ""
      )}
      {lat !== "" && lng !== "" && spaceType === "eventSpace" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="eventSpace" />
      ) : (
        ""
      )}
      {lat !== "" && lng !== "" && spaceType === "trainingRoom" ? (
        <Listing city={city} lat={lat} lng={lng} spacetype="trainingRoom" />
      ) : (
        ""
      )}
    </div>
  )
}

export default withLocation(CityComponents)
