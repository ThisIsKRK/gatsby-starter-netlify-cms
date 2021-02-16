import React from "react"
import { Helmet } from "react-helmet"
import Navigation from "./navigation"
import TopBar from "./topbar"
import "../styles/font-awesome.min.css"
const Header = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta property="og:locale" content="en_US" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="icon"
          href="https://assets.gofloaters.com/favicon.png"
          type="image/png"
        />
        <link
          rel="icon"
          href="https://assets.gofloaters.com/favicon.png"
          type="img/x-icon"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="all" />
        <meta name="copyright" content="https://www.gofloaters.com/" />
      </Helmet>
      <TopBar></TopBar>

      <Navigation></Navigation>
    </div>
  )
}

export default Header
