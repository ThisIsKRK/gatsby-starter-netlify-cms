import React from "react"
import Slider from "react-slick"
import Testimonial from "./testimonial"
import TestimonialMobile from "./testimonialmobile"
import "../../styles/slick.min.css"
import "../../styles/slick-theme.min.css"
import Vinay from "../../img/testimonial/vinay-004.jpg"
import Arpitaa from "../../img/testimonial/arpita-002.jpg"
import Devi from "../../img/testimonial/deviprasad-003.jpg"
import Balesh from "../../img/testimonial/balesh-001.jpg"
import { Helmet } from "react-helmet"
class TestimonialSlider extends React.Component {
  render() {
    var testimonailSettings = {
      dots: false,
      speed: 900,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Helmet>
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"
            defer
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
            defer
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
            defer
          ></script>
        </Helmet>
        <div className="DesktopOnly">
          <Slider {...testimonailSettings}>
            <div>
              <Testimonial
                comments="Gives me the freedom to set up my office across cities"
                author="Vinay Pushpakaran"
                company="Future Impact Learning"
                imgurl={Vinay}
                imageclass="vinay"
              />
            </div>
            <div>
              <Testimonial
                comments="Never have to worry about Internet or Plug Points."
                author="Arpitha Ramani"
                company="GE Healthcare"
                imgurl={Arpitaa}
                imageclass="arpitaa"
              />
            </div>
            <div>
              <Testimonial
                comments="Tons of options and they offer amazing community benefits"
                author="Devi Prasad"
                company="Freerangerz"
                imgurl={Devi}
                imageclass="deviprasad"
              />
            </div>
            <div>
              <Testimonial
                comments="My go-to platform for all our external meetings"
                author="Balesh Raghurajan"
                company="Effilor Consulting Services"
                imgurl={Balesh}
                imageclass="balesh"
              />
            </div>
          </Slider>
        </div>
        <div
          id="myCarousel"
          className="MobileOnly carousel slide"
          data-ride="carousel"
          data-interval="4000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <TestimonialMobile
                comments="Gives me the freedom to set up my office across cities"
                author="Vinay Pushpakaran"
                company="Future Impact Learning"
                imgurl={Vinay}
                imageclass="vinay"
              />
            </div>
            <div className="carousel-item">
              <TestimonialMobile
                comments="Never have to worry about Internet or Plug Points."
                author="Arpitha Ramani"
                company="GE Healthcare"
                imgurl={Arpitaa}
                imageclass="arpitaa"
              />
            </div>
            <div className="carousel-item">
              <TestimonialMobile
                comments="Tons of options and they offer amazing community benefits"
                author="Devi Prasad"
                company="Freerangerz"
                imgurl={Devi}
                imageclass="deviprasad"
              />
            </div>
            <div className="carousel-item">
              <TestimonialMobile
                comments="My go-to platform for all our external meetings"
                author="Balesh Raghurajan"
                company="Effilor Consulting Services"
                imgurl={Balesh}
                imageclass="balesh"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TestimonialSlider
