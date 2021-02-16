import React from "react"
import { Link, navigate } from "gatsby"

const MonthlyOfficeSpaceLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/office-space-for-monthly-rent-in-chennai/")
      case "Bengaluru":
        return navigate("/office-space-for-monthly-rent-in-bangalore/")
      case "Coimbatore":
        return navigate("/office-space-for-monthly-rent-in-coimbatore/")
      case "Hyderabad":
        return navigate("/office-space-for-monthly-rent-in-hyderabad/")
      case "New Delhi":
        return navigate("/office-space-for-monthly-rent-in-new-delhi/")
      case "Noida":
        return navigate("/office-space-for-monthly-rent-in-noida/")
      case "Gurugram":
        return navigate("/office-space-for-monthly-rent-in-gurugram/")
      case "Gaziabad":
        return navigate("/office-space-for-monthly-rent-in-gaziabad/")
      case "Faridabad":
        return navigate("/office-space-for-monthly-rent-in-faridabad/")
      case "Mumbai":
        return navigate("/office-space-for-monthly-rent-in-mumbai/")
      case "Pune":
        return navigate("/office-space-for-monthly-rent-in-pune/")
      case "Kochi":
        return navigate("/office-space-for-monthly-rent-in-kochi/")
      case "Ahmedabad":
        return navigate("/office-space-for-monthly-rent-in-ahmedabad/")
      default:
        return navigate("/office-space-for-monthly-rent-in-bangalore/")
    }
  }

  var city = props.city
  return (
    <div className="scrollmenu">
      <Link
        className={
          city === "Chennai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-chennai/"
      >
        Chennai
      </Link>

      <Link
        className={
          city === "Bengaluru"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-bangalore/"
      >
        Bengaluru
      </Link>

      <Link
        className={
          city == "Coimbatore"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-coimbatore/"
      >
        Coimbatore
      </Link>

      <Link
        className={
          city == "Hyderabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-hyderabad/"
      >
        Hyderabad
      </Link>

      <Link
        className={
          city == "New Delhi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-new-delhi/"
      >
        New Delhi
      </Link>

      <Link
        className={
          city == "Noida" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-noida/"
      >
        Noida
      </Link>

      <Link
        className={
          city == "Gurugram" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-gurugram/"
      >
        Gurugram
      </Link>

      <Link
        className={
          city == "Gaziabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-gaziabad/"
      >
        Gaziabad
      </Link>

      <Link
        className={
          city == "Faridabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-faridabad/"
      >
        Faridabad
      </Link>

      <Link
        className={
          city == "Mumbai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-mumbai/"
      >
        Mumbai
      </Link>

      <Link
        className={
          city == "Pune" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-pune/"
      >
        Pune
      </Link>

      <Link
        className={
          city == "Kochi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-kochi/"
      >
        Kochi
      </Link>
      <Link
        className={
          city == "Indore" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-indore/"
      >
        Indore
      </Link>
      <Link
        className={
          city == "Ahmedabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-ahmedabad/"
      >
        Ahmedabad
      </Link>
      <Link
        className={
          city == "Kolkata" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-kolkata/"
      >
        Kolkata
      </Link>
      <Link
        className={
          city == "Madurai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-madurai/"
      >
        Madurai
      </Link>
      <Link
        className={
          city == "Trichy" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/office-space-for-monthly-rent-in-trichy/"
      >
        Trichy
      </Link>
    </div>
  )
}
export default MonthlyOfficeSpaceLocationSwitch
