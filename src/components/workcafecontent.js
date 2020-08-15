import React from "react"
import SpaceNearYou from "../img/listing/spaces-near-you.png"
import PayRedeem from "../img/listing/pay-rs-250-per-visit-and-redeem-100-on-food.png"
import ExclusiveWorkspots from "../img/listing/Exclusive-workspot.png"
const WorkCafeContent = () => {
  return (
    <div className="row">
      <div className="col-md-4 text-center">
        <img src={SpaceNearYou} alt="Spaces near you"></img>
        <h4>Spaces near you</h4>
      </div>
      <div className="col-md-4 text-center">
        <img
          src={PayRedeem}
          alt="Pay Rs. 250 per visit and redeem 100% on Food"
        ></img>
        <h4>Pay Rs. 250 per visit and redeem 100% on Food</h4>
      </div>
      <div className="col-md-4 text-center">
        <img src={ExclusiveWorkspots} alt="Exclusive Workspots"></img>
        <h4>Exclusive Workspots</h4>
      </div>
      <div className="col-md-12 text-center">
        <br></br>
        <p>
          Want to work on your next cool thing or meet someone? Our Work Cafés
          come fully loaded with high speed Wi-Fi, plug points and comfortable
          workspots. Book a Work Cafe near you for ₹250, drop by and get
          cracking. Wanna order food? Redeem 100% of the booking amount on your
          food bill. Sweet, Isn’t it. You can bring 1 Guest for free and get 20%
          instant cash back on food credit recharges.
        </p>
      </div>
    </div>
  )
}
export default WorkCafeContent
