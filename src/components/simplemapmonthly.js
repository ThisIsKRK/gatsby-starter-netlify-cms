import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div className="roundCircleM"></div>

const SimpleMapMonthly = props => {
  var defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 15,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "100%" }}>
      <br></br>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFzQyh0__KlIMKsmGqMIsnsolOeXTYoUs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={props.lat} lng={props.lng} text="location" />
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMapMonthly
