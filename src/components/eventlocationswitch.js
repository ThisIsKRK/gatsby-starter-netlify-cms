import React from "react"
import { Link, navigate } from "gatsby"

const EventSpaceLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/event-spaces-in-chennai/")
      case "Bengaluru":
        return navigate("/event-spaces-in-bengaluru/")
      case "Coimbatore":
        return navigate("/event-spaces-in-coimbatore/")
      case "Hyderabad":
        return navigate("/event-spaces-in-hyderabad/")
      case "New Delhi":
        return navigate("/event-spaces-in-new-delhi/")
      case "Noida":
        return navigate("/event-spaces-in-noida/")
      case "Gurugram":
        return navigate("/event-spaces-in-gurugram/")
      case "Gaziabad":
        return navigate("/event-spaces-in-gaziabad/")
      case "Faridabad":
        return navigate("/event-spaces-in-faridabad/")
      case "Mumbai":
        return navigate("/event-spaces-in-mumbai/")
      case "Pune":
        return navigate("/event-spaces-in-pune/")
      case "Kochi":
        return navigate("/event-spaces-in-kochi/")
      case "Ahmedabad":
        return navigate("/event-spaces-in-ahmedabad/")
      default:
        return navigate("/event-spaces-in-bengaluru/")
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
            to="/event-spaces-in-chennai/"
          >
            Chennai
          </Link>
        </li>
        <li>
          <Link
            className={city === "Bengaluru" ? "active" : ""}
            to="/event-spaces-in-bengaluru/"
          >
            Bengaluru
          </Link>
        </li>
        <li>
          <Link
            className={city == "Coimbatore" ? "active" : ""}
            to="/event-spaces-in-coimbatore/"
          >
            Coimbatore
          </Link>
        </li>
        <li>
          <Link
            className={city == "Hyderabad" ? "active" : ""}
            to="/event-spaces-in-hyderabad/"
          >
            Hyderabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "New Delhi" ? "active" : ""}
            to="/event-spaces-in-new-delhi/"
          >
            New Delhi
          </Link>
        </li>
        <li>
          <Link
            className={city == "Noida" ? "active" : ""}
            to="/event-spaces-in-noida/"
          >
            Noida
          </Link>
        </li>
        <li>
          <Link
            className={city == "Gurugram" ? "active" : ""}
            to="/event-spaces-in-gurugram/"
          >
            Gurugram
          </Link>
        </li>
        <li>
          <Link
            className={city == "Gaziabad" ? "active" : ""}
            to="/event-spaces-in-gaziabad/"
          >
            Gaziabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "Faridabad" ? "active" : ""}
            to="/event-spaces-in-faridabad/"
          >
            Faridabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "Mumbai" ? "active" : ""}
            to="/event-spaces-in-mumbai/"
          >
            Mumbai
          </Link>
        </li>
        <li>
          <Link
            className={city == "Pune" ? "active" : ""}
            to="/event-spaces-in-pune/"
          >
            Pune
          </Link>
        </li>
        <li>
          <Link
            className={city == "Kochi" ? "active" : ""}
            to="/event-spaces-in-kochi/"
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
export default EventSpaceLocationSwitch
