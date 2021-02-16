import React from "react"
import { Link, navigate } from "gatsby"

const OfficeSpaceLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/coworking-spaces-in-chennai/")
      case "Bengaluru":
        return navigate("/coworking-spaces-in-bangalore/")
      case "Coimbatore":
        return navigate("/coworking-spaces-in-coimbatore/")
      case "Hyderabad":
        return navigate("/coworking-spaces-in-hyderabad/")
      case "New Delhi":
        return navigate("/coworking-spaces-in-new-delhi/")
      case "Noida":
        return navigate("/coworking-spaces-in-noida/")
      case "Gurugram":
        return navigate("/coworking-spaces-in-gurugram/")
      case "Gaziabad":
        return navigate("/coworking-spaces-in-gaziabad/")
      case "Faridabad":
        return navigate("/coworking-spaces-in-faridabad/")
      case "Mumbai":
        return navigate("/coworking-spaces-in-mumbai/")
      case "Pune":
        return navigate("/coworking-spaces-in-pune/")
      case "Kochi":
        return navigate("/coworking-spaces-in-kochi/")
      case "Ahmedabad":
        return navigate("/coworking-spaces-in-ahmedabad/")
      default:
        return navigate("/coworking-spaces-in-bangalore/")
    }
  }

  var city = props.city
  return (
    <div className="scrollmenu">
      <Link
        className={
          city === "Chennai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-chennai/"
      >
        Chennai
      </Link>
      <Link
        className={
          city === "Bengaluru"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/coworking-spaces-in-bangalore/"
      >
        Bengaluru
      </Link>
      <Link
        className={
          city == "Coimbatore"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/coworking-spaces-in-coimbatore/"
      >
        Coimbatore
      </Link>
      <Link
        className={
          city == "Hyderabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-hyderabad/"
      >
        Hyderabad
      </Link>
      <Link
        className={
          city == "New Delhi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-new-delhi/"
      >
        New Delhi
      </Link>
      <Link
        className={
          city == "Noida" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-noida/"
      >
        Noida
      </Link>
      <Link
        className={
          city == "Gurugram" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-gurugram/"
      >
        Gurugram
      </Link>

      <Link
        className={
          city == "Gaziabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-gaziabad/"
      >
        Gaziabad
      </Link>

      <Link
        className={
          city == "Faridabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-faridabad/"
      >
        Faridabad
      </Link>

      <Link
        className={
          city == "Mumbai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-mumbai/"
      >
        Mumbai
      </Link>

      <Link
        className={
          city == "Pune" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-pune/"
      >
        Pune
      </Link>

      <Link
        className={
          city == "Kochi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-kochi/"
      >
        Kochi
      </Link>
      <Link
        className={
          city == "Indore" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-indore/"
      >
        Indore
      </Link>
      <Link
        className={
          city == "Ahmedabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-ahmedabad/"
      >
        Ahmedabad
      </Link>
      <Link
        className={
          city == "Kolkata" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-kolkata/"
      >
        Kolkata
      </Link>
      <Link
        className={
          city == "Madurai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-madurai/"
      >
        Madurai
      </Link>
      <Link
        className={
          city == "Trichy" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/coworking-spaces-in-trichy/"
      >
        Trichy
      </Link>

      {/* <div className="ListingFilterMobile">
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
      </div> */}
    </div>
  )
}
export default OfficeSpaceLocationSwitch
