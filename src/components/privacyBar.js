import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import CookieImg from "../img/cookie.svg"
const PrivacyBar = () => {
  const [key, setKey] = useState(undefined)

  useEffect(() => {
    setKey(localStorage.getItem("privacyAccepted"))
  }, [])

  const closePrivacyBar = () => {
    localStorage.setItem("privacyAccepted", true)
    setKey(true)
  }
  return (
    <div className={"privacyBar " + key}>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p
              style={{
                background: "#fff",
                padding: "5px 15px",
                borderRadius: "16px",
                position: "absolute",
                bottom: "3px",
                boxShadow:
                  "rgba(0, 0, 0, 0.3) 0px 0px 6px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
              }}
              onClick={closePrivacyBar}
            >
              We use 🍪.
              <Link
                to="/privacy-policy/"
                style={{
                  color: "#4f9fc8",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Know more
              </Link>
              <span
                className="privacyButton"
                aria-hidden="true"
                onClick={closePrivacyBar}
              >
                <svg viewBox="0 0 11 10" fill="none" width="10" height="10">
                  <path
                    d="M8.29436 0.292893C8.68488 -0.0976311 9.31805 -0.0976311 9.70857 0.292893C10.0991 0.683417 10.0991 1.31658 9.70857 1.70711L6.41568 5L9.70857 8.29289C10.0991 8.68342 10.0991 9.31658 9.70857 9.70711C9.31805 10.0976 8.68488 10.0976 8.29436 9.70711L5.00146 6.41421L1.70857 9.70711C1.31805 10.0976 0.684882 10.0976 0.294358 9.70711C-0.0961664 9.31658 -0.0961664 8.68342 0.294358 8.29289L3.58725 5L0.294359 1.70711C-0.0961658 1.31658 -0.0961658 0.683417 0.294359 0.292893C0.684883 -0.0976311 1.31805 -0.0976311 1.70857 0.292893L5.00146 3.58579L8.29436 0.292893Z"
                    fill="#000"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}
export default PrivacyBar
