import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

const Navigation = () => {
  const [menuState, setmenuState] = useState("close")
  const MenuOpen = () => {
    if (menuState === "open") {
      setmenuState("close")
    } else {
      setmenuState("open")
    }
    //console.log(menuState)
  }
  const [scrollState, setscrollState] = useState("top")
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setscrollState("top")
    } else if (window.scrollY !== 0) {
      setscrollState("onmoving")
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll)
  }

  return (
    <div>
      <header className={"header " + scrollState}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand logo center-logo" to="/">
              <img
                src="https://assets.gofloaters.com/logo.png"
                alt="GoFloaters"
              />
            </Link>
            <button
              className="navbar-toggler"
              name="mobilenavigation"
              type="button"
              name="MobileNavigation"
              onClick={() => {
                MenuOpen("All")
              }}
            >
              <i className="fa fa-navicon"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    to="/coworking-spaces/"
                    className="nav-link"
                    style={{ paddingLeft: "0", fontSize: "0.9rem" }}
                  >
                    Coworking Spaces
                  </Link>
                </li>
                

                <li className="nav-item">
                  <Link
                    to="/meeting-rooms/"
                    className="nav-link"
                    title="Meeting Spaces"
                    style={{ paddingLeft: "0", fontSize: "0.9rem" }}
                  >
                    Meeting Spaces
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/office-spaces/"
                    className="nav-link"
                    style={{ paddingLeft: "0", fontSize: "0.9rem" }}
                  >
                    Office Spaces
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/teams/"
                    className="nav-link teamLinksNav"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Teams<span>New</span>
                  </Link>
                </li>
                <li className="nav-item dropdown mr-auto">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Community
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/our-community-perks"
                        title="Meeting Spaces"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Perks & Discounts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events/"
                        title="Events"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/"
                        title="Blog"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/dont-let-space-go-to-waste/"
                    className="nav-link"
                    style={{ fontSize: "0.9rem" }}
                  >
                    List your Space
                  </Link>
                </li>

               {/* <li className="nav-item">
                  <Link
                    to="/search"
                    className="nav-link community "
                    style={{
                      borderRadius: "5px",
                      fontSize: "0.9rem",
                      paddingBottom: "3px",
                    }}
                  >
                    FIND COWORKING SPACE
                    <img
                      src="https://assets.gofloaters.com/arrow-icon.png"
                      alt="arrow"
                      style={{ width: "20px", paddingBottom: "3px" }}
                    />
                  </Link>
                  </li>*/}
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className={"Nav mobile-only " + menuState}>
        <div className="text-right">
          <button
            className="navbar-toggler"
            name="MobileNavigation"
            type="button"
            onClick={() => {
              MenuOpen("All")
            }}
          >
            <i className="fa fa-close"></i>
          </button>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/coworking-spaces/" className="nav-link">
              Coworking Spaces
            </Link>
          </li>
        
          <li className="nav-item">
            <Link to="/meeting-rooms/" className="nav-link">
              Meeting Spaces
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/office-spaces/" className="nav-link">
              Office Spaces
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teams/" className="nav-link teamLinksNav">
              Teams<span>New</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/our-community-perks"
              className="nav-link"
              style={{ color: "#4F9FC8" }}
            >
              Community Benefits
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/events"
              className="nav-link"
              className="nav-link"
              style={{ color: "#4F9FC8" }}
            >
              Community Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-link"
              className="nav-link"
              style={{ color: "#4F9FC8" }}
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="padding-20"></div>
        <div className="text-center">
          <Link className="listyourspace" to="/dont-let-space-go-to-waste/">
            List your Space
          </Link>
        </div>
        <div className="padding-20"></div>
        <br></br>
        <Link className="navbar-brand logo" to="/">
          <img src="https://assets.gofloaters.com/logo.png" alt="GoFloaters" />
        </Link>
      </div>
    </div>
  )
}

export default Navigation
