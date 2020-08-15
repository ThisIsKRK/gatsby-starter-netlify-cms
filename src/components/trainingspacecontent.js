import React from "react"
import PocketFriendly from "../img/listing/pocket-friendly.png"
import WeHaveEverthing from "../img/listing/we-have-everything-you-need.png"
import VarietyOfSpace from "../img/listing/variety-of-spaces.png"
const TrainingSpaceContent = () => {
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
          Planning to host a workshop or run a training session? We have
          training rooms at varius sizes that fits your exact requirements. You
          don’t even have to worry about hauling in projectors and whiteboards,
          because our spaces comes with all the amenities. If you need food, we
          can arrange that as well. So, what are you waiting for? Go ahead and
          book your next session.
        </p>
      </div>
    </div>
  )
}
export default TrainingSpaceContent
