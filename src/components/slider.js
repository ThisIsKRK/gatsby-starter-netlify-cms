import React from "react"
import Slider from "react-slick"
import "../styles/slick.min.css"
import "../styles/slick-theme.min.css"
import startupStory from "../img/featureon/startup-story.jpg"
import forbes from "../img/featureon/forbes.jpg"
import indianExpress from "../img/featureon/the-new-indian-express.jpg"
import entrepreneur from "../img/featureon/entrepreneurindia.jpg"
import yourstory from "../img/featureon/yourstory.jpg"
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
      <div>
        <Slider {...settings}>
          <div>
            <div className="featureon">
              <Link to="/press" title="We’re famous!">
                <img src={forbes} alt="Forbes"></img>
              </Link>
            </div>
          </div>
          <div>
            <div className="featureon">
              <Link to="/press" title="We’re famous!">
                <img src={yourstory} alt="YourStory"></img>
              </Link>
            </div>
          </div>
          <div>
            <div className="featureon">
              <Link to="/press" title="We’re famous!">
                <img src={entrepreneur} alt="entrepreneur"></img>
              </Link>
            </div>
          </div>
          <div>
            <div className="featureon">
              <Link to="/press" title="We’re famous!">
                <img src={indianExpress} alt="Indian Express"></img>
              </Link>
            </div>
          </div>
          <div>
            <div className="featureon">
              <Link to="/press" title="We’re famous!">
                <img src={startupStory} alt="Startup Story"></img>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
export default SimpleSlider
