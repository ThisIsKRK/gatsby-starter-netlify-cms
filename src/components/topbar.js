import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
const TopBar = () => {
  const [key, setKey] = useState("false")

  useEffect(() => {
    setKey(localStorage.getItem("topbarClose"))
  }, [])

  const closeTopBar = () => {
    localStorage.setItem("topbarClose", true)
    setKey("true")
  }
  return (
    <div className={"topBar " + key}>
      <div className="container">
        <div className="row">
          <div className="col-11">
            <b>COVID-19 Response:</b> Providing safe & sanitized spaces -{" "}
            <Link to="/covid-safety-pledge/" style={{ color: "#fff" }}>
              Know more
            </Link>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={closeTopBar}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopBar
