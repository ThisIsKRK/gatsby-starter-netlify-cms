import React from "react"
import WorkCafeImage from "../styles/workcafe.jpg"
import OfficeSpace from "../styles/officespace.jpg"
import TrainingSpace from "../styles/trainingspace.jpg"
import EventSpace from "../styles/eventspace.jpg"
import MeetingSpace from "../styles/meetingspaces.jpg"
import MOfficeSpace from "../styles/officespacem.jpg"
import MWorkCafeImage from "../styles/workcafem.jpg"
import MTrainingSpace from "../styles/trainingspacem.jpg"
import MEventSpace from "../styles/eventspacem.jpg"
import MMeetingSpace from "../styles/meetingspacesm.jpg"
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
            src={OfficeSpace}
            style={{ width: "100%" }}
            alt="Office Space GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src={MOfficeSpace}
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
            src={TrainingSpace}
            style={{ width: "100%" }}
            alt="Training Space GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src={MTrainingSpace}
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
            src={WorkCafeImage}
            style={{ width: "100%" }}
            alt="Work Cafe GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src={MWorkCafeImage}
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
            src={MeetingSpace}
            style={{ width: "100%" }}
            alt="Meeting Space GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src={MMeetingSpace}
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
            src={EventSpace}
            style={{ width: "100%" }}
            alt="Event Spaces GoFloaters"
            className="DesktopOnly"
          ></img>
          <img
            src={MEventSpace}
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
