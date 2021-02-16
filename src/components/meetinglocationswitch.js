import React from "react"
import { Link, navigate } from "gatsby"

const MeetingLocationSwitch = props => {
  const locationSelected = filter => {
    switch (filter) {
      case "Chennai":
        return navigate("/meeting-rooms-in-chennai/")
      case "Bengaluru":
        return navigate("/meeting-rooms-in-bangalore/")
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
        return navigate("/meeting-rooms-in-bangalore/")
    }
  }

  var city = props.city
  return (
    <div className="scrollmenu">
      <Link
        className={
          city === "Chennai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-chennai/"
      >
        Chennai
      </Link>

      <Link
        className={
          city === "Bengaluru"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/meeting-rooms-in-bangalore/"
      >
        Bengaluru
      </Link>

      <Link
        className={
          city == "Coimbatore"
            ? "ListingSearchLink active"
            : "ListingSearchLink"
        }
        to="/meeting-rooms-in-coimbatore/"
      >
        Coimbatore
      </Link>

      <Link
        className={
          city == "Hyderabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-hyderabad/"
      >
        Hyderabad
      </Link>

      <Link
        className={
          city == "New Delhi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-new-delhi/"
      >
        New Delhi
      </Link>

      <Link
        className={
          city == "Noida" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-noida/"
      >
        Noida
      </Link>

      <Link
        className={
          city == "Gurugram" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-gurugram/"
      >
        Gurugram
      </Link>
      <Link
        className={
          city == "Gaziabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-gaziabad/"
      >
        Gaziabad
      </Link>
      <Link
        className={
          city == "Faridabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-faridabad/"
      >
        Faridabad
      </Link>
      <Link
        className={
          city == "Mumbai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-mumbai/"
      >
        Mumbai
      </Link>
      <Link
        className={
          city == "Pune" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-pune/"
      >
        Pune
      </Link>
      <Link
        className={
          city == "Kochi" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-kochi/"
      >
        Kochi
      </Link>
      <Link
        className={
          city == "Indore" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-indore/"
      >
        Indore
      </Link>
      <Link
        className={
          city == "Ahmedabad" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-ahmedabad/"
      >
        Ahmedabad
      </Link>
      <Link
        className={
          city == "Kolkata" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-kolkata/"
      >
        Kolkata
      </Link>
      <Link
        className={
          city == "Madurai" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-madurai/"
      >
        Madurai
      </Link>
      <Link
        className={
          city == "Trichy" ? "ListingSearchLink active" : "ListingSearchLink"
        }
        to="/meeting-rooms-in-trichy/"
      >
        Trichy
      </Link>
    </div>
  )
}
export default MeetingLocationSwitch
