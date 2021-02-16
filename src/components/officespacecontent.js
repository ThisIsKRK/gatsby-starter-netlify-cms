import React from "react"
import { Link } from "gatsby"
import PlugandPlay from "../img/listing/plug-and-play.png"
import OfficeForEverySize from "../img/listing/office-for-every-size.png"
import AllInclusive from "../img/listing/all-inclusive-price.png"
import QuestionMark from "../img/question.png"
const OfficeSpacesContent = () => {
  return (
    <div className="row">
      <div className="col-md-3 text-center meeting-img"></div>
      <div className="col-md-2 text-center meeting-img">
        <img
          src="https://assets.gofloaters.com/listing/plug-and-play.png"
          alt="Plug and play"
        ></img>
        <p>Office for a day</p>
      </div>
      <div className="col-md-2 text-center meeting-img">
        <img
          src="https://assets.gofloaters.com/listing/office-for-every-size.png"
          alt="Office for every size"
        ></img>
        <p>Office for every size</p>
      </div>
      <div className="col-md-2 text-center meeting-img">
        <img
          src="https://assets.gofloaters.com/listing/all-inclusive-price.png"
          alt="All inclusive pricing"
        ></img>
        <p>Offices ready to use</p>
      </div>
      <div className="col-md-12 text-center">
        <br></br>
        <p>
          <img
            src="https://assets.gofloaters.com/question.png"
            width="25"
          ></img>{" "}
          Looking for monthly pricing?{" "}
          <Link to="/monthly-office/">Click here</Link>
          <br></br>
        </p>
      </div>
    </div>
  )
}
export default OfficeSpacesContent
