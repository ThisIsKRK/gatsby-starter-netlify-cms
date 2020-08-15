import React from "react"
import { Link } from "gatsby"
const PartnerCard = props => {
  return (
    <div className="col-md-6">
      <div className="partnerCard">
        <div className="partnerImage">
          <img src={props.partnerImg} alt={props.partnerName}></img>
        </div>
        <div className="partnerDesc">
          <p>{props.partnerDesc}</p>
        </div>
        <div className="partnerAction">
          <Link to={props.partnerLink}>Know More</Link>
        </div>
      </div>
    </div>
  )
}
export default PartnerCard
