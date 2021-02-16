import React from "react"

const HeaderBanner = props => {
  var headerclass = ""
  var MyClass = "1"
  if (props.headerclass) {
    headerclass = props.headerclass
  } else {
    headerclass = "default"
  }

  return (
    <div>
      {headerclass === "default" ? (
        <div className="header-banner default">{props.children}</div>
      ) : (
        ""
      )}
      {headerclass === "office-space" ? (
        <div className="customHeader">
          <img
            src="https://assets.gofloaters.com/spaces/officespace.jpg"
            style={{ width: "100%" }}
            alt="Office Space GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src="https://assets.gofloaters.com/spaces/officespacem.jpg"
            style={{ width: "100%" }}
            alt="Office Space GoFloaters"
            className="MobileOnly"
          ></img>
          <br /> <br />
          {props.children}
        </div>
      ) : (
        ""
      )}
      {headerclass === "training-space" ? (
        <div className="customHeader">
          <img
            src="https://assets.gofloaters.com/spaces/trainingspace.jpg"
            style={{ width: "100%" }}
            alt="Training Space GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src="https://assets.gofloaters.com/spaces/trainingspacem.jpg"
            style={{ width: "100%" }}
            alt="Training Space GoFloaters"
            className="MobileOnly"
          ></img>
          <br /> <br />
          {props.children}
        </div>
      ) : (
        ""
      )}
      {headerclass === "work-cafe" ? (
        <div className="customHeader">
          <img
            src="https://assets.gofloaters.com/spaces/workcafe.jpg"
            style={{ width: "100%" }}
            alt="Work Cafe GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src="https://assets.gofloaters.com/spaces/workcafem.jpg"
            style={{ width: "100%" }}
            alt="Work Cafe GoFloaters"
            className="MobileOnly"
          ></img>
          <br /> <br />
          {props.children}
        </div>
      ) : (
        ""
      )}
      {headerclass === "meeting-space" ? (
        <div className="customHeader">
          <img
            src="https://assets.gofloaters.com/spaces/meetingspaces.jpg"
            style={{ width: "100%" }}
            alt="Meeting Space GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src="https://assets.gofloaters.com/spaces/meetingspacesm.jpg"
            style={{ width: "100%" }}
            alt="Meeting Space GoFloaters"
            className="MobileOnly"
          ></img>
          <br /> <br />
          {props.children}
        </div>
      ) : (
        ""
      )}
      {headerclass === "event-space" ? (
        <div className="customHeader">
          <img
            src="https://assets.gofloaters.com/spaces/eventspace.jpg"
            style={{ width: "100%" }}
            alt="Event Spaces GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src="https://assets.gofloaters.com/spaces/eventspacem.jpg"
            style={{ width: "100%" }}
            alt="Event Spaces GoFloaters"
            className="MobileOnly"
          ></img>
          <br /> <br />
          {props.children}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
export default HeaderBanner
