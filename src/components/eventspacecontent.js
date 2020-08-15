import React from "react"
import PocketFriendly from "../img/listing/pocket-friendly.png"
import WeHaveEverthing from "../img/listing/we-have-everything-you-need.png"
import VarietyOfSpace from "../img/listing/variety-of-spaces.png"
const EventSpaceContent = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-center">
        <img src={VarietyOfSpace} alt="Variety of Spaces"></img>
        <h4>Variety of Spaces</h4>
      </div>
      <div className="col-md-4 text-center">
        <img src={PocketFriendly}></img>
        <h4>Pocket friendly</h4>
      </div>
      <div className="col-md-4 text-center">
        <img src={WeHaveEverthing} alt="We have everything you need"></img>
        <h4>We have everything you need</h4>
      </div>
      <div className="col-md-12 text-center">
        <br></br>
        <p>
          Planning to host a workshop, corporate event, meet-up or a personal
          event? We have awesome event spaces that can host 10 to 300 people. It
          comes with all the amenties you need. If you need food, we can arrange
          that as well. So, what are you waiting for? Go ahead and book your
          next event.
        </p>
      </div>
    </div>
  )
}
export default EventSpaceContent
