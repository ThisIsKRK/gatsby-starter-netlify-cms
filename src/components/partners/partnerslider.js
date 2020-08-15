import React from "react"
import Slider from "react-slick"
import "../../styles/slick.min.css"
import "../../styles/slick-theme.min.css"
import Partners from "./partners"
import googlecloud from "../../img/partner/Google-Cloud-logo.png"
import ibm from "../../img/partner/IBM-Cloud-logo.png"
import hubspot from "../../img/partner/Hubspot-logo.png"
import typeform from "../../img/partner/Typeform-logo.png"
import todoist from "../../img/partner/todoist-logo.png"
import udemy from "../../img/partner/Udemy.png"
class PartnerSlider extends React.Component {
  render() {
    var partnersliderSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 300,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
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
        <Slider {...partnersliderSettings}>
          <div>
            <Partners
              imgurl={googlecloud}
              offer="Free Cloud Credit"
              partnername="Google Cloud Free Cloud Credit"
              link="/partner/google-cloud/"
            />
          </div>
          <div>
            <Partners
              imgurl={ibm}
              offer="Free Cloud Credit"
              partnername="IBM Free Cloud Credit"
              link="/partner/ibm-cloud/"
            />
          </div>
          <div>
            <Partners
              imgurl={hubspot}
              offer="90% Off"
              partnername="HubSpot 90% Off"
              link="/partner/hubspot/"
            />
          </div>
          <div>
            <Partners
              imgurl={typeform}
              offer="50% Off"
              partnername=" Typeform HubSpot 90% Off"
              link="/partner/typeform/"
            />
          </div>
          <div>
            <Partners
              imgurl={todoist}
              offer="1 Year Free"
              partnername="todoist 1 Year Free"
              link="/partner/todoist-business/"
            />
          </div>
          <div>
            <Partners
              imgurl={udemy}
              offer="90% Off"
              partnername="udemy 90% Off"
              link="/partner/udemy/"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
export default PartnerSlider
