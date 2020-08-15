import React from "react"
import { Link, navigate } from "gatsby"

const MeetingLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/meeting-rooms-in-chennai/")
      case "Bengaluru":
        return navigate("/meeting-rooms-in-bengaluru/")
      case "Coimbatore":
        return navigate("/meeting-rooms-in-coimbatore/")
      case "Hyderabad":
        return navigate("/meeting-rooms-in-hyderabad/")
      case "New Delhi":
        return navigate("/meeting-rooms-in-new-delhi/")
      case "Noida":
        return navigate("/meeting-rooms-in-noida/")
      case "Gurugram":
        return navigate("/meeting-rooms-in-gurugram/")
      case "Gaziabad":
        return navigate("/meeting-rooms-in-gaziabad/")
      case "Faridabad":
        return navigate("/meeting-rooms-in-faridabad/")
      case "Mumbai":
        return navigate("/meeting-rooms-in-mumbai/")
      case "Pune":
        return navigate("/meeting-rooms-in-pune/")
      case "Kochi":
        return navigate("/meeting-rooms-in-kochi/")
      case "Ahmedabad":
        return navigate("/meeting-rooms-in-ahmedabad/")
      default:
        return navigate("/meeting-rooms-in-bengaluru/")
    }
  }

  var city = props.city
  return (
    <div className="filterbar">
      <ul className="ListingFilter DesktopOnly">
        <b>Browse spaces by city:</b>
        <br></br>
        <li>
          <Link
            className={city === "Chennai" ? "active" : ""}
            to="/meeting-rooms-in-chennai/"
          >
            Chennai
          </Link>
        </li>
        <li>
          <Link
            className={city === "Bengaluru" ? "active" : ""}
            to="/meeting-rooms-in-bengaluru/"
          >
            Bengaluru
          </Link>
        </li>
        <li>
          <Link
            className={city == "Coimbatore" ? "active" : ""}
            to="/meeting-rooms-in-coimbatore/"
          >
            Coimbatore
          </Link>
        </li>
        <li>
          <Link
            className={city == "Hyderabad" ? "active" : ""}
            to="/meeting-rooms-in-hyderabad/"
          >
            Hyderabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "New Delhi" ? "active" : ""}
            to="/meeting-rooms-in-new-delhi/"
          >
            New Delhi
          </Link>
        </li>
        <li>
          <Link
            className={city == "Noida" ? "active" : ""}
            to="/meeting-rooms-in-noida/"
          >
            Noida
          </Link>
        </li>
        <li>
          <Link
            className={city == "Gurugram" ? "active" : ""}
            to="/meeting-rooms-in-gurugram/"
          >
            Gurugram
          </Link>
        </li>
        <li>
          <Link
            className={city == "Gaziabad" ? "active" : ""}
            to="/meeting-rooms-in-gaziabad/"
          >
            Gaziabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "Faridabad" ? "active" : ""}
            to="/meeting-rooms-in-faridabad/"
          >
            Faridabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "Mumbai" ? "active" : ""}
            to="/meeting-rooms-in-mumbai/"
          >
            Mumbai
          </Link>
        </li>
        <li>
          <Link
            className={city == "Pune" ? "active" : ""}
            to="/meeting-rooms-in-pune/"
          >
            Pune
          </Link>
        </li>
        <li>
          <Link
            className={city == "Kochi" ? "active" : ""}
            to="/meeting-rooms-in-kochi/"
          >
            Kochi
          </Link>
        </li>
      </ul>
      <div className="MobileOnly">
        <b>Browse spaces by city:</b>
        <select
          className="form-control"
          onChange={e => {
            locationSelected(e.currentTarget.value)
          }}
        >
          <option value="Chennai" selected={city === "Chennai"}>
            Chennai
          </option>
          <option value="Bengaluru" selected={city === "Bengaluru"}>
            Bengaluru
          </option>
          <option value="Coimbatore" selected={city === "Coimbatore"}>
            Coimbatore
          </option>
          <option value="Hyderabad" selected={city === "Hyderabad"}>
            Hyderabad
          </option>
          <option value="New Delhi" selected={city === "New Delhi"}>
            New Delhi
          </option>
          <option value="Noida" selected={city === "Noida"}>
            Noida
          </option>
          <option value="Gurugram" selected={city === "Gurugram"}>
            Gurugram
          </option>
          <option value="Gaziabad" selected={city === "Gaziabad"}>
            Gaziabad
          </option>
          <option value="Faridabad" selected={city === "Faridabad"}>
            Faridabad
          </option>
          <option value="Mumbai" selected={city === "Mumbai"}>
            Mumbai
          </option>
          <option value="Pune" selected={city === "Pune"}>
            Pune
          </option>
          <option value="Kochi" selected={city === "Kochi"}>
            Kochi
          </option>
        </select>
      </div>
    </div>
  )
}
export default MeetingLocationSwitch
