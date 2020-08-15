import React, { useState } from "react"
import Autocomplete from "react-google-autocomplete"
import { navigate } from "gatsby"

const SearchFormAlter = props => {
  var spacetype = props.spacetype
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
      "/searchresult?city=" +
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
  return (
    <div>
      <div className="homePageSearch">
        <div className="input-group has-search">
          <span
            className="fa fa-search form-control-feedback"
            style={{ lineHeight: 2.3 }}
          ></span>
          <Autocomplete
            style={{ width: "90%" }}
            className="form-control signupform"
            placeholder={
              props.placeholder ? props.placeholder : "Enter your location.."
            }
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
                "&spaceType=officeSpace"
              navigate(url)
            }} */
            types={["(regions)"]}
            componentRestrictions={{ country: "in" }}
          />
          {/* 
          <input
            className="form-control signupform"
            placeholder="Enter your location.."
          ></input> */}
        </div>
      </div>
    </div>
  )
}
export default SearchFormAlter
