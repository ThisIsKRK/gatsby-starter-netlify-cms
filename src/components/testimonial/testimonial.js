import React from "react"
import "./testimonial.scss"

const Testimonial = props => {
  return (
    <div className="testimonialcard">
      <div className="row DesktopOnly">
        <div className="col-md-9 flex-fill">
          <p className="comments mobile-text-center">{props.comments}</p>
          <p className="author mobile-text-center DesktopOnly">
            {props.author}
          </p>
          <p className="designation mobile-text-center DesktopOnly">
            {props.company}
          </p>
        </div>
        <div className="col-md-3 text-center testimonial-image">
          <img
            src={props.imgurl}
            className="roundimage"
            alt={props.author}
          ></img>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
