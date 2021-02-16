import React, { Component } from "react"

const AnyReactComponent = ({ text }) => (
  <div className="maplocation">
    <img
      src="https://app.gofloaters.com/assets/imgs/location.png"
      width="20"
      alt="Space Location"
    ></img>
  </div>
)

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20.5937,
      lng: 78.9629,
    },
    zoom: 5,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "520px", width: "100%" }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBCJXQI-JcKPAfG0ONO_x2D2yo_INuzV7c" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={13.0827} lng={80.2707} text="Chennai" />
          <AnyReactComponent
            lat={12.968367}
            lng={77.5953411}
            text="Bengaluru"
          />
          <AnyReactComponent
            lat={11.0189229}
            lng={76.9530155}
            text="Coimbatore"
          />
          <AnyReactComponent
            lat={17.4287602}
            lng={78.4864244}
            text="Hyderabad"
          />
          <AnyReactComponent
            lat={28.6139391}
            lng={77.2090212}
            text="New Delhi"
          />
          <AnyReactComponent lat={28.543754} lng={77.385002} text="Noida" />
          <AnyReactComponent
            lat={28.4372609}
            lng={76.9729185}
            text="Gurugram"
          />
       </GoogleMapReact> */}
      </div>
    )
  }
}

export default SimpleMap
