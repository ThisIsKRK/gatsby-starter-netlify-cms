import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

import PrivacyBar from "../components/privacyBar"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <br></br>
            <img
              src="https://assets.gofloaters.com/logo.png"
              width="230"
              alt="GoFloaters"
            ></img>
            <br />
            <br />
            <p style={{ fontSize: 19 }}>
              <b>GoFloaters</b> is a platform that helps you find work and
              meeting spaces that can be booked instantly.
            </p>
            <br></br>
            <br></br> <br></br>
          </div>
          <div className="col-md-2 text-left">
            <b style={{ fontSize: 18 }}>Quick Links</b>
            <ul className="links MobileOnly">
              <li>
                <Link to="/about-us/"> About Us </Link>
              </li>
              <li>
                <Link to="/how-are-we-different/">Why GoFloaters </Link>
              </li>
              <li>
                <a
                  href="https://spaceadmin.gofloaters.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Space Partner Login
                </a>
              </li>

              <li>
                <Link to="/suggest-space/"> Suggest A Space </Link>
              </li>
              <li>
                <Link to="/contact-us/">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs/"> FAQs </Link>
              </li>
              <li>
                <a
                  href="https://angel.co/company/gofloaters/jobs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link to="/privacy-policy/"> Privacy Policy </Link>
              </li>
              <li>
                <a href="https://virtualoffice.gofloaters.com/" target="_blank">
                  Virtual Offices
                </a>
              </li>
              <li>
                <Link to="/teams/" className="teamLinksNav">
                  {" "}
                  For Teams <span>New</span>
                </Link>
              </li>
            </ul>
            <ul className="links DesktopOnly">
              <li>
                <Link to="/about-us/"> About Us </Link>
              </li>
              <li>
                <Link to="/how-are-we-different/">Why GoFloaters </Link>
              </li>
              <li>
                <a
                  href="https://spaceadmin.gofloaters.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Space Partner Login
                </a>
              </li>

              <li>
                <Link to="/suggest-space/"> Suggest A Space </Link>
              </li>
              <li>
                <a href="https://virtualoffice.gofloaters.com/" target="_blank">
                  Virtual Offices
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <b style={{ fontSize: 18 }}>&nbsp;</b>
            <ul className="links DesktopOnly">
              <li>
                <Link to="/contact-us/">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs/"> FAQs </Link>
              </li>
              <li>
                <a
                  href="https://angel.co/company/gofloaters/jobs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link to="/privacy-policy/"> Privacy Policy </Link>
              </li>
              <li>
                <Link to="/teams/" className="teamLinksNav">
                  {" "}
                  For Teams <span>New</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-left">
            <b style={{ fontSize: 18 }}>Cities</b>
            <ul className="links MobileOnly">
              <li>
                <Link to="/bangalore/"> Bangalore </Link>
              </li>
              <li>
                <Link to="/chennai/"> Chennai </Link>
              </li>
              <li>
                <Link to="/coimbatore/"> Coimbatore </Link>
              </li>
              <li>
                <Link to="/hyderabad/"> Hyderabad </Link>
              </li>
              <li>
                <Link to="/pune/"> Pune </Link>
              </li>
              <li>
                <Link to="/ghaziabad/"> Gaziabad </Link>
              </li>
              <li>
                <Link to="/faridabad/"> Faridabad </Link>
              </li>
              <li>
                <Link to="/mumbai/"> Mumbai </Link>
              </li>
              <li>
                <Link to="/gurugram"> Gurugram </Link>
              </li>
              <li>
                <Link to="/noida"> Noida </Link>
              </li>
              <li>
                <Link to="/new-delhi/"> New Delhi </Link>
              </li>
              <li>
                <Link to="/kochi/"> Kochi </Link>
              </li>
              <li>
                <Link to="/ahmedabad/"> Ahmedabad </Link>
              </li>
              <li>
                <Link to="/indore/"> Indore </Link>
              </li>
              <li>
                <Link to="/kolkata/"> Kolkata </Link>
              </li>
              <li>
                <Link to="/madurai/"> Madurai </Link>
              </li>
              <li>
                <Link to="/trichy/"> Trichy </Link>
              </li>
            </ul>
            <ul className="links DesktopOnly">
              <li>
                <Link to="/bangalore/"> Bangalore </Link>
              </li>
              <li>
                <Link to="/chennai/"> Chennai </Link>
              </li>
              <li>
                <Link to="/coimbatore/"> Coimbatore </Link>
              </li>
              <li>
                <Link to="/hyderabad/"> Hyderabad </Link>
              </li>
              <li>
                <Link to="/pune/"> Pune </Link>
              </li>
              <li>
                <Link to="/ghaziabad/"> Gaziabad </Link>
              </li>
              <li>
                <Link to="/ahmedabad/"> Ahmedabad </Link>
              </li>
              <li>
                <Link to="/kolkata/"> Kolkata </Link>
              </li>
              <li>
                <Link to="/faridabad/"> Faridabad </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <b style={{ fontSize: 15 }}>&nbsp;</b>
            <ul className="links DesktopOnly">
              <li>
                <Link to="/mumbai"> Mumbai </Link>
              </li>
              <li>
                <Link to="/gurugram"> Gurugram </Link>
              </li>
              <li>
                <Link to="/noida"> Noida </Link>
              </li>
              <li>
                <Link to="/new-delhi"> New Delhi </Link>
              </li>
              <li>
                <Link to="/kochi"> Kochi </Link>
              </li>

              <li>
                <Link to="/indore/"> Indore </Link>
              </li>

              <li>
                <Link to="/madurai/"> Madurai </Link>
              </li>
              <li>
                <Link to="/trichy"> Trichy </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <b
              className="contact-us-p"
              style={{ fontSize: "18px", textAlign: "left" }}
            >
              Contact Us
            </b>
            <ul className="links">
              <li>
                Email:{" "}
                <a href="mailto:support@gofloaters.com">
                  support@gofloaters.com
                </a>
              </li>
              {/* <li>Phone: +91-7338730800</li> */}
            </ul>
            <ul className="sociallinks">
              <li>
                <a
                  href="https://www.facebook.com/gofloatersindia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://assets.gofloaters.com/facebook.png"
                    width="30"
                    alt="GoFloaters Facebook"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gofloatersapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://assets.gofloaters.com/instagram.png"
                    width="30"
                    alt="GoFloaters Instagram"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/gofloaters/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://assets.gofloaters.com/linkedin.png"
                    width="30"
                    alt="GoFloaters linkedin"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/gofloaters"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://assets.gofloaters.com/twitter.png"
                    width="30"
                    alt="GoFloaters Twitter"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCy_PdgFKsHuZY_hZ2r8gQvg"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://assets.gofloaters.com/youtube.png"
                    width="30"
                    alt="GoFloaters YouTube"
                  ></img>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-12 text-center">
            <hr></hr>
            <p>
              <a
                href="https://play.google.com/store/apps/details?id=com.gofloaters.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dhomepage%26utm_term%3Dcoworking%26utm_content%3Dhowitworks%26utm_campaign%3Dwebsite"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://assets.gofloaters.com/google-play-gofloaters-download.png"
                  width="150"
                  alt="GoFloaters Google Play Store"
                />{" "}
              </a>
              &nbsp;
              <a
                href="https://itunes.apple.com/in/app/gofloaters/id1446010118?mt=8&uo=4&at=11l6hc&app=itunes&ct=fnd"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://assets.gofloaters.com/gofloater-apple-store.png"
                  width="150"
                  alt="GoFloaters Apple Store"
                  target="_blank"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2020 GoFloaters</p>
      </div>
      <PrivacyBar />
    </footer>
  )
}

export default Footer
