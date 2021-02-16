import React from "react"
import { Link } from "gatsby"
const MOfficeSpacesContent = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-center meeting-img">
        <img
          src="https://assets.gofloaters.com/listing/plug-and-play.png"
          alt="Office for a month"
        ></img>
        <h4>Office for a month</h4>
      </div>
      <div className="col-md-4 text-center meeting-img">
        <img
          src="https://assets.gofloaters.com/listing/office-for-every-size.png"
          alt="Office for every size"
        ></img>
        <h4>Office for every size</h4>
      </div>
      <div className="col-md-4 text-center meeting-img">
        <img
          src="https://assets.gofloaters.com/listing/all-inclusive-price.png"
          alt="All inclusive pricing"
        ></img>
        <h4>Offices ready to use</h4>
      </div>
      <div className="col-md-12 text-center">
        <br></br>
        <p>
          <img
            src="https://assets.gofloaters.com/question.png"
            width="25"
          ></img>{" "}
          Looking for Daily pricing?{" "}
          <Link to="/office-spaces/">Click here</Link>
          <br></br>
        </p>
      </div>
    </div>
  )
}
export default MOfficeSpacesContent
