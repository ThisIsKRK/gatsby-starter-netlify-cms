import React from "react"
import { Link, navigate } from "gatsby"

const OfficeSpaceLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/office-spaces-for-rent-in-chennai/")
      case "Bengaluru":
        return navigate("/office-spaces-for-rent-in-bangalore/")
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
        return navigate("/office-spaces-for-rent-in-bangalore/")
    }
  }

  var city = props.city
  return (
    <div className="scrollmenu">
      <Link
        className={
          city === "Chennai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-chennai/"
      >
        Chennai
      </Link>
      <Link
        className={
          city === "Bengaluru"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-bangalore/"
      >
        Bengaluru
      </Link>
      <Link
        className={
          city == "Coimbatore"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-coimbatore/"
      >
        Coimbatore
      </Link>
      <Link
        className={
          city == "Hyderabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-hyderabad/"
      >
        Hyderabad
      </Link>
      <Link
        className={
          city == "New Delhi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-new-delhi/"
      >
        New Delhi
      </Link>
      <Link
        className={
          city == "Noida" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-noida/"
      >
        Noida
      </Link>
      <Link
        className={
          city == "Gurugram" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-gurugram/"
      >
        Gurugram
      </Link>

      <Link
        className={
          city == "Gaziabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-gaziabad/"
      >
        Gaziabad
      </Link>

      <Link
        className={
          city == "Faridabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-faridabad/"
      >
        Faridabad
      </Link>

      <Link
        className={
          city == "Mumbai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-mumbai/"
      >
        Mumbai
      </Link>

      <Link
        className={
          city == "Pune" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-pune/"
      >
        Pune
      </Link>

      <Link
        className={
          city == "Kochi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-kochi/"
      >
        Kochi
      </Link>
      <Link
        className={
          city == "Indore" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-indore/"
      >
        Indore
      </Link>
      <Link
        className={
          city == "Ahmedabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-ahmedabad/"
      >
        Ahmedabad
      </Link>
      <Link
        className={
          city == "Kolkata" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-kolkata/"
      >
        Kolkata
      </Link>
      <Link
        className={
          city == "Madurai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-madurai/"
      >
        Madurai
      </Link>
      <Link
        className={
          city == "Trichy" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-spaces-for-rent-in-trichy/"
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
