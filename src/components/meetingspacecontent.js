import React from "react"
import PocketFriendly from "../img/listing/pocket-friendly.png"
import WeHaveEverthing from "../img/listing/we-have-everything-you-need.png"
import VarietyOfSpace from "../img/listing/variety-of-spaces.png"
const MeetingSpacesContent = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-center meeting-img">
        <img src={VarietyOfSpace} alt="Variety of Spaces"></img>
        <h4>Variety of Spaces</h4>
      </div>
      <div className="col-md-4 text-center meeting-img">
        <img src={PocketFriendly} alt="Pocket friendly"></img>
        <h4>Pocket friendly</h4>
      </div>
      <div className="col-md-4 text-center meeting-img">
        <img src={WeHaveEverthing} alt="We have everything you need"></img>
        <h4>We have everything you need</h4>
      </div>
      <div className="col-md-12 text-center">
        <br></br>
        <p>
          Planning to host a workshop, team meeting, board meeting, conference
          or recruitment drive? We have awesome meeting spaces across the city
          with amazing amenties. If you need food, we can arrange that as well.
          So, what are you waiting for? Go ahead and book your next meeting.
        </p>
      </div>
    </div>
  )
}
export default MeetingSpacesContent
