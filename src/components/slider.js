import React from "react"
import Slider from "react-slick"
import "../styles/slick.min.css"
import "../styles/slick-theme.min.css"
import startupStory from "../img/featureon/startup-story.jpg"
import forbes from "../img/featureon/forbes.jpg"
import indianExpress from "../img/featureon/the-new-indian-express.jpg"
import entrepreneur from "../img/featureon/entrepreneurindia.jpg"
import yourstory from "../img/featureon/yourstory.jpg"
import timesofindia from "../img/featureon/timesofindia.png"
import thehindu from "../img/featureon/thehindu.jpg"
import hindubusinessline from "../img/featureon/hindubusinessline.png"
import { Link } from "gatsby"
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      arrows: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="row">
        <div className="featureon col-md-2 col-6">
          <Link to="/press" title="We’re famous!">
            <img
              src="https://assets.gofloaters.com/featureon/forbes.jpg"
              alt="Forbes"
            ></img>
          </Link>
        </div>

        <div className="featureon col-md-2 col-6">
          <Link to="/press" title="We’re famous!">
            <img
              src="https://assets.gofloaters.com/featureon/yourstory.jpg"
              alt="YourStory"
            ></img>
          </Link>
        </div>

        <div className="featureon col-md-2 col-6">
          <Link to="/press" title="We’re famous!">
            <img
              src="https://assets.gofloaters.com/featureon/entrepreneurindia.jpg"
              alt="entrepreneur"
            ></img>
          </Link>
        </div>

        <div className="featureon col-md-2 col-6">
          <Link to="/press" title="We’re famous!">
            <img
              src="https://assets.gofloaters.com/featureon/the-new-indian-express.jpg"
              alt="Indian Express"
            ></img>
          </Link>
        </div>

        <div className="featureon col-md-2 col-6">
          <Link to="/press" title="We’re famous!">
            <img
              src="https://assets.gofloaters.com/featureon/startup-story.jpg"
              alt="Startup Story"
            ></img>
          </Link>
        </div>

        <div className="featureon col-md-2 col-6">
          <Link to="/press" title="We’re famous!">
            <img
              src="https://assets.gofloaters.com/featureon/timesofindia.png"
              alt="times of india"
            ></img>
          </Link>
        </div>
      </div>
    )
  }
}
export default SimpleSlider
