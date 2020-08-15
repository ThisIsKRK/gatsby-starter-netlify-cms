import React from "react"
import "./testimonial.scss"
import { Helmet } from "react-helmet"
const Testimonial = props => {
  return (
    <div className="testimonialcard">
      <div className="mobile-text-center MobileOnly">
        {props.comments}
        <br></br>
        <img src={props.imgurl} className="roundimage" alt={props.author}></img>
        <br></br>
        <b>{props.author}</b>
        <br></br>
        {props.company}
      </div>
    </div>
  )
}
export default Testimonial
