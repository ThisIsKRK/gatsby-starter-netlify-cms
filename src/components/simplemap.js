import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div className="roundCircle"></div>

const SimpleMap = props => {
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
        bootstrapURLKeys={{ key: "AIzaSyDNcWXxIn7uaweoEprz2UcuMfuqtpglYEM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={props.lat} lng={props.lng} text="location" />
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
