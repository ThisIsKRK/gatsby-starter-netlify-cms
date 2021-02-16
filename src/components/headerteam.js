import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../img/favicon.png"
import NavigationTeam from "./navigationteam"
import TopBar from "./topbar"
import SocialImage from "../img/socialmediaimage.jpg"
import "../styles/font-awesome.min.css"
const HeaderTeam = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta property="og:locale" content="en_US" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/gofloaterscomprod.appspot.com/o/favicon.png?alt=media&token=6960c7ea-799c-4f2a-b2fe-34352d86a65a"
          type="image/png"
        />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/gofloaterscomprod.appspot.com/o/favicon.png?alt=media&token=6960c7ea-799c-4f2a-b2fe-34352d86a65a"
          type="img/x-icon"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="all" />
        <meta name="copyright" content="https://www.gofloaters.com/" />
      </Helmet>
      <TopBar></TopBar>
    </div>
  )
}

export default HeaderTeam
