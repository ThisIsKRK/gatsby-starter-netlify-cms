import React from "react"
import "./partners.scss"
import { Link } from "gatsby"

const Partners = props => {
  return (
    <div className="partnercard">
      <Link to={props.link} title={props.partnername}>
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src={props.imgurl}
              className="img-responsive"
              alt={props.partnername}
            ></img>
          </div>
          <div className="col-md-12 text-center">
            <p>{props.offer}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Partners
