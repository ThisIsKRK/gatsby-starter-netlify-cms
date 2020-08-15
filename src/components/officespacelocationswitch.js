import React from "react"
import { Link, navigate } from "gatsby"

const OfficeSpaceLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/office-spaces-for-rent-in-chennai/")
      case "Bengaluru":
        return navigate("/office-spaces-for-rent-in-bengaluru/")
      case "Coimbatore":
        return navigate("/office-spaces-for-rent-in-coimbatore/")
      case "Hyderabad":
        return navigate("/office-spaces-for-rent-in-hyderabad/")
      case "New Delhi":
        return navigate("/office-spaces-for-rent-in-new-delhi/")
      case "Noida":
        return navigate("/office-spaces-for-rent-in-noida/")
      case "Gurugram":
        return navigate("/office-spaces-for-rent-in-gurugram/")
      case "Gaziabad":
        return navigate("/office-spaces-for-rent-in-gaziabad/")
      case "Faridabad":
        return navigate("/office-spaces-for-rent-in-faridabad/")
      case "Mumbai":
        return navigate("/office-spaces-for-rent-in-mumbai/")
      case "Pune":
        return navigate("/office-spaces-for-rent-in-pune/")
      case "Kochi":
        return navigate("/office-spaces-for-rent-in-kochi/")
      case "Ahmedabad":
        return navigate("/office-spaces-for-rent-in-ahmedabad/")
      default:
        return navigate("/office-spaces-for-rent-in-bengaluru/")
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
            to="/office-spaces-for-rent-in-chennai/"
          >
            Chennai
          </Link>
        </li>
        <li>
          <Link
            className={city === "Bengaluru" ? "active" : ""}
            to="/office-spaces-for-rent-in-bengaluru/"
          >
            Bengaluru
          </Link>
        </li>
        <li>
          <Link
            className={city == "Coimbatore" ? "active" : ""}
            to="/office-spaces-for-rent-in-coimbatore/"
          >
            Coimbatore
          </Link>
        </li>
        <li>
          <Link
            className={city == "Hyderabad" ? "active" : ""}
            to="/office-spaces-for-rent-in-hyderabad/"
          >
            Hyderabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "New Delhi" ? "active" : ""}
            to="/office-spaces-for-rent-in-new-delhi/"
          >
            New Delhi
          </Link>
        </li>
        <li>
          <Link
            className={city == "Noida" ? "active" : ""}
            to="/office-spaces-for-rent-in-noida/"
          >
            Noida
          </Link>
        </li>
        <li>
          <Link
            className={city == "Gurugram" ? "active" : ""}
            to="/office-spaces-for-rent-in-gurugram/"
          >
            Gurugram
          </Link>
        </li>
        <li>
          <Link
            className={city == "Gaziabad" ? "active" : ""}
            to="/office-spaces-for-rent-in-gaziabad/"
          >
            Gaziabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "Faridabad" ? "active" : ""}
            to="/office-spaces-for-rent-in-faridabad/"
          >
            Faridabad
          </Link>
        </li>
        <li>
          <Link
            className={city == "Mumbai" ? "active" : ""}
            to="/office-spaces-for-rent-in-mumbai/"
          >
            Mumbai
          </Link>
        </li>
        <li>
          <Link
            className={city == "Pune" ? "active" : ""}
            to="/office-spaces-for-rent-in-pune/"
          >
            Pune
          </Link>
        </li>
        <li>
          <Link
            className={city == "Kochi" ? "active" : ""}
            to="/office-spaces-for-rent-in-kochi/"
          >
            Kochi
          </Link>
        </li>
      </ul>
      <div className="ListingFilterMobile MobileOnly">
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
export default OfficeSpaceLocationSwitch
